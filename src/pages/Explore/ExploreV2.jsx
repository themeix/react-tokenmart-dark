import React from "react";
import { Link } from "react-router-dom";
import FooterV2 from "../../components/Footer/FooterV2";
import Header from "../../components/Header/Header";

const ExploreV2 = () => {
  return (
    <div>
      <Header />
      {/*  ====================== Hero Section =============================  */}
      <section className="hero-section relative mt-2 pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="container mx-auto relative px-4 z-10">
          <h2 className="font-display text-4xl lg:text-6xl text-blueGray-900 font-bold mb-4">
            Explore v2{" "}
          </h2>
          <ul className="hero-breadcrumb font-body text-blueGray-600 flex flex-wrap items-center">
            <li className="flex items-center mr-2">
              <Link
                className="transition duration-500 hover:text-indigo-500 underline-hover"
                to="/index"
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
                className="transition duration-500 hover:text-indigo-500 underline-hover"
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
              Explore v2
            </li>
          </ul>
        </div>
      </section>
      {/*  ====================== Product Section =============================  */}
      <section className="product-section relative mb-20 lg:mb-32">
        <div className="container mx-auto relative px-4 z-10">
          <div className="product-infinite grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <div
              className="product-box bg-white flex justify-between flex-col shadow rounded overflow-hidden transition duration-500 hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="product-top">
                <div className="product-image relative rounded overflow-hidden">
                  <img
                    className="w-full md:h-64 object-cover"
                    src="assets/images/product/1.gif"
                    alt="title"
                  />
                  <div className="product-meta text-white leading-4 font-body font-medium countdown-time absolute bottom-4 right-4 grid grid-cols-4 gap-4 text-center bg-gradient-to-r from-purple-500 to-indigo-500 rounded p-3" />
                </div>
                <div className="product-content px-6 pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                        <Link to="/item-single">Creative Artwork</Link>
                      </h3>
                    </div>
                    <span className="font-body text-blueGray-600 flex items-center flex-shrink-0 ml-4">
                      <img
                        className="w-5 h-5 mr-2"
                        src="assets/images/heart-icon.svg"
                        alt="title"
                      />
                      4k
                    </span>
                  </div>
                  <div className="flex mb-8 mt-2">
                    <Link
                      to="/creator-published"
                      className="relative"
                      data-data-tooltip="Steven Robart"
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
                      data-data-tooltip="Steven Robart"
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
                    0.008 ETH
                  </p>
                  <p className="font-body text-sm text-blueGray-600">≈$26.69</p>
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
                    12 bids total
                  </p>
                </div>
              </div>
            </div>
            <div
              className="product-box bg-white flex justify-between flex-col shadow rounded overflow-hidden transition duration-500 hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="product-top">
                <div className="product-image relative rounded overflow-hidden">
                  <img
                    className="w-full md:h-64 object-cover"
                    src="assets/images/product/2.gif"
                    alt="title"
                  />
                  <div className="product-meta text-white leading-4 font-body font-medium countdown-time2 absolute bottom-4 right-4 grid grid-cols-4 gap-4 text-center bg-gradient-to-r from-purple-500 to-indigo-500 rounded p-3" />
                </div>
                <div className="product-content px-6 pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                        <Link to="/item-single">Cyber Boss #43</Link>
                      </h3>
                    </div>
                    <span className="font-body text-blueGray-600 flex items-center flex-shrink-0 ml-4">
                      <img
                        className="w-5 h-5 mr-2"
                        src="assets/images/heart-icon.svg"
                        alt="title"
                      />
                      4k
                    </span>
                  </div>
                  <div className="flex mb-8 mt-2">
                    <Link
                      to="/creator-published"
                      className="relative"
                      data-data-tooltip="Steven Robart"
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
                      data-data-tooltip="Steven Robart"
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
                  <p className="font-body text-sm text-blueGray-600">≈$0.00</p>
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
                  <p className="font-body text-xs text-blueGray-600">no bids</p>
                </div>
              </div>
            </div>
            <div
              className="product-box bg-white flex justify-between flex-col shadow rounded overflow-hidden transition duration-500 hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="product-top">
                <div className="product-image relative rounded overflow-hidden">
                  <img
                    className="w-full md:h-64 object-cover"
                    src="assets/images/product/3.gif"
                    alt="title"
                  />
                  <div className="product-meta text-white leading-4 font-body font-medium countdown-time3 absolute bottom-4 right-4 grid grid-cols-4 gap-4 text-center bg-gradient-to-r from-purple-500 to-indigo-500 rounded p-3" />
                </div>
                <div className="product-content px-6 pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                        <Link to="/item-single">Token Art #23</Link>
                      </h3>
                    </div>
                    <span className="font-body text-blueGray-600 flex items-center flex-shrink-0 ml-4">
                      <img
                        className="w-5 h-5 mr-2"
                        src="assets/images/heart-icon.svg"
                        alt="title"
                      />
                      4k
                    </span>
                  </div>
                  <div className="flex mb-8 mt-2">
                    <Link
                      to="/creator-published"
                      className="relative"
                      data-data-tooltip="Steven Robart"
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
                      data-data-tooltip="Steven Robart"
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
                    <Link
                      to="/creator-published"
                      className="relative -left-4"
                      data-data-tooltip="Steven Robart"
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
                    0.008 ETH
                  </p>
                  <p className="font-body text-sm text-blueGray-600">≈$3.34</p>
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
                    2 bids total
                  </p>
                </div>
              </div>
            </div>
            <div
              className="product-box bg-white flex justify-between flex-col shadow rounded overflow-hidden transition duration-500 hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="product-top">
                <div className="product-image relative rounded overflow-hidden">
                  <img
                    className="w-full md:h-64 object-cover"
                    src="assets/images/product/4.gif"
                    alt="title"
                  />
                  <div className="product-meta text-white leading-4 font-body font-medium countdown-time4 absolute bottom-4 right-4 grid grid-cols-4 gap-4 text-center bg-gradient-to-r from-purple-500 to-indigo-500 rounded p-3" />
                </div>
                <div className="product-content px-6 pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                        <Link to="/item-single">Token Art #23</Link>
                      </h3>
                    </div>
                    <span className="font-body text-blueGray-600 flex items-center flex-shrink-0 ml-4">
                      <img
                        className="w-5 h-5 mr-2"
                        src="assets/images/heart-icon.svg"
                        alt="title"
                      />
                      4k
                    </span>
                  </div>
                  <div className="flex mb-8 mt-2">
                    <Link
                      to="/creator-published"
                      className="relative"
                      data-data-tooltip="Steven Robart"
                    >
                      <img
                        className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                        src="assets/images/author/1.jpg"
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
                    <Link
                      to="/creator-published"
                      className="relative -left-2"
                      data-data-tooltip="Steven Robart"
                    >
                      <img
                        className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                        src="assets/images/author/2.jpg"
                        alt="title"
                      />
                    </Link>
                    <Link
                      to="/creator-published"
                      className="relative -left-4"
                      data-data-tooltip="Steven Robart"
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
                    />
                    0.005 ETH
                  </p>
                  <p className="font-body text-sm text-blueGray-600">≈$16.68</p>
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
                    14 bids total
                  </p>
                </div>
              </div>
            </div>
            <div
              className="product-box bg-white flex justify-between flex-col shadow rounded overflow-hidden transition duration-500 hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="product-top">
                <div className="product-image relative rounded overflow-hidden">
                  <img
                    className="w-full md:h-64 object-cover"
                    src="assets/images/product/5.gif"
                    alt="title"
                  />
                  <div className="product-meta text-white leading-4 font-body font-medium countdown-time4 absolute bottom-4 right-4 grid grid-cols-4 gap-4 text-center bg-gradient-to-r from-purple-500 to-indigo-500 rounded p-3" />
                </div>
                <div className="product-content px-6 pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                        <Link to="/item-single">Token Art #20</Link>
                      </h3>
                    </div>
                    <span className="font-body text-blueGray-600 flex items-center flex-shrink-0 ml-4">
                      <img
                        className="w-5 h-5 mr-2"
                        src="assets/images/heart-icon.svg"
                        alt="title"
                      />
                      4k
                    </span>
                  </div>
                  <div className="flex mb-8 mt-2">
                    <Link
                      to="/creator-published"
                      className="relative"
                      data-data-tooltip="Steven Robart"
                    >
                      <img
                        className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                        src="assets/images/author/1.jpg"
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
                    <Link
                      to="/creator-published"
                      className="relative -left-2"
                      data-data-tooltip="Steven Robart"
                    >
                      <img
                        className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                        src="assets/images/author/2.jpg"
                        alt="title"
                      />
                    </Link>
                    <Link
                      to="/creator-published"
                      className="relative -left-4"
                      data-data-tooltip="Steven Robart"
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
                    />
                    0.005 ETH
                  </p>
                  <p className="font-body text-sm text-blueGray-600">≈$16.68</p>
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
                    14 bids total
                  </p>
                </div>
              </div>
            </div>
            <div
              className="product-box bg-white flex justify-between flex-col shadow rounded overflow-hidden transition duration-500 hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="product-top">
                <div className="product-image relative rounded overflow-hidden">
                  <img
                    className="w-full md:h-64 object-cover"
                    src="assets/images/product/21.jpg"
                    alt="title"
                  />
                  <div className="product-meta text-white leading-4 font-body font-medium countdown-time4 absolute bottom-4 right-4 grid grid-cols-4 gap-4 text-center bg-gradient-to-r from-purple-500 to-indigo-500 rounded p-3" />
                </div>
                <div className="product-content px-6 pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                        <Link to="/item-single">Cyber Boss #43</Link>
                      </h3>
                    </div>
                    <span className="font-body text-blueGray-600 flex items-center flex-shrink-0 ml-4">
                      <img
                        className="w-5 h-5 mr-2"
                        src="assets/images/heart-icon.svg"
                        alt="title"
                      />
                      4k
                    </span>
                  </div>
                  <div className="flex mb-8 mt-2">
                    <Link
                      to="/creator-published"
                      className="relative"
                      data-data-tooltip="Steven Robart"
                    >
                      <img
                        className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                        src="assets/images/author/1.jpg"
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
                    <Link
                      to="/creator-published"
                      className="relative -left-2"
                      data-data-tooltip="Steven Robart"
                    >
                      <img
                        className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                        src="assets/images/author/2.jpg"
                        alt="title"
                      />
                    </Link>
                    <Link
                      to="/creator-published"
                      className="relative -left-4"
                      data-data-tooltip="Steven Robart"
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
                    />
                    0.005 ETH
                  </p>
                  <p className="font-body text-sm text-blueGray-600">≈$16.68</p>
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
                    14 bids total
                  </p>
                </div>
              </div>
            </div>
            <div
              className="product-box bg-white flex justify-between flex-col shadow rounded overflow-hidden transition duration-500 hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="product-top">
                <div className="product-image relative rounded overflow-hidden">
                  <img
                    className="w-full md:h-64 object-cover"
                    src="assets/images/product/22.jpg"
                    alt="title"
                  />
                  <div className="product-meta text-white leading-4 font-body font-medium countdown-time4 absolute bottom-4 right-4 grid grid-cols-4 gap-4 text-center bg-gradient-to-r from-purple-500 to-indigo-500 rounded p-3" />
                </div>
                <div className="product-content px-6 pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                        <Link to="/item-single">Cyber Boss #43</Link>
                      </h3>
                    </div>
                    <span className="font-body text-blueGray-600 flex items-center flex-shrink-0 ml-4">
                      <img
                        className="w-5 h-5 mr-2"
                        src="assets/images/heart-icon.svg"
                        alt="title"
                      />
                      4k
                    </span>
                  </div>
                  <div className="flex mb-8 mt-2">
                    <Link
                      to="/creator-published"
                      className="relative"
                      data-data-tooltip="Steven Robart"
                    >
                      <img
                        className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                        src="assets/images/author/1.jpg"
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
                    <Link
                      to="/creator-published"
                      className="relative -left-2"
                      data-data-tooltip="Steven Robart"
                    >
                      <img
                        className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                        src="assets/images/author/2.jpg"
                        alt="title"
                      />
                    </Link>
                    <Link
                      to="/creator-published"
                      className="relative -left-4"
                      data-data-tooltip="Steven Robart"
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
                    />
                    0.005 ETH
                  </p>
                  <p className="font-body text-sm text-blueGray-600">≈$16.68</p>
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
                    14 bids total
                  </p>
                </div>
              </div>
            </div>
            <div
              className="product-box bg-white flex justify-between flex-col shadow rounded overflow-hidden transition duration-500 hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="product-top">
                <div className="product-image relative rounded overflow-hidden">
                  <img
                    className="w-full md:h-64 object-cover"
                    src="assets/images/product/6.gif"
                    alt="title"
                  />
                  <div className="product-meta text-white leading-4 font-body font-medium countdown-time4 absolute bottom-4 right-4 grid grid-cols-4 gap-4 text-center bg-gradient-to-r from-purple-500 to-indigo-500 rounded p-3" />
                </div>
                <div className="product-content px-6 pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                        <Link to="/item-single">Token Art #23</Link>
                      </h3>
                    </div>
                    <span className="font-body text-blueGray-600 flex items-center flex-shrink-0 ml-4">
                      <img
                        className="w-5 h-5 mr-2"
                        src="assets/images/heart-icon.svg"
                        alt="title"
                      />
                      4k
                    </span>
                  </div>
                  <div className="flex mb-8 mt-2">
                    <Link
                      to="/creator-published"
                      className="relative"
                      data-data-tooltip="Steven Robart"
                    >
                      <img
                        className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                        src="assets/images/author/1.jpg"
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
                    <Link
                      to="/creator-published"
                      className="relative -left-2"
                      data-data-tooltip="Steven Robart"
                    >
                      <img
                        className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                        src="assets/images/author/2.jpg"
                        alt="title"
                      />
                    </Link>
                    <Link
                      to="/creator-published"
                      className="relative -left-4"
                      data-data-tooltip="Steven Robart"
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
                    />
                    0.005 ETH
                  </p>
                  <p className="font-body text-sm text-blueGray-600">≈$16.68</p>
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
                    14 bids total
                  </p>
                </div>
              </div>
            </div>
            <div
              className="product-box bg-white flex justify-between flex-col shadow rounded overflow-hidden transition duration-500 hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="product-top">
                <div className="product-image relative rounded overflow-hidden">
                  <img
                    className="w-full md:h-64 object-cover"
                    src="assets/images/product/24.jpg"
                    alt="title"
                  />
                  <div className="product-meta text-white leading-4 font-body font-medium countdown-time4 absolute bottom-4 right-4 grid grid-cols-4 gap-4 text-center bg-gradient-to-r from-purple-500 to-indigo-500 rounded p-3" />
                </div>
                <div className="product-content px-6 pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                        <Link to="/item-single">Token Art #20</Link>
                      </h3>
                    </div>
                    <span className="font-body text-blueGray-600 flex items-center flex-shrink-0 ml-4">
                      <img
                        className="w-5 h-5 mr-2"
                        src="assets/images/heart-icon.svg"
                        alt="title"
                      />
                      4k
                    </span>
                  </div>
                  <div className="flex mb-8 mt-2">
                    <Link
                      to="/creator-published"
                      className="relative"
                      data-data-tooltip="Steven Robart"
                    >
                      <img
                        className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                        src="assets/images/author/1.jpg"
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
                    <Link
                      to="/creator-published"
                      className="relative -left-2"
                      data-data-tooltip="Steven Robart"
                    >
                      <img
                        className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                        src="assets/images/author/2.jpg"
                        alt="title"
                      />
                    </Link>
                    <Link
                      to="/creator-published"
                      className="relative -left-4"
                      data-data-tooltip="Steven Robart"
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
                    />
                    0.005 ETH
                  </p>
                  <p className="font-body text-sm text-blueGray-600">≈$16.68</p>
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
                    14 bids total
                  </p>
                </div>
              </div>
            </div>
            <div
              className="product-box bg-white flex justify-between flex-col shadow rounded overflow-hidden transition duration-500 hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="product-top">
                <div className="product-image relative rounded overflow-hidden">
                  <img
                    className="w-full md:h-64 object-cover"
                    src="assets/images/product/7.gif"
                    alt="title"
                  />
                  <div className="product-meta text-white leading-4 font-body font-medium countdown-time4 absolute bottom-4 right-4 grid grid-cols-4 gap-4 text-center bg-gradient-to-r from-purple-500 to-indigo-500 rounded p-3" />
                </div>
                <div className="product-content px-6 pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                        <Link to="/item-single">Cyber Boss #43</Link>
                      </h3>
                    </div>
                    <span className="font-body text-blueGray-600 flex items-center flex-shrink-0 ml-4">
                      <img
                        className="w-5 h-5 mr-2"
                        src="assets/images/heart-icon.svg"
                        alt="title"
                      />
                      4k
                    </span>
                  </div>
                  <div className="flex mb-8 mt-2">
                    <Link
                      to="/creator-published"
                      className="relative"
                      data-data-tooltip="Steven Robart"
                    >
                      <img
                        className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                        src="assets/images/author/1.jpg"
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
                    <Link
                      to="/creator-published"
                      className="relative -left-2"
                      data-data-tooltip="Steven Robart"
                    >
                      <img
                        className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                        src="assets/images/author/2.jpg"
                        alt="title"
                      />
                    </Link>
                    <Link
                      to="/creator-published"
                      className="relative -left-4"
                      data-data-tooltip="Steven Robart"
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
                    />
                    0.005 ETH
                  </p>
                  <p className="font-body text-sm text-blueGray-600">≈$16.68</p>
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
                    14 bids total
                  </p>
                </div>
              </div>
            </div>
            <div
              className="product-box bg-white flex justify-between flex-col shadow rounded overflow-hidden transition duration-500 hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="product-top">
                <div className="product-image relative rounded overflow-hidden">
                  <img
                    className="w-full md:h-64 object-cover"
                    src="assets/images/product/26.jpg"
                    alt="title"
                  />
                  <div className="product-meta text-white leading-4 font-body font-medium countdown-time4 absolute bottom-4 right-4 grid grid-cols-4 gap-4 text-center bg-gradient-to-r from-purple-500 to-indigo-500 rounded p-3" />
                </div>
                <div className="product-content px-6 pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                        <Link to="/item-single">Token Art #23</Link>
                      </h3>
                    </div>
                    <span className="font-body text-blueGray-600 flex items-center flex-shrink-0 ml-4">
                      <img
                        className="w-5 h-5 mr-2"
                        src="assets/images/heart-icon.svg"
                        alt="title"
                      />
                      4k
                    </span>
                  </div>
                  <div className="flex mb-8 mt-2">
                    <Link
                      to="/creator-published"
                      className="relative"
                      data-data-tooltip="Steven Robart"
                    >
                      <img
                        className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                        src="assets/images/author/1.jpg"
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
                    <Link
                      to="/creator-published"
                      className="relative -left-2"
                      data-data-tooltip="Steven Robart"
                    >
                      <img
                        className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                        src="assets/images/author/2.jpg"
                        alt="title"
                      />
                    </Link>
                    <Link
                      to="/creator-published"
                      className="relative -left-4"
                      data-data-tooltip="Steven Robart"
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
                    />
                    0.005 ETH
                  </p>
                  <p className="font-body text-sm text-blueGray-600">≈$16.68</p>
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
                    14 bids total
                  </p>
                </div>
              </div>
            </div>
            <div
              className="product-box bg-white flex justify-between flex-col shadow rounded overflow-hidden transition duration-500 hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="product-top">
                <div className="product-image relative rounded overflow-hidden">
                  <img
                    className="w-full md:h-64 object-cover"
                    src="assets/images/product/27.jpg"
                    alt="title"
                  />
                  <div className="product-meta text-white leading-4 font-body font-medium countdown-time4 absolute bottom-4 right-4 grid grid-cols-4 gap-4 text-center bg-gradient-to-r from-purple-500 to-indigo-500 rounded p-3" />
                </div>
                <div className="product-content px-6 pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      {" "}
                      <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                        <Link to="/item-single">Token Art #20</Link>
                      </h3>
                    </div>
                    <span className="font-body text-blueGray-600 flex items-center flex-shrink-0 ml-4">
                      <img
                        className="w-5 h-5 mr-2"
                        src="assets/images/heart-icon.svg"
                        alt="title"
                      />
                      4k
                    </span>
                  </div>
                  <div className="flex mb-8 mt-2">
                    <Link
                      to="/creator-published"
                      className="relative"
                      data-data-tooltip="Steven Robart"
                    >
                      <img
                        className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                        src="assets/images/author/1.jpg"
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
                    <Link
                      to="/creator-published"
                      className="relative -left-2"
                      data-data-tooltip="Steven Robart"
                    >
                      <img
                        className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                        src="assets/images/author/2.jpg"
                        alt="title"
                      />
                    </Link>
                    <Link
                      to="/creator-published"
                      className="relative -left-4"
                      data-data-tooltip="Steven Robart"
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
                    />
                    0.005 ETH
                  </p>
                  <p className="font-body text-sm text-blueGray-600">≈$16.68</p>
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
                    14 bids total
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  ====================== Footer Section =============================  */}
      <FooterV2 />
    </div>
  );
};

export default ExploreV2;
