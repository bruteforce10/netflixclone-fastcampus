/* eslint-disable react/prop-types */

import Navbar from "../../../pages/Landing/Navbar";

function DefaultLayout({ children }) {
  return (
    <main>
      <Navbar />
      <div>{children}</div>
    </main>
  );
}

export default DefaultLayout;
