import { useEffect } from "react";
import check from "./Picture/check.png";
import { useNavigate } from "react-router-dom";
import webgazer from "../Scripts/Webgazer/index";
import "./WebgazerCanvas";
import medicine from "./Picture/medicine.jpg";
import activity from "./Picture/activity.jpg";
import time from "./Picture/7min.png";
import sound from "./Picture/Sound.png";
import good from "./Picture/Businessman.png";

function Test(props) {
  useEffect(() => {
    webgazer.close();
  }, []);
  console.log(props.id);

  let navigate = useNavigate();
  const goTest = () => {
    navigate("/calibrate");
  };

  return (
    <div className="container-fluid bg-blue" style={{ padding: "0em" }}>
      <div
        className="row text-center"
        style={{
          paddingTop: "120px",
        }}
      >
        <h4 style={{ color: "#4953f5", marginBottom: "10px" }}>คำชี้แจง</h4>
        <h1 className="text-b" style={{ marginBottom: "30px" }}>
          ข้อควรปฏิบัติในการทำแบบทดสอบ
        </h1>
      </div>
      <div className="row">
        <div className="col-6">
          <div
            className="container-result text-b text-center"
            style={{ marginRight: "2px", marginBottom: "2px" }}
          >
            <img
              src={medicine}
              style={{ width: "100%", marginBottom: "20px" }}
            />
            <h4>นั่งทำแบบทดสอบในท่าทางที่เหมาะสม</h4>
          </div>
        </div>
        <div className="col-6">
          <div
            className="container-result text-b text-center"
            style={{ marginLeft: "2px", marginBottom: "2px" }}
          >
            <img
              src={activity}
              style={{ width: "100%", marginBottom: "20px" }}
            />
            <h4>ตั้งกล้องให้เห็นใบหน้าชัดเจนตลอดเวลา</h4>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div
            className="container-result text-b text-center"
            style={{ marginTop: "25px" }}
          >
            <div className="row">
              <div className="col-4">
                <img
                  src={time}
                  style={{ width: "60%", marginBottom: "20px" }}
                />
                <h4>ใช้เวลาทำแบบทดสอบ 5-7 นาที</h4>
              </div>
              <div className="col-4">
                <img
                  src={sound}
                  style={{ width: "60%", marginBottom: "20px" }}
                />
                <h4>เปิดเสียงขณะทำแบบทดสอบ</h4>
              </div>
              <div className="col-4">
                <img
                  src={good}
                  style={{ width: "60%", marginBottom: "20px" }}
                />
                <h4>ทำแบบทดสอบอย่างตั้งใจ</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row"
        style={{
          paddingLeft: "80px",
          paddingRight: "80px",
          paddingBottom: "80px",
          paddingTop: "20px",
        }}
      >
        <button
          className="btn btn-blue btn-lg btn-block"
          type="submit"
          style={{ width: "100%", fontSize: "32px" }}
          onClick={goTest}
        >
          <h3>เริ่มทดสอบ</h3>
        </button>
      </div>
    </div>
  );
}

export default Test;
