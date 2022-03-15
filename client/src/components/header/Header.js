import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog </span>
        <img
          className="headerImg"
          src="https://images.unsplash.com/photo-1555392660-4f93688b1f21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Stars in the Sky"
        ></img>
      </div>
    </div>
  );
};

export default Header;
