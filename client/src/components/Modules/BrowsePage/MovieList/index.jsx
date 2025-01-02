import { useState } from "react";
import { LIST_VIDEOS } from "@/constants/dummyVideo";
import EachUtils from "@/utils/eachUtils";
import MovieCard from "../MovieCard";
import CouroselLayout from "@/components/Layouts/CouroselLayout";
import { useAtom } from "jotai";
import { idMovieAtom } from "@/jotai/atoms";

/* eslint-disable react/prop-types */
const MovieList = ({ title }) => {
  const [isHover, setHover] = useState(false);
  const [, setIdMovie] = useAtom(idMovieAtom);

  return (
    <section className="px-8 py-4">
      <h3 className="text-3xl font-semibold mb-2 text-white">{title}</h3>
      <CouroselLayout>
        <EachUtils
          of={LIST_VIDEOS}
          render={(item, index) => (
            <div
              className="h-72 w-1/4 mt-4 carousel-item"
              key={index}
              onMouseLeave={() => {
                setHover(false);
                setIdMovie(null);
              }}
            >
              <MovieCard data={item} isHover={isHover} setHover={setHover} />
            </div>
          )}
        />
      </CouroselLayout>
    </section>
  );
};

export default MovieList;
