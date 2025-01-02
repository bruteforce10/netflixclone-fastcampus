/* eslint-disable react/prop-types */
import ReactPlayer from "react-player";
import { GoChevronDown, GoPlay, GoPlus } from "react-icons/go";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { idMovieAtom, isOpenModalAtom } from "@/jotai/atoms";

const MovieCard = ({ data, isHover, setHover }) => {
  const [idMovie, setIdMovie] = useAtom(idMovieAtom);
  const [, setIsOpenModal] = useAtom(isOpenModalAtom);

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
            url={data.videoURL}
            playing={false}
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
                  <GoPlay size={32} />
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
          src={data.image}
          onMouseEnter={() => {
            setHover(true);
            setIdMovie(data.id);
          }}
          className="w-full max-h-48 object-cover cursor-pointer"
        />
      )}
    </>
  );
};

export default MovieCard;
