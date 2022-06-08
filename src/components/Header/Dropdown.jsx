import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ dropdown }) => {
  const [active, setactive] = useState(null);
  const [hidden, sethidden] = useState(dropdown);
  const [classes, setclasses] = useState("");

  useEffect(() => {
    setclasses(
      "mobile-menu bg-white lg:bg-transparent shadow lg:shadow-none absolute lg:relative inset-x-0  lg:flex lg:flex-grow items-center text-base text-blueGray-600 font-semibold mt-7 lg:mt-0 mobile-hover " +
        ""
    );
  }, [hidden]);

  console.log(hidden);

  return (
    <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto">
      <ul
        style={{ display: hidden ? "none" : "", opacity: hidden ? 0 : 1 }}
        className={classes}
      >
        <li className="relative dropdown lg:mr-4">
          <Link
            className="p-4 flex items-center hover:text-indigo-500 transition duration-500 arrow"
            to="/"
          >
            Home{" "}
            <span className="leading-5 text-2xl text-center bg-blueGray-100  w-6 h-6 absolute right-2 top-4 block lg:hidden ">
              +
            </span>
          </Link>
          <ul className=" lg:block bg-white lg:absolute top-full lg:shadow lg:w-44 transition duration-500 submenu">
            <li>
              <Link
                className="py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500"
                to="/"
              >
                {" "}
                Home v1
              </Link>
            </li>
            <li>
              <Link
                className="py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500"
                to="/home2"
              >
                {" "}
                Home v2
              </Link>
            </li>
            <li>
              <Link
                className="py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500"
                to="/home3"
              >
                {" "}
                Home v3
              </Link>
            </li>
          </ul>
        </li>
        <li className="relative dropdown lg:mr-4">
          <Link
            className="p-4 flex items-center hover:text-indigo-500 transition duration-500 arrow"
            to="/#"
          >
            {" "}
            Explore{" "}
            <span className="leading-5 text-2xl text-center bg-blueGray-100  w-6 h-6 absolute right-2 top-4 block lg:hidden toggle">
              +
            </span>
          </Link>
          <ul className="hidden lg:block bg-white lg:absolute top-full lg:shadow lg:w-44 transition duration-500 submenu">
            <li>
              <a
                className="py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500"
                href="/explore"
              >
                {" "}
                Explore v1
              </a>
            </li>
            <li>
              <Link
                className="py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500"
                to="/explore2"
              >
                {" "}
                Explore v2
              </Link>
            </li>
            <li>
              <Link
                className="py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500"
                to="/item-single"
              >
                {" "}
                Item Details v1
              </Link>
            </li>
            <li>
              <Link
                className="py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500"
                to="/item-single2"
              >
                {" "}
                Item Details v2
              </Link>
            </li>
            <li>
              <Link
                className="py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500"
                to="/item-single3"
              >
                {" "}
                Item Details v3
              </Link>
            </li>
            <li>
              <Link
                className="py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500"
                to="/wallet"
              >
                {" "}
                Wallet
              </Link>
            </li>
          </ul>
        </li>
        <li className="relative dropdown lg:mr-4">
          <Link
            className="p-4 flex items-center hover:text-indigo-500 transition duration-500 arrow"
            to="/#"
          >
            {" "}
            Pages{" "}
            <span className="leading-5 text-2xl text-center bg-blueGray-100  w-6 h-6 absolute right-2 top-4 block lg:hidden toggle">
              +
            </span>
          </Link>
          <ul className="hidden lg:block bg-white lg:absolute top-full lg:shadow lg:w-44 transition duration-500 submenu">
            <li>
              <Link
                className="py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500"
                to="/create-item"
              >
                {" "}
                Create Item{" "}
              </Link>
            </li>
            <li className="relative dropdown">
              <Link
                className="py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500 arrow"
                to="/#"
              >
                {" "}
                Authors{" "}
                <span className="leading-5 text-2xl text-center bg-blueGray-100  w-6 h-6 absolute right-2 top-4 block lg:hidden toggle">
                  +
                </span>
              </Link>
              <ul className="hidden lg:block bg-white lg:absolute top-0 left-full lg:shadow lg:w-44 transition duration-500 submenu">
                <li>
                  <Link
                    className="py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500"
                    to="/creator-published"
                  >
                    Authors
                  </Link>
                </li>
                <li>
                  <Link
                    className="py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500"
                    to="/creator-follower"
                  >
                    Authors Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className="py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500"
                    to="/creator-activity"
                  >
                    Authors Activity
                  </Link>
                </li>
              </ul>
            </li>
            <li className="relative dropdown">
              <Link
                className="py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500 arrow"
                to="/#"
              >
                {" "}
                User{" "}
                <span className="leading-5 text-2xl text-center bg-blueGray-100  w-6 h-6 absolute right-2 top-4 block lg:hidden toggle">
                  +
                </span>
              </Link>
              <ul className="hidden lg:block bg-white lg:absolute top-0 left-full lg:shadow lg:w-44 transition duration-500 submenu">
                <li>
                  <Link
                    className="py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    className="py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500"
                    to="/register"
                  >
                    Register
                  </Link>
                </li>
                <li>
                  <Link
                    className="py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500"
                    to="/forget-password"
                  >
                    Forget Password
                  </Link>
                </li>
              </ul>
            </li>
            <li className="relative dropdown">
              <Link
                className="py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500 arrow"
                to="/#"
              >
                {" "}
                Blog{" "}
                <span className="leading-5 text-2xl text-center bg-blueGray-100  w-6 h-6 absolute right-2 top-4 block lg:hidden toggle">
                  +
                </span>
              </Link>
              <ul className="hidden lg:block bg-white lg:absolute top-0 left-full lg:shadow lg:w-44 transition duration-500 submenu">
                <li>
                  <Link
                    className="py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500"
                    to="/single"
                  >
                    Blog Details
                  </Link>
                </li>
                <li>
                  <Link
                    className="py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500"
                    to="/category"
                  >
                    Category
                  </Link>
                </li>
                <li>
                  <Link
                    className="py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500"
                    to="/tag"
                  >
                    Tag
                  </Link>
                </li>
                <li>
                  <Link
                    className="py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500"
                    to="/blog"
                  >
                    Blog Grid
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                className="py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500"
                to="/contact"
              >
                {" "}
                Contact{" "}
              </Link>
            </li>
            <li>
              <Link
                className="py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500"
                to="/term-condition"
              >
                {" "}
                Term &amp; Condition{" "}
              </Link>
            </li>
            <li>
              <Link
                className="py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500"
                to="/404"
              >
                {" "}
                404{" "}
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link
            className="p-4 flex items-center hover:text-indigo-500 transition duration-500"
            to="/activity"
          >
            {" "}
            Activity{" "}
          </Link>
        </li>
      </ul>
      <form className="header-newsletter hidden lg:flex items-center">
        <div className="flex flex-1 items-center xl:w-80 bg-white shadow transition duration-500 hover:shadow-lg rounded h-14 p-4 mr-6">
          <img
            className="w-6 h-6 flex-shrink-0 p-1"
            src="assets/images/search-icon.svg"
            alt="title"
          />
          <input
            className="appearance-none bg-transparent border-none w-full text-blueGray-600 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search items"
          />
        </div>
      </form>
      <Link
        to="/wallet"
        className="btn hidden xl:flex items-center text-white font-body font-semibold rounded h-14 p-4 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
        type="submit"
      >
        <img
          className="w-4 h-4 flex-shrink-0  mr-2"
          src="assets/images/wallet-icon.svg"
          title="title"
        />{" "}
        Connect Wallet
      </Link>
    </div>
  );
};

export default Dropdown;
