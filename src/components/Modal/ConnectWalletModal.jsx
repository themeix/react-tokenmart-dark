import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Modal } from "react-responsive-modal";
import { Link } from "react-router-dom";
import "react-responsive-modal/styles.css";
const ConnectWalletModal = ({ modalOpen, setmodalOpen }) => {
  return (
    <>
      <Modal
        open={modalOpen}
        onClose={() => setmodalOpen(false)}
        classNames={{
          modalAnimationIn: "zoomIn",
        }}
        animationDuration={800}
      >
        <div
          style={{ height: "max-content" }}
          className="max-w-sm m-auto bg-white rounded shadow   p-10 fixed inset-0 z-50 "
        >
          <AiOutlineClose
            onClick={() => setmodalOpen(false)}
            size={24}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              color: "#fff",
            }}
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
            className="popup-modal w-full btn block bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-center font-body font-medium rounded py-3 px-6 transition duration-500 hover:to-indigo-500 hover:to-purple-500"
          >
            Download Now
          </Link>
        </div>
      </Modal>
    </>
  );
};

export default ConnectWalletModal;
