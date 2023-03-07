import Circle from "react-circle";
import { useEffect, useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import webgazer from "../Scripts/Webgazer/index";
import BarChart from "./BarChart";
import Percent from "./Picture/Percent.png";
import Green from "./Picture/Green.png";
import Yellow from "./Picture/Yellow.png";
import Orange from "./Picture/Orange.png";
import Red from "./Picture/Red.png";
import db from "./firebase/firebaseConfig";
import { collection, addDoc, query, doc, getDoc } from "firebase/firestore";

function Result(props) {
  console.log(props.storageId);
  const [result, setResult] = useState(0);
  // useEffect(() => {
  //   const docRef = doc(db, "Results", `${props.storageId}`);
  //   const getPercent = async () => {
  //     const docSnap = await getDoc(docRef);
  //     if (docSnap.exists()) {
  //       setResult(docSnap.data());
  //       if (docSnap.data() >= 75) {
  //         setResult(75);
  //       } else if (docSnap.data() >= 50) {
  //         setResult(50);
  //       } else if (docSnap.data() >= 25) {
  //         setResult(25);
  //       } else {
  //         setResult(0);
  //       }
  //     } else {
  //       // doc.data() will be undefined in this case
  //       console.log("No such document!");
  //     }
  //   };
  //   getPercent();
  // }, []);
  return (
    <div className="container-fluid bg-blue" style={{ padding: "0em" }}>
      <div
        className="row"
        style={{
          marginTop: "100px",
          marginRight: "60px",
          marginLeft: "60px",
        }}
      >
        <div className="col-5">
          <div className="widget">
            <h2 className="text-b">ความคล้ายโรคอัลไซเมอร์</h2>
            <div
              className="row mb-4"
              style={{
                paddingLeft: "85px",
                paddingRight: "85px",
                paddingTop: "24px",
              }}
            >
              <Circle
                progress={35}
                size={343}
                lineWidth={50}
                progressColor="#00cdd0"
                textStyle={{
                  font: "bold 5rem Anuphan",
                }}
                roundedStroke={true}
                showPercentage={true}
                showPercentageSymbol={true}
              />
            </div>
          </div>
        </div>
        <div className="col-7">
          <div className="widget">
            <h2 className="text-b" style={{ paddingBottom: "14px" }}>
              ผลการตรวจครั้งล่าสุด
            </h2>
            <div style={{ width: "100%" }}>
              <BarChart />
            </div>
          </div>
        </div>
      </div>
      <div className="container-result mt-4 text-b">
        <div className="row text-center wrapper-center mb-4">
          <h2>เกณฑ์ความคล้ายโรคอัลไซเมอร์</h2>
          <img src={Percent} style={{ width: "90%" }} />
        </div>
        <div className="row mb-3 wrapper-center">
          <div className="col-3">
            <h3>คล้ายเสียงปกติ</h3>
          </div>
          <div className="col-4">
            <img src={Green} style={{ width: "70%" }} />
          </div>
          <div className="col-5 text-gray">
            <h4>คล้ายเสียงปกติ</h4>
          </div>
        </div>

        <div className="row mb-3 wrapper-center">
          <div className="col-3">
            <h3>คล้ายคลึงต่ำ</h3>
          </div>
          <div className="col-4">
            <img src={Yellow} style={{ width: "70%" }} />
          </div>
          <div className="col-5 text-gray">
            <h4>คล้ายเสียงปกติ</h4>
          </div>
        </div>
        <div className="row mb-3 wrapper-center">
          <div className="col-3">
            <h3>คล้ายคลึงปานกลาง</h3>
          </div>
          <div className="col-4">
            <img src={Orange} style={{ width: "70%" }} />
          </div>
          <div className="col-5 text-gray">
            <h4>คล้ายเสียงปกติ</h4>
          </div>
        </div>
        <div className="row mb-5 wrapper-center">
          <div className="col-3">
            <h3>คล้ายคลึงสูง</h3>
          </div>
          <div className="col-4">
            <img src={Red} style={{ width: "70%" }} />
          </div>
          <div className="col-5 text-gray">
            <h4>คล้ายเสียงปกติ</h4>
          </div>
        </div>
        <h3 className="text-gray">
          ควรกลับมาทำแบบทดสอบทุก ๆ เดือน เพื่อติดตาม
          และประเมินความเสี่ยงในการเป็นโรคอัลไซเมอร์อย่างสม่ำเสมอ
        </h3>
        <p className="text-gray">
          * นี่เป็นเพียงการประเมินขั้นต้นเท่านั้น
          หากต้องการตรวจอย่างละเอียดมากยิ่งขึ้น ควรปรึกษาแพทย์
          เพื่อทำการตรวจที่โรงพยาบาล
        </p>
      </div>
      <div className="row text-center mb-4">
        <h4 style={{ color: "#4953f5", marginBottom: "10px" }}>ผลการทดสอบ</h4>
        <h1 className="text-b">ความสามารถในการมองแต่ละด้าน</h1>
      </div>
      <div
        className="row mb-5"
        style={{
          marginRight: "60px",
          marginLeft: "60px",
        }}
      >
        <div className="col">
          <div className="widget">
            <h5 className="text-b">การจ้องจุด</h5>
            <div className="row">
              <Circle
                progress={35}
                size={300}
                lineWidth={50}
                progressColor="#00cdd0"
                textStyle={{
                  font: "bold 5rem Anuphan",
                }}
                roundedStroke={true}
                showPercentage={true}
                showPercentageSymbol={true}
              />
              {/* <CircularProgressbar value={30} text={"30%"} strokeWidth={10} /> */}
            </div>
          </div>
        </div>
        <div className="col">
          <div className="widget">
            <h5 className="text-b">การมองตามจุด</h5>
            <div className="row">
              <Circle
                progress={35}
                size={300}
                lineWidth={50}
                progressColor="#00cdd0"
                textStyle={{
                  font: "bold 5rem Anuphan",
                }}
                roundedStroke={true}
                showPercentage={true}
                showPercentageSymbol={true}
              />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="widget">
            <h5 className="text-b">การมองหลีกเลี่ยงจุด</h5>
            <div className="row">
              <Circle
                progress={35}
                size={300}
                lineWidth={50}
                progressColor="#00cdd0"
                textStyle={{
                  font: "bold 5rem Anuphan",
                }}
                roundedStroke={true}
                showPercentage={true}
                showPercentageSymbol={true}
              />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="widget">
            <h5 className="text-b">การมองตามจุดเคลื่อนที่</h5>
            <div className="row">
              <Circle
                progress={35}
                size={300}
                lineWidth={50}
                progressColor="#00cdd0"
                textStyle={{
                  font: "bold 5rem Anuphan",
                }}
                roundedStroke={true}
                showPercentage={true}
                showPercentageSymbol={true}
              />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="widget">
            <h5 className="text-b">การแยกแยะภาพ</h5>
            <div className="row">
              <Circle
                progress={35}
                size={300}
                lineWidth={50}
                progressColor="#00cdd0"
                textStyle={{
                  font: "bold 5rem Anuphan",
                }}
                roundedStroke={true}
                showPercentage={true}
                showPercentageSymbol={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
