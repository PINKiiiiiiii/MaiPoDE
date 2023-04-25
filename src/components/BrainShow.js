import video from "./Video/brain.mp4";
import { useNavigate } from "react-router-dom";
import back from "./Picture/left-arrow.png";

function BrainShow() {
  const navigate = useNavigate();
  const exit = () => {
    navigate("/signedin/result");
  };
  return (
    <div
      className="container-fluid"
      style={{
        padding: "0em",
      }}
    >
      <div
        className="container-fluid"
        style={{
          padding: "0em",
          backgroundColor: "#00000",
          position: "fixed",
          overflow: "hidden",
          minwidth: "100%",
          zIndex: "-100",
        }}
      >
        <video src={video} width="100%" height="100%" autoPlay muted></video>
      </div>
      <img src={back} onClick={exit} style={{ width: "5%", padding: "20px" }} />
      {/* <button className="btn btn-pink" onClick={exit}>
        <h2>ดาวน์โหลดรายงานทางการแพทย์</h2>
      </button> */}
    </div>
  );
}

export default BrainShow;
