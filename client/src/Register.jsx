import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Logo from "./Assets/naukri_Logo.png";
import Back from "./Assets/back.png";
import Avatar from "./Assets/form/avatar.svg";
import Avatar3 from "./Assets/form/email.svg";
import Avatar4 from "./Assets/form/id.svg";
import Avatar5 from "./Assets/form/phone.svg";
import Avatar6 from "./Assets/form/quali.svg";
import Avatar7 from "./Assets/form/spec.svg";

const Register = () => {
  const history = useHistory();
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [quali, setQual] = useState("");
  const [pincode, setPincode] = useState("");

  const disable =
    mobile === "" ||
    name === "" ||
    email === "" ||
    address === "" ||
    quali === "" ||
    pincode === "";

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
      <div className="heading">Register YourSelf</div>
      <div
        style={{
          display: "flex",
          width: "80%",
          margin: "1vh 10%",
          flexDirection: "column",
        }}
      >
        <div className="forms-div">
          <div className="icons-div">
            <img className="icons" src={Avatar} alt="" />
          </div>
          <div className="forminputs">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Your Name"
              type="text"
            />
          </div>
        </div>
        <div className="forms-div">
          <div className="icons-div">
            <img className="icons" src={Avatar5} alt="" />
          </div>
          <div className="forminputs">
            <input
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Enter Your Mobile Number"
              type="text"
            />
          </div>
        </div>
        <div className="forms-div">
          <div className="icons-div">
            <img className="icons" src={Avatar3} alt="" />
          </div>
          <div className="forminputs">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              type="text"
            />
          </div>
        </div>
        <div className="forms-div">
          <div className="icons-div">
            <img className="icons" src={Avatar7} alt="" />
          </div>
          <div className="forminputs">
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter Your Address"
              type="text"
            />
          </div>
        </div>
        <div className="forms-div">
          <div className="icons-div">
            <img className="icons" src={Avatar6} alt="" />
          </div>
          <div className="forminputs">
            <input
              value={quali}
              onChange={(e) => setQual(e.target.value)}
              placeholder="Enter Your Highest Qualification"
              type="text"
            />
          </div>
        </div>
        <div className="forms-div">
          <div className="icons-div">
            <img className="icons" src={Avatar4} alt="" />
          </div>
          <div className="forminputs">
            <input
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              placeholder="Enter Your Pincode"
              type="text"
            />
          </div>
        </div>
        <div>
          <button
            disabled={disable}
            onClick={() => history.push("/bankdetails", { mobile: mobile })}
            className="btn"
          >
            Next
          </button>
        </div>
      </div>
      <div className="bottom">
        Already a User?{" "}
        <span onClick={() => history.push("/login")} className="bb">
          Login Here
        </span>
      </div>
    </div>
  );
};

export default Register;
