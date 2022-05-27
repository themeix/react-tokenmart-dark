import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Home3 = () => {
  return (
    <div>
      <Header />
      {/*  ====================== Hero Section =============================  */}
      <section className="hero-section relative hero-shape pt-40 pb-24 lg:pt-64 lg:pb-56">
        <div className="container mx-auto relative px-4 z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold font-display text-blueGray-900 mb-10">
              Discover, collect, and sell extraordinary NFTs
            </h1>
            <p className="text-xl font-body font-normal text-blueGray-600 mb-4">
              A peer-to-peer marketplace for NFTs, rare digital items and crypto
              collectibles. Buy, sell, auction, and discover CryptoKitties,
              Decentraland.
            </p>
            <div className="flex flex-wrap items-center justify-center">
              <Link
                to="/explore"
                className="btn block text-white font-body font-bold rounded py-4 px-7 mx-3 mt-4 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
              >
                Explore Now
              </Link>
              <Link
                to="/create-item"
                className="btn block bg-blueGray-900 text-white font-body font-bold rounded py-4 px-7 mx-3 mt-4 transition duration-500 hover:bg-indigo-500"
              >
                Create Product
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/*  ====================== Product Section =============================  */}
      <section className="product-section relative">
        <div className="container mx-auto relative px-4 z-10">
          <div className="section-title relative flex flex-wrap items-center justify-between border-b border-blueGray-300 pb-6 mb-6 lg:mb-8">
            <div>
              <h3 className="font-display text-blueGray-900 font-bold text-2xl lg:text-4xl">
                Live Auctions
              </h3>
              <span className="w-20	h-1.5	absolute -bottom-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg" />
            </div>
          </div>
          <div className="relative">
            <div className="swiper-container product-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div
                    className="product-box flex justify-between flex-col bg-white shadow rounded overflow-hidden transition hover:shadow-lg"
                    data-aos="fade-up"
                  >
                    <div className="product-top">
                      <div className="product-image relative rounded overflow-hidden m-6">
                        <img
                          className="w-full sm:h-56 rounded object-cover"
                          src="assets/images/product/10.jpg"
                          alt="title"
                        />
                      </div>
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
                              <img
                                src="assets/images/heart-icon2.svg"
                                alt="title"
                              />
                            </span>
                            <p className="font-body font-bold text-sm text-blueGray-600 ml-2">
                              90 Likes
                            </p>
                          </div>
                        </div>
                        <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                          <Link to="/item-single">Creative Artwork</Link>
                        </h3>
                      </div>
                    </div>
                    <div className="product-bottom flex items-center flex-wrap justify-between pt-4 px-6 pb-6">
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
                        <p className="font-body text-sm text-blueGray-600">
                          ≈$26.69
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div
                    className="product-box flex justify-between flex-col bg-white shadow rounded overflow-hidden transition hover:shadow-lg"
                    data-aos="fade-up"
                  >
                    <div className="product-top">
                      <div className="product-image relative rounded overflow-hidden m-6">
                        <img
                          className="w-full sm:h-56 rounded object-cover"
                          src="assets/images/product/11.jpg"
                          alt="title"
                        />
                      </div>
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
                              <img
                                src="assets/images/heart-icon2.svg"
                                alt="title"
                              />
                            </span>
                            <p className="font-body font-bold text-sm text-blueGray-600 ml-2">
                              90 Likes
                            </p>
                          </div>
                        </div>
                        <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                          <Link to="/item-single">Cyber Boss #43</Link>
                        </h3>
                      </div>
                    </div>
                    <div className="product-bottom flex items-center flex-wrap justify-between pt-4 px-6 pb-6">
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
                        <p className="font-body text-sm text-blueGray-600">
                          ≈$26.69
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div
                    className="product-box flex justify-between flex-col bg-white shadow rounded overflow-hidden transition hover:shadow-lg"
                    data-aos="fade-up"
                  >
                    <div className="product-top">
                      <div className="product-image relative rounded overflow-hidden m-6">
                        <img
                          className="w-full sm:h-56 rounded object-cover"
                          src="assets/images/product/1.jpg"
                          alt="title"
                        />
                      </div>
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
                              <img
                                src="assets/images/heart-icon2.svg"
                                alt="title"
                              />
                            </span>
                            <p className="font-body font-bold text-sm text-blueGray-600 ml-2">
                              90 Likes
                            </p>
                          </div>
                        </div>
                        <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                          <Link to="/item-single">Token Art #23</Link>
                        </h3>
                      </div>
                    </div>
                    <div className="product-bottom flex items-center flex-wrap justify-between pt-4 px-6 pb-6">
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
                        <p className="font-body text-sm text-blueGray-600">
                          ≈$26.69
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div
                    className="product-box flex justify-between flex-col bg-white shadow rounded overflow-hidden transition hover:shadow-lg"
                    data-aos="fade-up"
                  >
                    <div className="product-top">
                      <div className="product-image relative rounded overflow-hidden m-6">
                        <img
                          className="w-full sm:h-56 rounded object-cover"
                          src="assets/images/product/25.jpg"
                          alt="title"
                        />
                      </div>
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
                              <img
                                src="assets/images/heart-icon2.svg"
                                alt="title"
                              />
                            </span>
                            <p className="font-body font-bold text-sm text-blueGray-600 ml-2">
                              90 Likes
                            </p>
                          </div>
                        </div>
                        <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                          <Link to="/item-single">Creative Oilpaint #22</Link>
                        </h3>
                      </div>
                    </div>
                    <div className="product-bottom flex items-center flex-wrap justify-between pt-4 px-6 pb-6">
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
                        <p className="font-body text-sm text-blueGray-600">
                          ≈$26.69
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div
                    className="product-box flex justify-between flex-col bg-white shadow rounded overflow-hidden transition hover:shadow-lg"
                    data-aos="fade-up"
                  >
                    <div className="product-top">
                      <div className="product-image relative rounded overflow-hidden m-6">
                        <img
                          className="w-full sm:h-56 rounded object-cover"
                          src="assets/images/product/5.jpg"
                          alt="title"
                        />
                      </div>
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
                              <img
                                src="assets/images/heart-icon2.svg"
                                alt="title"
                              />
                            </span>
                            <p className="font-body font-bold text-sm text-blueGray-600 ml-2">
                              90 Likes
                            </p>
                          </div>
                        </div>
                        <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                          <Link to="/item-single">Token Art #10 </Link>
                        </h3>
                      </div>
                    </div>
                    <div className="product-bottom flex items-center flex-wrap justify-between pt-4 px-6 pb-6">
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
                        <p className="font-body text-sm text-blueGray-600">
                          ≈$26.69
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
      {/*  ====================== Category Section =============================  */}
      <section className="category-section relative my-20 lg:my-32">
        <div className="container mx-auto relative px-4 z-10">
          <div className="section-title relative flex flex-wrap items-center justify-between border-b border-blueGray-300 pb-6 mb-8 lg:mb-14">
            <div>
              <h3 className="font-display text-blueGray-900 font-bold text-2xl lg:text-4xl">
                Popular Collections
              </h3>
              <span className="w-20	h-1.5	absolute -bottom-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg" />
            </div>
            <Link
              to="/explore"
              className="arrow-btn block bg-indigo-100 text-indigo-500 text-sm text-sm font-body font-bold rounded py-2 px-4 transition duration-500 hover:bg-indigo-50"
            >
              See All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <div
              className="category-box relative rounded overflow-hidden"
              data-aos="fade-up"
            >
              <img
                className="w-full sm:h-72 object-cover"
                src="assets/images/category/1.jpg"
                alt="title"
              />
              <div className="category-content text-center bg-white shadow transition duration-500 hover:shadow-lg rounded absolute bottom-8 right-8 left-8 p-4">
                <h4 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                  <Link to="/explore">Cartoon Art</Link>
                </h4>
                <p className="font-body text-blueGray-600">12 Items</p>
              </div>
            </div>
            <div
              className="category-box relative rounded overflow-hidden"
              data-aos="fade-up"
            >
              <img
                className="w-full sm:h-72 object-cover"
                src="assets/images/category/2.jpg"
                alt="title"
              />
              <div className="category-content text-center bg-white shadow transition duration-500 hover:shadow-lg rounded absolute bottom-8 right-8 left-8 p-4">
                <h4 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                  <Link to="/explore">Superheros</Link>
                </h4>
                <p className="font-body text-blueGray-600">12 Items</p>
              </div>
            </div>
            <div
              className="category-box relative rounded overflow-hidden"
              data-aos="fade-up"
            >
              <img
                className="w-full sm:h-72 object-cover"
                src="assets/images/category/3.jpg"
                alt="title"
              />
              <div className="category-content text-center bg-white shadow transition duration-500 hover:shadow-lg rounded absolute bottom-8 right-8 left-8 p-4">
                <h4 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                  <Link to="/explore">Oilprint</Link>
                </h4>
                <p className="font-body text-blueGray-600">12 Items</p>
              </div>
            </div>
            <div
              className="category-box relative rounded overflow-hidden"
              data-aos="fade-up"
            >
              <img
                className="w-full sm:h-72 object-cover"
                src="assets/images/category/4.jpg"
                alt="title"
              />
              <div className="category-content text-center bg-white shadow transition duration-500 hover:shadow-lg rounded absolute bottom-8 right-8 left-8 p-4">
                <h4 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                  <Link to="/explore">Virtual Worlds</Link>
                </h4>
                <p className="font-body text-blueGray-600">12 Items</p>
              </div>
            </div>
            <div
              className="category-box relative rounded overflow-hidden"
              data-aos="fade-up"
            >
              <img
                className="w-full sm:h-72 object-cover"
                src="assets/images/category/5.jpg"
                alt="title"
              />
              <div className="category-content text-center bg-white shadow transition duration-500 hover:shadow-lg rounded absolute bottom-8 right-8 left-8 p-4">
                <h4 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                  <Link to="/explore">Oil Paint</Link>
                </h4>
                <p className="font-body text-blueGray-600">12 Items</p>
              </div>
            </div>
            <div
              className="category-box relative rounded overflow-hidden"
              data-aos="fade-up"
            >
              <img
                className="w-full sm:h-72 object-cover"
                src="assets/images/category/6.jpg"
                alt="title"
              />
              <div className="category-content text-center bg-white shadow transition duration-500 hover:shadow-lg rounded absolute bottom-8 right-8 left-8 p-4">
                <h4 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                  <Link to="/explore">Collectibles</Link>
                </h4>
                <p className="font-body text-blueGray-600">12 Items</p>
              </div>
            </div>
            <div
              className="category-box relative rounded overflow-hidden"
              data-aos="fade-up"
            >
              <img
                className="w-full sm:h-72 object-cover"
                src="assets/images/category/7.jpg"
                alt="title"
              />
              <div className="category-content text-center bg-white shadow transition duration-500 hover:shadow-lg rounded absolute bottom-8 right-8 left-8 p-4">
                <h4 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                  <Link to="/explore">Trading Card</Link>
                </h4>
                <p className="font-body text-blueGray-600">12 Items</p>
              </div>
            </div>
            <div
              className="category-box relative rounded overflow-hidden"
              data-aos="fade-up"
            >
              <img
                className="w-full sm:h-72 object-cover"
                src="assets/images/category/8.jpg"
                alt="title"
              />
              <div className="category-content text-center bg-white shadow transition duration-500 hover:shadow-lg rounded absolute bottom-8 right-8 left-8 p-4">
                <h4 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                  <Link to="/explore">Rare Collections</Link>
                </h4>
                <p className="font-body text-blueGray-600">12 Items</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  ====================== Product Section =============================  */}
      <section className="product-section relative py-20 lg:py-32 bg-indigo-50">
        <div className="container mx-auto relative px-4 z-10">
          <div className="section-title relative flex flex-wrap items-center justify-between border-b border-blueGray-300 pb-6 mb-8 lg:mb-14">
            <div>
              <h3 className="font-display text-blueGray-900 font-bold text-2xl lg:text-4xl">
                News Arrivals
              </h3>
              <span className="w-20	h-1.5	absolute -bottom-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg" />
            </div>
            <Link
              to="/explore"
              className="arrow-btn block bg-indigo-100 text-indigo-500 text-sm text-sm font-body font-bold rounded py-2 px-4 transition duration-500 hover:bg-indigo-50"
            >
              See All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <div
              className="product-box flex justify-between flex-col bg-white shadow rounded overflow-hidden transition hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="product-top">
                <div className="product-image relative rounded overflow-hidden m-6">
                  <img
                    className="w-full sm:h-56 rounded object-cover"
                    src="assets/images/product/16.jpg"
                    alt="title"
                  />
                </div>
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
                    <Link to="/item-single">Mega City Boss #1</Link>
                  </h3>
                </div>
              </div>
              <div className="product-bottom flex items-center flex-wrap justify-between pt-4 px-6 pb-6">
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
              className="product-box flex justify-between flex-col bg-white shadow rounded overflow-hidden transition hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="product-top">
                <div className="product-image relative rounded overflow-hidden m-6">
                  <img
                    className="w-full sm:h-56 rounded object-cover"
                    src="assets/images/product/17.jpg"
                    alt="title"
                  />
                </div>
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
                    <Link to="/item-single">Creative Oilpaint Artwork </Link>
                  </h3>
                </div>
              </div>
              <div className="product-bottom flex items-center flex-wrap justify-between pt-4 px-6 pb-6">
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
              className="product-box flex justify-between flex-col bg-white shadow rounded overflow-hidden transition hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="product-top">
                <div className="product-image relative rounded overflow-hidden m-6">
                  <img
                    className="w-full sm:h-56 rounded object-cover"
                    src="assets/images/product/18.jpg"
                    alt="title"
                  />
                </div>
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
                    <Link to="/item-single">Cyber Boss #44</Link>
                  </h3>
                </div>
              </div>
              <div className="product-bottom flex items-center flex-wrap justify-between pt-4 px-6 pb-6">
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
              className="product-box flex justify-between flex-col bg-white shadow rounded overflow-hidden transition hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="product-top">
                <div className="product-image relative rounded overflow-hidden m-6">
                  <img
                    className="w-full sm:h-56 rounded object-cover"
                    src="assets/images/product/19.jpg"
                    alt="title"
                  />
                </div>
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
                    <Link to="/item-single">Token Art #9</Link>
                  </h3>
                </div>
              </div>
              <div className="product-bottom flex items-center flex-wrap justify-between pt-4 px-6 pb-6">
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
              className="product-box flex justify-between flex-col bg-white shadow rounded overflow-hidden transition hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="product-top">
                <div className="product-image relative rounded overflow-hidden m-6">
                  <img
                    className="w-full sm:h-56 rounded object-cover"
                    src="assets/images/product/20.jpg"
                    alt="title"
                  />
                </div>
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
                    <Link to="/item-single">Cyber Boss #12 </Link>
                  </h3>
                </div>
              </div>
              <div className="product-bottom flex items-center flex-wrap justify-between pt-4 px-6 pb-6">
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
              className="product-box flex justify-between flex-col bg-white shadow rounded overflow-hidden transition hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="product-top">
                <div className="product-image relative rounded overflow-hidden m-6">
                  <img
                    className="w-full sm:h-56 rounded object-cover"
                    src="assets/images/product/21.jpg"
                    alt="title"
                  />
                </div>
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
                    <Link to="/item-single">Mega City Artwork #2</Link>
                  </h3>
                </div>
              </div>
              <div className="product-bottom flex items-center flex-wrap justify-between pt-4 px-6 pb-6">
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
              className="product-box flex justify-between flex-col bg-white shadow rounded overflow-hidden transition hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="product-top">
                <div className="product-image relative rounded overflow-hidden m-6">
                  <img
                    className="w-full sm:h-56 rounded object-cover"
                    src="assets/images/product/22.jpg"
                    alt="title"
                  />
                </div>
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
                    <Link to="/item-single">Creative Oilpaint #6</Link>
                  </h3>
                </div>
              </div>
              <div className="product-bottom flex items-center flex-wrap justify-between pt-4 px-6 pb-6">
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
              className="product-box flex justify-between flex-col bg-white shadow rounded overflow-hidden transition hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="product-top">
                <div className="product-image relative rounded overflow-hidden m-6">
                  <img
                    className="w-full sm:h-56 rounded object-cover"
                    src="assets/images/product/23.jpg"
                    alt="title"
                  />
                </div>
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
                    <Link to="/item-single">Commader Titan #7k</Link>
                  </h3>
                </div>
              </div>
              <div className="product-bottom flex items-center flex-wrap justify-between pt-4 px-6 pb-6">
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
        </div>
      </section>
      {/*  ====================== How Work Section =============================  */}
      <section className="how-work-section relative my-20 lg:my-32">
        <div className="container mx-auto relative px-4 z-10">
          <div className="section-title relative flex flex-wrap items-center justify-between border-b border-blueGray-300 pb-6 mb-8 lg:mb-14">
            <div>
              <h3 className="font-display text-blueGray-900 font-bold text-2xl lg:text-4xl">
                How It’s Works
              </h3>
              <span className="w-20	h-1.5	absolute -bottom-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <div className="how-work-box flex flex-col justify-between rounded transition duration-500 hover:shadow-lg p-6">
              <div className="how-work-icon relative rounded overflow-hidden pb-4">
                <img
                  className="w-14 h-14 object-contain"
                  src="assets/images/how-work-icon.svg"
                  alt="title"
                />
              </div>
              <div className="how-work-content">
                <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                  <Link to="/single">Set up your wallet</Link>
                </h3>
                <p className="font-body text-blueGray-600 mt-2">
                  Once you’ve set up your wallet of choice, connect it to
                  OpenSea by click the NFT Marketplace.
                </p>
              </div>
            </div>
            <div className="how-work-box flex flex-col justify-between rounded transition duration-500 hover:shadow-lg p-6">
              <div className="how-work-icon relative rounded overflow-hidden pb-4">
                <img
                  className="w-14 h-14 object-contain"
                  src="assets/images/how-work-icon2.svg"
                  alt="title"
                />
              </div>
              <div className="how-work-content">
                <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                  <Link to="/single">Create your collection</Link>
                </h3>
                <p className="font-body text-blueGray-600 mt-2">
                  Once you’ve set up your wallet of choice, connect it to
                  OpenSea by click the NFT Marketplace.
                </p>
              </div>
            </div>
            <div className="how-work-box flex flex-col justify-between rounded transition duration-500 hover:shadow-lg p-6">
              <div className="how-work-icon relative rounded overflow-hidden pb-4">
                <img
                  className="w-14 h-14 object-contain"
                  src="assets/images/how-work-icon3.svg"
                  alt="title"
                />
              </div>
              <div className="how-work-content">
                <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                  <Link to="/single">Add your NFTs</Link>
                </h3>
                <p className="font-body text-blueGray-600 mt-2">
                  Once you’ve set up your wallet of choice, connect it to
                  OpenSea by click the NFT Marketplace.
                </p>
              </div>
            </div>
            <div className="how-work-box flex flex-col justify-between rounded transition duration-500 hover:shadow-lg p-6">
              <div className="how-work-icon relative rounded overflow-hidden pb-4">
                <img
                  className="w-14 h-14 object-contain"
                  src="assets/images/how-work-icon4.svg"
                  alt="title"
                />
              </div>
              <div className="how-work-content">
                <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                  <Link to="/single">List them for sale</Link>
                </h3>
                <p className="font-body text-blueGray-600 mt-2">
                  Once you’ve set up your wallet of choice, connect it to
                  OpenSea by click the NFT Marketplace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  ====================== Blog Section =============================  */}
      <section className="blog-section my-20 lg:my-32">
        <div className="container mx-auto relative px-4 z-10">
          <div className="section-title relative flex flex-wrap items-center justify-between border-b border-blueGray-300 pb-6 mb-8 lg:mb-14">
            <div>
              <h3 className="font-display text-blueGray-900 font-bold text-2xl lg:text-4xl">
                Latest Blog
              </h3>
              <span className="w-20	h-1.5	absolute -bottom-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg" />
            </div>
            <Link
              to="/blog"
              className="arrow-btn block bg-indigo-100 text-indigo-500 text-sm text-sm font-body font-bold rounded py-2 px-4 transition duration-500 hover:bg-indigo-50"
            >
              See All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <div
              className="blog-box flex justify-between flex-col rounded transition duration-500 hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="content-top">
                <div className="blog-image md:h-64 relative rounded overflow-hidden mb-6">
                  <img
                    className="w-full md:h-64 object-cover"
                    src="assets/images/blog/1.jpg"
                    alt="title"
                  />
                </div>
                <div className="blog-content px-6">
                  <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                    <Link to="/single">
                      Mindfulness Activities for Kids &amp; Toddlers with NFT
                    </Link>
                  </h3>
                  <div className="flex flex-wrap font-body text-sm text-blueGray-600 mt-3 mb-5">
                    <p className="mr-4">
                      <img
                        className="w-4 h-4 inline-block mr-1"
                        src="assets/images/date-icon.svg"
                        alt="title"
                      />{" "}
                      02 Feb 2022
                    </p>
                    <p>
                      <img
                        className="w-4 h-4 inline-block mr-1"
                        src="assets/images/comment-icon.svg"
                        alt="title"
                      />{" "}
                      04 Comments
                    </p>
                  </div>
                  <p className="font-body text-blueGray-600 mb-5">
                    Poster to so only as who go accompany texts recommendation
                  </p>
                </div>
              </div>
              <div className="content-bottom px-6 pb-6">
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
            <div
              className="blog-box flex justify-between flex-col rounded transition duration-500 hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="content-top">
                <div className="blog-image md:h-64 relative rounded overflow-hidden mb-6">
                  <img
                    className="w-full md:h-64 object-cover"
                    src="assets/images/blog/2.jpg"
                    alt="title"
                  />
                </div>
                <div className="blog-content px-6">
                  <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                    <Link to="/single">
                      Save Thousands Of Lives Through This NFT
                    </Link>
                  </h3>
                  <div className="flex flex-wrap font-body text-sm text-blueGray-600 mt-3 mb-5">
                    <p className="mr-4">
                      <img
                        className="w-4 h-4 inline-block mr-1"
                        src="assets/images/date-icon.svg"
                        alt="title"
                      />{" "}
                      02 Feb 2022
                    </p>
                    <p>
                      <img
                        className="w-4 h-4 inline-block mr-1"
                        src="assets/images/comment-icon.svg"
                        alt="title"
                      />{" "}
                      04 Comments
                    </p>
                  </div>
                  <p className="font-body text-blueGray-600 mb-5">
                    Poster to so only as who go accompany texts recommendation
                  </p>
                </div>
              </div>
              <div className="content-bottom px-6 pb-6">
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
            <div
              className="blog-box flex justify-between flex-col rounded transition duration-500 hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="content-top">
                <div className="blog-image md:h-64 relative rounded overflow-hidden mb-6">
                  <img
                    className="w-full md:h-64 object-cover"
                    src="assets/images/blog/3.jpg"
                    alt="title"
                  />
                </div>
                <div className="blog-content px-6">
                  <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                    <Link to="/single">
                      Honoring Black History Month with Toddlers
                    </Link>
                  </h3>
                  <div className="flex flex-wrap font-body text-sm text-blueGray-600 mt-3 mb-5">
                    <p className="mr-4">
                      <img
                        className="w-4 h-4 inline-block mr-1"
                        src="assets/images/date-icon.svg"
                        alt="title"
                      />{" "}
                      02 Feb 2022
                    </p>
                    <p>
                      <img
                        className="w-4 h-4 inline-block mr-1"
                        src="assets/images/comment-icon.svg"
                        alt="title"
                      />{" "}
                      04 Comments
                    </p>
                  </div>
                  <p className="font-body text-blueGray-600 mb-5">
                    Poster to so only as who go accompany texts recommendation
                  </p>
                </div>
              </div>
              <div className="content-bottom px-6 pb-6">
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
            <div
              className="blog-box flex justify-between flex-col rounded transition duration-500 hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="content-top">
                <div className="blog-image md:h-64 relative rounded overflow-hidden mb-6">
                  <img
                    className="w-full md:h-64 object-cover"
                    src="assets/images/blog/4.jpg"
                    alt="title"
                  />
                </div>
                <div className="blog-content px-6">
                  <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                    <Link to="/single">NFT Market – A Compact the Big Benefits</Link>
                  </h3>
                  <div className="flex flex-wrap font-body text-sm text-blueGray-600 mt-3 mb-5">
                    <p className="mr-4">
                      <img
                        className="w-4 h-4 inline-block mr-1"
                        src="assets/images/date-icon.svg"
                        alt="title"
                      />{" "}
                      02 Feb 2022
                    </p>
                    <p>
                      <img
                        className="w-4 h-4 inline-block mr-1"
                        src="assets/images/comment-icon.svg"
                        alt="title"
                      />{" "}
                      04 Comments
                    </p>
                  </div>
                  <p className="font-body text-blueGray-600 mb-5">
                    Poster to so only as who go accompany texts recommendation
                  </p>
                </div>
              </div>
              <div className="content-bottom px-6 pb-6">
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
      </section>
      {/*  ====================== Footer Section =============================  */}
      <Footer />
    </div>
  );
};

export default Home3;
