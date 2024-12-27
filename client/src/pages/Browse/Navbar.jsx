import InputSearchMovies from "@mods/BrowsePage/InputSearchMovies";
import { LIST_NAVBAR } from "@/constants/listNavbar";
import EachUtils from "@/utils/eachUtils";
import AccountMenu from "@mods/BrowsePage/AccountMenu";

const Navbar = () => {
  return (
    <header className="relative">
      <nav className="bg-transparent fixed mt-4 text-white top-0 left-0 px-8 w-full z-10">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img src="/netflix-logo.png" className="w-[120px] ml-2" alt="" />
            <ul className="sm:flex hidden items-center gap-4 ">
              <EachUtils
                of={LIST_NAVBAR}
                render={(item, index) => (
                  <li key={index}>
                    <a href={item.url}>{item.title}</a>
                  </li>
                )}
              />
            </ul>
          </div>
          <div className="flex items-center gap-6 ">
            <InputSearchMovies />
            <AccountMenu />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
