import { idMovieAtom, isFetchingAtom, searchMoviesAtom } from "@/jotai/atoms";
import EachUtils from "@/utils/eachUtils";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import MovieCard from "../MovieCard";
import { FiltersearchMovies } from "@/utils/FilterSearchMovies";

const SearchMoviesPage = () => {
  const [isHover, setHover] = useState(false);
  const [, setIdMovie] = useAtom(idMovieAtom);
  const [movieList, setMovieList] = useState([]);
  const [searchQuery] = useAtom(searchMoviesAtom);
  const [, setIsFetching] = useAtom(isFetchingAtom);

  useEffect(() => {
    FiltersearchMovies({ query: searchQuery })
      .then((res) => {
        setIsFetching(true);
        setMovieList(res);
      })
      .finally(() => {
        setTimeout(() => setIsFetching(false), 500);
      });
  }, [searchQuery]);

  return (
    <div className="grid grid-cols-4 p-8 mt-10 gap-4">
      <EachUtils
        of={movieList}
        render={(item, index) => (
          <div
            className="h-72  mt-4 "
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
  );
};

export default SearchMoviesPage;
