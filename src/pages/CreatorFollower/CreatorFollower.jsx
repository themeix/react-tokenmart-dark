import React from "react";
import { Link } from "react-router-dom";
import FooterV2 from "../../components/Footer/FooterV2";
import HeaderV2 from "../../components/Header/HeaderV2";

const CreatorFollower = () => {
  return (
    <div>
      <HeaderV2 />
      {/*  ====================== Hero Section =============================  */}
      <section className="hero-section relative mt-2 pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="container mx-auto relative px-4 z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <span className="relative">
                <img
                  className="border-2 border-white w-32 h-32 object-cover rounded-full"
                  src="assets/images/author/3.jpg"
                  alt="title"
                />{" "}
                <span className="absolute bottom-2 right-1">
                  <img
                    className="w-8 h-8"
                    src="assets/images/verified-icon.svg"
                    alt="title"
                  />
                </span>
              </span>
            </div>
            <h2 className="font-display text-4xl text-blueGray-900 font-bold mb-2">
              Steven Robart{" "}
            </h2>
            <p className="font-body text-blueGray-600 mb-4">
              <img
                className="w-4 h-4 inline-block mr-1"
                src="assets/images/diamond-icon.svg"
                alt="title"
              />{" "}
              Diamond Seller
            </p>
            <p className="font-body text-blueGray-600 mb-4">
              We create high quality, seo friendly and fast loading ghost themes
              in affordable price. Buy ghost theme from us and get 24/7 free
              customer support
            </p>
            <div className="flex flex-wrap items-center justify-center mb-4">
              <div className="flex items-center m-2">
                <span className="bg-indigo-100 flex items-center justify-center rounded-lg w-8 h-8">
                  <img src="assets/images/level-icon.svg" alt="title" />
                </span>
                <p className="font-body font-bold text-blueGray-600 ml-2">
                  Level 8s
                </p>
              </div>
              <div className="flex items-center m-2">
                <span className="bg-indigo-100 flex items-center justify-center rounded-lg w-8 h-8">
                  <img src="assets/images/heart-icon2.svg" alt="title" />
                </span>
                <p className="font-body font-bold text-blueGray-600 ml-2">
                  90 Likes
                </p>
              </div>
              <div className="flex items-center m-2">
                <span className="bg-indigo-100 flex items-center justify-center rounded-lg w-8 h-8">
                  <img src="assets/images/item-icon.svg" alt="title" />
                </span>
                <p className="font-body font-bold text-blueGray-600 ml-2">
                  150 Items
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 max-w-sm m-auto flex-wrap justify-center">
              <Link
                to="/#"
                className="block font-body font-bold text-blueGray-600 bg-indigo-100 rounded py-2 px-4 transition duration-500 hover:bg-indigo-200"
              >
                <img
                  className="w-4 h-4 inline-block mr-1 mb-1"
                  src="assets/images/comment-icon.svg"
                  alt="title"
                />{" "}
                Send Message
              </Link>
              <Link
                to="/#"
                className="block font-body font-bold text-blueGray-600 bg-indigo-100 rounded py-2 px-4 transition duration-500 hover:bg-indigo-200"
              >
                <img
                  className="w-4 h-4 inline-block mr-1 mb-1"
                  src="assets/images/author-icon.svg"
                  alt="title"
                />{" "}
                Follow
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/*  ====================== Product Section =============================  */}
      <section className="product-section relative mb-20 lg:mb-32">
        <div className="container mx-auto relative px-4 z-10">
          <div className="flex flex-wrap items-center justify-center mb-8 lg:mb-14">
            <Link
              to="/creator-featured"
              className="block border border-blueGray-300 text-blueGray-900 hover:text-white font-body font-bold rounded py-3 px-6 mr-4 mb-4 transition duration-500 hover:bg-indigo-500 hover:border-indigo-500"
            >
              Featured (4)
            </Link>
            <Link
              to="/creator-published"
              className="block border border-blueGray-300 text-blueGray-900 hover:text-white font-body font-bold rounded py-3 px-6 mr-4 mb-4 transition duration-500 hover:bg-indigo-500 hover:border-indigo-500"
            >
              Published (10)
            </Link>
            <Link
              to="/creator-published"
              className="block border border-blueGray-300 text-blueGray-900 hover:text-white font-body font-bold rounded py-3 px-6 mr-4 mb-4 transition duration-500 hover:bg-indigo-500 hover:border-indigo-500"
            >
              Pending (12)
            </Link>
            <Link
              to="/creator-activity"
              className="block border border-blueGray-300 text-blueGray-900 hover:text-white font-body font-bold rounded py-3 px-6 mr-4 mb-4 transition duration-500 hover:bg-indigo-500 hover:border-indigo-500"
            >
              Activity
            </Link>
            <Link
              to="/creator-follower"
              className="btn inline-block text-white font-body font-bold rounded py-3 px-6 mr-4 mb-4 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
            >
              Followers(6)
            </Link>
            <Link
              to="/edit-profile"
              className="block border border-blueGray-300 text-blueGray-900 hover:text-white font-body font-bold rounded py-3 px-6 mr-4 mb-4 transition duration-500 hover:bg-indigo-500 hover:border-indigo-500"
            >
              Edit Profile
            </Link>
            <Link
              to="/#"
              className="block border border-blueGray-300 text-blueGray-900 hover:text-white font-body font-bold rounded py-3 px-6 mr-4 mb-4 transition duration-500 hover:bg-indigo-500 hover:border-indigo-500"
            >
              Logout
            </Link>
          </div>
          <div className="activity-infinite grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            <div
              className="seller-box text-center rounded transition duration-500 hover:shadow-lg p-6"
              data-aos="fade-up"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="relative">
                  <img
                    className="w-20 h-20 object-cover rounded-lg"
                    src="assets/images/author/9.jpg"
                    alt="title"
                  />
                  <span className="absolute bottom-2 -right-0">
                    <img
                      className="w-5 h-5"
                      src="assets/images/verified-icon.svg"
                      alt="title"
                    />
                  </span>
                </div>
              </div>
              <h6 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                <Link to="/creator-published">Leslie Alexander</Link>
              </h6>
              <p className="font-body text-sm text-blueGray-600 mt-2">
                <img
                  className="w-4 h-4 inline-block mr-1"
                  src="assets/images/diamond-icon.svg"
                  alt="title"
                />{" "}
                Diamond Seller
              </p>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="font-body text-sm text-blueGray-400">Level</p>
                  <h5 className="flex items-center justify-center text-xl font-body font-bold text-blueGray-600">
                    <img
                      className="w-3 h-3 mr-1"
                      src="assets/images/up-icon.svg"
                      alt="title"
                    />{" "}
                    8{" "}
                  </h5>
                </div>
                <div>
                  <p className="font-body text-sm text-blueGray-400">Items</p>
                  <h5 className="flex items-center justify-center text-xl font-body font-bold text-blueGray-600">
                    {" "}
                    17{" "}
                  </h5>
                </div>
              </div>
            </div>
            <div
              className="seller-box text-center rounded transition duration-500 hover:shadow-lg p-6"
              data-aos="fade-up"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="relative">
                  <img
                    className="w-20 h-20 object-cover rounded-lg"
                    src="assets/images/author/10.jpg"
                    alt="title"
                  />
                  <span className="absolute bottom-2 -right-0">
                    <img
                      className="w-5 h-5"
                      src="assets/images/verified-icon.svg"
                      alt="title"
                    />
                  </span>
                </div>
              </div>
              <h6 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                <Link to="/creator-published">Floyd Miles</Link>
              </h6>
              <p className="font-body text-sm text-blueGray-600 mt-2">
                <img
                  className="w-4 h-4 inline-block mr-1"
                  src="assets/images/diamond-icon.svg"
                  alt="title"
                />{" "}
                Diamond Seller
              </p>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="font-body text-sm text-blueGray-400">Level</p>
                  <h5 className="flex items-center justify-center text-xl font-body font-bold text-blueGray-600">
                    <img
                      className="w-3 h-3 mr-1"
                      src="assets/images/up-icon.svg"
                      alt="title"
                    />{" "}
                    4{" "}
                  </h5>
                </div>
                <div>
                  <p className="font-body text-sm text-blueGray-400">Items</p>
                  <h5 className="flex items-center justify-center text-xl font-body font-bold text-blueGray-600">
                    {" "}
                    15{" "}
                  </h5>
                </div>
              </div>
            </div>
            <div
              className="seller-box text-center rounded transition duration-500 hover:shadow-lg p-6"
              data-aos="fade-up"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="relative">
                  <img
                    className="w-20 h-20 object-cover rounded-lg"
                    src="assets/images/author/11.jpg"
                    alt="title"
                  />
                  <span className="absolute bottom-2 -right-0">
                    <img
                      className="w-5 h-5"
                      src="assets/images/verified-icon.svg"
                      alt="title"
                    />
                  </span>
                </div>
              </div>
              <h6 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                <Link to="/creator-published">Ronald Richards</Link>
              </h6>
              <p className="font-body text-sm text-blueGray-600 mt-2">
                <img
                  className="w-4 h-4 inline-block mr-1"
                  src="assets/images/diamond-icon.svg"
                  alt="title"
                />{" "}
                Diamond Seller
              </p>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="font-body text-sm text-blueGray-400">Level</p>
                  <h5 className="flex items-center justify-center text-xl font-body font-bold text-blueGray-600">
                    <img
                      className="w-3 h-3 mr-1"
                      src="assets/images/down-icon.svg"
                      alt="title"
                    />{" "}
                    7{" "}
                  </h5>
                </div>
                <div>
                  <p className="font-body text-sm text-blueGray-400">Items</p>
                  <h5 className="flex items-center justify-center text-xl font-body font-bold text-blueGray-600">
                    {" "}
                    2{" "}
                  </h5>
                </div>
              </div>
            </div>
            <div
              className="seller-box text-center rounded transition duration-500 hover:shadow-lg p-6"
              data-aos="fade-up"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="relative">
                  <img
                    className="w-20 h-20 object-cover rounded-lg"
                    src="assets/images/author/12.jpg"
                    alt="title"
                  />
                  <span className="absolute bottom-2 -right-0">
                    <img
                      className="w-5 h-5"
                      src="assets/images/verified-icon.svg"
                      alt="title"
                    />
                  </span>
                </div>
              </div>
              <h6 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                <Link to="/creator-published">Dianne Russell</Link>
              </h6>
              <p className="font-body text-sm text-blueGray-600 mt-2">
                <img
                  className="w-4 h-4 inline-block mr-1"
                  src="assets/images/diamond-icon.svg"
                  alt="title"
                />{" "}
                Diamond Seller
              </p>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="font-body text-sm text-blueGray-400">Level</p>
                  <h5 className="flex items-center justify-center text-xl font-body font-bold text-blueGray-600">
                    <img
                      className="w-3 h-3 mr-1"
                      src="assets/images/up-icon.svg"
                      alt="title"
                    />{" "}
                    8{" "}
                  </h5>
                </div>
                <div>
                  <p className="font-body text-sm text-blueGray-400">Items</p>
                  <h5 className="flex items-center justify-center text-xl font-body font-bold text-blueGray-600">
                    {" "}
                    14{" "}
                  </h5>
                </div>
              </div>
            </div>
            <div
              className="seller-box text-center rounded transition duration-500 hover:shadow-lg p-6"
              data-aos="fade-up"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="relative">
                  <img
                    className="w-20 h-20 object-cover rounded-lg"
                    src="assets/images/author/13.jpg"
                    alt="title"
                  />
                  <span className="absolute bottom-2 -right-0">
                    <img
                      className="w-5 h-5"
                      src="assets/images/verified-icon.svg"
                      alt="title"
                    />
                  </span>
                </div>
              </div>
              <h6 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                <Link to="/creator-published">Darrell Steward</Link>
              </h6>
              <p className="font-body text-sm text-blueGray-600 mt-2">
                <img
                  className="w-4 h-4 inline-block mr-1"
                  src="assets/images/diamond-icon.svg"
                  alt="title"
                />{" "}
                Diamond Seller
              </p>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="font-body text-sm text-blueGray-400">Level</p>
                  <h5 className="flex items-center justify-center text-xl font-body font-bold text-blueGray-900">
                    <img
                      className="w-3 h-3 mr-1"
                      src="assets/images/up-icon.svg"
                      alt="title"
                    />{" "}
                    2{" "}
                  </h5>
                </div>
                <div>
                  <p className="font-body text-sm text-blueGray-400">Items</p>
                  <h5 className="flex items-center justify-center text-xl font-body font-bold text-blueGray-900">
                    {" "}
                    23{" "}
                  </h5>
                </div>
              </div>
            </div>
            <div
              className="seller-box text-center rounded transition duration-500 hover:shadow-lg p-6"
              data-aos="fade-up"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="relative">
                  <img
                    className="w-20 h-20 object-cover rounded-lg"
                    src="assets/images/author/14.jpg"
                    alt="title"
                  />
                  <span className="absolute bottom-2 -right-0">
                    <img
                      className="w-5 h-5"
                      src="assets/images/verified-icon.svg"
                      alt="title"
                    />
                  </span>
                </div>
              </div>
              <h6 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                <Link to="/creator-published">Marvin McKinney</Link>
              </h6>
              <p className="font-body text-sm text-blueGray-600 mt-2">
                <img
                  className="w-4 h-4 inline-block mr-1"
                  src="assets/images/diamond-icon.svg"
                  alt="title"
                />{" "}
                Diamond Seller
              </p>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="font-body text-sm text-blueGray-400">Level</p>
                  <h5 className="flex items-center justify-center text-xl font-body font-bold text-blueGray-900">
                    <img
                      className="w-3 h-3 mr-1"
                      src="assets/images/up-icon.svg"
                      alt="title"
                    />{" "}
                    2{" "}
                  </h5>
                </div>
                <div>
                  <p className="font-body text-sm text-blueGray-400">Items</p>
                  <h5 className="flex items-center justify-center text-xl font-body font-bold text-blueGray-900">
                    {" "}
                    23{" "}
                  </h5>
                </div>
              </div>
            </div>
            <div
              className="seller-box text-center rounded transition duration-500 hover:shadow-lg p-6"
              data-aos="fade-up"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="relative">
                  <img
                    className="w-20 h-20 object-cover rounded-lg"
                    src="assets/images/author/15.jpg"
                    alt="title"
                  />
                  <span className="absolute bottom-2 -right-0">
                    <img
                      className="w-5 h-5"
                      src="assets/images/verified-icon.svg"
                      alt="title"
                    />
                  </span>
                </div>
              </div>
              <h6 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                <Link to="/creator-published">Jerome Bell</Link>
              </h6>
              <p className="font-body text-sm text-blueGray-600 mt-2">
                <img
                  className="w-4 h-4 inline-block mr-1"
                  src="assets/images/diamond-icon.svg"
                  alt="title"
                />{" "}
                Diamond Seller
              </p>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="font-body text-sm text-blueGray-400">Level</p>
                  <h5 className="flex items-center justify-center text-xl font-body font-bold text-blueGray-900">
                    <img
                      className="w-3 h-3 mr-1"
                      src="assets/images/up-icon.svg"
                      alt="title"
                    />{" "}
                    2{" "}
                  </h5>
                </div>
                <div>
                  <p className="font-body text-sm text-blueGray-400">Items</p>
                  <h5 className="flex items-center justify-center text-xl font-body font-bold text-blueGray-900">
                    {" "}
                    23{" "}
                  </h5>
                </div>
              </div>
            </div>
            <div
              className="seller-box text-center rounded transition duration-500 hover:shadow-lg p-6"
              data-aos="fade-up"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="relative">
                  <img
                    className="w-20 h-20 object-cover rounded-lg"
                    src="assets/images/author/16.jpg"
                    alt="title"
                  />
                  <span className="absolute bottom-2 -right-0">
                    <img
                      className="w-5 h-5"
                      src="assets/images/verified-icon.svg"
                      alt="title"
                    />
                  </span>
                </div>
              </div>
              <h6 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                <Link to="/creator-published">Courtney Henry</Link>
              </h6>
              <p className="font-body text-sm text-blueGray-600 mt-2">
                <img
                  className="w-4 h-4 inline-block mr-1"
                  src="assets/images/diamond-icon.svg"
                  alt="title"
                />{" "}
                Diamond Seller
              </p>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="font-body text-sm text-blueGray-400">Level</p>
                  <h5 className="flex items-center justify-center text-xl font-body font-bold text-blueGray-900">
                    <img
                      className="w-3 h-3 mr-1"
                      src="assets/images/up-icon.svg"
                      alt="title"
                    />{" "}
                    2{" "}
                  </h5>
                </div>
                <div>
                  <p className="font-body text-sm text-blueGray-400">Items</p>
                  <h5 className="flex items-center justify-center text-xl font-body font-bold text-blueGray-900">
                    {" "}
                    23{" "}
                  </h5>
                </div>
              </div>
            </div>
            <div
              className="seller-box text-center rounded transition duration-500 hover:shadow-lg p-6"
              data-aos="fade-up"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="relative">
                  <img
                    className="w-20 h-20 object-cover rounded-lg"
                    src="assets/images/author/17.jpg"
                    alt="title"
                  />
                  <span className="absolute bottom-2 -right-0">
                    <img
                      className="w-5 h-5"
                      src="assets/images/verified-icon.svg"
                      alt="title"
                    />
                  </span>
                </div>
              </div>
              <h6 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                <Link to="/creator-published">Theresa Webb</Link>
              </h6>
              <p className="font-body text-sm text-blueGray-600 mt-2">
                <img
                  className="w-4 h-4 inline-block mr-1"
                  src="assets/images/diamond-icon.svg"
                  alt="title"
                />{" "}
                Diamond Seller
              </p>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="font-body text-sm text-blueGray-400">Level</p>
                  <h5 className="flex items-center justify-center text-xl font-body font-bold text-blueGray-900">
                    <img
                      className="w-3 h-3 mr-1"
                      src="assets/images/up-icon.svg"
                      alt="title"
                    />{" "}
                    2{" "}
                  </h5>
                </div>
                <div>
                  <p className="font-body text-sm text-blueGray-400">Items</p>
                  <h5 className="flex items-center justify-center text-xl font-body font-bold text-blueGray-900">
                    {" "}
                    23{" "}
                  </h5>
                </div>
              </div>
            </div>
            <div
              className="seller-box text-center rounded transition duration-500 hover:shadow-lg p-6"
              data-aos="fade-up"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="relative">
                  <img
                    className="w-20 h-20 object-cover rounded-lg"
                    src="assets/images/author/18.jpg"
                    alt="title"
                  />
                  <span className="absolute bottom-2 -right-0">
                    <img
                      className="w-5 h-5"
                      src="assets/images/verified-icon.svg"
                      alt="title"
                    />
                  </span>
                </div>
              </div>
              <h6 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                <Link to="/creator-published">Kathryn Murphy</Link>
              </h6>
              <p className="font-body text-sm text-blueGray-600 mt-2">
                <img
                  className="w-4 h-4 inline-block mr-1"
                  src="assets/images/diamond-icon.svg"
                  alt="title"
                />{" "}
                Diamond Seller
              </p>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="font-body text-sm text-blueGray-400">Level</p>
                  <h5 className="flex items-center justify-center text-xl font-body font-bold text-blueGray-900">
                    <img
                      className="w-3 h-3 mr-1"
                      src="assets/images/up-icon.svg"
                      alt="title"
                    />{" "}
                    2{" "}
                  </h5>
                </div>
                <div>
                  <p className="font-body text-sm text-blueGray-400">Items</p>
                  <h5 className="flex items-center justify-center text-xl font-body font-bold text-blueGray-900">
                    {" "}
                    23{" "}
                  </h5>
                </div>
              </div>
            </div>
            <div
              className="seller-box text-center rounded transition duration-500 hover:shadow-lg p-6"
              data-aos="fade-up"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="relative">
                  <img
                    className="w-20 h-20 object-cover rounded-lg"
                    src="assets/images/author/19.jpg"
                    alt="title"
                  />
                  <span className="absolute bottom-2 -right-0">
                    <img
                      className="w-5 h-5"
                      src="assets/images/verified-icon.svg"
                      alt="title"
                    />
                  </span>
                </div>
              </div>
              <h6 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                <Link to="/creator-published">Arlene McCoy</Link>
              </h6>
              <p className="font-body text-sm text-blueGray-600 mt-2">
                <img
                  className="w-4 h-4 inline-block mr-1"
                  src="assets/images/diamond-icon.svg"
                  alt="title"
                />{" "}
                Diamond Seller
              </p>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="font-body text-sm text-blueGray-400">Level</p>
                  <h5 className="flex items-center justify-center text-xl font-body font-bold text-blueGray-900">
                    <img
                      className="w-3 h-3 mr-1"
                      src="assets/images/up-icon.svg"
                      alt="title"
                    />{" "}
                    2{" "}
                  </h5>
                </div>
                <div>
                  <p className="font-body text-sm text-blueGray-400">Items</p>
                  <h5 className="flex items-center justify-center text-xl font-body font-bold text-blueGray-900">
                    {" "}
                    23{" "}
                  </h5>
                </div>
              </div>
            </div>
            <div
              className="seller-box text-center rounded transition duration-500 hover:shadow-lg p-6"
              data-aos="fade-up"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="relative">
                  <img
                    className="w-20 h-20 object-cover rounded-lg"
                    src="assets/images/author/20.jpg"
                    alt="title"
                  />
                  <span className="absolute bottom-2 -right-0">
                    <img
                      className="w-5 h-5"
                      src="assets/images/verified-icon.svg"
                      alt="title"
                    />
                  </span>
                </div>
              </div>
              <h6 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                <Link to="/creator-published">Eleanor Pena</Link>
              </h6>
              <p className="font-body text-sm text-blueGray-600 mt-2">
                <img
                  className="w-4 h-4 inline-block mr-1"
                  src="assets/images/diamond-icon.svg"
                  alt="title"
                />{" "}
                Diamond Seller
              </p>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="font-body text-sm text-blueGray-400">Level</p>
                  <h5 className="flex items-center justify-center text-xl font-body font-bold text-blueGray-900">
                    <img
                      className="w-3 h-3 mr-1"
                      src="assets/images/up-icon.svg"
                      alt="title"
                    />{" "}
                    2{" "}
                  </h5>
                </div>
                <div>
                  <p className="font-body text-sm text-blueGray-400">Items</p>
                  <h5 className="flex items-center justify-center text-xl font-body font-bold text-blueGray-900">
                    {" "}
                    23{" "}
                  </h5>
                </div>
              </div>
            </div>
            <div
              className="seller-box text-center rounded transition duration-500 hover:shadow-lg p-6"
              data-aos="fade-up"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="relative">
                  <img
                    className="w-20 h-20 object-cover rounded-lg"
                    src="assets/images/author/1.jpg"
                    alt="title"
                  />
                  <span className="absolute bottom-2 -right-0">
                    <img
                      className="w-5 h-5"
                      src="assets/images/verified-icon.svg"
                      alt="title"
                    />
                  </span>
                </div>
              </div>
              <h6 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                <Link to="/creator-published">Jane Cooper</Link>
              </h6>
              <p className="font-body text-sm text-blueGray-600 mt-2">
                <img
                  className="w-4 h-4 inline-block mr-1"
                  src="assets/images/diamond-icon.svg"
                  alt="title"
                />{" "}
                Diamond Seller
              </p>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="font-body text-sm text-blueGray-400">Level</p>
                  <h5 className="flex items-center justify-center text-xl font-body font-bold text-blueGray-900">
                    <img
                      className="w-3 h-3 mr-1"
                      src="assets/images/up-icon.svg"
                      alt="title"
                    />{" "}
                    2{" "}
                  </h5>
                </div>
                <div>
                  <p className="font-body text-sm text-blueGray-400">Items</p>
                  <h5 className="flex items-center justify-center text-xl font-body font-bold text-blueGray-900">
                    {" "}
                    23{" "}
                  </h5>
                </div>
              </div>
            </div>
            <div
              className="seller-box text-center rounded transition duration-500 hover:shadow-lg p-6"
              data-aos="fade-up"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="relative">
                  <img
                    className="w-20 h-20 object-cover rounded-lg"
                    src="assets/images/author/2.jpg"
                    alt="title"
                  />
                  <span className="absolute bottom-2 -right-0">
                    <img
                      className="w-5 h-5"
                      src="assets/images/verified-icon.svg"
                      alt="title"
                    />
                  </span>
                </div>
              </div>
              <h6 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                <Link to="/creator-published">Wade Warren</Link>
              </h6>
              <p className="font-body text-sm text-blueGray-600 mt-2">
                <img
                  className="w-4 h-4 inline-block mr-1"
                  src="assets/images/diamond-icon.svg"
                  alt="title"
                />{" "}
                Diamond Seller
              </p>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="font-body text-sm text-blueGray-400">Level</p>
                  <h5 className="flex items-center justify-center text-xl font-body font-bold text-blueGray-900">
                    <img
                      className="w-3 h-3 mr-1"
                      src="assets/images/up-icon.svg"
                      alt="title"
                    />{" "}
                    2{" "}
                  </h5>
                </div>
                <div>
                  <p className="font-body text-sm text-blueGray-400">Items</p>
                  <h5 className="flex items-center justify-center text-xl font-body font-bold text-blueGray-900">
                    {" "}
                    23{" "}
                  </h5>
                </div>
              </div>
            </div>
            <div
              className="seller-box text-center rounded transition duration-500 hover:shadow-lg p-6"
              data-aos="fade-up"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="relative">
                  <img
                    className="w-20 h-20 object-cover rounded-lg"
                    src="assets/images/author/5.jpg"
                    alt="title"
                  />
                  <span className="absolute bottom-2 -right-0">
                    <img
                      className="w-5 h-5"
                      src="assets/images/verified-icon.svg"
                      alt="title"
                    />
                  </span>
                </div>
              </div>
              <h6 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                <Link to="/creator-published">Jenny Wilson</Link>
              </h6>
              <p className="font-body text-sm text-blueGray-600 mt-2">
                <img
                  className="w-4 h-4 inline-block mr-1"
                  src="assets/images/diamond-icon.svg"
                  alt="title"
                />{" "}
                Jenny Wilson
              </p>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="font-body text-sm text-blueGray-400">Level</p>
                  <h5 className="flex items-center justify-center text-xl font-body font-bold text-blueGray-900">
                    <img
                      className="w-3 h-3 mr-1"
                      src="assets/images/up-icon.svg"
                      alt="title"
                    />{" "}
                    2{" "}
                  </h5>
                </div>
                <div>
                  <p className="font-body text-sm text-blueGray-400">Items</p>
                  <h5 className="flex items-center justify-center text-xl font-body font-bold text-blueGray-900">
                    {" "}
                    23{" "}
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8 lg:mt-14">
            <button className="btn load-more-btn flex items-center text-white font-body font-bold rounded px-6 py-4 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100">
              Load More{" "}
              <img
                className="w-4 h-4 flex-shrink-0 animate-spin ml-2"
                src="assets/images/spinner-icon.svg"
                alt="title"
              />
            </button>
          </div>
        </div>
      </section>
      {/*  ====================== Footer Section =============================  */}
      <FooterV2 />
    </div>
  );
};

export default CreatorFollower;
