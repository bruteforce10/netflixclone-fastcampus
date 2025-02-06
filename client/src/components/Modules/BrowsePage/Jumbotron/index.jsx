import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { GoMute, GoPlay, GoUnmute } from "react-icons/go";
import { getMoviesByType } from "@/utils/getMoviesByTypeFetch";
import { useAtom } from "jotai";
import { idMovieAtom, isOpenModalAtom } from "@/jotai/atoms";
import { getVideoUrl } from "@/utils/getVideoUrl";
import { useNavigate } from "react-router-dom";

const Jumbotron = () => {
  const [isMute, setIsMute] = useState(true);
  const [, setIdMovieAtom] = useAtom(idMovieAtom);
  const [topMovies, setTopMovies] = useState([]);
  const [idMovie, setIdMovie] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const navigate = useNavigate();
  const [, setIsOpenModal] = useAtom(isOpenModalAtom);

  useEffect(() => {
    getMoviesByType({ moviesType: "top_rated" })
      .then((res) => {
        setTopMovies(res[0]);
        setIdMovie(res[0].id);
      })
      .finally(() => {
        getVideoUrl({ movie_id: idMovie }).then((res) => setVideoUrl(res));
      });
  }, [idMovie]);

  return (
    <div className="bg-red-500 relative h-[60vw] w-full">
      <ReactPlayer
        url={"https://www.youtube.com/watch?v=" + videoUrl}
        width="100%"
        height="100%"
        playing={true}
        muted={isMute}
        controls={false}
      />
      <div className="absolute top-1/2 -translate-y-1/2 left-0 p-8 max-w-md ">
        <div className="flex gap-4 flex-col text-white">
          <h1 className="text-5xl font-black">{topMovies.title}</h1>
          <p>{topMovies.overview}</p>
        </div>
        <div className="flex gap-4 mt-4">
          <button
            onClick={() => {
              navigate(`/watch/${videoUrl}`);
              setIsMute(true);
            }}
            className="bg-gray-200 py-2 px-8 rounded-md text-xl font-bold flex items-center gap-1 text-black"
          >
            <GoPlay /> Play
          </button>
          <button
            onClick={() => {
              setIdMovieAtom(idMovie);
              setIsOpenModal(true);
            }}
            className="bg-stone-600/80 py-2 px-8 rounded-md text-white"
          >
            More Detail
          </button>
        </div>
      </div>
      <div className="absolute right-6 bottom-1/2 text-white -translate-y-1/2 ">
        <div
          className="border rounded-full p-2 cursor-pointer"
          onClick={() => setIsMute(!isMute)}
        >
          {isMute ? <GoMute size={24} /> : <GoUnmute size={24} />}
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
