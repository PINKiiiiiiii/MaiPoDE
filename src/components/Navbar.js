import { Navigate, NavLink, useNavigate } from "react-router-dom";
import logo from "./Picture/Logo.png";
import { Routes, Route } from "react-router-dom";
import Aboutus from "./Aboutus";
import Home from "./Home";
import Test from "./Test";
import Records from "./Records";
import Alzheimer from "./Alzheimer";
import Result from "./Result";
import HomeDoc from "./HomeDoc";
import ResultDoc from "./ResultDoc";
import React, { useState, useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";
import WebgazerCanvas from "./WebgazerCanvas";
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import db from "./firebase/firebaseConfig";

function Navbar(props) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  // const [id, setId] = useState("");

  useEffect(() => {
    console.log(props.storageId);
    onAuthStateChanged(auth, (user) => {
      // console.log(id);
      if (!user) {
        navigate("/");
      }
    });
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const getName = async () => {
    const docRef = doc(db, "Users", props.id);
    const name = await getDoc(docRef);
    const n = name.data().Name.First;
    setUsername(n);
  };
  getName();

  return (
    <div>
      <nav className="navbar navbar-expand bg-navbar fixed-top">
        <div
          className="container-fluid"
          style={{ paddingLeft: "10vh", paddingRight: "10vh" }}
        >
          <img style={{ height: "50px" }} />
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="mx-lg-3">
                <NavLink className="nav-link" to="/signedin/home">
                  <img src={logo} style={{ height: "3vh" }} />
                </NavLink>
              </li>
              <li className="mx-lg-3">
                <NavLink className="nav-link" to="/signedin/home">
                  <h5>????????????????????????</h5>
                </NavLink>
              </li>
              <li className="mx-lg-3">
                <NavLink className="nav-link" to="/signedin/test">
                  <h5>????????????????????????</h5>
                </NavLink>
              </li>
              <li className="mx-lg-3">
                <NavLink className="nav-link" to="/signedin/records">
                  <h5>???????????????</h5>
                </NavLink>
              </li>
              <li className="mx-lg-3">
                <NavLink className="nav-link" to="/signedin/alzheimer's">
                  <h5>?????????????????????</h5>
                </NavLink>
              </li>
              <li className="mx-lg-3">
                <NavLink className="nav-link" to="/signedin/aboutus">
                  <h5>????????????????????????????????????</h5>
                </NavLink>
              </li>
            </ul>

            <ul className="navbar-nav" style={{ marginRight: "1rem" }}>
              <h5>{username}</h5>
            </ul>
            <ul className="navbar-nav mb-0 mb-lg-0">
              <button
                className="btn btn-blue"
                onClick={handleLogout}
                type="submit"
              >
                <span>??????????????????????????????</span>
              </button>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="test" element={<Test id={props.id} />} />
        <Route
          path="records"
          element={<Records id={props.id} finish={props.finish} />}
        />
        <Route path="alzheimer's" element={<Alzheimer />} />
        <Route path="aboutus" element={<Aboutus />} />
        <Route path="result" element={<Result storageId={props.storageId} />} />
      </Routes>
    </div>
  );
}

export default Navbar;
