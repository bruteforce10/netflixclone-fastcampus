/* eslint-disable react/prop-types */

import { emailStorageAtom, tokenAtom } from "@/jotai/atoms";
import Navbar from "@/pages/Landing/Navbar";
import { auth } from "@/utils/firebase";
import { useAtom } from "jotai";
import { useAuthState } from "react-firebase-hooks/auth";

function DefaultLayout({ children }) {
  const [user, error, loading] = useAuthState(auth);
  const [emailStorage] = useAtom(emailStorageAtom);
  const [tokenStorage] = useAtom(tokenAtom);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (user && emailStorage && tokenStorage) {
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
