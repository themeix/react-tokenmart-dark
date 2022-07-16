import React from "react";
import { Helmet } from "react-helmet";
import FooterV2 from "../../../components/Footer/FooterV2";
import Header from "../../../components/Header/Header";
import { products } from "../../Explore/itemdata";
import BlogsSection from "./BlogsSection";
import FeaturedAuctions from "./FeaturedAuctions";
import HotAuctions from "./HotAuctions";
import ProductsSection from "./ProductsSection";
import SellerLeaderBoard from "./SellerLeaderBoard";
import SwiperSlider from "./SwiperSlider";

const Home2 = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home 2 || Tokenmart - Largest online marketplace</title>
      </Helmet>
      <Header />
      {/*  ====================== Hero Section =============================  */}

      <SwiperSlider />

      {/*  ====================== Product Section =============================  */}
      <HotAuctions />
      {/*  ====================== Seller Leaderboard =============================  */}
      <SellerLeaderBoard />

      {/*  ====================== Product Section =============================  */}
      <ProductsSection />
      {/*  ====================== Blog Section =============================  */}
      <BlogsSection />
      {/*  ====================== Product Section =============================  */}
      <FeaturedAuctions products={products} />

      {/*  ====================== Footer Section =============================  */}
      <FooterV2 />
    </div>
  );
};

export default Home2;
