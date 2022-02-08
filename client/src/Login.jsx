import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Logo from "./Assets/naukri_Logo.png";
import Back from "./Assets/back.png";
import { message } from "antd";

const Login = () => {
  const history = useHistory();
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (mobile === "9891991598" && password === "aaK@97sh") {
      localStorage.setItem("auth", true);
      history.push("/admin");
    } else {
      message.error("Invalid Number and Password");
    }
  };

  return (
    <div className="background">
      <div
        style={{
          height: "8vh",
          textAlign: "center",
          paddingTop: "3vh",
        }}
      >
        <img src={Logo} alt="logo" />
      </div>
      <div className="back">
        <img
          onClick={() => history.goBack()}
          style={{ height: "3vh", width: "10vw" }}
          src={Back}
          alt="back"
        />
      </div>

      <div className="heading">Login Here</div>
      <div
        style={{
          display: "flex",
          width: "80%",
          margin: "1vh 10%",
          flexDirection: "column",
        }}
      >
        <div style={{ margin: "1vh 0" }}>
          <input
            placeholder="Enter Your Mobile Number"
            type="number"
            className="forminputs"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>

        <div style={{ margin: "1vh 0" }}>
          <input
            placeholder="Enter Your Password"
            type="password"
            className="forminputs"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            maxLength="10"
          />
        </div>
        <div>
          <button className="btn" onClick={() => handleSubmit()}>
            Login
          </button>
        </div>
        <div>
          <button className="btn">Sign In with Google</button>
        </div>
        <div>
          <button className="btn">Continue Using Email</button>
        </div>
      </div>
      <div className="bottom">
        Doesn't have a Account?{" "}
        <span onClick={() => history.push("/register")} className="bb">
          Signup Here
        </span>
      </div>
    </div>
  );
};

export default Login;
