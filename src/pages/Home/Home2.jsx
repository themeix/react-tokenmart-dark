import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import FooterV2 from "../../components/Footer/FooterV2";
import Header from "../../components/Header/Header";
import { products } from "../Explore/itemdata";
import ProductItem from "../Explore/ProductItem";
import ProductItem2 from "../Explore/ProductItem2";

const Home2 = () => {
  return (
    <div>
      <Header />
      {/*  ====================== Hero Section =============================  */}
      <section className="hero-section relative pt-32 pb-28 lg:pt-32 lg:pb-20">
        <div className="container mx-auto relative px-4 z-10">
          <div className="swiper-container hero-slider">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="grid items-center grid-cols-1 lg:grid-cols-5 gap-8">
                  <div className="text-left lg:col-span-2 lg:order-12">
                    <div
                      className="shadow transition duration-500 hover:shadow-lg p-6 mr-4 rounded"
                      data-aos="fade-up"
                    >
                      <img
                        className="w-full rounded"
                        src="assets/images/product/1.gif"
                        alt="title"
                      />
                      <div className="flex justify-between items-center relative mt-6">
                        <div className="flex flex-wrap items-center">
                          <img
                            className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                            src="assets/images/author/3.jpg"
                            alt="title"
                          />
                          <div className="ml-2">
                            <p className="font-body text-sm text-blueGray-600">
                              Owned By
                            </p>
                            <h6 className="font-display text-blueGray-900 font-bold transition duration-500 hover:text-indigo-500">
                              <Link to="/creator-published">Steven Robart</Link>
                            </h6>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <img
                            className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                            src="assets/images/author/4.jpg"
                            alt="title"
                          />
                          <div className="ml-2">
                            <p className="font-body text-sm text-blueGray-600">
                              Created By
                            </p>
                            <h6 className="font-display text-blueGray-900 font-bold transition duration-500 hover:text-indigo-500">
                              <Link to="/creator-published">Alex Max</Link>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="xl:pr-20 text-left lg:col-span-3 lg:order-1">
                    <h1 className="text-4xl lg:text-6xl font-bold font-display text-blueGray-900 mb-10">
                      Pumpkin Everything{" "}
                    </h1>
                    <div className="flex flex-wrap justify-between items-center">
                      <div className="my-2">
                        <p className="flex items-center font-body font-semibold text-blueGray-900 text-3xl my-1">
                          <img
                            className="w-6 h-6 inline-block mr-1"
                            src="assets/images/cryptocurrency-icon.svg"
                            alt="title"
                          />{" "}
                          0.010 ETH
                        </p>
                        <p className="font-body text-sm text-blueGray-600">
                          ≈$26.69
                        </p>
                      </div>
                      <div className="hero-meta font-body font-semibold leading-4 countdown-time8 grid grid-cols-4 gap-4 text-center my-2" />
                    </div>
                    <div className="mt-8">
                      <Link
                        to="/item-single"
                        className="btn inline-block text-2xl text-white font-body font-semibold rounded py-3 px-6 mr-6 mt-4 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
                      >
                        <img
                          className="w-5 h-5 inline-block mb-1"
                          src="assets/images/bid-icon2.svg"
                          alt="title"
                        />{" "}
                        Place a bid
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="grid items-center grid-cols-1 lg:grid-cols-5 gap-8">
                  <div className="text-left lg:col-span-2 lg:order-12">
                    <div
                      className="shadow transition duration-500 hover:shadow-lg mr-4 p-6 rounded"
                      data-aos="fade-up"
                    >
                      <img
                        className="w-full rounded"
                        src="assets/images/product/2.jpg"
                        alt="title"
                      />
                      <div className="flex justify-between items-center relative mt-6">
                        <div className="flex flex-wrap items-center">
                          <img
                            className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                            src="assets/images/author/3.jpg"
                            alt="title"
                          />
                          <div className="ml-2">
                            <p className="font-body text-sm text-blueGray-600">
                              Owned By
                            </p>
                            <h6 className="font-display text-blueGray-900 font-bold transition duration-500 hover:text-indigo-500">
                              <Link to="/creator-published">Steven Robart</Link>
                            </h6>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <img
                            className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                            src="assets/images/author/4.jpg"
                            alt="title"
                          />
                          <div className="ml-2">
                            <p className="font-body text-sm text-blueGray-600">
                              Created By
                            </p>
                            <h6 className="font-display text-blueGray-900 font-bold transition duration-500 hover:text-indigo-500">
                              <Link to="/creator-published">Alex Max</Link>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="xl:pr-20 text-left lg:col-span-3 lg:order-1">
                    <h1 className="text-4xl lg:text-6xl font-bold font-display text-blueGray-900 mb-10">
                      Mega City Boss #20{" "}
                    </h1>
                    <div className="flex flex-wrap justify-between items-center">
                      <div className="my-2">
                        <p className="flex items-center font-body font-semibold text-blueGray-900 text-3xl my-1">
                          <img
                            className="w-6 h-6 inline-block mr-1"
                            src="assets/images/cryptocurrency-icon.svg"
                            alt="title"
                          />{" "}
                          0.001 ETH
                        </p>
                        <p className="font-body text-sm text-blueGray-600">
                          ≈$26.69
                        </p>
                      </div>
                      <div className="hero-meta font-body font-semibold leading-4 countdown-time8 grid grid-cols-4 gap-4 text-center my-2" />
                    </div>
                    <div className="mt-8">
                      <Link
                        to="/item-single"
                        className="btn inline-block text-2xl text-white font-body font-semibold rounded py-3 px-6 mr-6 mt-4 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
                      >
                        <img
                          className="w-5 h-5 inline-block mb-1"
                          src="assets/images/bid-icon2.svg"
                          alt="title"
                        />{" "}
                        Place a bid
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-button-prev bg-white shadow rounded-full bg-gradient-to-r transition duration-500 hover:from-indigo-500 hover:to-purple-500 2xl:-translate-x-24" />
          <div className="swiper-button-next bg-white shadow rounded-full bg-gradient-to-r transition duration-500 hover:from-indigo-500 hover:to-purple-500 2xl:translate-x-24" />
        </div>
      </section>
      {/*  ====================== Product Section =============================  */}
      <section className="product-section relative">
        <div className="container mx-auto relative px-4 z-10">
          <div className="section-title flex flex-wrap items-center justify-between mb-8 lg:mb-14">
            <div className="flex items-center mb-3">
              <span className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg w-10 h-10 mr-4">
                <img
                  className="w-4 h-4"
                  src="assets/images/sec-icon3.svg"
                  alt="title"
                />
              </span>
              <h3 className="font-display text-blueGray-900 font-bold text-2xl lg:text-4xl">
                Hot Auctions
              </h3>
            </div>
            <Link
              to="/explore"
              className="arrow-btn block bg-indigo-100 text-indigo-500 text-sm text-sm font-body font-bold rounded py-2 px-4 ml-14 transition duration-500 hover:bg-indigo-50"
            >
              See All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div
              className="product-box shadow bg-white lg:flex p-6 rounded transition duration-500 hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="flex-shrink-0 product-image relative rounded mb-4 lg:mb-0 overflow-hidden">
                <img
                  className="w-full lg:h-56 lg:w-56 xl:w-72 object-cover"
                  src="assets/images/product/10.jpg"
                  alt="title"
                />
              </div>
              <div className="product-content flex flex-col flex-grow justify-center md:pl-6">
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
                        src="assets/images/author/2.jpg"
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
                      79
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                    <Link to="/item-single2">Oilpaint Artwork #2</Link>
                  </h3>
                </div>
                <div className="mt-4">
                  <p className="font-body text-sm text-blueGray-600">
                    Current Bid
                  </p>
                  <p className="flex items-center font-body font-bold text-blueGray-900 my-1">
                    <img
                      className="w-5 h-5 inline-block mr-1"
                      src="assets/images/cryptocurrency-icon.svg"
                      alt="title"
                    />{" "}
                    0.008 ETH
                  </p>
                </div>
              </div>
            </div>
            <div
              className="product-box shadow bg-white lg:flex p-6 rounded transition duration-500 hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="flex-shrink-0 product-image relative rounded mb-4 lg:mb-0 overflow-hidden">
                <img
                  className="w-full lg:h-56 lg:w-56 xl:w-72 object-cover"
                  src="assets/images/product/3.gif"
                  alt="title"
                />
              </div>
              <div className="product-content flex flex-col flex-grow justify-center md:pl-6">
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
                        src="assets/images/author/2.jpg"
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
                      23
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                    <Link to="/item-single2">Giga Boss #4 </Link>
                  </h3>
                </div>
                <div className="mt-4">
                  <p className="font-body text-sm text-blueGray-600">
                    Current Bid
                  </p>
                  <p className="flex items-center font-body font-bold text-blueGray-900 my-1">
                    <img
                      className="w-5 h-5 inline-block mr-1"
                      src="assets/images/cryptocurrency-icon.svg"
                      alt="title"
                    />{" "}
                    0.008 ETH
                  </p>
                </div>
              </div>
            </div>
            <div
              className="product-box shadow bg-white lg:flex p-6 rounded transition duration-500 hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="flex-shrink-0 product-image relative rounded mb-4 lg:mb-0 overflow-hidden">
                <img
                  className="w-full lg:h-56 lg:w-56 xl:w-72 object-cover"
                  src="assets/images/product/7.gif"
                  alt="title"
                />
              </div>
              <div className="product-content flex flex-col flex-grow justify-center md:pl-6">
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
                      48
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                    <Link to="/item-single2">Animated Love </Link>
                  </h3>
                </div>
                <div className="mt-4">
                  <p className="font-body text-sm text-blueGray-600">
                    Current Bid
                  </p>
                  <p className="flex items-center font-body font-bold text-blueGray-900 my-1">
                    <img
                      className="w-5 h-5 inline-block mr-1"
                      src="assets/images/cryptocurrency-icon.svg"
                      alt="title"
                    />{" "}
                    0.008 ETH
                  </p>
                </div>
              </div>
            </div>
            <div
              className="product-box shadow bg-white lg:flex p-6 rounded transition duration-500 hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="flex-shrink-0 product-image relative rounded mb-4 lg:mb-0 overflow-hidden">
                <img
                  className="w-full lg:h-56 lg:w-56 xl:w-72 object-cover"
                  src="assets/images/product/15.jpg"
                  alt="title"
                />
              </div>
              <div className="product-content flex flex-col flex-grow justify-center md:pl-6">
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
                      17
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                    <Link to="/item-single2">Creative Oilpaint Artwork </Link>
                  </h3>
                </div>
                <div className="mt-4">
                  <p className="font-body text-sm text-blueGray-600">
                    Current Bid
                  </p>
                  <p className="flex items-center font-body font-bold text-blueGray-900 my-1">
                    <img
                      className="w-5 h-5 inline-block mr-1"
                      src="assets/images/cryptocurrency-icon.svg"
                      alt="title"
                    />{" "}
                    0.008 ETH
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  ====================== Product Section =============================  */}
      <section className="product-section relative my-20 lg:my-32">
        <div className="container mx-auto relative px-4 z-10">
          <div className="section-title flex flex-wrap items-center justify-between mb-8 lg:mb-14">
            <div className="flex items-center mb-3">
              <span className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg w-10 h-10 mr-4">
                <img
                  className="w-4 h-4"
                  src="assets/images/sec-icon3.svg"
                  alt="title"
                />
              </span>
              <h3 className="font-display text-blueGray-900 font-bold text-2xl lg:text-4xl">
                Seller Leaderboard
              </h3>
            </div>
            <Link
              to="/leaderboard"
              className="arrow-btn block bg-indigo-100 text-indigo-500 text-sm text-sm font-body font-bold rounded py-2 px-4 ml-14 transition duration-500 hover:bg-indigo-50"
            >
              See All
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
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
                <Link to="/creator-published">Steven Robart</Link>
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
                    8{" "}
                  </h5>
                </div>
                <div>
                  <p className="font-body text-sm text-blueGray-400">Items</p>
                  <h5 className="flex items-center justify-center text-xl font-body font-bold text-blueGray-900">
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
                <Link to="/creator-published">Jenny Wilson</Link>
              </h6>
              <p className="font-body text-sm text-blueGray-600 mt-2">
                <img
                  className="w-6 h-6 inline-block mr-1"
                  src="assets/images/new-icon.svg"
                  alt="title"
                />{" "}
                New Seller
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
                    4{" "}
                  </h5>
                </div>
                <div>
                  <p className="font-body text-sm text-blueGray-400">Items</p>
                  <h5 className="flex items-center justify-center text-xl font-body font-bold text-blueGray-900">
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
                    src="assets/images/author/3.jpg"
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
                <Link to="/creator-published">Guy Hawkins</Link>
              </h6>
              <p className="font-body text-sm text-blueGray-600 mt-2">
                <img
                  className="w-6 h-6 inline-block mr-1"
                  src="assets/images/new-icon.svg"
                  alt="title"
                />{" "}
                New Seller
              </p>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="font-body text-sm text-blueGray-400">Level</p>
                  <h5 className="flex items-center justify-center text-xl font-body font-bold text-blueGray-900">
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
                  <h5 className="flex items-center justify-center text-xl font-body font-bold text-blueGray-900">
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
                    src="assets/images/author/4.jpg"
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
                <Link to="/creator-published">Robert Fox</Link>
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
                    8{" "}
                  </h5>
                </div>
                <div>
                  <p className="font-body text-sm text-blueGray-400">Items</p>
                  <h5 className="flex items-center justify-center text-xl font-body font-bold text-blueGray-900">
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
                <Link to="/creator-published">Cody Fisher</Link>
              </h6>
              <p className="font-body text-sm text-blueGray-600 mt-2">
                <img
                  className="w-6 h-6 inline-block mr-1"
                  src="assets/images/new-icon.svg"
                  alt="title"
                />{" "}
                New Seller
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
        </div>
      </section>
      {/*  ====================== Product Section =============================  */}
      <section className="product-section relative py-20 lg:py-32 bg-blueGray-100">
        <div className="container mx-auto relative px-4 z-10">
          <div className="section-title flex flex-wrap items-center justify-between mb-8 lg:mb-14">
            <div className="flex items-center mb-3">
              <span className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg w-10 h-10 mr-4">
                <img
                  className="w-5 h-5"
                  src="assets/images/sec-icon2.svg"
                  alt="title"
                />
              </span>
              <h3 className="font-display text-blueGray-900 font-bold text-2xl lg:text-4xl">
                Live Auctions
              </h3>
            </div>
            <Link
              to="/explore"
              className="arrow-btn block bg-indigo-100 text-indigo-500 text-sm text-sm font-body font-bold rounded py-2 px-4 ml-14 transition duration-500 hover:bg-indigo-50"
            >
              See All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <ProductItem2 key={index} item={product} />
            ))}
          </div>
        </div>
      </section>
      {/*  ====================== Blog Section =============================  */}
      <section className="blog-section relative my-20 lg:my-32">
        <div className="container mx-auto relative px-4 z-10">
          <div className="section-title flex flex-wrap items-center justify-between mb-8 lg:mb-14">
            <div className="flex items-center mb-3">
              <span className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg w-10 h-10 mr-4">
                <img
                  className="w-4 h-4"
                  src="assets/images/sec-icon3.svg"
                  alt="title"
                />
              </span>
              <h3 className="font-display text-blueGray-900 font-bold text-2xl lg:text-4xl">
                Latest Blog
              </h3>
            </div>
            <Link
              to="/blog"
              className="arrow-btn block bg-indigo-100 text-indigo-500 text-sm text-sm font-body font-bold rounded py-2 px-4 ml-14 transition duration-500 hover:bg-indigo-50"
            >
              See All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            <div
              className="blog-box shadow bg-white md:flex p-6 rounded transition duration-500 hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="flex-shrink-0 blog-image relative rounded overflow-hidden mb-4 md:mb-0">
                <img
                  className="w-full md:h-40 md:w-40 rounded object-cover"
                  src="assets/images/product/5.jpg"
                  alt="title"
                />
              </div>
              <div className="blog-content flex flex-col flex-grow justify-center md:pl-6">
                <div>
                  <h4 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                    <Link to="/single">
                      Top 10 NFT Projects That the Internet
                    </Link>
                  </h4>
                </div>
                <div className="mt-4">
                  <Link
                    className="readmore-btn font-body font-normal text-indigo-500 transition duration-500 hover:text-indigo-500 underline-hover"
                    to="/single"
                  >
                    Read More
                    <img
                      className="inline-block w-3 ml-2 mb-1"
                      src="assets/images/readmore-icon.svg"
                      alt="title"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="blog-box shadow bg-white md:flex p-6 rounded transition duration-500 hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="flex-shrink-0 blog-image relative rounded overflow-hidden mb-4 md:mb-0">
                <img
                  className="w-full md:h-40 md:w-40 rounded object-cover"
                  src="assets/images/product/6.jpg"
                  alt="title"
                />
              </div>
              <div className="blog-content flex flex-col flex-grow justify-center md:pl-6">
                <div>
                  <h4 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                    <Link to="/single">
                      Honoring Black History with Toddlers
                    </Link>
                  </h4>
                </div>
                <div className="mt-4">
                  <Link
                    className="readmore-btn font-body font-normal text-indigo-500 transition duration-500 hover:text-indigo-500 underline-hover"
                    to="/single"
                  >
                    Read More
                    <img
                      className="inline-block w-3 ml-2 mb-1"
                      src="assets/images/readmore-icon.svg"
                      alt="title"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="blog-box shadow bg-white md:flex p-6 rounded transition duration-500 hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="flex-shrink-0 blog-image relative rounded overflow-hidden mb-4 md:mb-0">
                <img
                  className="w-full md:h-40 md:w-40 rounded object-cover"
                  src="assets/images/product/8.jpg"
                  alt="title"
                />
              </div>
              <div className="blog-content flex flex-col flex-grow justify-center md:pl-6">
                <div>
                  <h4 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                    <Link to="/single">NFT Market – A Big Benefits</Link>
                  </h4>
                </div>
                <div className="mt-4">
                  <Link
                    className="readmore-btn font-body font-normal text-indigo-500 transition duration-500 hover:text-indigo-500 underline-hover"
                    to="/single"
                  >
                    Read More
                    <img
                      className="inline-block w-3 ml-2 mb-1"
                      src="assets/images/readmore-icon.svg"
                      alt="title"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  ====================== Product Section =============================  */}
      <section className="product-section relative mt-20 mb-16 lg:mt-32 lg:mb-24">
        <div className="container mx-auto relative px-4 z-10">
          <div className="section-title flex flex-wrap items-center justify-between mb-6 lg:mb-8">
            <div className="flex items-center mb-3">
              <span className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg w-10 h-10 mr-4">
                <img
                  className="w-4 h-4"
                  src="assets/images/sec-icon3.svg"
                  alt="title"
                />
              </span>
              <h3 className="font-display text-blueGray-900 font-bold text-2xl lg:text-4xl">
                Featured Auctions
              </h3>
            </div>
            <Link
              to="/explore"
              className="arrow-btn block bg-indigo-100 text-indigo-500 text-sm text-sm font-body font-bold rounded py-2 px-4 ml-14 transition duration-500 hover:bg-indigo-50"
            >
              See All
            </Link>
          </div>
          <div className="relative">
            <div className="swiper-container product-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div
                    className="product-box bg-white flex justify-between flex-col shadow rounded overflow-hidden transition duration-500 hover:shadow-lg"
                    data-aos="fade-up"
                  >
                    <div className="product-top">
                      <div className="product-image relative rounded overflow-hidden">
                        <img
                          className="w-full md:h-64 object-cover"
                          src="assets/images/product/16.jpg"
                          alt="title"
                        />
                      </div>
                      <div className="product-content px-6 pt-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                              <Link to="/item-single">Cyber Boss #43</Link>
                            </h3>
                          </div>
                          <Link
                            to="/wishlist"
                            className="w-5 h-5 heart-btn flex-shrink-0"
                          >
                            <img
                              className="transition duration-500 grayscale block"
                              src="assets/images/heart-icon.svg"
                              alt="title"
                            />
                          </Link>
                        </div>
                        <div className="flex mb-8 mt-2">
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
                      </div>
                    </div>
                    <div className="product-bottom flex flex-wrap justify-between px-6 pb-6">
                      <div>
                        <p className="font-body text-sm text-blueGray-600">
                          Current Bid
                        </p>
                        <p className="flex items-center font-body font-bold text-blueGray-900 my-1">
                          <img
                            className="w-5 h-5 inline-block mr-1"
                            src="assets/images/cryptocurrency-icon.svg"
                            alt="title"
                          />{" "}
                          0.000 ETH
                        </p>
                        <p className="font-body text-sm text-blueGray-600">
                          ≈$0.00
                        </p>
                      </div>
                      <div className="text-center">
                        <Link
                          to="/item-single"
                          className="border-gradient block bg-gradient-to-r text-indigo-500 font-body font-semibold rounded py-2 px-4 hover:text-white hover:from-indigo-500 hover:to-purple-500 mb-2"
                        >
                          <img
                            className="w-4 h-4 inline-block mb-1"
                            src="assets/images/bid-icon.svg"
                            alt="title"
                          />{" "}
                          Place a bid
                        </Link>
                        <p className="font-body text-xs text-blueGray-600">
                          no bids
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div
                    className="product-box bg-white flex justify-between flex-col shadow rounded overflow-hidden transition duration-500 hover:shadow-lg"
                    data-aos="fade-up"
                  >
                    <div className="product-top">
                      <div className="product-image relative rounded overflow-hidden">
                        <img
                          className="w-full md:h-64 object-cover"
                          src="assets/images/product/17.jpg"
                          alt="title"
                        />
                      </div>
                      <div className="product-content px-6 pt-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                              <Link to="/item-single">Cyber Boss #43</Link>
                            </h3>
                          </div>
                          <Link
                            to="/wishlist"
                            className="w-5 h-5 heart-btn flex-shrink-0"
                          >
                            <img
                              className="transition duration-500 grayscale block"
                              src="assets/images/heart-icon.svg"
                              alt="title"
                            />
                          </Link>
                        </div>
                        <div className="flex mb-8 mt-2">
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
                      </div>
                    </div>
                    <div className="product-bottom flex flex-wrap justify-between px-6 pb-6">
                      <div>
                        <p className="font-body text-sm text-blueGray-600">
                          Current Bid
                        </p>
                        <p className="flex items-center font-body font-bold text-blueGray-900 my-1">
                          <img
                            className="w-5 h-5 inline-block mr-1"
                            src="assets/images/cryptocurrency-icon.svg"
                            alt="title"
                          />{" "}
                          0.000 ETH
                        </p>
                        <p className="font-body text-sm text-blueGray-600">
                          ≈$0.00
                        </p>
                      </div>
                      <div className="text-center">
                        <Link
                          to="/item-single"
                          className="border-gradient block bg-gradient-to-r text-indigo-500 font-body font-semibold rounded py-2 px-4 hover:text-white hover:from-indigo-500 hover:to-purple-500 mb-2"
                        >
                          <img
                            className="w-4 h-4 inline-block mb-1"
                            src="assets/images/bid-icon.svg"
                            alt="title"
                          />{" "}
                          Place a bid
                        </Link>
                        <p className="font-body text-xs text-blueGray-600">
                          no bids
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div
                    className="product-box bg-white flex justify-between flex-col shadow rounded overflow-hidden transition duration-500 hover:shadow-lg"
                    data-aos="fade-up"
                  >
                    <div className="product-top">
                      <div className="product-image relative rounded overflow-hidden">
                        <img
                          className="w-full md:h-64 object-cover"
                          src="assets/images/product/18.jpg"
                          alt="title"
                        />
                      </div>
                      <div className="product-content px-6 pt-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                              <Link to="/item-single">Cyber Boss #43</Link>
                            </h3>
                          </div>
                          <Link
                            to="/wishlist"
                            className="w-5 h-5 heart-btn flex-shrink-0"
                          >
                            <img
                              className="transition duration-500 grayscale block"
                              src="assets/images/heart-icon.svg"
                              alt="title"
                            />
                          </Link>
                        </div>
                        <div className="flex mb-8 mt-2">
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
                      </div>
                    </div>
                    <div className="product-bottom flex flex-wrap justify-between px-6 pb-6">
                      <div>
                        <p className="font-body text-sm text-blueGray-600">
                          Current Bid
                        </p>
                        <p className="flex items-center font-body font-bold text-blueGray-900 my-1">
                          <img
                            className="w-5 h-5 inline-block mr-1"
                            src="assets/images/cryptocurrency-icon.svg"
                            alt="title"
                          />{" "}
                          0.000 ETH
                        </p>
                        <p className="font-body text-sm text-blueGray-600">
                          ≈$0.00
                        </p>
                      </div>
                      <div className="text-center">
                        <Link
                          to="/item-single"
                          className="border-gradient block bg-gradient-to-r text-indigo-500 font-body font-semibold rounded py-2 px-4 hover:text-white hover:from-indigo-500 hover:to-purple-500 mb-2"
                        >
                          <img
                            className="w-4 h-4 inline-block mb-1"
                            src="assets/images/bid-icon.svg"
                            alt="title"
                          />{" "}
                          Place a bid
                        </Link>
                        <p className="font-body text-xs text-blueGray-600">
                          no bids
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div
                    className="product-box bg-white flex justify-between flex-col shadow rounded overflow-hidden transition duration-500 hover:shadow-lg"
                    data-aos="fade-up"
                  >
                    <div className="product-top">
                      <div className="product-image relative rounded overflow-hidden">
                        <img
                          className="w-full md:h-64 object-cover"
                          src="assets/images/product/19.jpg"
                          alt="title"
                        />
                      </div>
                      <div className="product-content px-6 pt-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                              <Link to="/item-single">Cyber Boss #43</Link>
                            </h3>
                          </div>
                          <Link
                            to="/wishlist"
                            className="w-5 h-5 heart-btn flex-shrink-0"
                          >
                            <img
                              className="transition duration-500 grayscale block"
                              src="assets/images/heart-icon.svg"
                              alt="title"
                            />
                          </Link>
                        </div>
                        <div className="flex mb-8 mt-2">
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
                      </div>
                    </div>
                    <div className="product-bottom flex flex-wrap justify-between px-6 pb-6">
                      <div>
                        <p className="font-body text-sm text-blueGray-600">
                          Current Bid
                        </p>
                        <p className="flex items-center font-body font-bold text-blueGray-900 my-1">
                          <img
                            className="w-5 h-5 inline-block mr-1"
                            src="assets/images/cryptocurrency-icon.svg"
                            alt="title"
                          />{" "}
                          0.000 ETH
                        </p>
                        <p className="font-body text-sm text-blueGray-600">
                          ≈$0.00
                        </p>
                      </div>
                      <div className="text-center">
                        <Link
                          to="/item-single"
                          className="border-gradient block bg-gradient-to-r text-indigo-500 font-body font-semibold rounded py-2 px-4 hover:text-white hover:from-indigo-500 hover:to-purple-500 mb-2"
                        >
                          <img
                            className="w-4 h-4 inline-block mb-1"
                            src="assets/images/bid-icon.svg"
                            alt="title"
                          />{" "}
                          Place a bid
                        </Link>
                        <p className="font-body text-xs text-blueGray-600">
                          no bids
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div
                    className="product-box bg-white flex justify-between flex-col shadow rounded overflow-hidden transition duration-500 hover:shadow-lg"
                    data-aos="fade-up"
                  >
                    <div className="product-top">
                      <div className="product-image relative rounded overflow-hidden">
                        <img
                          className="w-full md:h-64 object-cover"
                          src="assets/images/product/6.jpg"
                          alt="title"
                        />
                      </div>
                      <div className="product-content px-6 pt-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                              <Link to="/item-single">Cyber Boss #43</Link>
                            </h3>
                          </div>
                          <Link
                            to="/wishlist"
                            className="w-5 h-5 heart-btn flex-shrink-0"
                          >
                            <img
                              className="transition duration-500 grayscale block"
                              src="assets/images/heart-icon.svg"
                              alt="title"
                            />
                          </Link>
                        </div>
                        <div className="flex mb-8 mt-2">
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
                      </div>
                    </div>
                    <div className="product-bottom flex flex-wrap justify-between px-6 pb-6">
                      <div>
                        <p className="font-body text-sm text-blueGray-600">
                          Current Bid
                        </p>
                        <p className="flex items-center font-body font-bold text-blueGray-900 my-1">
                          <img
                            className="w-5 h-5 inline-block mr-1"
                            src="assets/images/cryptocurrency-icon.svg"
                            alt="title"
                          />{" "}
                          0.000 ETH
                        </p>
                        <p className="font-body text-sm text-blueGray-600">
                          ≈$0.00
                        </p>
                      </div>
                      <div className="text-center">
                        <Link
                          to="/item-single"
                          className="border-gradient block bg-gradient-to-r text-indigo-500 font-body font-semibold rounded py-2 px-4 hover:text-white hover:from-indigo-500 hover:to-purple-500 mb-2"
                        >
                          <img
                            className="w-4 h-4 inline-block mb-1"
                            src="assets/images/bid-icon.svg"
                            alt="title"
                          />{" "}
                          Place a bid
                        </Link>
                        <p className="font-body text-xs text-blueGray-600">
                          no bids
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-button-prev bg-white shadow rounded-full bg-gradient-to-r transition duration-500 hover:from-indigo-500 hover:to-purple-500 2xl:-translate-x-24" />
            <div className="swiper-button-next bg-white shadow rounded-full bg-gradient-to-r transition duration-500 hover:from-indigo-500 hover:to-purple-500 2xl:translate-x-24" />
          </div>
        </div>
      </section>
      {/*  ====================== Footer Section =============================  */}
      <FooterV2 />
    </div>
  );
};

export default Home2;
