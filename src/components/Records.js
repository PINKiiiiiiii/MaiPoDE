import ProgressBar from "react-bootstrap/ProgressBar";
import Circle from "react-circle";
import check from "./Picture/check.png";
import checkleft from "./Picture/checkleft.png";
import "react-circular-progressbar/dist/styles.css";
import BarChart from "./BarChart";
import { useEffect, useState, useRef } from "react";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import db from "./firebase/firebaseConfig";

function Records(props) {
  let cnt = 0;
  const [count, setCount] = useState(0);
  const [active, isActive] = useState([
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
  const [date, setDate] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [loading, isLoading] = useState(true);

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
              <h4 className="text-b">% ?????????????????????????????????????????????????????????????????????????????????????????????????????????</h4>
              <div
                className="row mb-4"
                style={{
                  paddingLeft: "100px",
                  paddingRight: "100px",
                  paddingTop: "17px",
                }}
              >
                <Circle
                  progress={75}
                  size={245}
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
            </div>
          </div>
          <div className="col-6">
            <div className="widget">
              <h4 className="text-b" style={{ paddingBottom: "14px" }}>
                ?????????????????????????????????????????????????????????
              </h4>
              <div style={{ width: "100%" }}>
                <BarChart
                  options={{
                    defaults: {
                      global: {
                        defaultFontFamily: "Anuphan",
                        defaultSize: "50px",
                      },
                    },
                  }}
                />
              </div>
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
            ?????????????????????????????????
          </h4>
          <h1 className="text-b">???????????????????????????????????????????????????????????????</h1>
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
                        <h1 className="text-b">???.???.2566</h1>
                      </div>
                      <div className="row mb-5">
                        <div className="col-2 wrapper-center">
                          <div
                            className={active[1] ? "circle-finish" : "circle"}
                          >
                            <p className={active[1] ? "hide" : "text"}>???.???.</p>
                            <div className={active[1] ? "text-finish" : "hide"}>
                              <h1 className="mb-0">{date[1]}</h1>
                              <p className="mb-0">???.???.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-2 wrapper-center">
                          <div
                            className={active[2] ? "circle-finish" : "circle"}
                          >
                            <p className={active[2] ? "hide" : "text"}>???.???.</p>
                            <div className={active[2] ? "text-finish" : "hide"}>
                              <h1 className="mb-0">{date[2]}</h1>
                              <p className="mb-0">???.???.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-2 wrapper-center">
                          <div
                            className={active[3] ? "circle-finish" : "circle"}
                          >
                            <p className={active[3] ? "hide" : "text"}>??????.???.</p>
                            <div className={active[3] ? "text-finish" : "hide"}>
                              <h1 className="mb-0">{date[3]}</h1>
                              <p className="mb-0">??????.???.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-2 wrapper-center">
                          <div
                            className={active[4] ? "circle-finish" : "circle"}
                          >
                            <p className={active[4] ? "hide" : "text"}>??????.???.</p>
                            <div className={active[4] ? "text-finish" : "hide"}>
                              <h1 className="mb-0">{date[4]}</h1>
                              <p className="mb-0">??????.???.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-2 wrapper-center">
                          <div
                            className={active[5] ? "circle-finish" : "circle"}
                          >
                            <p className={active[5] ? "hide" : "text"}>???.???.</p>
                            <div className={active[5] ? "text-finish" : "hide"}>
                              <h1 className="mb-0">{date[5]}</h1>
                              <p className="mb-0">???.???.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-2 wrapper-center">
                          <div
                            className={active[6] ? "circle-finish" : "circle"}
                          >
                            <p className={active[6] ? "hide" : "text"}>??????.???.</p>
                            <div className={active[6] ? "text-finish" : "hide"}>
                              <h1 className="mb-0">{date[6]}</h1>
                              <p className="mb-0">??????.???.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-5">
                        <div className="col-2 wrapper-center">
                          <div
                            className={active[7] ? "circle-finish" : "circle"}
                          >
                            <p className={active[7] ? "hide" : "text"}>???.???.</p>
                            <div className={active[7] ? "text-finish" : "hide"}>
                              <h1 className="mb-0">{date[7]}</h1>
                              <p className="mb-0">???.???.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-2 wrapper-center">
                          <div
                            className={active[8] ? "circle-finish" : "circle"}
                          >
                            <p className={active[8] ? "hide" : "text"}>???.???.</p>
                            <div className={active[8] ? "text-finish" : "hide"}>
                              <h1 className="mb-0">{date[8]}</h1>
                              <p className="mb-0">???.???.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-2 wrapper-center">
                          <div
                            className={active[9] ? "circle-finish" : "circle"}
                          >
                            <p className={active[9] ? "hide" : "text"}>???.???.</p>
                            <div className={active[9] ? "text-finish" : "hide"}>
                              <h1 className="mb-0">{date[9]}</h1>
                              <p className="mb-0">???.???.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-2 wrapper-center">
                          <div
                            className={active[10] ? "circle-finish" : "circle"}
                          >
                            <p className={active[10] ? "hide" : "text"}>???.???.</p>
                            <div
                              className={active[10] ? "text-finish" : "hide"}
                            >
                              <h1 className="mb-0">{date[10]}</h1>
                              <p className="mb-0">???.???.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-2 wrapper-center">
                          <div
                            className={active[11] ? "circle-finish" : "circle"}
                          >
                            <p className={active[11] ? "hide" : "text"}>???.???.</p>
                            <div
                              className={active[11] ? "text-finish" : "hide"}
                            >
                              <h1 className="mb-0">{date[11]}</h1>
                              <p className="mb-0">???.???.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-2 wrapper-center">
                          <div
                            className={active[12] ? "circle-finish" : "circle"}
                          >
                            <p className={active[12] ? "hide" : "text"}>???.???.</p>
                            <div
                              className={active[12] ? "text-finish" : "hide"}
                            >
                              <h1 className="mb-0">{date[12]}</h1>
                              <p className="mb-0">???.???.</p>
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
                        <h1 className="text-b">???.???.2565</h1>
                      </div>
                      <div className="row mb-5">
                        <div className="col-2 wrapper-center">
                          <div className="circle">
                            <p className="text">???.???.</p>
                          </div>
                        </div>
                        <div className="col-2 wrapper-center">
                          <div className="circle">
                            <p className="text">???.???.</p>
                          </div>
                        </div>
                        <div className="col-2 wrapper-center">
                          <div className="circle">
                            <p className="text">??????.???.</p>
                          </div>
                        </div>
                        <div className="col-2 wrapper-center">
                          <div className="circle">
                            <p className="text">??????.???</p>
                          </div>
                        </div>
                        <div className="col-2 wrapper-center">
                          <div className="circle">
                            <p className="text">???.???.</p>
                          </div>
                        </div>
                        <div className="col-2 wrapper-center">
                          <div className="circle">
                            <p className="text">??????.???.</p>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-5">
                        <div className="col-2 wrapper-center">
                          <div className="circle">
                            <p className="text">???.???.</p>
                          </div>
                        </div>
                        <div className="col-2 wrapper-center">
                          <div className="circle">
                            <p className="text">???.???.</p>
                          </div>
                        </div>
                        <div className="col-2 wrapper-center">
                          <div className="circle">
                            <p className="text">???.???.</p>
                          </div>
                        </div>
                        <div className="col-2 wrapper-center">
                          <div className="circle">
                            <p className="text">???.???.</p>
                          </div>
                        </div>
                        <div className="col-2 wrapper-center">
                          <div className="circle">
                            <p className="text">???.???.</p>
                          </div>
                        </div>
                        <div className="col-2 wrapper-center">
                          <div className="circle">
                            <p className="text">???.???.</p>
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
              <img src={checkleft} style={{ width: "70px" }} />
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <img src={check} style={{ width: "70px" }} />
            </button>
          </div>
        </div>
        <div
          className="container-fluid bg-down text-white"
          style={{ padding: "15vh", marginTop: "80px" }}
        >
          <div className="row">
            <div className="col-lg-4">
              <h2>????????????????????????????????????</h2>
              <p>
                BrainMED (Brain Medical Equipment for Screening Dementia) ?????????
                ??????????????????????????????????????????????????????????????? ?????????????????????
                ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
              </p>
              <div className="my-5 social">
                <a href="#" className="pl-0 pr-3">
                  <span className="icon-facebook"></span>
                </a>
                <a href="#" className="pl-3 pr-3">
                  <span className="icon-twitter"></span>
                </a>
                <a href="#" className="pl-3 pr-3">
                  <span className="icon-instagram"></span>
                </a>
                <a href="#" className="pl-3 pr-3">
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
                      <a href="#">Amazing Atmosphere</a>
                    </li>
                    <li>
                      <a href="#">Caring Staff</a>
                    </li>
                    <li>
                      <a href="#">FAQs</a>
                    </li>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4">
                  <h2 className="footer-heading">Helpful Link</h2>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Hospice Care</a>
                    </li>
                    <li>
                      <a href="#">Excellent Cuisine</a>
                    </li>
                    <li>
                      <a href="#">Privacy</a>
                    </li>
                    <li>
                      <a href="#">Terms</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4">
                  <h2 className="footer-heading">Resources</h2>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Health Care</a>
                    </li>
                    <li>
                      <a href="#">Elderly Care</a>
                    </li>
                    <li>
                      <a href="#">Care with Love</a>
                    </li>
                    <li>
                      <a href="#">Quality Care</a>
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
    return <div>loading...</div>;
  }
}

export default Records;
