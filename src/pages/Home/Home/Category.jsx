import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <section className="category-section my-20 lg:my-32">
      <div className="container mx-auto relative px-4 z-10">
        <div className="section-title flex flex-wrap items-center justify-between mb-8 lg:mb-14">
          <div className="flex items-center mb-3">
            <span className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg w-10 h-10 mr-4">
              <img
                className="w-4 h-4"
                src="assets/images/sec-icon1.svg"
                alt="title"
              />
            </span>
            <h3 className="font-display text-blueGray-900 font-bold text-2xl lg:text-4xl">
              NFT Collections
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
          <div
            className="category-box relative rounded overflow-hidden"
            data-aos="fade-up"
          >
            <img
              className="w-full sm:h-72 object-cover"
              src="assets/images/product/7.gif"
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
  );
};

export default Category;
