import { useNavigate } from "react-router-dom";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { CircularProgressbar } from "react-circular-progressbar";
import BarChartDoc from "./BarChartDoc";
import ProgressBar from "react-bootstrap/ProgressBar";
import user from "./Picture/user.png";
import userad from "./Picture/userad.png";

const rows = [
  {
    name: "สมศรี",
    lastname: "ไพรินทราภา",
    age: "50",
    sex: "หญิง",
    alzheimer: "50%",
    date: "07/03/2566",
  },
  {
    name: "สมชาย",
    lastname: "สุวิกาโล",
    age: "60",
    sex: "ชาย",
    alzheimer: "31%",
    date: "06/03/2566",
  },
  {
    name: "ธัญญานก",
    lastname: "ไสทอง",
    age: "58",
    sex: "หญิง",
    alzheimer: "25%",
    date: "05/03/2566",
  },
  {
    name: "ชยพล",
    lastname: "ตาเจริญเมือง",
    age: "47",
    sex: "ชาย",
    alzheimer: "6%",
    date: "05/03/2566",
  },
  {
    name: "กิตติพัทธ์",
    lastname: "จิรฐา",
    age: "50",
    sex: "ชาย",
    alzheimer: "18%",
    date: "04/03/2566",
  },
  {
    name: "ญาณวุฒิ",
    lastname: "นอนดี",
    age: "69",
    sex: "ชาย",
    alzheimer: "12%",
    date: "03/03/2566",
  },
  {
    name: "ธนีพร",
    lastname: "อัมพร",
    age: "53",
    sex: "หญิง",
    alzheimer: "29%",
    date: "03/03/2566",
  },
  {
    name: "ธำรง",
    lastname: "ชัย",
    age: "50",
    sex: "ชาย",
    alzheimer: "58%",
    date: "01/03/2566",
  },
  {
    name: "นรีรัตน์",
    lastname: "รัตนเดชา",
    age: "65",
    sex: "หญิง",
    alzheimer: "50%",
    date: "28/02/2566",
  },
  {
    name: "นีรชา",
    lastname: "ชาเขียว",
    age: "63",
    sex: "หญิง",
    alzheimer: "31%",
    date: "26/02/2566",
  },
  {
    name: "ปยุต",
    lastname: "ชาอู่หลง",
    age: "51",
    sex: "ชาย",
    alzheimer: "26%",
    date: "26/02/2566",
  },
  {
    name: "พรรณิดา",
    lastname: "พันบาท",
    age: "48",
    sex: "หญิง",
    alzheimer: "9%",
    date: "25/02/2566",
  },
];

function HomeDoc(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/admin/patient");
  };
  return (
    <div
      className="container-fluid bg-blue"
      style={{
        paddingTop: "90px",
        paddingRight: "30px",
        paddingLeft: "30px",
        paddingBottom: "20px",
      }}
    >
      <div className="row mb-4">
        <div className="col-4">
          <div className="widget">
            <div className="row" style={{ paddingLeft: "10px" }}>
              {/* <div className="col-9"> */}
              <h5 className="text-gray mb-4">ผู้ใช้งานทั้งหมด</h5>
              <h1
                style={{
                  fontWeight: "bold",
                  display: "inline",
                  color: "#00b6a6",
                  fontSize: "105px",
                }}
              >
                12 คน
              </h1>
              {/* </div> */}
              <div className="row wrapper">
                <img src={user} style={{ width: "27%" }} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="widget">
            <div className="row" style={{ paddingLeft: "10px" }}>
              <h5 className="text-gray mb-4">เสี่ยงเป็นอัลไซเมอร์ทั้งหมด</h5>
              <h1
                style={{
                  fontWeight: "bold",
                  display: "inline",
                  color: "#fe413d",
                  fontSize: "105px",
                }}
              >
                3 คน
              </h1>

              <div className="row wrapper">
                <img src={userad} style={{ width: "27%" }} />
              </div>
            </div>
          </div>
        </div>

        <div className="col-4">
          <div className="widget" style={{ paddingBottom: "5px" }}>
            <div className="row mb-0">
              <h5 className="text-gray">
                จำนวนผู้ที่เสี่ยงเป็นโรคอัลไซเมอร์ในแต่ละเดือน
              </h5>
            </div>
            <div className="row">
              <BarChartDoc />
            </div>
            <p className="text-center">เดือน</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="container-dash-sec mb-1 text-b">
            <div className="row" style={{ marginBottom: "30px" }}>
              <h1>สถิติของผู้ใช้งานแต่ละคน</h1>
            </div>
            <div className="row">
              <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <h4>วันที่</h4>
                      </TableCell>
                      <TableCell>
                        <h4>ชื่อ</h4>
                      </TableCell>
                      <TableCell>
                        <h4>นามสกุล</h4>
                      </TableCell>
                      <TableCell align="center">
                        <h4>อายุ</h4>
                      </TableCell>
                      <TableCell align="center">
                        <h4>เพศ</h4>
                      </TableCell>
                      <TableCell align="center">
                        <h4>เปอร์เซ็นต์อัลไซเมอร์</h4>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell onClick={handleClick}>
                          <h6>{row.date}</h6>
                        </TableCell>
                        <TableCell onClick={handleClick}>
                          <h6>{row.name}</h6>
                        </TableCell>
                        <TableCell onClick={handleClick}>
                          <h6>{row.lastname}</h6>
                        </TableCell>
                        <TableCell align="center" onClick={handleClick}>
                          <h6>{row.age}</h6>
                        </TableCell>
                        <TableCell align="center" onClick={handleClick}>
                          <h6>{row.sex}</h6>
                        </TableCell>
                        <TableCell align="center" onClick={handleClick}>
                          <h6>{row.alzheimer}</h6>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeDoc;
