import { memo, useCallback, useEffect, useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import { Typography } from "@mui/material";
import webgazer from "../../Scripts/Webgazer/index";
import nj from "numjs";
import { useNavigate } from "react-router-dom";
import "../WebgazerCanvas";
import "./../../PoDE/css/video.css";
import prosaccade from "./../Video/Fixation.mp4";
import ReactAudioPlayer from "react-audio-player";
import prosaccadeAudio from "./../../PoDE/Audio/prosaccade.mp3";
import { doc, updateDoc } from "firebase/firestore";
import db from "../firebase/firebaseConfig";
import {
  getStorage,
  ref,
  uploadString,
  getDownloadURL,
} from "firebase/storage";

const arrHead: string[] = [
  "time",
  "x",
  "y",
  "left-height",
  "left-x",
  "left-y",
  "right-height",
  "right-x",
  "right-y",
];

const Prosaccade: React.FC<any> = (props) => {
  const arr = useRef<string[][]>([arrHead]);

  useEffect(() => {
    webgazer.applyKalmanFilter(true);
    webgazer.showPredictionPoints(true);
    webgazer.setGazeListener(gazeListener);
    webgazer.resume();
  });
  const gazeListener = useCallback((data: any, clock: string): void => {
    // console.log(data);
    if (data) {
      // testCanvasData.current = data.eyeFeatures.left;
      // setTestCanvasToggle((x: boolean): boolean => !x);
      arr.current.push([
        clock,
        data.x,
        data.y,
        data.eyeFeatures.left.height,
        data.eyeFeatures.left.imagex,
        data.eyeFeatures.left.imagey,
        data.eyeFeatures.right.height,
        data.eyeFeatures.right.imagex,
        data.eyeFeatures.right.imagey,
      ]);
    }
  }, []);

  let navigate = useNavigate();
  useEffect(() => {
    const video = document.getElementById("bg-video") as HTMLVideoElement;
    video.loop = false;
    video.addEventListener("ended", function () {
      const csv: string = arr.current
        .map((fields: string[]): string => {
          return fields.join(",");
        })
        .join("\n");
      const dl: string = `data:text/csv,${csv}`;
      const storage = getStorage();
      const storageRef = ref(
        storage,
        `${props.id + " prosaccade " + Date() + ".csv"}`
      );

      // 'file' comes from the Blob or File API
      uploadString(storageRef, dl, "data_url").then((snapshot) => {
        getDownloadURL(storageRef).then((url) => {
          const docRef = doc(db, "Results", `${props.storageId}`);
          updateDoc(docRef, {
            Prosaccade: url,
          });
        });
      });
      // webgazer.showPredictionPoints(false);
      webgazer.pause();
      const btn = document.createElement("button");
      btn.innerHTML = "หน้าถัดไป";
      btn.setAttribute("class", "btn btn-info next-test-btn");
      btn.style.fontSize = "40px";
      btn.style.borderRadius = "45px";
      btn.style.fontFamily = "Anuphan";
      btn.addEventListener("click", function () {
        navigate("/antisaccade");

        // webgazer.pause();

        //   const csv = arr.map((fields) => fields.join(",")).join("\n");
        //   const dl = "data:text/csv;charset=utf-8," + csv;
        //   window.open(encodeURI(dl));
      });
      const parentDiv = document.getElementsByClassName("video-background")[0];
      parentDiv.appendChild(btn);
    });
  }, []);

  return (
    <div className="video-background">
      <video className="videoTag" id="bg-video" autoPlay muted loop>
        <source src={prosaccade} type="video/mp4" />
      </video>

      <ReactAudioPlayer src={prosaccadeAudio} autoPlay muted={false} />
    </div>
  );
};
export default memo(Prosaccade);
