import BrowseLayout from "@/components/Layouts/BrowseLayout";
import MovieList from "@mods/BrowsePage/MovieList";
import Jumbotron from "@mods/BrowsePage/Jumbotron";
import Modal from "@mods/BrowsePage/Modal";

const Browse = () => {
  return (
    <BrowseLayout>
      <Jumbotron />
      <MovieList title={"Popular Movies"} />
      <Modal />
    </BrowseLayout>
  );
};

export default Browse;
