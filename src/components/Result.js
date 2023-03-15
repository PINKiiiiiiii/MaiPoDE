import Circle from "react-circle";
import { useEffect, useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import pdf from "./File/Medical Report.pdf";
import Percent from "./Picture/Percent.png";
import Green from "./Picture/Green.png";
import Yellow from "./Picture/Yellow.png";
import Orange from "./Picture/Orange.png";
import Red from "./Picture/Red.png";
import axios from "axios";
import Plot from "react-plotly.js";

function Result(props) {
  console.log(props.storageId);
  const [loading, isLoading] = useState(true);
  const [all, setAll] = useState(0);
  const [calibrate, setCalibrate] = useState(0);
  const [fixation, setFixation] = useState(0);
  const [prosaccade, setProsaccade] = useState(0);
  const [antisaccade, setAntisaccade] = useState(0);
  const [smooth, setSmooth] = useState(0);
  const [vpc, setVpc] = useState(0);
  const loadFile = () => {
    window.open(pdf);
  };
  useEffect(() => {
    axios
      .post("https://sixsegmentann-a6ge3gul2a-as.a.run.app", {
        id: props.storageId,
      })
      .then((response) => {
        // handle success
        setAll(response.data.PredictionAll * 100);
        console.log(response.data.PredictionParts[0] * 100);
        setFixation(response.data.PredictionParts[1] * 100);
        setProsaccade(response.data.PredictionParts[2] * 100);
        setAntisaccade(response.data.PredictionParts[3] * 100);
        setSmooth(response.data.PredictionParts[4] * 100);
        setVpc(response.data.PredictionParts[5] * 100);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        isLoading(false);
      });
  }, []);
  if (!loading) {
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
              <h2 className="text-b text-center">ความคล้ายโรคอัลไซเมอร์</h2>
              <div
                className="row mb-4"
                style={{
                  paddingLeft: "85px",
                  paddingRight: "85px",
                  paddingTop: "24px",
                }}
              >
                <Circle
                  progress={all.toFixed(1)}
                  size={270}
                  lineWidth={50}
                  progressColor={
                    all >= 75
                      ? "#d93000"
                      : all >= 50
                      ? "#ff8f2f"
                      : all >= 25
                      ? "#f6cb45"
                      : "#0daa00"
                  }
                  textColor={
                    all >= 75
                      ? "#d93000"
                      : all >= 50
                      ? "#ff8f2f"
                      : all >= 25
                      ? "#f6cb45"
                      : "#0daa00"
                  }
                  textStyle={{
                    font: "bold 5rem Anuphan",
                  }}
                  roundedStroke={true}
                  showPercentage={true}
                  showPercentageSymbol={true}
                />
              </div>
              <div className="row" style={{ font: "bold 5rem Anuphan" }}>
                <button className="btn btn-danger" onClick={loadFile}>
                  <h3>ติดต่อแพทย์</h3>
                </button>
              </div>
            </div>
          </div>
          <div className="col-7">
            <div className="widget">
              {/* <h2 className="text-b">ผลการตรวจครั้งล่าสุด</h2> */}
              <div style={{ width: "100%" }}>
                {/* <BarChart /> */}
                <Plot
                  data={[
                    {
                      type: "bar",
                      x: ["ม.ค.", "ก.พ.", "มี.ค."],
                      y: [20, 30, 94],
                    },
                  ]}
                  layout={{
                    title: "ผลการตรวจครั้งล่าสุด",
                    font: { size: 23, family: "Anuphan" },
                    width: 750,
                    height: 414,
                    fontFamily: "Anuphan",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container-result mt-4 text-b">
          <div className="row text-center wrapper-center mb-4">
            <h2>เกณฑ์ความคล้ายโรคอัลไซเมอร์</h2>
            <img alt="" src={Percent} style={{ width: "90%" }} />
          </div>
          <div className="row mb-3 wrapper-center">
            <div className="col-3">
              <h3>คล้ายเสียงปกติ</h3>
            </div>
            <div className="col-3">
              <img alt="" src={Green} style={{ width: "90%" }} />
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
              <img alt="" src={Yellow} style={{ width: "90%" }} />
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
              <img alt="" src={Orange} style={{ width: "90%" }} />
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
              <img alt="" src={Red} style={{ width: "90%" }} />
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
                  progress={fixation.toFixed(1)}
                  size={300}
                  lineWidth={50}
                  progressColor={
                    fixation >= 75
                      ? "#d93000"
                      : fixation >= 50
                      ? "#ff8f2f"
                      : fixation >= 25
                      ? "#f6cb45"
                      : "#0daa00"
                  }
                  textColor={
                    fixation >= 75
                      ? "#d93000"
                      : fixation >= 50
                      ? "#ff8f2f"
                      : fixation >= 25
                      ? "#f6cb45"
                      : "#0daa00"
                  }
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
                  progress={prosaccade.toFixed(1)}
                  size={300}
                  lineWidth={50}
                  progressColor={
                    prosaccade >= 75
                      ? "#d93000"
                      : prosaccade >= 50
                      ? "#ff8f2f"
                      : prosaccade >= 25
                      ? "#f6cb45"
                      : "#0daa00"
                  }
                  textColor={
                    prosaccade >= 75
                      ? "#d93000"
                      : prosaccade >= 50
                      ? "#ff8f2f"
                      : prosaccade >= 25
                      ? "#f6cb45"
                      : "#0daa00"
                  }
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
                  progress={antisaccade.toFixed(1)}
                  size={300}
                  lineWidth={50}
                  progressColor={
                    antisaccade >= 75
                      ? "#d93000"
                      : antisaccade >= 50
                      ? "#ff8f2f"
                      : antisaccade >= 25
                      ? "#f6cb45"
                      : "#0daa00"
                  }
                  textColor={
                    antisaccade >= 75
                      ? "#d93000"
                      : antisaccade >= 50
                      ? "#ff8f2f"
                      : antisaccade >= 25
                      ? "#f6cb45"
                      : "#0daa00"
                  }
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
                  progress={smooth.toFixed(1)}
                  size={300}
                  lineWidth={50}
                  progressColor={
                    smooth >= 75
                      ? "#d93000"
                      : smooth >= 50
                      ? "#ff8f2f"
                      : smooth >= 25
                      ? "#f6cb45"
                      : "#0daa00"
                  }
                  textColor={
                    smooth >= 75
                      ? "#d93000"
                      : smooth >= 50
                      ? "#ff8f2f"
                      : smooth >= 25
                      ? "#f6cb45"
                      : "#0daa00"
                  }
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
                  progress={vpc.toFixed(1)}
                  size={300}
                  lineWidth={50}
                  progressColor={
                    vpc >= 75
                      ? "#d93000"
                      : vpc >= 50
                      ? "#ff8f2f"
                      : vpc >= 25
                      ? "#f6cb45"
                      : "#0daa00"
                  }
                  textColor={
                    vpc >= 75
                      ? "#d93000"
                      : vpc >= 50
                      ? "#ff8f2f"
                      : vpc >= 25
                      ? "#f6cb45"
                      : "#0daa00"
                  }
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
  } else {
    return <div>Loading</div>;
  }
}

export default Result;
