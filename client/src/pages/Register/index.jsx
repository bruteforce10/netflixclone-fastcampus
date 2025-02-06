import { JUMBOTRON_IMAGE } from "@/constants/listAsset";
import { emailAtom } from "@/jotai/atoms";
import { useAtom } from "jotai";
import { useState } from "react";
import { GoChevronLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { auth } from "@/utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useAtom(emailAtom);
  const [password, setPassword] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const regiter = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (regiter) {
        toast("Success register");
        setTimeout(() => navigate("/login"), 3000);
      }
    } catch (error) {
      toast(error.message);
      console.log(error.message);
    }
  };

  return (
    <DefaultLayout>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={"Bounce"}
      />
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
            <h3>Sign Up</h3>
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={"Password"}
              type="password"
              className="p-4 bg-black/50 w-full rounded-md border-white/50 border peer placeholder-transparent"
            />
            <label className="absolute top-0 -z-10 left-0 text-lg pl-5  peer-placeholder-shown:top-3.5 peer-focus:top-[1px] transition-all">
              Password
            </label>
          </div>
          <div className="flex flex-col gap-4">
            <button
              onClick={handleRegister}
              className="bg-red-500 py-3 w-full text-white font-bold rounded-md"
            >
              Sign Up
            </button>
            <p>
              Already have an account?{" "}
              <span
                className="text-blue-500 underline cursor-auto ml-2"
                onClick={() => navigate("/login")}
              >
                Sign in Here
              </span>
            </p>
          </div>
        </form>
      </div>
    </DefaultLayout>
  );
};

export default Register;
