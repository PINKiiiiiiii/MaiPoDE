import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "./components/firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import SignupUser from "./components/SignupUser";
import NavbarDoc from "./components/NavbarDoc";
import WebgazerCanvas from "./components/WebgazerCanvas";
import Fixation from "./components/Test/Fixation";
import "./Styles/Style.css";
import Prosaccade from "./components/Test/Prosaccade";
import Antisaccade from "./components/Test/Antisaccade";
import Smoothpursuit from "./components/Test/Smoothpursuit";
import VpcTask from "./components/Test/VpcTask";
import BasicDocument from "./components/BasicDocument";
import { collection, query, where, getDocs } from "firebase/firestore";
import db from "./components/firebase/firebaseConfig";

function App(props) {
  const [id, setId] = useState("");
  const [storageId, setStorageId] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      const getId = async () => {
        const q = query(
          collection(db, "Users"),
          where("Email", "==", user.email)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          setId(doc.id);
        });
      };
      getId();
    });
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignupUser setId={setId} />} />
      <Route
        path="signedin/*"
        element={<Navbar id={id} storageId={storageId} />}
      />
      <Route path="admin/*" element={<NavbarDoc />} />
      <Route
        path="/calibrate"
        element={<WebgazerCanvas id={id} setStorageId={setStorageId} />}
      />
      <Route
        path="/fixation"
        element={<Fixation id={id} storageId={storageId} />}
      />
      <Route
        path="/prosaccade"
        element={<Prosaccade id={id} storageId={storageId} />}
      />
      <Route
        path="/antisaccade"
        element={<Antisaccade id={id} storageId={storageId} />}
      />
      <Route
        path="/smoothpursuit"
        element={<Smoothpursuit id={id} storageId={storageId} />}
      />
      <Route
        path="/vpctask"
        element={<VpcTask id={id} storageId={storageId} />}
      />
      <Route
        path="report"
        element={<BasicDocument id={id} storageId={storageId} />}
      />
    </Routes>
  );
}

export default App;
