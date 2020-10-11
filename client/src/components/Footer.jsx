import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { AiFillTwitterCircle } from "react-icons/ai";

function Footer() {
  return (
    <div className="footer-container">
      <div className="d-flex justify-content-center">
        <div className="mt-5 footer-content">
          <div>
            <img
              className="image-brand mt-4"
              src={"/images/brand4.png"}
              alt="Logo"
            />
          </div>
          <div className="mt-5">
            <h4 className="text-center">Explore</h4>
            <h6 className="text-center mt-4">Home</h6>
            <h6 className="text-center mt-1">About</h6>
          </div>
          <div className="mt-5">
            <h4 className="text-center">Follow</h4>
            <h6 className="text-center mt-4">Facebook</h6>
            <h6 className="text-center mt-1">Instagram</h6>
            <h6 className="text-center mt-1">Twitter</h6>
          </div>
          <div className="mt-5">
            <h4 className="text-center">Legal</h4>
            <h6 className="text-center mt-4">Terms</h6>
            <h6 className="text-center mt-1">Privacy</h6>
          </div>
        </div>
      </div>
      <div>
      <div
        className="d-flex justify-content-center mt-5"
      >
        <div className="d-flex m-2">
          <h6 className="mr-3 h2">
            <FaFacebook />
          </h6>
          <h6 className="h2"> 
            <GrInstagram />
          </h6>
          <h6 className="ml-3 h2">
            <AiFillTwitterCircle />
          </h6>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <h6 className="mb-5">Copyright. All rights reserved.</h6>
      </div>
      </div>
    </div>
  );
}

export default Footer;