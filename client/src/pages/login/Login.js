import axios from "axios";
import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching, user } = useContext(Context);
  const [submitted, setSubmitted] = useState(false);
  const [nameValid, setNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [inputUser, setInputUser] = useState("");
  const [email, setEmail] = useState("");

  // const [required,]
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });

    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });

      // window.location.replace("/");
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data, user });
      setTimeout(() => {
        setSubmitted(true);
      }, 100);
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  const nameHandler = async (e) => {
    setInputUser(e.target.value);
    if (inputUser.length < 5 || inputUser.length > 16) {
      setNameValid(false);
    } else {
      setNameValid(true);
    }
  };
  const passwordHandler = async (e) => {
    setEmail(e.target.value);
    if (email.length < 5 || email.length > 16) {
      setEmailValid(false);
    } else {
      setEmailValid(true);
    }
  };
  if (submitted) {
    // return window.location.replace("/");
    navigate("/");
  }
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className={!nameValid ? "isInvalid loginInput" : "loginInput"}
          placeholder="Enter username..."
          ref={userRef}
          onChange={nameHandler}
        />
        {!nameValid && <p>name invalid</p>}
        <label>Password</label>
        <input
          className={!emailValid ? "isInvalid loginInput" : "loginInput"}
          type="password"
          placeholder="Enter password..."
          ref={passwordRef}
          onChange={passwordHandler}
        />
        {!emailValid && <p>password invalid</p>}
        <button
          className="loginButton"
          type="submit"
          disabled={isFetching}
          onSubmit={() => navigate("/", { replace: true })}
        >
          Login
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          {" "}
          Register
        </Link>
      </button>
    </div>
  );
};

export default Login;
