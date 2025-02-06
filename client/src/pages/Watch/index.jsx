import BrowseLayout from "@/components/Layouts/BrowseLayout";
import { GoChevronLeft } from "react-icons/go";
import ReactPlayer from "react-player";
import { useNavigate, useParams } from "react-router-dom";

const Watch = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <BrowseLayout>
      <div
        className="absolute top-20 left-6 hover:text-white  transition-all cursor-pointer "
        onClick={() => navigate("/browse")}
      >
        <GoChevronLeft size={44} />
      </div>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${id}`}
        width={"100%"}
        height={"100vh"}
        playing={true}
        muted={false}
        controls={false}
      />
    </BrowseLayout>
  );
};

export default Watch;
