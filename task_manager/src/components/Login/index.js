import Cookies from "js-cookie";
import { useNavigate, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { useUrl } from "../../App";
import "./index.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw]=useState(false);
  const [isFail, setIsFail] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  const {URL}=useUrl();

  const checkDetails = async (ev) => {
    ev.preventDefault();
    const url = URL+"/login";
    console.log(url);
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    };

    try{
      const response = await fetch(url, options);
      const data = await response.json();

      if (response.ok) {
        Cookies.set("jwt_token", data.jwt_token, { expires: 30 });
        setIsFail(false);
        navigate("/", { replace: true });
      } else {
        setIsFail(true);
        setErrMsg(data.message);
      }
    } catch(er){
      console.log(er.message);
      setIsFail(true);
      setErrMsg(er.message);
    }
  };

  if (Cookies.get("jwt_token")) {
    return <Navigate to="/" />;
  }

  return (
    <div className="login-page">
      <form className="login-container" onSubmit={checkDetails}>
        <div className="display-logo">
          <h1 className="login-text">Login</h1>
        </div>
        <label htmlFor="username" className="label">USERNAME</label>
        <br />
        <input
          id="username"
          placeholder="Username"
          type="text"
          className="input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label htmlFor="password" className="label">PASSWORD</label>
        <br />
        <input
          id="password"
          type={showPw?"text":"password"}
          className="input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br/>
        <span>
          <input id="checkbox" type="checkbox" value={showPw} onClick={e=>setShowPw(e.target.checked)}/>
          <label className="label" htmlFor="checkbox">Show Password</label>
        </span>
        <br />
        <button className="login-button" type="submit">Login</button>
        {isFail && <p className="err-display">{`*${errMsg}`}</p>}
        <p className="register-note">
          If you do not have an account, <Link className="signup-link" to="/Register">click here to Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
