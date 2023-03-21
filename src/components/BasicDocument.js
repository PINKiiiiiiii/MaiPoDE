import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Font,
  Image,
} from "@react-pdf/renderer";
import ReactDOM from "react-dom";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "./firebase/firebaseConfig";
import font from "./File/Sarabun-Regular.ttf";
import logo from "./Picture/Logo.png";

Font.register({
  family: "Sarabun",
  src: font,
});
const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    color: "black",
  },
  headerFirst: {
    fontFamily: "Sarabun",
    fontSize: "35",
    fontWeight: "bold",
    color: "#009242",
    marginBottom: "13",
    marginTop: "15",
  },
  headerSec: {
    fontFamily: "Sarabun",
    fontSize: "35",
    fontWeight: "bold",
    color: "#FF0000",
    marginBottom: "13",
    marginTop: "50",
  },
  subHead: {
    fontFamily: "Sarabun",
    fontSize: "18",
    color: "black",
    fontWeight: "bold",
    marginBottom: "8",
  },
  section: {
    marginTop: 7,
    fontSize: "14",
    color: "black",
    fontFamily: "Sarabun",
  },
  date: {
    fontSize: "12",
    marginBottom: "10",
    color: "#424242",
    fontFamily: "Sarabun",
  },
  viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
});

function BasicDocument(props) {
  const [loading, isLoading] = useState(true);
  const [info, setInfo] = useState({
    name: "",
    age: 0,
    gender: "",
    ad: "",
    blood: "",
  });
  const [result, setResult] = useState({
    all: 0,
    fixation: 0,
    pro: 0,
    anti: 0,
    smooth: 0,
    vpc: 0,
    day: 0,
    month: 0,
    year: 0,
  });

  useEffect(() => {
    const getData = async () => {
      // const docInfo = doc(db, "Users", props.id);
      // const information = await getDoc(docInfo);
      // setInfo({
      //   name:
      //     information.data().Name.First + "  " + information.data().Name.Last,
      //   age: 2023 - information.data().Birthday.toDate().getFullYear(),
      //   gender: information.data().Gender,
      //   ad: information.data().FamilyHasAD ? "มี" : "ไม่มี",
      //   blood: information.data().BloodGroup,
      // });
      // console.log(props.storageId);
      // const docResult = doc(db, "Results", props.storageId);
      // const result = await getDoc(docResult);
      // setResult({
      //   all: result.data().PredictionAll * 100,
      //   fixation: result.data().PredictionParts[1] * 100,
      //   pro: result.data().PredictionParts[2] * 100,
      //   anti: result.data().PredictionParts[3] * 100,
      //   smooth: result.data().PredictionParts[4] * 100,
      //   vpc: result.data().PredictionParts[5] * 100,
      //   day: result.data().Time.toDate().getDate(),
      //   month: 1 + result.data().Time.toDate().getMonth(),
      //   year: result.data().Time.toDate().getFullYear(),
      // });
      setInfo({
        name: "ธนากร ทองใบ",
        age: 50,
        gender: "ชาย",
        ad: "ไม่มี",
        blood: "A",
      });
      setResult({
        all: 50.2,
        fixation: 45.3,
        pro: 65.8,
        anti: 20.3,
        smooth: 47.9,
        vpc: 39.6,
        day: 20,
        month: 3,
        year: 2023,
      });
      isLoading(false);
    };
    getData();
  }, []);

  if (!loading) {
    return (
      <PDFViewer style={styles.viewer}>
        <Document>
          <Page size="A4" style={styles.page}>
            <View
              style={{
                padding: "10",
              }}
            >
              <Image
                style={{ width: "10%", justifyContent: "flex-start" }}
                src={logo}
              />
            </View>
            <View style={{ paddingHorizontal: "45" }}>
              <Text style={styles.headerFirst}>Patient Medical Report</Text>
              <Text style={styles.section}>ชื่อ : &nbsp;{info.name}</Text>
              <Text style={styles.section}>อายุ : &nbsp;{info.age}</Text>
              <Text style={styles.section}>เพศ : &nbsp;{info.gender}</Text>
              <Text style={styles.section}>
                กรุ๊ปเลือด : &nbsp;{info.blood}
              </Text>
              <Text style={styles.section}>
                มีประวัติคนในครอบครัวเป็นโรคอัลไซเมอร์ : &nbsp;{info.ad}
              </Text>
              <Text style={styles.headerSec}>Test Result</Text>
              <Text style={styles.date}>
                ตรวจเมื่อวันที่ : &nbsp;{result.day}/{result.month}/
                {result.year}
              </Text>
              <Text style={styles.subHead}>
                เปอร์เซ็นต์ความคล้ายโรคอัลไซเมอร์ : &nbsp;
                {result.all.toFixed(1)}
                &nbsp;%
              </Text>
              <Text style={styles.section}>
                - การจ้องจุด (Fixation) : &nbsp;{result.fixation.toFixed(1)}
                &nbsp;%
              </Text>
              <Text style={styles.section}>
                - การมองตามจุดที่ปรากฏ (Prosaccade) : &nbsp;
                {result.pro.toFixed(1)}&nbsp;%
              </Text>
              <Text style={styles.section}>
                - การมองหลีกเลี่ยงจุดที่ปรากฏ (Antisaccade) : &nbsp;
                {result.anti.toFixed(1)}
                &nbsp;%
              </Text>
              <Text style={styles.section}>
                - การมองตามจุดที่เคลื่อนที่ (Smooth Pursuit) : &nbsp;
                {result.smooth.toFixed(1)}
                &nbsp;%
              </Text>
              <Text style={styles.section}>
                - การแยกแยะภาพ (VPC Task) : &nbsp;{result.vpc.toFixed(1)}&nbsp;%
              </Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
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
export default BasicDocument;
