import { memo, useCallback, useEffect, useRef } from "react";
import webgazer from "../../Scripts/Webgazer/index";
import { useNavigate } from "react-router-dom";
import "../WebgazerCanvas";
import "./../../PoDE/css/video.css";
import fixation from "./../Video/Fixation.mp4";
import ReactAudioPlayer from "react-audio-player";
import fixationAudio from "./../../PoDE/Audio/Fixation.mp3";
import { doc, updateDoc } from "firebase/firestore";
import db from "../firebase/firebaseConfig";
import { getStorage, ref, uploadString } from "firebase/storage";

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

const Fixation: React.FC<any> = (props) => {
  const arr = useRef<string[][]>([arrHead]);
  useEffect(() => {
    webgazer.setGazeListener(gazeListener);
    webgazer.applyKalmanFilter(true);
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
      const DateNow = Date();
      const storageRef = ref(
        storage,
        `${props.id + " fixation " + DateNow + ".csv"}`
      );

      // 'file' comes from the Blob or File API
      uploadString(storageRef, dl, "data_url");
      const docRef = doc(db, "Results", `${props.storageId}`);
      updateDoc(docRef, {
        Fixation: `${props.id + " fixation " + DateNow + ".csv"}`,
      });

      // webgazer.showPredictionPoints(false);
      webgazer.pause();
      // webgazer.showPredictionPoints(false);
      const btn = document.createElement("button");
      btn.innerHTML = "หน้าถัดไป";
      btn.setAttribute("class", "btn btn-info next-test-btn");
      btn.style.fontSize = "40px";
      btn.style.borderRadius = "45px";
      btn.style.fontFamily = "Anuphan";
      btn.addEventListener("click", function () {
        navigate("/prosaccade");
        // webgazer.pause();

        // .then(() => {
        //   console.log(link);
        //   });

        //   const csv = arr.map((fields) => fields.join(",")).join("\n");
        //   const dl = "data:text/csv;charset=utf-8," + csv;
        //   window.open(encodeURI(dl));
      });
      const parentDiv = document.getElementsByClassName("video-background")[0];
      parentDiv.appendChild(btn);
    });
  }, [navigate, props.id, props.storageId]);

  return (
    <div className="video-background">
      <video className="videoTag" id="bg-video" autoPlay muted loop>
        <source src={fixation} type="video/mp4" />
      </video>

      <ReactAudioPlayer src={fixationAudio} autoPlay muted={false} />
    </div>
  );
};
export default memo(Fixation);
