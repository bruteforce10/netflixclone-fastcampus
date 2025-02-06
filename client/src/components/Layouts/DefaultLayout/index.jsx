/* eslint-disable react/prop-types */

import Navbar from "@/pages/Landing/Navbar";
import { auth } from "@/utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function DefaultLayout({ children }) {
  const [user, error, loading] = useAuthState(auth);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (user) {
    return location.replace("/browse");
  }

  return (
    <main>
      <Navbar />
      <div>{children}</div>
    </main>
  );
}

export default DefaultLayout;
