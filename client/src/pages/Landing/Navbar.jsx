import DefaultButton from "../../components/Modules/DefaultButton";
import OptionLanguage from "../../components/Modules/optionLanguage";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <header className="relative z-20">
      <nav className="flex flex-wrap justify-between items-center pr-10 pl-5 py-4">
        <div>
          <img
            src="/netflix-logo.png"
            alt="netflix-logo"
            width={120}
            height={50}
          />
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <OptionLanguage />
          <DefaultButton text="Sign In" onClick={() => navigate("/login")} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
