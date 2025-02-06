/* eslint-disable react/prop-types */
import ReactPlayer from "react-player";
import { GoChevronDown, GoPlay, GoPlus } from "react-icons/go";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { idMovieAtom, isFetchingAtom, isOpenModalAtom } from "@/jotai/atoms";
import { useEffect, useState } from "react";
import { getVideoUrl } from "@/utils/getVideoUrl";
import Skeleton from "./Skeleton";
import { useNavigate } from "react-router-dom";
import { LIST_VIDEO_RECOMMENDATION } from "@/constants/dummyVideo";

const MovieCard = ({ data, isHover, setHover }) => {
  const [idMovie, setIdMovie] = useAtom(idMovieAtom);
  const [, setIsOpenModal] = useAtom(isOpenModalAtom);
  const [videoUrl, setVideoUrl] = useState(null);
  const [isFetching] = useAtom(isFetchingAtom);
  const navigate = useNavigate();

  if (isFetching) return <Skeleton />;

  return (
    <>
      {isHover && idMovie === data.id ? (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeInOut", duration: 0 }}
          className="relative shadow-md w-full cursor-pointer transition-all"
        >
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoUrl}`}
            playing={true}
            loop
            muted={true}
            width={"100%"}
            height={"180px"}
            controls={false}
          />
          <div className="h-auto p-2 bg-[#414141] flex flex-col gap-1.5">
            <section className="mt-1 flex justify-between">
              <div className="flex gap-2">
                <button>
                  <GoPlay
                    size={32}
                    onClick={() => navigate(`/watch/${videoUrl}`)}
                  />
                </button>
                <button>
                  <GoPlus size={32} />
                </button>
              </div>
              <div>
                <button
                  className="rounded-full border"
                  onClick={() => setIsOpenModal(true)}
                >
                  <GoChevronDown size={25} />
                </button>
              </div>
            </section>
            <section className="text-left">
              <h2>{data.title}</h2>
              <p className="text-green-400">Popularity: {data.popularity}</p>
            </section>
          </div>
        </motion.div>
      ) : (
        <img
          src={
            data.poster_path
              ? `${import.meta.env.VITE_BASE_URL_TMDB_IMAGE}${data.poster_path}`
              : LIST_VIDEO_RECOMMENDATION[0].image
          }
          onMouseEnter={() => {
            setHover(true);
            setIdMovie(data.id);
            getVideoUrl({ movie_id: data.id }).then((res) => setVideoUrl(res));
          }}
          className="w-full max-h-48 object-cover cursor-pointer"
        />
      )}
    </>
  );
};

export default MovieCard;
