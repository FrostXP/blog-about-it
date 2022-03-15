import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
const Sidebar = () => {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img
          className="sidebarImg"
          src="https://images.unsplash.com/photo-1568226127838-28d6c3a95636?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=422&q=80"
          alt="Stars in the Sky"
        ></img>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
          provident eius error labore optio ea quidem ad?
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Space</li>
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">God</li>
          <li className="sidebarListItem">Meditaion</li>
          {cats.map((c) => (
            <Link to={"/?cat=${c.name}"} className="link">
              {/* <li className="sidebarListItem">{c.name}</li> */}
            </Link>
          ))}
        </ul>
        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-facebook-square"></i>
            <i className="sidebarIcon fa-brands fa-twitter"></i>
            <i className="sidebarIcon fa-brands fa-pinterest"></i>
            <i className="sidebarIcon fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
