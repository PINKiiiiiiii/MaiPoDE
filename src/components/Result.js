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
                progress={75}
                size={270}
                lineWidth={50}
                progressColor="#ff8f2f"
                textColor="#ff8f2f"
                textStyle={{
                  font: "bold 5rem Anuphan",
                }}
                roundedStroke={true}
                showPercentage={true}
                showPercentageSymbol={true}
              />
            </div>
            <div className="row" style={{ font: "bold 5rem Anuphan" }}>
              <button className="btn btn-danger">
                <h3>ติดต่อแพทย์</h3>
              </button>
            </div>
          </div>
        </div>
        <div className="col-7">
          <div className="widget">
            <h2 className="text-b">ผลการตรวจครั้งล่าสุด</h2>
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
          <div className="col-3">
            <img src={Green} style={{ width: "90%" }} />
          </div>
          <div className="col-6">
            <h4 style={{ color: "#0daa00" }}>
              คุณไม่มีความเสี่ยงในการเป็นโรคอัลไซเมอร์
              แต่ควรกลับมาทดสอบอย่างสม่ำเสมอ อย่างน้อยเดือนละ 1 ครั้ง
            </h4>
          </div>
        </div>

        <div className="row mb-3 wrapper-center">
          <div className="col-3">
            <h3>คล้ายคลึงต่ำ</h3>
          </div>
          <div className="col-3">
            <img src={Yellow} style={{ width: "90%" }} />
          </div>
          <div className="col-6">
            <h4 style={{ color: "#f9b209" }}>
              คุณมีความเสี่ยงเล็กน้อยในการเป็นโรคอัลไซเมอร์
              แต่ควรกลับมาทดสอบอย่างสม่ำเสมอ อย่างน้อยเดือนละ 1 ครั้ง
            </h4>
          </div>
        </div>
        <div className="row mb-3 wrapper-center">
          <div className="col-3">
            <h3>คล้ายคลึงปานกลาง</h3>
          </div>
          <div className="col-3">
            <img src={Orange} style={{ width: "90%" }} />
          </div>
          <div className="col-6">
            <h4 style={{ color: "#ff8f2f" }}>
              โปรดตรวจซ้ำ เนื่องจากเปอร์เซ็นต์ความคล้ายค่อนข้างสูง
              หากได้ผลดังเดิม ควรไปตรวจที่โรงพยาบาล เพื่อให้ได้ผลที่ชัดเจนขึ้น
            </h4>
          </div>
        </div>
        <div className="row mb-5 wrapper-center">
          <div className="col-3">
            <h3>คล้ายคลึงสูง</h3>
          </div>
          <div className="col-3">
            <img src={Red} style={{ width: "90%" }} />
          </div>
          <div className="col-6">
            <h4 style={{ color: "#d93000" }}>
              โปรดตรวจซ้ำ เนื่องจากเปอร์เซ็นต์ความคล้ายสูง หากได้ผลดังเดิม
              ควรไปตรวจที่โรงพยาบาลโดยด่วน เพื่อให้ได้ผลที่ชัดเจนขึ้น
            </h4>
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
        <h1 className="text-b">ความคล้ายโรคอัลไซเมอร์ในการมองแต่ละด้าน</h1>
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
                progress={53}
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
                progress={60}
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
                progress={70}
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
                progress={72}
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
                progress={81}
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
