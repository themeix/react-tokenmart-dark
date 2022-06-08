import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { OuterClick } from "react-outer-click";
import ReactDom from "react-dom";
import { Link } from "react-router-dom";
import ReactModal from "react-modal";
const ConnectWalletModal = ({ modalOpen, setmodalOpen }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0",
      width: "auto",
      height: "max-content",
      borderRadius: "10px",
    },
  };
  return (
    <>
      <ReactModal
        className="p-10    h-auto fixed inset-0 z-50 outline-none focus:outline-none"
        isOpen={modalOpen}
        onRequestClose={() => setmodalOpen(false)}
        style={customStyles}
      >
        <OuterClick onOuterClick={() => setmodalOpen(false)}>
          <div>
            <div
              style={{ height: "max-content" }}
              className="max-w-sm m-auto bg-white rounded shadow zoom  p-10 "
            >
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
          </div>
        </OuterClick>
      </ReactModal>
    </>
  );
};

export default ConnectWalletModal;
