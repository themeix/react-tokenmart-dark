import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const Header = () => {
  const [isScrolled, setisScrolled] = useState(false);
  const [dropdown, setdropdown] = useState(true);
  const [YOffset, setYOffset] = useState(0);

  useEffect(() => {
    const listener = window.addEventListener("scroll", (e) => {
      setYOffset(window.pageYOffset);

      setisScrolled(true);
    });

    return window.removeEventListener("scroll", listener);
  }, []);
  console.log(YOffset);
  return (
    <header
      style={{ position: YOffset > 100 ? "sticky" : "" }}
      className={`header-area header-stickey absolute w-full top-0 pt-4 pb-10 
      } `}
    >
      <div className="container mx-auto relative px-4 z-20">
        <nav className="flex items-center justify-between relative">
          <Link to="/" className="flex items-center flex-shrink-0 mr-6">
            <img
              className="h-10"
              src="assets/images/header-logo.svg"
              alt="title"
            />
          </Link>
          <Dropdown />
          <button
            className="bg-blueGray-50 mobile-toggle mobile-menu open block lg:hidden"
            onClick={() => setdropdown(!dropdown)}
          >
            <span className="bg-blueGray-600" />
            <span className="bg-blueGray-600" />
            <span className="bg-blueGray-600" />
            {/* <Dropdown dropdown={dropdown} /> */}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
