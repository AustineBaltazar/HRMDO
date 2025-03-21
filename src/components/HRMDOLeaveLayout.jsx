import React from "react";
import {
  Page,
  Text,
  Document,
  StyleSheet,
  View,
  Font,
  Image,
} from "@react-pdf/renderer";
import TimesNewRoman from "./fonts/TimesNewRoman.ttf";
import Calibri from "./fonts/calibri.ttf";
import ArialBold from "./fonts/ArialBold.ttf";
import CalibriBold from "./fonts/CalibriBold.ttf";
import BBCondensed from "./fonts/BBCondensed.ttf";
import SampleLogo from "./logo.jpg";

Font.register({
  page: { paddingLeft: 80, paddingRight: 80, paddingBottom: 80 },
  family: "TimesNewRoman",
  src: TimesNewRoman,
});

Font.register({
  family: "Calibri",
  src: Calibri,
});

Font.register({
  family: "ArialBold",
  src: ArialBold,
});

Font.register({
  family: "CalibriBold",
  src: CalibriBold,
});

Font.register({
  family: "BBCondensed",
  src: BBCondensed,
});

const styles = StyleSheet.create({
  page: {
    paddingLeft: 85,
    paddingRight: 85,
    paddingBottom: 70,
    paddingTop: 20,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 2,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    borderBottomStyle: "solid",
  },
  logo1: {
    width: 75,
    height: 75,
    marginBottom: 20,
  },
  logo2: {
    width: 75,
    height: 75,
    marginBottom: 20,
  },

  content: {
    textAlign: "center",
    fontSize: 7.5,
    flex: 1,
  },
  map: {
    width: 50,
    height: 30,
  },
  certificate: {
    fontSize: 13,
    fontFamily: "CalibriBold",
    textAlign: "center",
    marginTop: 40,
    letterSpacing: 3,
    marginBottom: 6,
  },
  content1: {
    fontSize: 9.5,
    textAlign: "justify",
    lineHeight: 1.5,
  },

  letterContainer: {
    alignItems: "center",
    marginRight: 1.8,
  },
  letter: {
    fontSize: 9.5,
    fontFamily: "CalibriBold",
    textAlign: "center",
  },
  underline: {
    width: 7,
    height: 1,
    backgroundColor: "black",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  nameAlign: { fontSize: 8, textAlign: "center" },
  fontFooter: { fontSize: 8, fontFamily: "Calibri" },
  fontFooter2: { fontSize: 7, fontFamily: "Calibri" },
});

const addSpacing = (text, spaceCount = 3) => {
  return text.split(" ").join(" ".repeat(spaceCount));
};

const text = "COMPUTATION";
const text1 = "SUMMARY";

const HRMDOLayout = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* <---- Start of Header ----> */}
      <View style={styles.header}>
        {/* Left Side Logo */}
        <Image style={styles.logo1} src={SampleLogo} />

        {/* Middle: Office Details */}
        <View style={styles.content}>
          <Text style={{ fontFamily: "Calibri", fontSize: 8.5 }}>
            Republic of the Philippines
          </Text>
          <Text style={{ fontFamily: "CalibriBold", fontSize: 9 }}>
            PROVINCE OF PANGASINAN
          </Text>
          <Text style={{ fontFamily: "CalibriBold", fontSize: 9 }}>
            HUMAN RESOURCE MANAGEMENT AND DEVELOPMENT OFFICE
          </Text>
          <Text style={{ fontFamily: "Calibri", fontSize: 8.5, marginTop: 2 }}>
            1st Floor, Palaris Building, Capitol Compound, Lingayen, Pangasinan
          </Text>
          <Text style={{ fontFamily: "TimesNewRoman", fontSize: 8 }}>
            Tel. No. (075) 636-0446, (075) 613-4330
          </Text>
          <Text style={{ fontFamily: "Calibri", fontSize: 7.5, marginTop: 2 }}>
            Email Address: humanresource@hrmdolgupangasinan.com;
            hrmdopgp@gmail.com;
          </Text>
          <Text style={{ fontFamily: "Calibri", fontSize: 7.5 }}>
            hrmdoorgdev01@gmail.com; pgphrmdorsp@gmail.com;
            pgphrmdo.ld@gmail.com;
          </Text>
          <Text style={{ fontFamily: "Calibri", fontSize: 7.5 }}>
            centerforexcelllence@hrmdolgupangasinan.com
          </Text>
        </View>
        {/* Right Side logo Map */}
        <Image style={styles.logo2} src={SampleLogo} />
      </View>
      {/* Title : Certification */}
      <Text style={styles.certificate}>CERTIFICATION</Text>

      {/* <---- Start of the Main Content ----> */}
      <Text style={styles.content1}>
        {"\u00A0".repeat(7)}
        {addSpacing(
          "This is to certify that according to the records kept in this office, "
        )}
        <Text style={{ fontWeight: "bold" }}>Jonathan Lungayan</Text>
      </Text>
      <Text style={styles.content1}>
        {addSpacing(
          "Castro, Administrative Officer III, Provincial Governor's Office (MISO), Ling., Pang. has a total"
        )}
      </Text>
      <Text style={styles.content1}>
        {addSpacing(
          "leave balance of 157.1670 DAYS vacation and sick leave of absence to his credit for the"
        )}
      </Text>
      <Text style={styles.content1}>
        servies rendered by him for the period from
      </Text>

      {/* Computation Details */}
      <Text
        style={{
          fontFamily: "Calibri",
          fontSize: 10,
          textAlign: "left",
          marginTop: 40,
        }}
      >
        Computation is as follows:
      </Text>

      {/* Title of Computation (the only way i know to seperate the letters with underline) */}
      <View style={styles.container}>
        {text.split("").map((char, index) => (
          <View key={index} style={styles.letterContainer}>
            <Text style={styles.letter}>{char}</Text>
            <View
              style={[
                styles.underline,
                { transform: [{ rotate: index % 2 === 0 ? -5 : 5 }] }, // ✅ Corrected rotation
              ]}
            />
          </View>
        ))}
      </View>

      {/* Left Column for the Computation Section */}
      <View style={{ flexDirection: "row", marginTop: 10, marginBottom: 14 }}>
        <View style={{ flex: 1, fontSize: 10, fontFamily: "Calibri" }}>
          <Text style={{ marginBottom: 5, fontFamily: "CalibriBold" }}>
            EARNED LEAVE
          </Text>
          <Text>For _______ years service............</Text>
          <Text>For _______ months service........</Text>
          <Text>For _______ days service.............</Text>
          <Text>Total earned leave........................</Text>
          <Text>Less: Leave taken or enjoyed........</Text>
          <Text>BALANCE LEAVE TO HIS CREDIT....</Text>
        </View>

        {/* Right Column for the Computation Section */}
        <View
          style={{
            flex: 1,
            fontSize: 10,
            fontFamily: "Calibri",
            marginRight: 100,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginBottom: 3,
              marginRight: 80,
              fontFamily: "CalibriBold",
            }}
          >
            <Text style={{ marginRight: 30 }}>VACATION</Text>
            <Text style={{ marginLeft: 40 }}>SICK</Text>
          </View>

          <Text>__________ {"\u00A0".repeat(1)}___________</Text>
          <Text>__________ {"\u00A0".repeat(1)}___________</Text>
          <Text>__________ {"\u00A0".repeat(1)}___________</Text>
          <Text>__________ {"\u00A0".repeat(1)}___________</Text>
          <Text>______________________</Text>
          <Text>______________________</Text>
        </View>
      </View>
      {/* <---- Start of the 2nd Main Content ----> */}
      {/* Title : SUMMARY */}
      <View style={styles.container}>
        {text1.split("").map((char, index) => (
          <View key={index} style={styles.letterContainer}>
            <Text style={styles.letter}>{char}</Text>
            <View
              style={[
                styles.underline,
                { transform: [{ rotate: index % 2 === 0 ? -5 : 5 }] },
              ]}
            />
          </View>
        ))}
      </View>
      {/* Left Column for the Summary Section */}
      <View style={{ flexDirection: "row", marginTop: 2, marginBottom: 14 }}>
        <View style={{ flex: 1, fontSize: 10, fontFamily: "Calibri" }}>
          <Text>Balance vacation leave.................</Text>
          <Text>Balance sick leave........................</Text>
          <Text>TOTAL LEAVE TO HIS CREDIT......</Text>
        </View>
        {/* Right Column for the Summary Section */}
        <View
          style={{
            flex: 1,
            fontSize: 10,
            fontFamily: "Calibri",
            marginRight: 35,
            marginTop: 28,
          }}
        >
          <Text>_______</Text>
        </View>
      </View>

      {/*  <---- Start of the Admininstrative Information ----> */}
      <View
        style={{
          flexDirection: "row",
          marginTop: 12,
          width: "100%",
          fontFamily: "Calibri",
        }}
      >
        <Text style={{ fontSize: 8.5, marginRight: 175 }}>Computed By:</Text>
        <Text style={{ fontSize: 8.5 }}>Reviewed By:</Text>
      </View>
      {/* Admininstrative Information */}
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          marginTop: 8,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 8.5, textAlign: "center" }}>
          <Text style={{ fontFamily: "CalibriBold" }}>
            VINCENT OLIVER D. LIM{"\n"}
          </Text>
          <Text style={{ fontFamily: "Calibri" }}>
            Admininstrative Aide III
          </Text>
        </Text>
        <Text style={{ fontSize: 8.5, marginLeft: 130, textAlign: "center" }}>
          <Text style={{ fontFamily: "CalibriBold" }}>
            MERLYN Y. ADAN{"\n"}
          </Text>
          <Text style={{ fontFamily: "Calibri" }}>
            Supervising Administrative Officer
          </Text>
        </Text>
      </View>
      {/* Head Department Information */}
      <View
        style={{
          flexDirection: "row",
          marginTop: 18,
          width: "100%",
          fontFamily: "Calibri",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 8.5, marginRight: 150 }}>
          Certified Correct:
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          width: "100%",
          marginTop: 9,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={styles.nameAlign}>
          <Text style={{ fontFamily: "CalibriBold" }}>
            MARIA VIRGINIA JAILE G. DE LEON{"\n"}
          </Text>
          <Text style={{ fontFamily: "Calibri" }}>
            Prov'l. Gov't. Assistant Department Head
          </Text>
        </Text>
      </View>

      {/* <---- Start of the Footer ----> */}
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          marginTop: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={styles.nameAlign}>
          <Text style={{ fontFamily: "Calibri" }}>Official Seal</Text>
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          width: "130%",
          marginTop: 8,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ marginRight: 250, textAlign: "left" }}>
          <Text style={styles.fontFooter}>Tuesday, March11, 2025{"\n"}</Text>
          <Text style={styles.fontFooter2}>
            Source: Personnel Management Information System Generated Report
          </Text>
        </Text>
        <Text style={{ textAlign: "right", marginRight: 200 }}>
          <Text style={styles.fontFooter}>Page 1 of 1{"\n"}</Text>
          <Text style={styles.fontFooter2}>
            HRMDO-Leave Credit Certification
          </Text>
        </Text>
      </View>
      {/* <---- End of Footer ----> */}
    </Page>
  </Document>
);

export default HRMDOLayout;
