import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import io from "socket.io-client";
import Logo from "./Assets/naukri_Logo.png";

let socket;
const host = "https://websocket-testapp-node.herokuapp.com/";

const Admin = () => {
  const [msgs, setMsgs] = useState([]);
  const [auth, setAuth] = useState(true);
  useEffect(() => {
    socket = io(host);
    socket.emit("join", { mobile: "0000000000" }, (error) => {
      if (error) {
        alert(error);
      }
    });
    if (localStorage.auth === "undefined") {
      setAuth(false);
    }

    return () => {
      socket.off();
    };
  }, []);

  useEffect(() => {
    socket.on("message", (message) => {
      setMsgs([...msgs, message]);
    });
  }, [msgs]);

  if (!auth) {
    return <Redirect to={{ pathname: "/login" }} />;
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
      <div className="heading">Welcome Admin </div>
      <div className="chat-div">
        {msgs.length !== 0 &&
          msgs.map((data, index) => (
            <div
              style={{
                background: "rgba(0, 0, 0, 0.06)",
                color: "#000000",
                margin: "3vh 2vh",
                marginLeft: "2vh",
                width: "fit-content",
                padding: "1.5vh 1.5vw",
                borderRadius: "20px",
                fontFamily: "Roboto, sans-serif",
                fontStyle: "normal",
                fontWeight: "lighter",
                fontSize: "2vh",
                maxWidth: "60%",
                wordBreak: "break-word",
              }}
              key={index}
            >
              {data.text}{" "}
            </div>
          ))}{" "}
      </div>
      <form>
        <script
          src="https://checkout.razorpay.com/v1/payment-button.js"
          data-payment_button_id="pl_I04uenSafsu6S7"
          async
        >
          {" "}
        </script>{" "}
      </form>
    </div>
  );
};

export default Admin;
