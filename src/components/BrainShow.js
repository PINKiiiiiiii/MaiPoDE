import video from "./Video/brain.mp4";

function BrainShow() {
  return (
    <div
      className="container-fluid"
      style={{ padding: "0em", backgroundColor: "#00000" }}
    >
      <video src={video} width="100%" height="100%" autoPlay muted></video>
    </div>
  );
}

export default BrainShow;
