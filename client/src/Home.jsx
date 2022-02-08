import React from "react";
import { useHistory } from "react-router-dom";
import Logo from "./Assets/naukri_Logo.png";
import loginicon from "./Assets/login.png";
import Bag1 from "./Assets/schoolbag.png";
import Bag2 from "./Assets/officebag.png";
import Menu from "./Assets/menu.png";

const Home = () => {
  const history = useHistory();
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
          style={{ height: "3vh", width: "10vw", marginBottom: "3vh" }}
          src={Menu}
          alt="back"
        />
      </div>
      <div className="login">
        <img
          onClick={() => history.push("/login")}
          style={{ height: "3vh", width: "10vw", marginBottom: "3vh" }}
          src={loginicon}
          alt="back"
        />
      </div>
      <div
        style={{
          height: "8vh",
          textAlign: "center",
          color: "#ffffff",
          fontStyle: "normal",
          background: "#000000",
          fontWeight: "600",
          paddingTop: "3vh",
          fontSize: "2.5vh",
        }}
      >
        Tell Us About Yourself
      </div>
      <div
        style={{
          display: "flex",
          width: "90%",
          margin: "5%",
          flexDirection: "column",
        }}
      >
        <div className="homecards">
          <img className="bags" src={Bag1} alt="bag1" />
          <div style={{ width: "100%" }}>
            <button onClick={() => history.push("/register")} className="btn">
              I am Fresher
            </button>
          </div>
          <div style={{ width: "70%", margin: "0 15%" }}>
            I have just graduated/I haven't worked after graduation
          </div>
        </div>
        <div className="homecards">
          <img className="bags" src={Bag2} alt="bag1" />
          <div style={{ width: "100%" }}>
            <button onClick={() => history.push("/register")} className="btn">
              I am Professional
            </button>
          </div>
          <div style={{ width: "70%", margin: "0 15%" }}>
            I have at least 1 month of work experience
          </div>
        </div>
        <div className="bottom">
          <span style={{ fontWeight: "600" }}>
            {" "}
            After you register,you can:
          </span>
          <div style={{ marginTop: "3vh" }}>
            - Apply to jobs from the site while keeping your resume hidden from
            all recruiters.
          </div>
          <div>
            - Mark yourself as a 'passive jobseeker' if you are not actively
            looking for a job.
          </div>
          <div>
            - Block your company or other specific companies from viewing your
            profile.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
