import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { JUMBOTRON_IMAGE } from "@/constants/listAsset";
import { emailAtom, emailStorageAtom, tokenAtom } from "@/jotai/atoms";
import { auth } from "@/utils/firebase";
import { getIdToken, signInWithEmailAndPassword } from "firebase/auth";
import { useAtom } from "jotai";
import { useState } from "react";
import { GoChevronLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useAtom(emailAtom);
  const [, setEmailStorage] = useAtom(emailStorageAtom);
  const [, setToken] = useAtom(tokenAtom);
  const [password, setPassword] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const login = await signInWithEmailAndPassword(auth, email, password);

      if (login) {
        const firebaseToken = await getIdToken(login.user);
        setToken(firebaseToken);
        setEmailStorage(login.user.email);
        navigate("/browse");
      }
    } catch (error) {
      toast(error.message);
    }
  };

  return (
    <DefaultLayout>
      <img
        src={JUMBOTRON_IMAGE}
        className="w-full h-[100vh] object-cover opacity-70"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-black/80 px-8 py-16 rounded-xl max-w-xl w-full">
        <form className="flex flex-col gap-4">
          <div className="text-white text-xl font-semibold mb-2 flex items-center gap-2">
            <GoChevronLeft
              size={28}
              onClick={() => navigate("/")}
              className="hover:text-white cursor-pointer text-slate-200"
            />
            <h3>Sign In</h3>
          </div>
          <div className="relative">
            <input
              placeholder={"Email"}
              type="email"
              value={email}
              className="p-4 bg-black/50 w-full rounded-md border-white/50 border peer placeholder-transparent"
            />
            <label className="absolute top-0 left-0 text-lg pl-5 -z-10  peer-placeholder-shown:top-3.5 peer-focus:top-[1px] transition-all">
              Email
            </label>
          </div>
          <div className="relative">
            <input
              placeholder={"Password"}
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="p-4 bg-black/50 w-full rounded-md border-white/50 border peer placeholder-transparent"
            />
            <label className="absolute top-0 -z-10 left-0 text-lg pl-5  peer-placeholder-shown:top-3.5 peer-focus:top-[1px] transition-all">
              Password
            </label>
          </div>
          <div className="flex flex-col gap-4">
            <button
              onClick={handleLogin}
              className="bg-red-500 py-3 w-full text-white font-bold rounded-md"
            >
              Sign In
            </button>
            <p>
              Not have a account?{" "}
              <span
                className="text-blue-500 underline cursor-auto ml-2"
                onClick={() => navigate("/register")}
              >
                Sign up Here
              </span>
            </p>
          </div>
        </form>
      </div>
    </DefaultLayout>
  );
};

export default LoginPage;
