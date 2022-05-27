import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
const ExploreV1 = () => {
  return (
    <div>
      <Header />
      {/*  ====================== Hero Section =============================  */}
      <section className="hero-section relative mt-2 pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="container mx-auto relative px-4 z-10">
          <h2 className="font-display text-4xl lg:text-6xl text-blueGray-900 font-bold mb-4">
            Explore{" "}
          </h2>
          <ul className="hero-breadcrumb font-body text-blueGray-600 flex flex-wrap items-center">
            <li className="flex items-center mr-2">
              <Link
                className="transition duration-500  hover:text-indigo-500 underline-hover"
                to="/"
              >
                {" "}
                Home
              </Link>
            </li>
            <li className="flex items-center mr-2">
              <img
                className="w-3 h-3 inline-block mr-2"
                src="assets/images/right-arrow.svg"
                alt="title"
              />
              <Link
                className="transition duration-500  hover:text-indigo-500 underline-hover"
                to="/explore"
              >
                {" "}
                Explore
              </Link>
            </li>
            <li className="flex items-center text-indigo-500 mr-2">
              <img
                className="w-3 h-3 inline-block mr-2"
                src="assets/images/right-arrow.svg"
                alt="title"
              />{" "}
              Explore
            </li>
          </ul>
        </div>
      </section>
      {/*  ====================== Product Section =============================  */}
      <section className="product-section relative mb-20 lg:mb-32">
        <div className="container mx-auto relative px-4 z-10">
          <div className="flex justify-between mb-8 lg:mb-14">
            <div className="flex items-center pr-6">
              <select className="multiple-select2 block lg:hidden text-blueGray-600">
                <option>All </option>
                <option>Art </option>
                <option>Music </option>
                <option>Domain Names </option>
                <option>Virtual Worlds </option>
              </select>
              <div className="hidden lg:flex flex-wrap items-center">
                <Link
                  to="/explore"
                  className="btn inline-block text-white font-body font-bold rounded py-3 px-6 mr-4 mb-4 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
                >
                  All
                </Link>
                <Link
                  to="/explore"
                  className="block border border-blueGray-300 text-blueGray-900 hover:text-white font-body font-bold rounded py-3 px-6 mr-4 mb-4 transition duration-500 hover:bg-indigo-500 hover:border-indigo-500"
                >
                  Art
                </Link>
                <Link
                  to="/explore"
                  className="block border border-blueGray-300 text-blueGray-900 hover:text-white font-body font-bold rounded py-3 px-6 mr-4 mb-4 transition duration-500 hover:bg-indigo-500 hover:border-indigo-500"
                >
                  Music
                </Link>
                <Link
                  to="/explore"
                  className="block border border-blueGray-300 text-blueGray-900 hover:text-white font-body font-bold rounded py-3 px-6 mr-4 mb-4 transition duration-500 hover:bg-indigo-500 hover:border-indigo-500"
                >
                  Domain Names
                </Link>
                <Link
                  to="/explore"
                  className="block border border-blueGray-300 text-blueGray-900 hover:text-white font-body font-bold rounded py-3 px-6 mr-4 mb-4 transition duration-500 hover:bg-indigo-500 hover:border-indigo-500"
                >
                  Virtual Worlds
                </Link>
                <Link
                  to="/explore"
                  className="block border border-blueGray-300 text-blueGray-900 hover:text-white font-body font-bold rounded py-3 px-6 mr-4 mb-4 transition duration-500 hover:bg-indigo-500 hover:border-indigo-500"
                >
                  Trading Cards
                </Link>
                <Link
                  to="/explore"
                  className="block border border-blueGray-300 text-blueGray-900 hover:text-white font-body font-bold rounded py-3 px-6 mr-4 mb-4 transition duration-500 hover:bg-indigo-500 hover:border-indigo-500"
                >
                  Trading Cards
                </Link>
              </div>
            </div>
            <div className="flex relative lg:top-4">
              <span className="font-body text-blueGray-600">Token</span>
              <select className="multiple-select text-blue">
                <option>All Token </option>
                <option>Bitcoin </option>
                <option>Doge Coin </option>
                <option>XRP </option>
                <option>Safemoon </option>
              </select>
            </div>
          </div>
          <div className="product-infinite grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <div
              className="product-box gradient-box flex justify-between flex-col bg-white shadow rounded transition hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="product-top relative bg-white">
                <div className="product-image relative rounded overflow-hidden m-6 mb-8">
                  <img
                    className="w-full sm:h-56 rounded object-cover"
                    src="assets/images/product/1.gif"
                    alt="title"
                  />
                  <span className="flex items-center absolute top-4 right-4 text-sm bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-body font-medium rounded py-1 px-2">
                    <img
                      className="w-3 h-3 inline-block mr-1"
                      src="assets/images/star-icon.svg"
                      alt="title"
                    />
                    Featured
                  </span>
                </div>
                <Link
                  to="/item-single"
                  className="product-meta absolute left-0 right-0 m-auto bottom-24 w-36 block text-white text-center font-body font-medium rounded py-2 px-4 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
                >
                  <img
                    className="w-4 h-4 inline-block mb-1"
                    src="assets/images/bid-icon2.svg"
                    alt="title"
                  />{" "}
                  Place a bid
                </Link>
                <div className="product-content px-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Link
                        to="/creator-published"
                        className="relative"
                        data-tooltip="Steven Robart"
                      >
                        <img
                          className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                          src="assets/images/author/1.jpg"
                          alt="title"
                        />
                      </Link>
                      <Link
                        to="/creator-published"
                        className="relative -left-2"
                        data-tooltip="Steven Robart"
                      >
                        <img
                          className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                          src="assets/images/author/3.jpg"
                          alt="title"
                        />
                      </Link>
                      <Link
                        to="/creator-published"
                        className="relative -left-4"
                        data-tooltip="Steven Robart"
                      >
                        <img
                          className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                          src="assets/images/author/3.jpg"
                          alt="title"
                        />{" "}
                        <span className="absolute bottom-0 right-1">
                          <img
                            className="w-3 h-3"
                            src="assets/images/verified-icon.svg"
                            alt="title"
                          />
                        </span>
                      </Link>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-indigo-100 flex items-center justify-center rounded-lg w-8 h-8">
                        <img src="assets/images/heart-icon2.svg" alt="title" />
                      </span>
                      <p className="font-body font-bold text-sm text-blueGray-600 ml-2">
                        90 Likes
                      </p>
                    </div>
                  </div>
                  <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                    <Link to="/item-single">Creative Oilpaint #07</Link>
                  </h3>
                </div>
              </div>
              <div className="product-bottom bg-white flex items-center flex-wrap justify-between pt-4 px-6 pb-6">
                <div>
                  <p className="font-body text-sm text-blueGray-600">
                    Current Bid
                  </p>
                </div>
                <div className="text-center">
                  <p className="flex items-center font-body font-bold text-blueGray-900 my-1">
                    <img
                      className="w-5 h-5 inline-block mr-1"
                      src="assets/images/cryptocurrency-icon.svg"
                      alt="title"
                    />{" "}
                    0.008 ETH
                  </p>
                  <p className="font-body text-sm text-blueGray-600">≈$26.69</p>
                </div>
              </div>
            </div>
            <div
              className="product-box gradient-box flex justify-between flex-col bg-white shadow rounded transition hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="product-top relative bg-white">
                <div className="product-image relative rounded overflow-hidden m-6 mb-8">
                  <img
                    className="w-full sm:h-56 rounded object-cover"
                    src="assets/images/product/15.jpg"
                    alt="title"
                  />
                  <span className="flex items-center absolute top-4 right-4 text-sm bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-body font-medium rounded py-1 px-2">
                    <img
                      className="w-3 h-3 inline-block mr-1"
                      src="assets/images/star-icon.svg"
                      alt="title"
                    />
                    Featured
                  </span>
                </div>
                <Link
                  to="/item-single"
                  className="product-meta absolute left-0 right-0 m-auto bottom-24 w-36 block text-white text-center font-body font-medium rounded py-2 px-4 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
                >
                  <img
                    className="w-4 h-4 inline-block mb-1"
                    src="assets/images/bid-icon2.svg"
                    alt="title"
                  />{" "}
                  Place a bid
                </Link>
                <div className="product-content px-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Link
                        to="/creator-published"
                        className="relative"
                        data-tooltip="Steven Robart"
                      >
                        <img
                          className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                          src="assets/images/author/1.jpg"
                          alt="title"
                        />
                      </Link>
                      <Link
                        to="/creator-published"
                        className="relative -left-2"
                        data-tooltip="Steven Robart"
                      >
                        <img
                          className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                          src="assets/images/author/3.jpg"
                          alt="title"
                        />
                      </Link>
                      <Link
                        to="/creator-published"
                        className="relative -left-4"
                        data-tooltip="Steven Robart"
                      >
                        <img
                          className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                          src="assets/images/author/3.jpg"
                          alt="title"
                        />{" "}
                        <span className="absolute bottom-0 right-1">
                          <img
                            className="w-3 h-3"
                            src="assets/images/verified-icon.svg"
                            alt="title"
                          />
                        </span>
                      </Link>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-indigo-100 flex items-center justify-center rounded-lg w-8 h-8">
                        <img src="assets/images/heart-icon2.svg" alt="title" />
                      </span>
                      <p className="font-body font-bold text-sm text-blueGray-600 ml-2">
                        90 Likes
                      </p>
                    </div>
                  </div>
                  <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                    <Link to="/item-single">Cyber Boss #12</Link>
                  </h3>
                </div>
              </div>
              <div className="product-bottom bg-white flex items-center flex-wrap justify-between pt-4 px-6 pb-6">
                <div>
                  <p className="font-body text-sm text-blueGray-600">
                    Current Bid
                  </p>
                </div>
                <div className="text-center">
                  <p className="flex items-center font-body font-bold text-blueGray-900 my-1">
                    <img
                      className="w-5 h-5 inline-block mr-1"
                      src="assets/images/cryptocurrency-icon.svg"
                      alt="title"
                    />{" "}
                    0.008 ETH
                  </p>
                  <p className="font-body text-sm text-blueGray-600">≈$26.69</p>
                </div>
              </div>
            </div>
            <div
              className="product-box gradient-box flex justify-between flex-col bg-white shadow rounded transition hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="product-top relative bg-white">
                <div className="product-image relative rounded overflow-hidden m-6 mb-8">
                  <img
                    className="w-full sm:h-56 rounded object-cover"
                    src="assets/images/product/2.gif"
                    alt="title"
                  />
                  <span className="flex items-center absolute top-4 right-4 text-sm bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-body font-medium rounded py-1 px-2">
                    <img
                      className="w-3 h-3 inline-block mr-1"
                      src="assets/images/star-icon.svg"
                      alt="title"
                    />
                    Featured
                  </span>
                </div>
                <Link
                  to="/item-single"
                  className="product-meta absolute left-0 right-0 m-auto bottom-24 w-36 block text-white text-center font-body font-medium rounded py-2 px-4 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
                >
                  <img
                    className="w-4 h-4 inline-block mb-1"
                    src="assets/images/bid-icon2.svg"
                    alt="title"
                  />{" "}
                  Place a bid
                </Link>
                <div className="product-content px-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Link
                        to="/creator-published"
                        className="relative"
                        data-tooltip="Steven Robart"
                      >
                        <img
                          className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                          src="assets/images/author/1.jpg"
                          alt="title"
                        />
                      </Link>
                      <Link
                        to="/creator-published"
                        className="relative -left-2"
                        data-tooltip="Steven Robart"
                      >
                        <img
                          className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                          src="assets/images/author/3.jpg"
                          alt="title"
                        />
                      </Link>
                      <Link
                        to="/creator-published"
                        className="relative -left-4"
                        data-tooltip="Steven Robart"
                      >
                        <img
                          className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                          src="assets/images/author/3.jpg"
                          alt="title"
                        />{" "}
                        <span className="absolute bottom-0 right-1">
                          <img
                            className="w-3 h-3"
                            src="assets/images/verified-icon.svg"
                            alt="title"
                          />
                        </span>
                      </Link>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-indigo-100 flex items-center justify-center rounded-lg w-8 h-8">
                        <img src="assets/images/heart-icon2.svg" alt="title" />
                      </span>
                      <p className="font-body font-bold text-sm text-blueGray-600 ml-2">
                        90 Likes
                      </p>
                    </div>
                  </div>
                  <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                    <Link to="/item-single">Commander Titan #04</Link>
                  </h3>
                </div>
              </div>
              <div className="product-bottom bg-white flex items-center flex-wrap justify-between pt-4 px-6 pb-6">
                <div>
                  <p className="font-body text-sm text-blueGray-600">
                    Current Bid
                  </p>
                </div>
                <div className="text-center">
                  <p className="flex items-center font-body font-bold text-blueGray-900 my-1">
                    <img
                      className="w-5 h-5 inline-block mr-1"
                      src="assets/images/cryptocurrency-icon.svg"
                      alt="title"
                    />{" "}
                    0.008 ETH
                  </p>
                  <p className="font-body text-sm text-blueGray-600">≈$26.69</p>
                </div>
              </div>
            </div>
            <div
              className="product-box gradient-box flex justify-between flex-col bg-white shadow rounded transition hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="product-top relative bg-white">
                <div className="product-image relative rounded overflow-hidden m-6 mb-8">
                  <img
                    className="w-full sm:h-56 rounded object-cover"
                    src="assets/images/product/3.gif"
                    alt="title"
                  />
                  <span className="flex items-center absolute top-4 right-4 text-sm bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-body font-medium rounded py-1 px-2">
                    <img
                      className="w-3 h-3 inline-block mr-1"
                      src="assets/images/star-icon.svg"
                      alt="title"
                    />
                    Featured
                  </span>
                </div>
                <Link
                  to="/item-single"
                  className="product-meta absolute left-0 right-0 m-auto bottom-24 w-36 block text-white text-center font-body font-medium rounded py-2 px-4 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
                >
                  <img
                    className="w-4 h-4 inline-block mb-1"
                    src="assets/images/bid-icon2.svg"
                    alt="title"
                  />{" "}
                  Place a bid
                </Link>
                <div className="product-content px-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Link
                        to="/creator-published"
                        className="relative"
                        data-tooltip="Steven Robart"
                      >
                        <img
                          className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                          src="assets/images/author/1.jpg"
                          alt="title"
                        />
                      </Link>
                      <Link
                        to="/creator-published"
                        className="relative -left-2"
                        data-tooltip="Steven Robart"
                      >
                        <img
                          className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                          src="assets/images/author/3.jpg"
                          alt="title"
                        />
                      </Link>
                      <Link
                        to="/creator-published"
                        className="relative -left-4"
                        data-tooltip="Steven Robart"
                      >
                        <img
                          className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                          src="assets/images/author/3.jpg"
                          alt="title"
                        />{" "}
                        <span className="absolute bottom-0 right-1">
                          <img
                            className="w-3 h-3"
                            src="assets/images/verified-icon.svg"
                            alt="title"
                          />
                        </span>
                      </Link>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-indigo-100 flex items-center justify-center rounded-lg w-8 h-8">
                        <img src="assets/images/heart-icon2.svg" alt="title" />
                      </span>
                      <p className="font-body font-bold text-sm text-blueGray-600 ml-2">
                        90 Likes
                      </p>
                    </div>
                  </div>
                  <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                    <Link to="/item-single">Creative Artwork #01 </Link>
                  </h3>
                </div>
              </div>
              <div className="product-bottom bg-white flex items-center flex-wrap justify-between pt-4 px-6 pb-6">
                <div>
                  <p className="font-body text-sm text-blueGray-600">
                    Current Bid
                  </p>
                </div>
                <div className="text-center">
                  <p className="flex items-center font-body font-bold text-blueGray-900 my-1">
                    <img
                      className="w-5 h-5 inline-block mr-1"
                      src="assets/images/cryptocurrency-icon.svg"
                      alt="title"
                    />{" "}
                    0.008 ETH
                  </p>
                  <p className="font-body text-sm text-blueGray-600">≈$26.69</p>
                </div>
              </div>
            </div>
            <div
              className="product-box gradient-box flex justify-between flex-col bg-white shadow rounded transition hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="product-top relative bg-white">
                <div className="product-image relative rounded overflow-hidden m-6 mb-8">
                  <img
                    className="w-full sm:h-56 rounded object-cover"
                    src="assets/images/product/18.jpg"
                    alt="title"
                  />
                </div>
                <Link
                  to="/item-single"
                  className="product-meta absolute left-0 right-0 m-auto bottom-24 w-36 block text-white text-center font-body font-medium rounded py-2 px-4 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
                >
                  <img
                    className="w-4 h-4 inline-block mb-1"
                    src="assets/images/bid-icon2.svg"
                    alt="title"
                  />{" "}
                  Place a bid
                </Link>
                <div className="product-content px-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Link
                        to="/creator-published"
                        className="relative"
                        data-tooltip="Steven Robart"
                      >
                        <img
                          className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                          src="assets/images/author/1.jpg"
                          alt="title"
                        />
                      </Link>
                      <Link
                        to="/creator-published"
                        className="relative -left-2"
                        data-tooltip="Steven Robart"
                      >
                        <img
                          className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                          src="assets/images/author/3.jpg"
                          alt="title"
                        />
                      </Link>
                      <Link
                        to="/creator-published"
                        className="relative -left-4"
                        data-tooltip="Steven Robart"
                      >
                        <img
                          className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                          src="assets/images/author/3.jpg"
                          alt="title"
                        />{" "}
                        <span className="absolute bottom-0 right-1">
                          <img
                            className="w-3 h-3"
                            src="assets/images/verified-icon.svg"
                            alt="title"
                          />
                        </span>
                      </Link>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-indigo-100 flex items-center justify-center rounded-lg w-8 h-8">
                        <img src="assets/images/heart-icon2.svg" alt="title" />
                      </span>
                      <p className="font-body font-bold text-sm text-blueGray-600 ml-2">
                        90 Likes
                      </p>
                    </div>
                  </div>
                  <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                    <Link to="/item-single">Mega City Artwork</Link>
                  </h3>
                </div>
              </div>
              <div className="product-bottom bg-white flex items-center flex-wrap justify-between pt-4 px-6 pb-6">
                <div>
                  <p className="font-body text-sm text-blueGray-600">
                    Current Bid
                  </p>
                </div>
                <div className="text-center">
                  <p className="flex items-center font-body font-bold text-blueGray-900 my-1">
                    <img
                      className="w-5 h-5 inline-block mr-1"
                      src="assets/images/cryptocurrency-icon.svg"
                      alt="title"
                    />{" "}
                    0.008 ETH
                  </p>
                  <p className="font-body text-sm text-blueGray-600">≈$26.69</p>
                </div>
              </div>
            </div>
            <div
              className="product-box gradient-box flex justify-between flex-col bg-white shadow rounded transition hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="product-top relative bg-white">
                <div className="flex justify-center items-center product-image relative rounded overflow-hidden m-6 mb-8">
                  <img
                    className="w-full sm:h-56 rounded object-cover"
                    src="assets/images/product/4.gif"
                    alt="title"
                  />
                </div>
                <Link
                  to="/item-single"
                  className="product-meta absolute left-0 right-0 m-auto bottom-24 w-36 block text-white text-center font-body font-medium rounded py-2 px-4 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
                >
                  <img
                    className="w-4 h-4 inline-block mb-1"
                    src="assets/images/bid-icon2.svg"
                    alt="title"
                  />{" "}
                  Place a bid
                </Link>
                <div className="product-content px-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Link
                        to="/creator-published"
                        className="relative"
                        data-tooltip="Steven Robart"
                      >
                        <img
                          className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                          src="assets/images/author/1.jpg"
                          alt="title"
                        />
                      </Link>
                      <Link
                        to="/creator-published"
                        className="relative -left-2"
                        data-tooltip="Steven Robart"
                      >
                        <img
                          className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                          src="assets/images/author/3.jpg"
                          alt="title"
                        />
                      </Link>
                      <Link
                        to="/creator-published"
                        className="relative -left-4"
                        data-tooltip="Steven Robart"
                      >
                        <img
                          className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                          src="assets/images/author/3.jpg"
                          alt="title"
                        />{" "}
                        <span className="absolute bottom-0 right-1">
                          <img
                            className="w-3 h-3"
                            src="assets/images/verified-icon.svg"
                            alt="title"
                          />
                        </span>
                      </Link>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-indigo-100 flex items-center justify-center rounded-lg w-8 h-8">
                        <img src="assets/images/heart-icon2.svg" alt="title" />
                      </span>
                      <p className="font-body font-bold text-sm text-blueGray-600 ml-2">
                        90 Likes
                      </p>
                    </div>
                  </div>
                  <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                    <Link to="/item-single">Creative Artwork #04</Link>
                  </h3>
                </div>
              </div>
              <div className="product-bottom bg-white flex items-center flex-wrap justify-between pt-4 px-6 pb-6">
                <div>
                  <p className="font-body text-sm text-blueGray-600">
                    Current Bid
                  </p>
                </div>
                <div className="text-center">
                  <p className="flex items-center font-body font-bold text-blueGray-900 my-1">
                    <img
                      className="w-5 h-5 inline-block mr-1"
                      src="assets/images/cryptocurrency-icon.svg"
                      alt="title"
                    />{" "}
                    0.008 ETH
                  </p>
                  <p className="font-body text-sm text-blueGray-600">≈$26.69</p>
                </div>
              </div>
            </div>
            <div
              className="product-box gradient-box flex justify-between flex-col bg-white shadow rounded transition hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="product-top relative bg-white">
                <div className="flex justify-center items-center product-image relative rounded overflow-hidden m-6 mb-8">
                  <img
                    className="w-full sm:h-56 rounded object-cover"
                    src="assets/images/product/20.jpg"
                    alt="title"
                  />
                </div>
                <Link
                  to="/item-single"
                  className="product-meta absolute left-0 right-0 m-auto bottom-24 w-36 block text-white text-center font-body font-medium rounded py-2 px-4 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
                >
                  <img
                    className="w-4 h-4 inline-block mb-1"
                    src="assets/images/bid-icon2.svg"
                    alt="title"
                  />{" "}
                  Place a bid
                </Link>
                <div className="product-content px-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Link
                        to="/creator-published"
                        className="relative"
                        data-tooltip="Steven Robart"
                      >
                        <img
                          className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                          src="assets/images/author/1.jpg"
                          alt="title"
                        />
                      </Link>
                      <Link
                        to="/creator-published"
                        className="relative -left-2"
                        data-tooltip="Steven Robart"
                      >
                        <img
                          className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                          src="assets/images/author/3.jpg"
                          alt="title"
                        />
                      </Link>
                      <Link
                        to="/creator-published"
                        className="relative -left-4"
                        data-tooltip="Steven Robart"
                      >
                        <img
                          className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                          src="assets/images/author/3.jpg"
                          alt="title"
                        />{" "}
                        <span className="absolute bottom-0 right-1">
                          <img
                            className="w-3 h-3"
                            src="assets/images/verified-icon.svg"
                            alt="title"
                          />
                        </span>
                      </Link>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-indigo-100 flex items-center justify-center rounded-lg w-8 h-8">
                        <img src="assets/images/heart-icon2.svg" alt="title" />
                      </span>
                      <p className="font-body font-bold text-sm text-blueGray-600 ml-2">
                        90 Likes
                      </p>
                    </div>
                  </div>
                  <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                    <Link to="/item-single">Commander Titan #05 </Link>
                  </h3>
                </div>
              </div>
              <div className="product-bottom bg-white flex items-center flex-wrap justify-between pt-4 px-6 pb-6">
                <div>
                  <p className="font-body text-sm text-blueGray-600">
                    Current Bid
                  </p>
                </div>
                <div className="text-center">
                  <p className="flex items-center font-body font-bold text-blueGray-900 my-1">
                    <img
                      className="w-5 h-5 inline-block mr-1"
                      src="assets/images/cryptocurrency-icon.svg"
                      alt="title"
                    />{" "}
                    0.008 ETH
                  </p>
                  <p className="font-body text-sm text-blueGray-600">≈$26.69</p>
                </div>
              </div>
            </div>
            <div
              className="product-box gradient-box flex justify-between flex-col bg-white shadow rounded transition hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="product-top relative bg-white">
                <div className="flex justify-center items-center product-image relative rounded overflow-hidden m-6 mb-8">
                  <img
                    className="w-full sm:h-56 rounded object-cover"
                    src="assets/images/product/21.jpg"
                    alt="title"
                  />
                </div>
                <Link
                  to="/item-single"
                  className="product-meta absolute left-0 right-0 m-auto bottom-24 w-36 block text-white text-center font-body font-medium rounded py-2 px-4 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
                >
                  <img
                    className="w-4 h-4 inline-block mb-1"
                    src="assets/images/bid-icon2.svg"
                    alt="title"
                  />{" "}
                  Place a bid
                </Link>
                <div className="product-content px-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Link
                        to="/creator-published"
                        className="relative"
                        data-tooltip="Steven Robart"
                      >
                        <img
                          className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                          src="assets/images/author/1.jpg"
                          alt="title"
                        />
                      </Link>
                      <Link
                        to="/creator-published"
                        className="relative -left-2"
                        data-tooltip="Steven Robart"
                      >
                        <img
                          className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                          src="assets/images/author/3.jpg"
                          alt="title"
                        />
                      </Link>
                      <Link
                        to="/creator-published"
                        className="relative -left-4"
                        data-tooltip="Steven Robart"
                      >
                        <img
                          className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                          src="assets/images/author/3.jpg"
                          alt="title"
                        />{" "}
                        <span className="absolute bottom-0 right-1">
                          <img
                            className="w-3 h-3"
                            src="assets/images/verified-icon.svg"
                            alt="title"
                          />
                        </span>
                      </Link>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-indigo-100 flex items-center justify-center rounded-lg w-8 h-8">
                        <img src="assets/images/heart-icon2.svg" alt="title" />
                      </span>
                      <p className="font-body font-bold text-sm text-blueGray-600 ml-2">
                        90 Likes
                      </p>
                    </div>
                  </div>
                  <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                    <Link to="/item-single">Creative Oilpaint #07</Link>
                  </h3>
                </div>
              </div>
              <div className="product-bottom bg-white flex items-center flex-wrap justify-between pt-4 px-6 pb-6">
                <div>
                  <p className="font-body text-sm text-blueGray-600">
                    Current Bid
                  </p>
                </div>
                <div className="text-center">
                  <p className="flex items-center font-body font-bold text-blueGray-900 my-1">
                    <img
                      className="w-5 h-5 inline-block mr-1"
                      src="assets/images/cryptocurrency-icon.svg"
                      alt="title"
                    />{" "}
                    0.008 ETH
                  </p>
                  <p className="font-body text-sm text-blueGray-600">≈$26.69</p>
                </div>
              </div>
            </div>
            <div
              className="product-box gradient-box flex justify-between flex-col bg-white shadow rounded transition hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="product-top relative bg-white">
                <div className="flex justify-center items-center product-image relative rounded overflow-hidden m-6 mb-8">
                  <img
                    className="w-full sm:h-56 rounded object-cover"
                    src="assets/images/product/5.gif"
                    alt="title"
                  />
                </div>
                <Link
                  to="/item-single"
                  className="product-meta absolute left-0 right-0 m-auto bottom-24 w-36 block text-white text-center font-body font-medium rounded py-2 px-4 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
                >
                  <img
                    className="w-4 h-4 inline-block mb-1"
                    src="assets/images/bid-icon2.svg"
                    alt="title"
                  />{" "}
                  Place a bid
                </Link>
                <div className="product-content px-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Link
                        to="/creator-published"
                        className="relative"
                        data-tooltip="Steven Robart"
                      >
                        <img
                          className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                          src="assets/images/author/1.jpg"
                          alt="title"
                        />
                      </Link>
                      <Link
                        to="/creator-published"
                        className="relative -left-2"
                        data-tooltip="Steven Robart"
                      >
                        <img
                          className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                          src="assets/images/author/3.jpg"
                          alt="title"
                        />
                      </Link>
                      <Link
                        to="/creator-published"
                        className="relative -left-4"
                        data-tooltip="Steven Robart"
                      >
                        <img
                          className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                          src="assets/images/author/3.jpg"
                          alt="title"
                        />{" "}
                        <span className="absolute bottom-0 right-1">
                          <img
                            className="w-3 h-3"
                            src="assets/images/verified-icon.svg"
                            alt="title"
                          />
                        </span>
                      </Link>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-indigo-100 flex items-center justify-center rounded-lg w-8 h-8">
                        <img src="assets/images/heart-icon2.svg" alt="title" />
                      </span>
                      <p className="font-body font-bold text-sm text-blueGray-600 ml-2">
                        90 Likes
                      </p>
                    </div>
                  </div>
                  <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                    <Link to="/item-single">Flower Artwork #01</Link>
                  </h3>
                </div>
              </div>
              <div className="product-bottom bg-white flex items-center flex-wrap justify-between pt-4 px-6 pb-6">
                <div>
                  <p className="font-body text-sm text-blueGray-600">
                    Current Bid
                  </p>
                </div>
                <div className="text-center">
                  <p className="flex items-center font-body font-bold text-blueGray-900 my-1">
                    <img
                      className="w-5 h-5 inline-block mr-1"
                      src="assets/images/cryptocurrency-icon.svg"
                      alt="title"
                    />{" "}
                    0.008 ETH
                  </p>
                  <p className="font-body text-sm text-blueGray-600">≈$26.69</p>
                </div>
              </div>
            </div>
            <div
              className="product-box gradient-box flex justify-between flex-col bg-white shadow rounded transition hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="product-top relative bg-white">
                <div className="flex justify-center items-center product-image relative rounded overflow-hidden m-6 mb-8">
                  <img
                    className="w-full sm:h-56 rounded object-cover"
                    src="assets/images/product/6.gif"
                    alt="title"
                  />
                </div>
                <Link
                  to="/item-single"
                  className="product-meta absolute left-0 right-0 m-auto bottom-24 w-36 block text-white text-center font-body font-medium rounded py-2 px-4 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
                >
                  <img
                    className="w-4 h-4 inline-block mb-1"
                    src="assets/images/bid-icon2.svg"
                    alt="title"
                  />{" "}
                  Place a bid
                </Link>
                <div className="product-content px-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Link
                        to="/creator-published"
                        className="relative"
                        data-tooltip="Steven Robart"
                      >
                        <img
                          className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                          src="assets/images/author/1.jpg"
                          alt="title"
                        />
                      </Link>
                      <Link
                        to="/creator-published"
                        className="relative -left-2"
                        data-tooltip="Steven Robart"
                      >
                        <img
                          className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                          src="assets/images/author/3.jpg"
                          alt="title"
                        />
                      </Link>
                      <Link
                        to="/creator-published"
                        className="relative -left-4"
                        data-tooltip="Steven Robart"
                      >
                        <img
                          className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                          src="assets/images/author/3.jpg"
                          alt="title"
                        />{" "}
                        <span className="absolute bottom-0 right-1">
                          <img
                            className="w-3 h-3"
                            src="assets/images/verified-icon.svg"
                            alt="title"
                          />
                        </span>
                      </Link>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-indigo-100 flex items-center justify-center rounded-lg w-8 h-8">
                        <img src="assets/images/heart-icon2.svg" alt="title" />
                      </span>
                      <p className="font-body font-bold text-sm text-blueGray-600 ml-2">
                        90 Likes
                      </p>
                    </div>
                  </div>
                  <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                    <Link to="/item-single">Creative Mega City</Link>
                  </h3>
                </div>
              </div>
              <div className="product-bottom bg-white flex items-center flex-wrap justify-between pt-4 px-6 pb-6">
                <div>
                  <p className="font-body text-sm text-blueGray-600">
                    Current Bid
                  </p>
                </div>
                <div className="text-center">
                  <p className="flex items-center font-body font-bold text-blueGray-900 my-1">
                    <img
                      className="w-5 h-5 inline-block mr-1"
                      src="assets/images/cryptocurrency-icon.svg"
                      alt="title"
                    />{" "}
                    0.008 ETH
                  </p>
                  <p className="font-body text-sm text-blueGray-600">≈$26.69</p>
                </div>
              </div>
            </div>
            <div
              className="product-box gradient-box flex justify-between flex-col bg-white shadow rounded transition hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="product-top relative bg-white">
                <div className="flex justify-center items-center product-image relative rounded overflow-hidden m-6 mb-8">
                  <img
                    className="w-full sm:h-56 rounded object-cover"
                    src="assets/images/product/25.jpg"
                    alt="title"
                  />
                </div>
                <Link
                  to="/item-single"
                  className="product-meta absolute left-0 right-0 m-auto bottom-24 w-36 block text-white text-center font-body font-medium rounded py-2 px-4 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
                >
                  <img
                    className="w-4 h-4 inline-block mb-1"
                    src="assets/images/bid-icon2.svg"
                    alt="title"
                  />{" "}
                  Place a bid
                </Link>
                <div className="product-content px-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Link
                        to="/creator-published"
                        className="relative"
                        data-tooltip="Steven Robart"
                      >
                        <img
                          className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                          src="assets/images/author/1.jpg"
                          alt="title"
                        />
                      </Link>
                      <Link
                        to="/creator-published"
                        className="relative -left-2"
                        data-tooltip="Steven Robart"
                      >
                        <img
                          className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                          src="assets/images/author/3.jpg"
                          alt="title"
                        />
                      </Link>
                      <Link
                        to="/creator-published"
                        className="relative -left-4"
                        data-tooltip="Steven Robart"
                      >
                        <img
                          className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                          src="assets/images/author/3.jpg"
                          alt="title"
                        />{" "}
                        <span className="absolute bottom-0 right-1">
                          <img
                            className="w-3 h-3"
                            src="assets/images/verified-icon.svg"
                            alt="title"
                          />
                        </span>
                      </Link>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-indigo-100 flex items-center justify-center rounded-lg w-8 h-8">
                        <img src="assets/images/heart-icon2.svg" alt="title" />
                      </span>
                      <p className="font-body font-bold text-sm text-blueGray-600 ml-2">
                        90 Likes
                      </p>
                    </div>
                  </div>
                  <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                    <Link to="/item-single">Flower Artwork #02</Link>
                  </h3>
                </div>
              </div>
              <div className="product-bottom bg-white flex items-center flex-wrap justify-between pt-4 px-6 pb-6">
                <div>
                  <p className="font-body text-sm text-blueGray-600">
                    Current Bid
                  </p>
                </div>
                <div className="text-center">
                  <p className="flex items-center font-body font-bold text-blueGray-900 my-1">
                    <img
                      className="w-5 h-5 inline-block mr-1"
                      src="assets/images/cryptocurrency-icon.svg"
                      alt="title"
                    />{" "}
                    0.008 ETH
                  </p>
                  <p className="font-body text-sm text-blueGray-600">≈$26.69</p>
                </div>
              </div>
            </div>
            <div
              className="product-box gradient-box flex justify-between flex-col bg-white shadow rounded transition hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="product-top relative bg-white">
                <div className="flex justify-center items-center product-image relative rounded overflow-hidden m-6 mb-8">
                  <img
                    className="w-full sm:h-56 rounded object-cover"
                    src="assets/images/product/7.gif"
                    alt="title"
                  />
                </div>
                <Link
                  to="/item-single"
                  className="product-meta absolute left-0 right-0 m-auto bottom-24 w-36 block text-white text-center font-body font-medium rounded py-2 px-4 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
                >
                  <img
                    className="w-4 h-4 inline-block mb-1"
                    src="assets/images/bid-icon2.svg"
                    alt="title"
                  />{" "}
                  Place a bid
                </Link>
                <div className="product-content px-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Link
                        to="/creator-published"
                        className="relative"
                        data-tooltip="Steven Robart"
                      >
                        <img
                          className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                          src="assets/images/author/1.jpg"
                          alt="title"
                        />
                      </Link>
                      <Link
                        to="/creator-published"
                        className="relative -left-2"
                        data-tooltip="Steven Robart"
                      >
                        <img
                          className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                          src="assets/images/author/3.jpg"
                          alt="title"
                        />
                      </Link>
                      <Link
                        to="/creator-published"
                        className="relative -left-4"
                        data-tooltip="Steven Robart"
                      >
                        <img
                          className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                          src="assets/images/author/3.jpg"
                          alt="title"
                        />{" "}
                        <span className="absolute bottom-0 right-1">
                          <img
                            className="w-3 h-3"
                            src="assets/images/verified-icon.svg"
                            alt="title"
                          />
                        </span>
                      </Link>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-indigo-100 flex items-center justify-center rounded-lg w-8 h-8">
                        <img src="assets/images/heart-icon2.svg" alt="title" />
                      </span>
                      <p className="font-body font-bold text-sm text-blueGray-600 ml-2">
                        90 Likes
                      </p>
                    </div>
                  </div>
                  <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                    <Link to="/item-single">Creative Oilpaint #07</Link>
                  </h3>
                </div>
              </div>
              <div className="product-bottom bg-white flex items-center flex-wrap justify-between pt-4 px-6 pb-6">
                <div>
                  <p className="font-body text-sm text-blueGray-600">
                    Current Bid
                  </p>
                </div>
                <div className="text-center">
                  <p className="flex items-center font-body font-bold text-blueGray-900 my-1">
                    <img
                      className="w-5 h-5 inline-block mr-1"
                      src="assets/images/cryptocurrency-icon.svg"
                      alt="title"
                    />{" "}
                    0.008 ETH
                  </p>
                  <p className="font-body text-sm text-blueGray-600">≈$26.69</p>
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

      <Footer />
    </div>
  );
};

export default ExploreV1;
