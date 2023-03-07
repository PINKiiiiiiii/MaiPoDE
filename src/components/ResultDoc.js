import React from "react";
import Circle from "react-circle";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useState } from "react";
import LineChart from "./LineChart";
import Percent from "./Picture/Percent.png";
import Green from "./Picture/Green.png";
import Yellow from "./Picture/Yellow.png";
import Orange from "./Picture/Orange.png";
import Red from "./Picture/Red.png";

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
        <div className="col-5">
          <div className="widget">
            <h2 className="text-b">ความคล้ายโรคอัลไซเมอร์</h2>
            <div
              className="row mb-4"
              style={{
                paddingLeft: "75px",
                paddingRight: "75px",
                paddingTop: "21px",
              }}
            >
              <Circle
                progress={35}
                size={300}
                lineWidth={50}
                progressColor="cornflowerblue"
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
            <div className="row text-center wrapper-center mb-3 text-b">
              <h2>เกณฑ์ความคล้ายโรคอัลไซเมอร์</h2>
              <img src={Percent} style={{ width: "90%" }} />
            </div>
            <div className="row mb-3 wrapper-center">
              <div className="col-4 text-b">
                <h4>คล้ายเสียงปกติ</h4>
              </div>
              <div className="col-3">
                <img src={Green} style={{ width: "80%" }} />
              </div>
              <div className="col-5 text-gray">
                <h4>คล้ายเสียงปกติ</h4>
              </div>
            </div>

            <div className="row mb-3 wrapper-center">
              <div className="col-4 text-b">
                <h4>คล้ายคลึงต่ำ</h4>
              </div>
              <div className="col-3">
                <img src={Yellow} style={{ width: "80%" }} />
              </div>
              <div className="col-5 text-gray">
                <h4>คล้ายเสียงปกติ</h4>
              </div>
            </div>
            <div className="row mb-3 wrapper-center">
              <div className="col-4 text-b">
                <h4>คล้ายคลึงปานกลาง</h4>
              </div>
              <div className="col-3">
                <img src={Orange} style={{ width: "80%" }} />
              </div>
              <div className="col-5 text-gray">
                <h4>คล้ายเสียงปกติ</h4>
              </div>
            </div>
            <div className="row mb-1 wrapper-center">
              <div className="col-4 text-b">
                <h4>คล้ายคลึงสูง</h4>
              </div>
              <div className="col-3">
                <img src={Red} style={{ width: "80%" }} />
              </div>
              <div className="col-5 text-gray">
                <h4>คล้ายเสียงปกติ</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-12">
          <div className="widget">
            <div className="row">
              <div className="col">
                <h4 className="text-b text-center">การจ้องจุด</h4>
                <div className="row mt-4">
                  <Circle
                    progress={35}
                    size={250}
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
              <div className="col">
                <h4 className="text-b text-center">การมองตามจุด</h4>
                <div className="row mt-4">
                  <Circle
                    progress={35}
                    size={250}
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
              <div className="col">
                <h4 className="text-b text-center">การมองหลีกเลี่ยงจุด</h4>
                <div className="row mt-4">
                  <Circle
                    progress={35}
                    size={250}
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
              <div className="col">
                <h4 className="text-b text-center">การมองตามจุดเคลื่อนที่</h4>
                <div className="row mt-4">
                  <Circle
                    progress={35}
                    size={250}
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
              <div className="col">
                <h4 className="text-b text-center">การแยกแยะภาพ</h4>
                <div className="row mt-4">
                  <Circle
                    progress={35}
                    size={250}
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
          {/* <div className="col">
          <div className="widget">
            <h5 className="text-b">การมองหลีกเลี่ยงจุด</h5>
            <div className="row">
              <Circle
                progress={35}
                size={300}
                lineWidth={50}
                progressColor="cornflowerblue"
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
                progressColor="cornflowerblue"
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
                progressColor="cornflowerblue"
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
                progressColor="cornflowerblue"
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
                progressColor="cornflowerblue"
                textStyle={{
                  font: "bold 5rem Anuphan",
                }}
                roundedStroke={true}
                showPercentage={true}
                showPercentageSymbol={true}
              />
            </div>
          </div>
        </div> */}
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="widget" style={{ padding: "50px" }}>
            <h2 className="mb-4 text-b">สถิติการทำแบบทดสอบแต่ละครั้ง</h2>
            <div style={{ width: "100%" }}>
              <LineChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultDoc;
