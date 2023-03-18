import Circle from "react-circle";
import "react-circular-progressbar/dist/styles.css";
import LineChart from "./LineChart";
import Percent from "./Picture/Percent.png";
import Green from "./Picture/Green.png";
import Yellow from "./Picture/Yellow.png";
import Orange from "./Picture/Orange.png";
import Red from "./Picture/Red.png";
import Plot from "react-plotly.js";

function ResultDoc() {
  return (
    <div
      className="container-fluid bg-blue"
      style={{
        paddingTop: "90px",
        paddingRight: "40px",
        paddingLeft: "40px",
        paddingBottom: "20px",
      }}
    >
      <div className="row mb-4">
        <div className="col-8">
          <div className="widget">
            <h2 className="text-b text-center">ความคล้ายโรคอัลไซเมอร์</h2>
            <div
              className="row mb-4"
              style={{
                paddingLeft: "75px",
                paddingRight: "75px",
                paddingTop: "21px",
              }}
            >
              <Circle
                progress={19.6}
                size={300}
                lineWidth={50}
                progressColor="#0daa00"
                textColor="#0daa00"
                textStyle={{
                  font: "bold 5rem Anuphan",
                  color: "#0daa00",
                }}
                roundedStroke={true}
                showPercentage={true}
                showPercentageSymbol={true}
              />
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="widget">
            <div className="row text-center wrapper-center mb-4 text-b">
              <h2>ข้อมูลส่วนตัว</h2>
            </div>
            <div className="row mb-3 wrapper-center">
              <div className="col-5 text-b">
                <h4>ชื่อ</h4>
              </div>
              <div className="col-7 text-b">
                <h4>สมศรี ไพรินทราภา</h4>
              </div>
            </div>

            <div className="row mb-3 wrapper-center">
              <div className="col-5 text-b">
                <h4>อายุ</h4>
              </div>
              <div className="col-7 text-b">
                <h4>50</h4>
              </div>
            </div>
            <div className="row mb-3 wrapper-center">
              <div className="col-5 text-b">
                <h4>เพศ</h4>
              </div>
              <div className="col-7 text-b">
                <h4>หญิง</h4>
              </div>
            </div>
            <div className="row mb-3 wrapper-center">
              <div className="col-5 text-b">
                <h4>กรุ๊ปเลือด</h4>
              </div>
              <div className="col-7 text-b">
                <h4>B</h4>
              </div>
            </div>
            <div className="row mb-3 wrapper-center">
              <div className="col-5 text-b">
                <h4>น้ำหนัก</h4>
              </div>
              <div className="col-7 text-b">
                <h4>56</h4>
              </div>
            </div>
            <div className="row mb-3 wrapper-center">
              <div className="col-5 text-b">
                <h4>ส่วนสูง</h4>
              </div>
              <div className="col-7 text-b">
                <h4>160</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-12">
          <div className="widget">
            <h2 className="text-b text-center">ผลการตรวจ 4 ครั้งก่อนหน้า</h2>
            <div className="row">
              <div className="col">
                <div className="row mt-4">
                  <Circle
                    progress={18.7}
                    size={250}
                    lineWidth={50}
                    progressColor="#0daa00"
                    textColor="#0daa00"
                    textStyle={{
                      font: "bold 5rem Anuphan",
                    }}
                    roundedStroke={true}
                    showPercentage={true}
                    showPercentageSymbol={true}
                  />
                </div>
              </div>
              <div className="col">
                <div className="row mt-4">
                  <Circle
                    progress={15.6}
                    size={250}
                    lineWidth={50}
                    progressColor="#0daa00"
                    textColor="#0daa00"
                    textStyle={{
                      font: "bold 5rem Anuphan",
                    }}
                    roundedStroke={true}
                    showPercentage={true}
                    showPercentageSymbol={true}
                  />
                </div>
              </div>
              <div className="col">
                <div className="row mt-4">
                  <Circle
                    progress={12.5}
                    size={250}
                    lineWidth={50}
                    progressColor="#0daa00"
                    textColor="#0daa00"
                    textStyle={{
                      font: "bold 5rem Anuphan",
                    }}
                    roundedStroke={true}
                    showPercentage={true}
                    showPercentageSymbol={true}
                  />
                </div>
              </div>
              <div className="col">
                <div className="row mt-4">
                  <Circle
                    progress={10.1}
                    size={250}
                    lineWidth={50}
                    progressColor="#0daa00"
                    textColor="#0daa00"
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
      </div>
      <div className="row">
        <div className="col-12">
          <div className="widget">
            {/* <h2 className="mb-4 text-center">สถิติการทำแบบทดสอบแต่ละครั้ง</h2>
            <h5 className="text-b">%ความคล้าย</h5> */}
            <div style={{ width: "100%" }}>
              {/* <LineChart /> */}
              <Plot
                data={[
                  {
                    type: "line",
                    x: ["1", "2", "3", "4", "5"],
                    y: [10.1, 12.5, 15.6, 18.7, 19.6],
                  },
                ]}
                layout={{
                  title: "สถิติการทำแบบทดสอบแต่ละครั้ง",
                  font: { size: 23, family: "Anuphan" },
                  width: 1415,
                  height: 650,
                  fontFamily: "Anuphan",
                }}
              />
            </div>
            <h5 className="text-center mt-2 mb-0">ครั้งที่</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultDoc;
