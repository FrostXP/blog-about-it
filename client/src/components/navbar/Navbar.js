import { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../../context/Context";

import "./Navbar.css";
// import Post from "../post/Post";

const Navbar = () => {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";
  const inputRef = useRef();
  const location = useLocation;
  const [input, setInput] = useState("");
  // const [home, setHome] = useState(false);
  const { home } = useContext(Context);
  const inputHandler = async (e) => {
    setInput(inputRef);
    console.log(inputRef);
  };

  console.log(user);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  const { posts } = useContext(Context);
  useEffect(() => {
    console.log(posts);
  }, []);
  const url = window.location.href;
  // console.log(url);
  // useEffect(() => {
  //   if (url === "http://localhost:3000/") {
  //     setHome(true);
  //   } else {
  //     setHome(false);
  //   }
  // }, [location]);

  // const SearchHandler = async (req, res, next) => {
  //   // get the user input
  //   // submit request to server http://localhost:5000/server/posts/?search=user intered value
  //   // update the context api

  //   //method 2
  //   //  filter posts that exist in context by the user entere value and update the context posts
  // };
  // SearchHandler();
  // const home = url.toLocaleLowerCase().includes("home");
  //trying to show the search only on home page
  // console.log(url);
  return (
    <div className="nav">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-pinterest"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              Write
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            <Link className="link" to="/">
              {user && "Logout"}
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF + user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
      <div className=" me-auto container-fluid">
        <form className="me-auto d-flex">
          <input
            className="navbarSearch  me-auto form-control me-2"
            type="search"
            name="search"
            placeholder="Search"
            aria-label="Search"
            ref={inputRef}
            onChange={inputHandler}
          />
          <button
            className="btn btn-outline-success"
            type="submit"
            // onClick={SearchHandler}
          >
            Search
          </button>
        </form>
      </div>
      {/* {home && (
        <div className=" me-auto container-fluid">
          <form className="me-auto d-flex">
            <input
              className="navbarSearch  me-auto form-control me-2"
              type="search"
              name="search"
              placeholder="Search"
              aria-label="Search"
              ref={inputRef}
              onChange={inputHandler}
            />
            <button
              className="btn btn-outline-success"
              type="submit"
              // onClick={SearchHandler}
            >
              Search
            </button>
          </form>
        </div>
      )} */}
    </div>
  );
};

export default Navbar;
