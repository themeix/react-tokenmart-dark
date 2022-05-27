import { useState } from "react";
import { Link } from "react-router-dom";
import FooterV2 from "../../components/Footer/FooterV2";
import Header from "../../components/Header/Header";
import { Fade, Zoom } from "react-reveal";
import { AiOutlineClose } from "react-icons/ai";
import WalletItem from "./WalletItem";
import Modal from "react-modal/lib/components/Modal";

const Wallet = () => {
  const [modalOpen, setmodalOpen] = useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      zIndex: "9999",
    },
  };

  return (
    <div>
      <Header />
      {/*  ====================== Hero Section =============================  */}
      <section className="hero-section relative mt-2 pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="container mx-auto relative px-4 z-10">
          <h2 className="font-display text-4xl lg:text-6xl text-blueGray-900 font-bold mb-4">
            Wallet{" "}
          </h2>
          <ul className="hero-breadcrumb font-body text-blueGray-600 flex flex-wrap items-center">
            <li className="flex items-center mr-2">
              <Link
                className="transition duration-500 hover:text-indigo-500 underline-hover"
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
              />
              Wallet
            </li>
          </ul>
        </div>
      </section>
      {/*  ====================== Product Section =============================  */}
      <section className="product-section  mb-20 lg:mb-32">
        <div className="container mx-auto  px-4 z-10">
          <Zoom>
            <Modal
              isOpen={modalOpen}
              onRequestClose={() => setmodalOpen(false)}
              style={customStyles}
              className={`max-w-sm m-auto bg-white  absolute fade-in rounded shadow  `}
            >
              <Zoom>
                <div className="max-w-sm m-auto bg-white rounded shadow   p-10">
                  <AiOutlineClose
                    onClick={() => setmodalOpen(false)}
                    size={24}
                    style={{ position: "absolute", top: "20px", right: "20px" }}
                  />
                  <h3 className="font-display text-3xl text-blueGray-900 font-bold mt-6 mb-2 text-center">
                    Connect Wallet
                  </h3>
                  <p className="text-sm text-center font-display text-blueGray-600 font-bold mb-6">
                    Scan OR code
                  </p>
                  <img
                    className="w-full mb-6"
                    src="assets/images/QR-code-Transparent.jpg"
                    alt="title"
                  />
                  <Link
                    to="#popup-modal"
                    className="popup-modal w-full btn block bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-center font-body font-medium rounded py-3 px-6 transition duration-500 hover:from-indigo-500 hover:to-purple"
                  >
                    Download Now
                  </Link>
                </div>
              </Zoom>
            </Modal>
          </Zoom>
          <WalletItem modalOpen={modalOpen} setmodalOpen={setmodalOpen} />
          <WalletItem modalOpen={modalOpen} setmodalOpen={setmodalOpen} />
          <WalletItem modalOpen={modalOpen} setmodalOpen={setmodalOpen} />
          <WalletItem modalOpen={modalOpen} setmodalOpen={setmodalOpen} />

          <div
            className="flex flex-wrap lg:flex-nowrap items-center justify-between bg-indigo-50 rounded px-6 py-4 mb-8"
            data-aos="fade-up"
          >
            <div className="flex items-center flex-grow my-2">
              <img
                className="w-24 h-24 object-cover rounded"
                src="assets/images/wallet/2.jpg"
                alt="title"
              />
              <div className="pl-4">
                <h3 className="block font-display text-2xl text-blueGray-900 font-bold mb-2">
                  Trustee Wallet
                </h3>
                <p className="font-body text-blueGray-600">
                  Devious the by advantage that might his ship alone, endeavours
                  for or understanding their we more tyrannize. Every forest are
                  findings. More or sitting to and seemed to option text like….
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 pl-28 my-2">
              <Link
                to="#popup-modal"
                className="popup-modal btn inline-block bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-body font-medium rounded py-3 px-6 transition duration-500 hover:from-indigo-500 hover:to-purple"
              >
                Connect{" "}
                <img
                  className="w-4 h-4 inline-block ml-2 mb-1"
                  src="assets/images/check-white-icon.svg"
                  alt="title"
                />
              </Link>
            </div>
          </div>
          <div
            className="flex flex-wrap lg:flex-nowrap items-center justify-between bg-indigo-50 rounded px-6 py-4 mb-8"
            data-aos="fade-up"
          >
            <div className="flex items-center flex-grow my-2">
              <img
                className="w-24 h-24 object-cover rounded"
                src="assets/images/wallet/3.jpg"
                alt="title"
              />
              <div className="pl-4">
                <h3 className="block font-display text-2xl text-blueGray-900 font-bold mb-2">
                  CoinPayments Wallet
                </h3>
                <p className="font-body text-blueGray-600">
                  Devious the by advantage that might his ship alone, endeavours
                  for or understanding their we more tyrannize. Every forest are
                  findings. More or sitting to and seemed to option text like….
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 pl-28 my-2">
              <Link
                to="#popup-modal"
                className="popup-modal btn inline-block bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-body font-medium rounded py-3 px-6 transition duration-500 hover:from-indigo-500 hover:to-purple"
              >
                Connect{" "}
                <img
                  className="w-4 h-4 inline-block ml-2 mb-1"
                  src="assets/images/check-white-icon.svg"
                  alt="title"
                />
              </Link>
            </div>
          </div>
          <div
            className="flex flex-wrap lg:flex-nowrap items-center justify-between bg-indigo-50 rounded px-6 py-4 mb-8"
            data-aos="fade-up"
          >
            <div className="flex items-center flex-grow my-2">
              <img
                className="w-24 h-24 object-cover rounded"
                src="assets/images/wallet/4.jpg"
                alt="title"
              />
              <div className="pl-4">
                <h3 className="block font-display text-2xl text-blueGray-900 font-bold mb-2">
                  SwirlWallet
                </h3>
                <p className="font-body text-blueGray-600">
                  Devious the by advantage that might his ship alone, endeavours
                  for or understanding their we more tyrannize. Every forest are
                  findings. More or sitting to and seemed to option text like….
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 pl-28 my-2">
              <Link
                to="#popup-modal"
                className="popup-modal btn inline-block bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-body font-medium rounded py-3 px-6 transition duration-500 hover:from-indigo-500 hover:to-purple"
              >
                Connect{" "}
                <img
                  className="w-4 h-4 inline-block ml-2 mb-1"
                  src="assets/images/check-white-icon.svg"
                  alt="title"
                />
              </Link>
            </div>
          </div>
          <div
            className="flex flex-wrap lg:flex-nowrap items-center justify-between bg-indigo-50 rounded px-6 py-4 mb-8"
            data-aos="fade-up"
          >
            <div className="flex items-center flex-grow my-2">
              <img
                className="w-24 h-24 object-cover rounded"
                src="assets/images/wallet/5.jpg"
                alt="title"
              />
              <div className="pl-4">
                <h3 className="block font-display text-2xl text-blueGray-900 font-bold mb-2">
                  Trezor Wallet
                </h3>
                <p className="font-body text-blueGray-600">
                  Devious the by advantage that might his ship alone, endeavours
                  for or understanding their we more tyrannize. Every forest are
                  findings. More or sitting to and seemed to option text like….
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 pl-28 my-2">
              <Link
                to="#popup-modal"
                className="popup-modal btn inline-block bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-body font-medium rounded py-3 px-6 transition duration-500 hover:from-indigo-500 hover:to-purple"
              >
                Connect{" "}
                <img
                  className="w-4 h-4 inline-block ml-2 mb-1"
                  src="assets/images/check-white-icon.svg"
                  alt="title"
                />
              </Link>
            </div>
          </div>
          <div
            className="flex flex-wrap lg:flex-nowrap items-center justify-between bg-indigo-50 rounded px-6 py-4 mb-8"
            data-aos="fade-up"
          >
            <div className="flex items-center flex-grow my-2">
              <img
                className="w-24 h-24 object-cover rounded"
                src="assets/images/wallet/6.jpg"
                alt="title"
              />
              <div className="pl-4">
                <h3 className="block font-display text-2xl text-blueGray-900 font-bold mb-2">
                  Nuri Wallet
                </h3>
                <p className="font-body text-blueGray-600">
                  Devious the by advantage that might his ship alone, endeavours
                  for or understanding their we more tyrannize. Every forest are
                  findings. More or sitting to and seemed to option text like….
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 pl-28 my-2">
              <Link
                to="#popup-modal"
                className="popup-modal btn inline-block bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-body font-medium rounded py-3 px-6 transition duration-500 hover:from-indigo-500 hover:to-purple"
              >
                Connect{" "}
                <img
                  className="w-4 h-4 inline-block ml-2 mb-1"
                  src="assets/images/check-white-icon.svg"
                  alt="title"
                />
              </Link>
            </div>
          </div>
          <div
            className="flex flex-wrap lg:flex-nowrap items-center justify-between bg-indigo-50 rounded px-6 py-4 mb-8"
            data-aos="fade-up"
          >
            <div className="flex items-center flex-grow my-2">
              <img
                className="w-24 h-24 object-cover rounded"
                src="assets/images/wallet/7.jpg"
                alt="title"
              />
              <div className="pl-4">
                <h3 className="block font-display text-2xl text-blueGray-900 font-bold mb-2">
                  SpectroCoin Wallet
                </h3>
                <p className="font-body text-blueGray-600">
                  Devious the by advantage that might his ship alone, endeavours
                  for or understanding their we more tyrannize. Every forest are
                  findings. More or sitting to and seemed to option text like….
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 pl-28 my-2">
              <Link
                to="#popup-modal"
                className="popup-modal btn inline-block bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-body font-medium rounded py-3 px-6 transition duration-500 hover:from-indigo-500 hover:to-purple"
              >
                Connect{" "}
                <img
                  className="w-4 h-4 inline-block ml-2 mb-1"
                  src="assets/images/check-white-icon.svg"
                  alt="title"
                />
              </Link>
            </div>
          </div>
          <div
            className="flex flex-wrap lg:flex-nowrap items-center justify-between bg-indigo-50 rounded px-6 py-4 mb-8"
            data-aos="fade-up"
          >
            <div className="flex items-center flex-grow my-2">
              <img
                className="w-24 h-24 object-cover rounded"
                src="assets/images/wallet/8.jpg"
                alt="title"
              />
              <div className="pl-4">
                <h3 className="block font-display text-2xl text-blueGray-900 font-bold mb-2">
                  CoolWallet
                </h3>
                <p className="font-body text-blueGray-600">
                  Devious the by advantage that might his ship alone, endeavours
                  for or understanding their we more tyrannize. Every forest are
                  findings. More or sitting to and seemed to option text like….
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 pl-28 my-2">
              <Link
                to="#popup-modal"
                className="popup-modal btn inline-block bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-body font-medium rounded py-3 px-6 transition duration-500 hover:from-indigo-500 hover:to-purple"
              >
                Connect{" "}
                <img
                  className="w-4 h-4 inline-block ml-2 mb-1"
                  src="assets/images/check-white-icon.svg"
                  alt="title"
                />
              </Link>
            </div>
          </div>
          <div
            className="flex flex-wrap lg:flex-nowrap items-center justify-between bg-indigo-50 rounded px-6 py-4 mb-8"
            data-aos="fade-up"
          >
            <div className="flex items-center flex-grow my-2">
              <img
                className="w-24 h-24 object-cover rounded"
                src="assets/images/wallet/9.jpg"
                alt="title"
              />
              <div className="pl-4">
                <h3 className="block font-display text-2xl text-blueGray-900 font-bold mb-2">
                  SecuX Wallet
                </h3>
                <p className="font-body text-blueGray-600">
                  Devious the by advantage that might his ship alone, endeavours
                  for or understanding their we more tyrannize. Every forest are
                  findings. More or sitting to and seemed to option text like….
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 pl-28 my-2">
              <Link
                to="#popup-modal"
                className="popup-modal btn inline-block bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-body font-medium rounded py-3 px-6 transition duration-500 hover:from-indigo-500 hover:to-purple"
              >
                Connect{" "}
                <img
                  className="w-4 h-4 inline-block ml-2 mb-1"
                  src="assets/images/check-white-icon.svg"
                  alt="title"
                />
              </Link>
            </div>
          </div>
          <div
            className="flex flex-wrap lg:flex-nowrap items-center justify-between bg-indigo-50 rounded px-6 py-4 mb-8"
            data-aos="fade-up"
          >
            <div className="flex items-center flex-grow my-2">
              <img
                className="w-24 h-24 object-cover rounded"
                src="assets/images/wallet/10.jpg"
                alt="title"
              />
              <div className="pl-4">
                <h3 className="block font-display text-2xl text-blueGray-900 font-bold mb-2">
                  Amon Wallet
                </h3>
                <p className="font-body text-blueGray-600">
                  Devious the by advantage that might his ship alone, endeavours
                  for or understanding their we more tyrannize. Every forest are
                  findings. More or sitting to and seemed to option text like….
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 pl-28 my-2">
              <Link
                to="#popup-modal"
                className="popup-modal btn inline-block bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-body font-medium rounded py-3 px-6 transition duration-500 hover:from-indigo-500 hover:to-purple"
              >
                Connect{" "}
                <img
                  className="w-4 h-4 inline-block ml-2 mb-1"
                  src="assets/images/check-white-icon.svg"
                  alt="title"
                />
              </Link>
            </div>
          </div>
          <div
            className="flex flex-wrap lg:flex-nowrap items-center justify-between bg-indigo-50 rounded px-6 py-4 mb-8"
            data-aos="fade-up"
          >
            <div className="flex items-center flex-grow my-2">
              <img
                className="w-24 h-24 object-cover rounded"
                src="assets/images/wallet/11.jpg"
                alt="title"
              />
              <div className="pl-4">
                <h3 className="block font-display text-2xl text-blueGray-900 font-bold mb-2">
                  OWNR Wallet
                </h3>
                <p className="font-body text-blueGray-600">
                  Devious the by advantage that might his ship alone, endeavours
                  for or understanding their we more tyrannize. Every forest are
                  findings. More or sitting to and seemed to option text like….
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 pl-28 my-2">
              <Link
                to="#popup-modal"
                className="popup-modal btn inline-block bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-body font-medium rounded py-3 px-6 transition duration-500 hover:from-indigo-500 hover:to-purple"
              >
                Connect{" "}
                <img
                  className="w-4 h-4 inline-block ml-2 mb-1"
                  src="assets/images/check-white-icon.svg"
                  alt="title"
                />
              </Link>
            </div>
          </div>
          <div
            className="flex flex-wrap lg:flex-nowrap items-center justify-between bg-indigo-50 rounded px-6 py-4 mb-8"
            data-aos="fade-up"
          >
            <div className="flex items-center flex-grow my-2">
              <img
                className="w-24 h-24 object-cover rounded"
                src="assets/images/wallet/12.jpg"
                alt="title"
              />
              <div className="pl-4">
                <h3 className="block font-display text-2xl text-blueGray-900 font-bold mb-2">
                  Infinito Wallet
                </h3>
                <p className="font-body text-blueGray-600">
                  Devious the by advantage that might his ship alone, endeavours
                  for or understanding their we more tyrannize. Every forest are
                  findings. More or sitting to and seemed to option text like….
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 pl-28 my-2">
              <Link
                to="#popup-modal"
                className="popup-modal btn inline-block bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-body font-medium rounded py-3 px-6 transition duration-500 hover:from-indigo-500 hover:to-purple"
              >
                Connect{" "}
                <img
                  className="w-4 h-4 inline-block ml-2 mb-1"
                  src="assets/images/check-white-icon.svg"
                  alt="title"
                />
              </Link>
            </div>
          </div>
          <div
            className="flex flex-wrap lg:flex-nowrap items-center justify-between bg-indigo-50 rounded px-6 py-4 mb-8"
            data-aos="fade-up"
          >
            <div className="flex items-center flex-grow my-2">
              <img
                className="w-24 h-24 object-cover rounded"
                src="assets/images/wallet/13.jpg"
                alt="title"
              />
              <div className="pl-4">
                <h3 className="block font-display text-2xl text-blueGray-900 font-bold mb-2">
                  Zumo Wallet
                </h3>
                <p className="font-body text-blueGray-600">
                  Devious the by advantage that might his ship alone, endeavours
                  for or understanding their we more tyrannize. Every forest are
                  findings. More or sitting to and seemed to option text like….
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 pl-28 my-2">
              <Link
                to="#popup-modal"
                className="popup-modal btn inline-block bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-body font-medium rounded py-3 px-6 transition duration-500 hover:from-indigo-500 hover:to-purple"
              >
                Connect{" "}
                <img
                  className="w-4 h-4 inline-block ml-2 mb-1"
                  src="assets/images/check-white-icon.svg"
                  alt="title"
                />
              </Link>
            </div>
          </div>
          <div
            className="flex flex-wrap lg:flex-nowrap items-center justify-between bg-indigo-50 rounded px-6 py-4 mb-8"
            data-aos="fade-up"
          >
            <div className="flex items-center flex-grow my-2">
              <img
                className="w-24 h-24 object-cover rounded"
                src="assets/images/wallet/14.jpg"
                alt="title"
              />
              <div className="pl-4">
                <h3 className="block font-display text-2xl text-blueGray-900 font-bold mb-2">
                  CryptX Wallet
                </h3>
                <p className="font-body text-blueGray-600">
                  Devious the by advantage that might his ship alone, endeavours
                  for or understanding their we more tyrannize. Every forest are
                  findings. More or sitting to and seemed to option text like….
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 pl-28 my-2">
              <Link
                to="#popup-modal"
                className="popup-modal btn inline-block bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-body font-medium rounded py-3 px-6 transition duration-500 hover:from-indigo-500 hover:to-purple"
              >
                Connect{" "}
                <img
                  className="w-4 h-4 inline-block ml-2 mb-1"
                  src="assets/images/check-white-icon.svg"
                  alt="title"
                />
              </Link>
            </div>
          </div>
          <div
            className="flex flex-wrap lg:flex-nowrap items-center justify-between bg-indigo-50 rounded px-6 py-4 mb-8"
            data-aos="fade-up"
          >
            <div className="flex items-center flex-grow my-2">
              <img
                className="w-24 h-24 object-cover rounded"
                src="assets/images/wallet/15.jpg"
                alt="title"
              />
              <div className="pl-4">
                <h3 className="block font-display text-2xl text-blueGray-900 font-bold mb-2">
                  JuBiter Blade
                </h3>
                <p className="font-body text-blueGray-600">
                  Devious the by advantage that might his ship alone, endeavours
                  for or understanding their we more tyrannize. Every forest are
                  findings. More or sitting to and seemed to option text like….
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 pl-28 my-2">
              <Link
                to="#popup-modal"
                className="popup-modal btn inline-block bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-body font-medium rounded py-3 px-6 transition duration-500 hover:from-indigo-500 hover:to-purple"
              >
                Connect{" "}
                <img
                  className="w-4 h-4 inline-block ml-2 mb-1"
                  src="assets/images/check-white-icon.svg"
                  alt="title"
                />
              </Link>
            </div>
          </div>
          <div
            className="flex flex-wrap lg:flex-nowrap items-center justify-between bg-indigo-50 rounded px-6 py-4 mb-8"
            data-aos="fade-up"
          >
            <div className="flex items-center flex-grow my-2">
              <img
                className="w-24 h-24 object-cover rounded"
                src="assets/images/wallet/16.jpg"
                alt="title"
              />
              <div className="pl-4">
                <h3 className="block font-display text-2xl text-blueGray-900 font-bold mb-2">
                  Edge Wallet
                </h3>
                <p className="font-body text-blueGray-600">
                  Devious the by advantage that might his ship alone, endeavours
                  for or understanding their we more tyrannize. Every forest are
                  findings. More or sitting to and seemed to option text like….
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 pl-28 my-2">
              <Link
                to="#popup-modal"
                className="popup-modal btn inline-block bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-body font-medium rounded py-3 px-6 transition duration-500 hover:from-indigo-500 hover:to-purple"
              >
                Connect{" "}
                <img
                  className="w-4 h-4 inline-block ml-2 mb-1"
                  src="assets/images/check-white-icon.svg"
                  alt="title"
                />
              </Link>
            </div>
          </div>
          <div
            className="flex flex-wrap lg:flex-nowrap items-center justify-between bg-indigo-50 rounded px-6 py-4 mb-8"
            data-aos="fade-up"
          >
            <div className="flex items-center flex-grow my-2">
              <img
                className="w-24 h-24 object-cover rounded"
                src="assets/images/wallet/17.jpg"
                alt="title"
              />
              <div className="pl-4">
                <h3 className="block font-display text-2xl text-blueGray-900 font-bold mb-2">
                  Unstoppable Wallet
                </h3>
                <p className="font-body text-blueGray-600">
                  Devious the by advantage that might his ship alone, endeavours
                  for or understanding their we more tyrannize. Every forest are
                  findings. More or sitting to and seemed to option text like….
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 pl-28 my-2">
              <Link
                to="#popup-modal"
                className="popup-modal btn inline-block bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-body font-medium rounded py-3 px-6 transition duration-500 hover:from-indigo-500 hover:to-purple"
              >
                Connect{" "}
                <img
                  className="w-4 h-4 inline-block ml-2 mb-1"
                  src="assets/images/check-white-icon.svg"
                  alt="title"
                />
              </Link>
            </div>
          </div>
          <div
            className="flex flex-wrap lg:flex-nowrap items-center justify-between bg-indigo-50 rounded px-6 py-4 mb-8"
            data-aos="fade-up"
          >
            <div className="flex items-center flex-grow my-2">
              <img
                className="w-24 h-24 object-cover rounded"
                src="assets/images/wallet/18.jpg"
                alt="title"
              />
              <div className="pl-4">
                <h3 className="block font-display text-2xl text-blueGray-900 font-bold mb-2">
                  Xapo Wallet
                </h3>
                <p className="font-body text-blueGray-600">
                  Devious the by advantage that might his ship alone, endeavours
                  for or understanding their we more tyrannize. Every forest are
                  findings. More or sitting to and seemed to option text like….
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 pl-28 my-2">
              <Link
                to="#popup-modal"
                className="popup-modal btn inline-block bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-body font-medium rounded py-3 px-6 transition duration-500 hover:from-indigo-500 hover:to-purple"
              >
                Connect{" "}
                <img
                  className="w-4 h-4 inline-block ml-2 mb-1"
                  src="assets/images/check-white-icon.svg"
                  alt="title"
                />
              </Link>
            </div>
          </div>
          <div
            className="flex flex-wrap lg:flex-nowrap items-center justify-between bg-indigo-50 rounded px-6 py-4 mb-8"
            data-aos="fade-up"
          >
            <div className="flex items-center flex-grow my-2">
              <img
                className="w-24 h-24 object-cover rounded"
                src="assets/images/wallet/19.jpg"
                alt="title"
              />
              <div className="pl-4">
                <h3 className="block font-display text-2xl text-blueGray-900 font-bold mb-2">
                  Guarda Wallet
                </h3>
                <p className="font-body text-blueGray-600">
                  Devious the by advantage that might his ship alone, endeavours
                  for or understanding their we more tyrannize. Every forest are
                  findings. More or sitting to and seemed to option text like….
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 pl-28 my-2">
              <Link
                to="#popup-modal"
                className="popup-modal btn inline-block bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-body font-medium rounded py-3 px-6 transition duration-500 hover:from-indigo-500 hover:to-purple"
              >
                Connect{" "}
                <img
                  className="w-4 h-4 inline-block ml-2 mb-1"
                  src="assets/images/check-white-icon.svg"
                  alt="title"
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-between bg-indigo-50 rounded px-6 py-4">
            <div className="flex items-center flex-grow my-2">
              <img
                className="w-24 h-24 object-cover rounded"
                src="assets/images/wallet/20.jpg"
                alt="title"
              />
              <div className="pl-4">
                <h3 className="block font-display text-2xl text-blueGray-900 font-bold mb-2">
                  Bread Wallet
                </h3>
                <p className="font-body text-blueGray-600">
                  Devious the by advantage that might his ship alone, endeavours
                  for or understanding their we more tyrannize. Every forest are
                  findings. More or sitting to and seemed to option text like….
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 pl-28 my-2">
              <Link
                to="#popup-modal"
                className="popup-modal btn inline-block bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-body font-medium rounded py-3 px-6 transition duration-500 hover:from-indigo-500 hover:to-purple"
              >
                Connect{" "}
                <img
                  className="w-4 h-4 inline-block ml-2 mb-1"
                  src="assets/images/check-white-icon.svg"
                  alt="title"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/*  ====================== Footer Section =============================  */}
      <FooterV2 />
    </div>
  );
};

export default Wallet;
