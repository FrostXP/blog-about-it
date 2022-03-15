import { useContext, useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router";
import { Context } from "../../context/Context";
const Home = () => {
  const [posts, setPost] = useState([]);
  const { search } = useLocation();
  // const { home } = useContext(Context);
  const [home, setHome] = useState(true);
  const url = window.location.href;
  // console.log(url);
  // useEffect(() => {
  //   if (url === "http://localhost:3000/") {
  //     setHome(true);
  //   } else {
  //     setHome(false);
  //   }
  // }, [location]);

  console.log(home);
  // useEffect(() => {
  //   setHome(true);
  // }, []);
  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("/posts" + search);
      setPost(res.data);
      console.log(res.data, "Home page ");
    };
    fetchPost();
  }, [search]);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />

        <Sidebar />
      </div>
    </>
  );
};

export default Home;
