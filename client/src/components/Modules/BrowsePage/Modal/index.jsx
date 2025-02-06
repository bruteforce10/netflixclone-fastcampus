import { idMovieAtom, isOpenModalAtom } from "@/jotai/atoms";
import { useAtom } from "jotai";
import { MdClose } from "react-icons/md";
import { GoPlay, GoPlusCircle } from "react-icons/go";
import Recomendation from "@mods/BrowsePage/Modal/Recomendation";
import { useEffect, useState } from "react";
import { getMovieDetail } from "@/utils/getMovieDetail";
import ReactPlayer from "react-player";
import { getVideoUrl } from "@/utils/getVideoUrl";
import { useNavigate } from "react-router-dom";

const Modal = () => {
  const [isOpenModal, setIsOpenModal] = useAtom(isOpenModalAtom);
  const [idMovie, setIdMovie] = useAtom(idMovieAtom);
  const [movieDetail, setMovieDetail] = useState([]);
  const [videoUrl, setVideoUrl] = useState([]);
  const navigate = useNavigate();

  const genreMapping = (genres = []) => {
    let result = "";
    genres.map((genre, index) => {
      if (index === genres.length - 1) {
        result += genre.name;
      } else {
        result += genre.name + ",";
      }
    });

    return result;
  };

  useEffect(() => {
    if (idMovie && isOpenModal) {
      getMovieDetail({ movie_id: idMovie }).then((res) => {
        console.log(res);
        setMovieDetail(res);
      });
      getVideoUrl({ movie_id: idMovie }).then((res) => setVideoUrl(res));
    }
  }, [idMovie, isOpenModal]);

  if (!isOpenModal) {
    return null;
  }

  return (
    <dialog className={`modal ${isOpenModal && "modal-open"}`}>
      <div className="modal-box w-full max-w-screen-md p-0">
        <div className="relative">
          <div className="h-[400px] w-full">
            <ReactPlayer
              width={"100%"}
              height={"100%"}
              playing={true}
              muted={true}
              loop={true}
              url={`https://www.youtube.com/watch?v=${videoUrl}`}
            />
          </div>
          <button
            onClick={() => setIsOpenModal(false)}
            className="absolute top-2 right-2 rounded-full p-1 "
          >
            <MdClose size={24} />
          </button>
          <div className="absolute bottom-1/2 left-10">
            <h2 className="text-4xl font-black text-white ">
              {movieDetail?.title}
            </h2>
          </div>
          <div className="absolute bottom-1/2 translate-y-14 left-10 ">
            <div className="flex gap-2">
              <button
                onClick={() => {
                  navigate(`/watch/${videoUrl}`);
                  setIsOpenModal(false);
                  setVideoUrl(null);
                  setMovieDetail([]);
                  setIdMovie(null);
                }}
                className="hover:text-slate-50"
              >
                <GoPlay size={32} />
              </button>
              <button className="hover:text-slate-50">
                <GoPlusCircle size={32} />
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1 px-4 py-2 text-white">
          <div>
            <div className="flex gap-2">
              <p>{movieDetail?.release_date}</p>
              <p className="text-green-400/90">
                {movieDetail?.runtime} Minutes
              </p>
            </div>
            <p className="mt-4">{movieDetail?.overview}</p>
          </div>
          <div className="flex flex-col gap-4">
            <p>Genre: {genreMapping(movieDetail?.genres)}</p>
            <p>Popularity: {movieDetail?.popularity}</p>
          </div>
        </div>
        <Recomendation />
      </div>
    </dialog>
  );
};

export default Modal;
