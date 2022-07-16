import React from "react";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import BlogsSection from "./BlogsSection";
import Category from "./Category";
import Hero from "./Hero";
import ProductsSection from "./ProductsSection";
import TopSellers from "./TopSellers";

const Home = () => {
  return (
    <>
      <div>
        <Header />
        {/*  ====================== Hero Section =============================  */}
       <Hero/>
        {/*  ====================== Category Section =============================  */}
     <Category/>
        {/*  ====================== Product Section =============================  */}
        <ProductsSection />
        {/*  ====================== Top Seller Section =============================  */}
        <TopSellers />
        {/*  ====================== Blog Section =============================  */}
        <BlogsSection />
        {/*  ====================== Footer Section =============================  */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
