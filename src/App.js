import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./assets/css/custom.css";
import "./assets/css/tailwind.css";
import "./assets/css/typofix.css";
import "./assets/css/vendors.css";
import "./assets/css/app.min.css";
import Home2 from "./pages/Home/Home2";
import Home3 from "./pages/Home/Home3";
import ExploreV1 from "./pages/Explore/ExploreV1";
import ExploreV2 from "./pages/Explore/ExploreV2";
import ItemDetails from "./pages/ItemDetails/ItemDetails";
import ItemDetailsV2 from "./pages/ItemDetails/ItemDetailsV2";
import ItemDetailsV3 from "./pages/ItemDetails/ItemDetailsV3";
import Wallet from "./pages/Wallet/Wallet";
import CreateItem from "./pages/CreateItem/CreateItem";
import CreatorPublished from "./pages/CreatorPublished/CreatorPublished";
import CreatorFollower from "./pages/CreatorFollower/CreatorFollower";
import CreatorActivity from "./pages/CreatorActivity/CreatorActivity";
import Login from "./pages/Auth/Login";
import ForgetPassword from "./pages/Auth/ForgetPassword";
import Register from "./pages/Auth/Register";
import BlogDetails from "./pages/Blog/BlogDetails";
import BlogCategory from "./pages/Blog/BlogCategory";
import BlogTag from "./pages/Blog/BlogTag";
import BlogGrid from "./pages/Blog/BlogGrid";
import Activity from "./pages/Activity/Activity";
import Contact from "./pages/Contact/Contact";
import TermCondition from "./pages/TermCondition/TermCondition";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home2" element={<Home2 />} />
          <Route path="/home3" element={<Home3 />} />

          <Route path="/explore" element={<ExploreV1 />} />
          <Route path="/explore2" element={<ExploreV2 />} />

          <Route path="/item-single" element={<ItemDetails />} />
          <Route path="/item-single2" element={<ItemDetailsV2 />} />
          <Route path="/item-single3" element={<ItemDetailsV3 />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/create-item" element={<CreateItem />} />
          <Route path="/creator-published" element={<CreatorPublished />} />
          <Route path="/creator-follower" element={<CreatorFollower />} />
          <Route path="/creator-activity" element={<CreatorActivity />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forget-password" element={<ForgetPassword />} />

          <Route path="/single" element={<BlogDetails />} />
          <Route path="/category" element={<BlogCategory />} />
          <Route path="/tag" element={<BlogTag />} />
          <Route path="/blog" element={<BlogGrid />} />

          <Route path="/activity" element={<Activity />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/term-condition" element={<TermCondition />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
