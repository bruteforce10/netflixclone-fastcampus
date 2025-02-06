import BrowseLayout from "@/components/Layouts/BrowseLayout";
import MovieCard from "@/components/Modules/BrowsePage/MovieCard";
import { LIST_VIDEO_RECOMMENDATION } from "@/constants/dummyVideo";
import { idMovieAtom } from "@/jotai/atoms";
import EachUtils from "@/utils/eachUtils";
import { useAtom } from "jotai";
import { useState } from "react";

const Favorit = () => {
  const [isHover, setHover] = useState(false);
  const [, setIdMovie] = useAtom(idMovieAtom);

  return (
    <BrowseLayout>
      <div className="mt-20 px-8">
        <h3 className="text-white font-bold text-2xl ">My Favorit Movies</h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 px-8 py-8">
        <EachUtils
          of={LIST_VIDEO_RECOMMENDATION}
          render={(item, index) => (
            <div
              className="h-72 "
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
      </div>
    </BrowseLayout>
  );
};

export default Favorit;
