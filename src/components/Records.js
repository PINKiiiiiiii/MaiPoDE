import ProgressBar from "react-bootstrap/ProgressBar";
import Circle from "react-circle";
import check from "./Picture/check.png";
import checkleft from "./Picture/checkleft.png";
import "react-circular-progressbar/dist/styles.css";
import BarChart from "./BarChart";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import db from "./firebase/firebaseConfig";
import Plot from "react-plotly.js";

function Records(props) {
  let cnt = 0;
  const [count, setCount] = useState(0);
  const [active] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [date] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [result, setResult] = useState(0);
  const [loading, isLoading] = useState(true);
  let time = 0;

  useEffect(() => {
    console.log(props.id);
    const getId = async () => {
      const q = query(
        collection(db, "Results"),
        where("User", "!=", ""),
        where("User", "==", props.id)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // console.log(doc.data());
        active[doc.data().Time.toDate().getMonth() + 1] = true;
        if (doc.data().Time > time) {
          time = doc.data().Time;
          // setResult(doc.data().PredictionAll * 100);
          setResult(50.2);
        }
        date[doc.data().Time.toDate().getMonth() + 1] = doc
          .data()
          .Time.toDate()
          .getDate();

        // active.splice(doc.data().Time.toDate().getMonth() + 1, 0, true);
        // console.log(doc.data().Time.toDate().getFullYear() + 543);
      });
      try {
        for (let i = 1; i < active.length; ++i) {
          if (active[i]) {
            ++cnt;
          }
        }
      } finally {
        setCount(cnt);
        isLoading(false);
      }
    };
    getId();
  });
  if (!loading) {
    const percent = ((count * 100) / 12).toFixed(0);
    console.log(percent);
    console.log(result);
    return (
      <div className="container-fluid" style={{ padding: "0em" }}>
        <div
          className="row"
          style={{
            marginTop: "100px",
            marginRight: "150px",
            marginLeft: "150px",
          }}
        >
          <div className="col-6">
            <div className="widget">
              <h4 className="text-b text-center">
                ความคล้ายโรคอัลไซเมอร์ล่าสุด
              </h4>
              <div
                className="row mb-4"
                style={{
                  paddingLeft: "100px",
                  paddingRight: "100px",
                  paddingTop: "17px",
                }}
              >
                <Circle
                  progress={result.toFixed(1)}
                  size={245}
                  lineWidth={50}
                  progressColor={
                    result >= 75
                      ? "#d93000"
                      : result >= 50
                      ? "#ff8f2f"
                      : result >= 25
                      ? "#f6cb45"
                      : "#0daa00"
                  }
                  textColor={
                    result >= 75
                      ? "#d93000"
                      : result >= 50
                      ? "#ff8f2f"
                      : result >= 25
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
          <div className="col-6">
            <div className="widget" style={{ padding: "0px" }}>
              <Plot
                data={[
                  {
                    type: "bar",
                    x: ["ก.พ.", "มี.ค.", "เม.ย."],
                    y: [39, 46, 50],
                  },
                ]}
                layout={{
                  title: "ผลการตรวจแต่ละเดือน",
                  font: { size: 18, family: "Anuphan" },
                  width: 560,
                  height: 358,
                  fontFamily: "Anuphan",
                }}
              />
              {/* </div> */}
            </div>
          </div>
        </div>
        <div
          className="row text-center mb-3"
          style={{
            paddingTop: "110px",
          }}
        >
          <h4 style={{ color: "#4953f5", marginBottom: "10px" }}>
            เปอร์เซ็นต์
          </h4>
          <h1 className="text-b">การตรวจคัดกรองในปีนี้</h1>
        </div>
        <div
          className="row"
          style={{
            paddingLeft: "150px",
            paddingRight: "150px",
            paddingBottom: "60px",
          }}
        >
          <div className="container">
            <ProgressBar
              now={percent}
              label={`${percent}%`}
              style={{
                height: "30px",
                fontFamily: "Anuphan",
                fontSize: "20px",
              }}
            />
          </div>
        </div>
        <div className="row">
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container" style={{ padding: "55px" }}>
                  <div
                    className="container bg-blue"
                    style={{ padding: "40px" }}
                  >
                    <div className="card-body text-center">
                      <div className="row mb-4">
                        <h1 className="text-b">พ.ศ.2566</h1>
                      </div>
                      <div className="row mb-5">
                        <div className="col-2 wrapper-center">
                          <div
                            className={active[1] ? "circle-finish" : "circle"}
                          >
                            <p className={active[1] ? "hide" : "text"}>ม.ค.</p>
                            <div className={active[1] ? "text-finish" : "hide"}>
                              <h1 className="mb-0">{date[1]}</h1>
                              <p className="mb-0">ม.ค.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-2 wrapper-center">
                          <div
                            className={active[2] ? "circle-finish" : "circle"}
                          >
                            <p className={active[2] ? "hide" : "text"}>ก.พ.</p>
                            <div className={active[2] ? "text-finish" : "hide"}>
                              <h1 className="mb-0">{date[2]}</h1>
                              <p className="mb-0">ก.พ.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-2 wrapper-center">
                          <div
                            className={active[3] ? "circle-finish" : "circle"}
                          >
                            <p className={active[3] ? "hide" : "text"}>มี.ค.</p>
                            <div className={active[3] ? "text-finish" : "hide"}>
                              <h1 className="mb-0">{date[3]}</h1>
                              <p className="mb-0">มี.ค.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-2 wrapper-center">
                          <div
                            className={active[4] ? "circle-finish" : "circle"}
                          >
                            <p className={active[4] ? "hide" : "text"}>เม.ย.</p>
                            <div className={active[4] ? "text-finish" : "hide"}>
                              <h1 className="mb-0">{date[4]}</h1>
                              <p className="mb-0">เม.ย.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-2 wrapper-center">
                          <div
                            className={active[5] ? "circle-finish" : "circle"}
                          >
                            <p className={active[5] ? "hide" : "text"}>พ.ค.</p>
                            <div className={active[5] ? "text-finish" : "hide"}>
                              <h1 className="mb-0">{date[5]}</h1>
                              <p className="mb-0">พ.ค.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-2 wrapper-center">
                          <div
                            className={active[6] ? "circle-finish" : "circle"}
                          >
                            <p className={active[6] ? "hide" : "text"}>มิ.ย.</p>
                            <div className={active[6] ? "text-finish" : "hide"}>
                              <h1 className="mb-0">{date[6]}</h1>
                              <p className="mb-0">มิ.ย.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-5">
                        <div className="col-2 wrapper-center">
                          <div
                            className={active[7] ? "circle-finish" : "circle"}
                          >
                            <p className={active[7] ? "hide" : "text"}>ก.ค.</p>
                            <div className={active[7] ? "text-finish" : "hide"}>
                              <h1 className="mb-0">{date[7]}</h1>
                              <p className="mb-0">ก.ค.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-2 wrapper-center">
                          <div
                            className={active[8] ? "circle-finish" : "circle"}
                          >
                            <p className={active[8] ? "hide" : "text"}>ส.ค.</p>
                            <div className={active[8] ? "text-finish" : "hide"}>
                              <h1 className="mb-0">{date[8]}</h1>
                              <p className="mb-0">ส.ค.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-2 wrapper-center">
                          <div
                            className={active[9] ? "circle-finish" : "circle"}
                          >
                            <p className={active[9] ? "hide" : "text"}>ก.ย.</p>
                            <div className={active[9] ? "text-finish" : "hide"}>
                              <h1 className="mb-0">{date[9]}</h1>
                              <p className="mb-0">ก.ย.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-2 wrapper-center">
                          <div
                            className={active[10] ? "circle-finish" : "circle"}
                          >
                            <p className={active[10] ? "hide" : "text"}>ต.ค.</p>
                            <div
                              className={active[10] ? "text-finish" : "hide"}
                            >
                              <h1 className="mb-0">{date[10]}</h1>
                              <p className="mb-0">ต.ค.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-2 wrapper-center">
                          <div
                            className={active[11] ? "circle-finish" : "circle"}
                          >
                            <p className={active[11] ? "hide" : "text"}>พ.ย.</p>
                            <div
                              className={active[11] ? "text-finish" : "hide"}
                            >
                              <h1 className="mb-0">{date[11]}</h1>
                              <p className="mb-0">พ.ย.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-2 wrapper-center">
                          <div
                            className={active[12] ? "circle-finish" : "circle"}
                          >
                            <p className={active[12] ? "hide" : "text"}>ธ.ค.</p>
                            <div
                              className={active[12] ? "text-finish" : "hide"}
                            >
                              <h1 className="mb-0">{date[12]}</h1>
                              <p className="mb-0">ธ.ค.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container" style={{ padding: "55px" }}>
                  <div
                    className="container bg-blue"
                    style={{ padding: "40px" }}
                  >
                    <div className="card-body text-center">
                      <div className="row mb-4">
                        <h1 className="text-b">พ.ศ.2565</h1>
                      </div>
                      <div className="row mb-5">
                        <div className="col-2 wrapper-center">
                          <div className="circle">
                            <p className="text">ม.ค.</p>
                          </div>
                        </div>
                        <div className="col-2 wrapper-center">
                          <div className="circle">
                            <p className="text">ก.พ.</p>
                          </div>
                        </div>
                        <div className="col-2 wrapper-center">
                          <div className="circle">
                            <p className="text">มี.ค.</p>
                          </div>
                        </div>
                        <div className="col-2 wrapper-center">
                          <div className="circle">
                            <p className="text">เม.ย</p>
                          </div>
                        </div>
                        <div className="col-2 wrapper-center">
                          <div className="circle">
                            <p className="text">พ.ค.</p>
                          </div>
                        </div>
                        <div className="col-2 wrapper-center">
                          <div className="circle">
                            <p className="text">มิ.ย.</p>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-5">
                        <div className="col-2 wrapper-center">
                          <div className="circle">
                            <p className="text">ก.ค.</p>
                          </div>
                        </div>
                        <div className="col-2 wrapper-center">
                          <div className="circle">
                            <p className="text">ส.ค.</p>
                          </div>
                        </div>
                        <div className="col-2 wrapper-center">
                          <div className="circle">
                            <p className="text">ก.ย.</p>
                          </div>
                        </div>
                        <div className="col-2 wrapper-center">
                          <div className="circle">
                            <p className="text">ต.ค.</p>
                          </div>
                        </div>
                        <div className="col-2 wrapper-center">
                          <div className="circle">
                            <p className="text">พ.ย.</p>
                          </div>
                        </div>
                        <div className="col-2 wrapper-center">
                          <div className="circle">
                            <p className="text">ธ.ค.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <img alt="" src={checkleft} style={{ width: "70px" }} />
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <img alt="" src={check} style={{ width: "70px" }} />
            </button>
          </div>
        </div>
        <div
          className="container-fluid bg-down text-white"
          style={{ padding: "15vh", marginTop: "80px" }}
        >
          <div className="row">
            <div className="col-lg-4">
              <h2>เกี่ยวกับเรา</h2>
              <p>
                PoDE (Platform of Assisting the Early Detection of Alzheimer's
                Disease with Eyes by AI) คือ
                แพลตฟอร์มช่วยตรวจหาโรคอัลไซเมอร์ในระยะเริ่มต้นด้วยการติดตามการเคลื่อนที่ของดวงตา
                โดยปัญญาประดิษฐ์
              </p>
              <div className="my-5 social">
                <a href="/" className="pl-0 pr-3">
                  <span className="icon-facebook"></span>
                </a>
                <a href="/" className="pl-3 pr-3">
                  <span className="icon-twitter"></span>
                </a>
                <a href="/" className="pl-3 pr-3">
                  <span className="icon-instagram"></span>
                </a>
                <a href="/" className="pl-3 pr-3">
                  <span className="icon-linkedin"></span>
                </a>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-4">
                  <h2 className="footer-heading">Quick Links</h2>
                  <ul className="list-unstyled">
                    <li>
                      <a href="/">Amazing Atmosphere</a>
                    </li>
                    <li>
                      <a href="/">Caring Staff</a>
                    </li>
                    <li>
                      <a href="/">FAQs</a>
                    </li>
                    <li>
                      <a href="/">About Us</a>
                    </li>
                    <li>
                      <a href="/">Contact Us</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4">
                  <h2 className="footer-heading">Helpful Link</h2>
                  <ul className="list-unstyled">
                    <li>
                      <a href="/">Hospice Care</a>
                    </li>
                    <li>
                      <a href="/">Excellent Cuisine</a>
                    </li>
                    <li>
                      <a href="/">Privacy</a>
                    </li>
                    <li>
                      <a href="/">Terms</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4">
                  <h2 className="footer-heading">Resources</h2>
                  <ul className="list-unstyled">
                    <li>
                      <a href="/">Health Care</a>
                    </li>
                    <li>
                      <a href="/">Elderly Care</a>
                    </li>
                    <li>
                      <a href="/">Care with Love</a>
                    </li>
                    <li>
                      <a href="/">Quality Care</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="text-center text-primary" style={{ marginTop: "300px" }}>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
}

export default Records;
