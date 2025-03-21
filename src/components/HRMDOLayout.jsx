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
  page: { paddingLeft: 80, paddingRight: 80, paddingBottom: 80 },
  certificate: {
    fontSize: 8,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 4,
    letterSpacing: 3,
  },
  hr: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    borderBottomStyle: "solid",
    marginVertical: 6,
  },
  name: {
    fontSize: 7,
    textIndent: 25,
    marginTop: 10,
    lineHeight: 2,
  },
  details: {
    fontSize: 7,
    textIndent: 25,
    lineHeight: 3,
  },
  balance: { fontSize: 7, textIndent: 85, lineHeight: 1.8 },
  totalBalance: { fontSize: 7, textIndent: 85 },
  totalBackground: {
    fontWeight: "bold",
    backgroundColor: "#aaa",
    marginLeft: 100,
  },
  headerHeight: {
    lineHeight: 0.59,
  },
  headerWeight: {
    fontWeight: "bold",
  },
  logoContainer: {
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  nameAlign: { fontSize: 7, textAlign: "center" },
  fontFooter: { fontSize: 7, fontFamily: "Calibri" },
  fontFooter2: { fontSize: 5, fontFamily: "Calibri" },
});

const HRMDOLayout = () => (
  <Document>
    <Page size="B5" style={styles.page}>
      {/* <---- Start of Header ----> */}
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image style={styles.logo} src={SampleLogo} />
      </View>
      {/* Office Information */}
      <Text
        style={{
          fontSize: 7,
          textAlign: "center",
          marginTop: -15,
        }}
      >
        <Text style={{ fontFamily: "Calibri" }}>
          Republic of the Philippines{"\n"}
        </Text>
        <Text style={styles.headerHeight}>
          <Text style={{ fontFamily: "CalibriBold", fontSize: 7.5 }}>
            <Text style={styles.headerWeight}>
              PROVINCE OF PANGASINAN{"\n"}
            </Text>
            <Text style={styles.headerWeight}>
              HUMAN RESOURCE MANAGEMENT AND DEVELOPMENT OFFICE{"\n"}
            </Text>
          </Text>
          <Text style={{ fontFamily: "Calibri" }}>
            1st Floor, Palaris Building, Capitol Compound, Lingayen, Pangasinan
            {"\n"}
          </Text>
          <View>
            <Text
              style={{
                fontFamily: "TimesNewRoman",
                fontSize: 6.8,
              }}
            >
              Contact Nos.: {"\u00A0".repeat(5)}HR Main Office - 0928-440-2568 /
              0965-036-7848 {"\u00A0".repeat(45)}
              {"\n"}
              Center for Excellence - 0928-362-7146 / 0965-036-7854
              {"\u00A0".repeat(30)}
              {"\n"}
            </Text>
          </View>

          <Text style={{ fontFamily: "Calibri", fontSize: 5.8 }}>
            Email Address: humanresource@hrmdolgupangasinan.com;
            centerforexcellence@hrmdolgupangasinan.com
          </Text>
        </Text>
      </Text>
      {/* <---- End of Header ---->*/}
      {/* Horizontal Rule (Line below the Header) */}
      <View style={styles.hr} />

      {/* Title Main content*/}
      <Text style={styles.certificate}>CERTIFICATION</Text>
      {/* <---- Start of the Main Content ---->*/}
      <Text style={{ marginTop: 10, fontFamily: "Calibri" }}>
        <Text>
          <Text style={{ fontSize: 7, lineHeight: 2.5 }}>
            This is to certify that based on the records kept in this office
            {"\n"}
          </Text>
        </Text>
        {/* Human Information*/}
        <Text>
          <Text style={styles.name}>Name: {"\n"}</Text>
          <View>
            <Text style={styles.details}>Official Designation: {"\n"}</Text>
            <Text style={styles.details}>Department/Office: {"\n"}</Text>
            <Text style={styles.details}>
              Summary of Leave Balance as of 11th day of March 2025 {"\n"}
            </Text>
          </View>
        </Text>
        {/* Summary of Leave Balance*/}
        <View style={{ width: "50%", marginBottom: 5 }}>
          <Text style={styles.balance}>
            Vacation Leave:{"\u00A0".repeat(20)}37.4170{"\n"}
          </Text>
          <Text style={styles.balance}>
            Sick Leave:{"\u00A0".repeat(28)}119.7500121{"\n"}
          </Text>
          <Text style={styles.totalBalance}>
            Total:{"\u00A0".repeat(38)}
            <Text style={styles.totalBackground}>157.162127{"\n"}</Text>
          </Text>
        </View>
      </Text>
      {/* <---- continuation of  main Content ---->*/}
      <Text style={{ fontSize: 7, paddingTop: 7, fontFamily: "Calibri" }}>
        <Text style={{ lineHeight: 0.6 }}>
          Issued upon the request of whatever legal purpose it may serve.
          {"\n"}
        </Text>
        <Text>
          Done at Lingayen, Pangasinan this 11th day of March 2025.{"\n"}
        </Text>
      </Text>

      {/* Administrative Information*/}
      <View
        style={{
          flexDirection: "row",
          marginTop: 12,
          width: "100%",
          fontFamily: "Calibri",
        }}
      >
        <Text style={{ fontSize: 7, marginRight: 125 }}>Prepared By:</Text>
        <Text style={{ fontSize: 7 }}>Reviewed By:</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          width: "100%",
          marginTop: 8,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 7, marginRight: 80, textAlign: "center" }}>
          <Text style={{ fontFamily: "CalibriBold" }}>
            VINCENT OLIVER D. LIM{"\n"}
          </Text>
          <Text style={{ fontFamily: "Calibri" }}>
            Admininstrative Aide III
          </Text>
        </Text>
        <Text style={styles.nameAlign}>
          <Text style={{ fontFamily: "CalibriBold" }}>
            MERLYN Y. ADAN{"\n"}
          </Text>
          <Text style={{ fontFamily: "Calibri" }}>
            Supervising Administrative Officer
          </Text>
        </Text>
      </View>
      {/* Department Head Information*/}
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
        <Text style={{ fontSize: 7, marginRight: 150 }}>Certified By:</Text>
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
      {/* <---- Start of the FOOTER ---->*/}
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          marginTop: 35,
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
        <Text style={{ textAlign: "left", marginRight: 200 }}>
          <Text style={styles.fontFooter}>Page 1 of 1{"\n"}</Text>
          <Text style={styles.fontFooter2}>HRMDO-Leave Certification</Text>
        </Text>
      </View>
      {/* <---- End of FOOTER ---->*/}
    </Page>
  </Document>
);

export default HRMDOLayout;
