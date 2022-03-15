import React from "react";
import errorPage from "./errorPage.css";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <>
      <div className="contact">
        <div>
          {" "}
          <img
            className="errorImg"
            src="https://media.istockphoto.com/photos/error-concept-poster-toy-robotic-computer-with-light-bulb-and-broken-picture-id1281161812?s=2048x2048"
          />
        </div>

        <div className="errorSubMsg1 ">Page Cannot be found</div>
        <div className="errorSubMsg2">Why don't you blog about it.</div>

        <Link className="link" to="/write">
          <button className=" errBtn btn btn-primary " type="button">
            Blog About It
          </button>
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
