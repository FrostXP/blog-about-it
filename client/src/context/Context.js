import { createContext, useEffect, useReducer, useState } from "react";
import Reducer from "./Reducer";
import axios from "axios";
import { useLocation } from "react-router";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
  const [home, setHome] = useState(false);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  // const [posts, setPost] = useState([]);
  // const { search } = useLocation();

  // useEffect(() => {
  //   const fetchPost = async () => {
  //     const res = await axios.get("/posts" + search);
  //     setPost(res.data);
  //     console.log(res.data, "Context page ");
  //   };
  //   fetchPost();
  // }, [search]);

  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
        home,
        // posts:,
      }}
    >
      {children}
    </Context.Provider>
  );
};
