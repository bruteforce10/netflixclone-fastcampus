/* eslint-disable react/prop-types */
import Navbar from "@/pages/Browse/Navbar";

const BrowseLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
};

export default BrowseLayout;
