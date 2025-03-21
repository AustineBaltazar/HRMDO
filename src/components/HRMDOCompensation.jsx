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
    fontSize: 9.5,
    fontFamily: "CalibriBold",
    textAlign: "center",
    marginTop: 45,
    marginBottom: 6,
  },
  content1: {
    fontSize: 8.2,
    textAlign: "left",

    marginTop: 1.8,
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

const addSpacing = (text, spaceCount = 2) => {
  return text.split(" ").join(" ".repeat(spaceCount));
};

const addSpacing2 = (text, spaceCount = 4) => {
  return text.split(" ").join(" ".repeat(spaceCount));
};
const HRMDOCompensation = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        {/* Left: Logo */}
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

        {/* Right: Map */}
        <Image style={styles.logo2} src={SampleLogo} />
      </View>
      <Text style={styles.certificate}>
        CERTIFICATION OF EMPLOYMENT AND COMPENSATION
      </Text>
      <Text style={styles.content1}>
        {addSpacing(
          "This is to certify that is a PERMANENT employee of the Provincial Government of Pangasinan, appointed "
        )}
      </Text>{" "}
      <Text style={styles.content1}>
        as , , with the following compensation to wit:
      </Text>
      <View
        style={{
          flexDirection: "row",
          marginTop: 26,
          marginBottom: 6,
          fontFamily: "Calibri",
          marginLeft: 35,
        }}
      >
        {/* Left Column */}
        <View
          style={{
            flex: 1,
            fontSize: 8.5,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>Annual Salary:</Text>
            <Text
              style={{
                marginRight: 2,
                marginBottom: 1,
                fontFamily: "TimesNewRoman",
              }}
            >
              ₱
            </Text>
          </View>
          <Text>PERA</Text>
          <Text>Representation Allowance</Text>
          <Text>Transportation Allowance</Text>
          <Text>Clothing Allowance</Text>
          <Text>Subsistence and Laundry Allowance</Text>
          <Text>Hazard Allowance</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontFamily: "CalibriBold" }}>Total</Text>
            <Text
              style={{
                marginRight: 2,
                marginTop: 0.5,
                fontFamily: "TimesNewRoman",
              }}
            >
              ₱
            </Text>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            fontSize: 8.5,
            fontFamily: "Calibri",
            marginRight: 100,
            textAlign: "right",
          }}
        >
          <Text>438,336.00</Text>
          <Text>24,000.00</Text>
          <Text>0.00</Text>
          <Text>0.00</Text>
          <Text>7,000.00</Text>
          <Text>0.00</Text>
          <Text style={{}}>0.00</Text>
          <View
            style={{
              borderBottomWidth: 0.5,
              borderBottomColor: "black",
              width: "100%",
              marginBottom: 0.5,
            }}
          />

          <View
            style={{
              borderBottomWidth: 0.5,
              borderBottomColor: "black",
              width: "100%",
            }}
          >
            <Text style={{ fontFamily: "CalibriBold" }}>469,336.00</Text>
          </View>
          <View
            style={{
              borderBottomWidth: 0.5,
              borderBottomColor: "black",
              width: "100%",
              marginTop: 0.5,
            }}
          />
        </View>
      </View>
      <Text style={styles.content1}>
        {addSpacing2(
          "Further, He/She received the following additional remuneration other than the above during the "
        )}
      </Text>{" "}
      <Text style={styles.content1}>
        twelve-month period ended December 31,
      </Text>
      <View
        style={{
          flexDirection: "row",
          marginTop: 8,
          marginBottom: 2,
          fontFamily: "Calibri",
          marginLeft: 35,
        }}
      >
        <View
          style={{
            flex: 1,
            fontSize: 8.5,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>Year-End Bonus</Text>
            <Text
              style={{
                marginRight: 2,
                marginBottom: 1,
                fontFamily: "TimesNewRoman",
              }}
            >
              ₱
            </Text>
          </View>
          <Text>Cash Gift</Text>
          <Text>Mid Year Bonus</Text>
          <Text>Productivity Enhancement Incentive</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>Total:</Text>
            <Text
              style={{
                marginRight: 2,
                marginTop: 0.5,
                fontFamily: "TimesNewRoman",
              }}
            >
              ₱
            </Text>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            fontSize: 8.5,
            fontFamily: "Calibri",
            marginRight: 100,
            textAlign: "right",
          }}
        >
          <Text>Php 00.00</Text>
          <Text>00.00</Text>
          <Text>00.00</Text>
          <Text>00.00</Text>
          <View
            style={{
              borderBottomWidth: 0.5,
              borderBottomColor: "black",
              width: "100%",
              marginBottom: 0.5,
            }}
          />

          <View
            style={{
              borderBottomWidth: 0.5,
              borderBottomColor: "black",
              width: "100%",
            }}
          >
            <Text style={{ fontFamily: "CalibriBold" }}>00.00</Text>
          </View>
          <View
            style={{
              borderBottomWidth: 0.5,
              borderBottomColor: "black",
              width: "100%",
              marginTop: 0.5,
            }}
          />
        </View>
      </View>
      <Text
        style={{
          fontSize: 8.2,
          textAlign: "left",
        }}
      >
        This certificate is being issued upon the request of{" "}
        {"\u00A0".repeat(2)}for whatever legal purpose it may serve
      </Text>
      <View
        style={{
          flexDirection: "row",
          marginTop: 17,
          width: "100%",
          fontFamily: "Calibri",
        }}
      >
        <Text style={{ fontSize: 8.5, marginRight: 175 }}>Prepared By:</Text>
        <Text style={{ fontSize: 8.5 }}>Reviewed By:</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          marginTop: 6,
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
        <Text style={{ fontSize: 8.5, marginLeft: 120, textAlign: "center" }}>
          <Text style={{ fontFamily: "CalibriBold" }}>
            MERLYN Y. ADAN{"\n"}
          </Text>
          <Text style={{ fontFamily: "Calibri" }}>
            Supervising Administrative Officer
          </Text>
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          width: "100%",
          fontFamily: "Calibri",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 8.5, marginRight: 150 }}>Certified By:</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          marginTop: 4,
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
      <View style={{ marginTop: 8 }}>
        <Text style={styles.content1}>
          Subscribed and sworn to before me, a notary public for and in the
          Province of Pangasinan, this affiant
        </Text>
        <Text style={styles.content1}>
          exhibiting to me her Community Tax Certificate No.{" "}
          {"\u00A0".repeat(1)} issued at {"\u00A0".repeat(1)}on
        </Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 12, marginBottom: 2 }}>
        <View style={{ flex: 1, fontSize: 8.5, fontFamily: "Calibri" }}>
          <View style={{ flexDirection: "row" }}>
            <View>
              <Text>Doc. No.</Text>
              <Text>Page No.</Text>
              <Text>Book No. </Text>
              <Text>Series Of </Text>
            </View>
            <View
              style={{
                marginLeft: 2,
                fontFamily: "TimesNewRoman",
              }}
            >
              <Text>__________</Text>
              <Text>__________</Text>
              <Text>__________</Text>
              <Text>__________</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            fontSize: 8.5,
            fontFamily: "Calibri",
            marginRight: 46,
            textAlign: "center",
            marginTop: 10,
          }}
        >
          <Text>_______________________________________</Text>
          <Text>Notary Public</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          marginTop: 4,
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
          marginTop: 3,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ marginRight: 250, textAlign: "left" }}>
          <Text style={styles.fontFooter}>March 14, 2025{"\n"}</Text>
          <Text style={styles.fontFooter2}>
            Source: Personnel Management Information System Generated Report
          </Text>
        </Text>
        <Text style={{ textAlign: "right", marginRight: 270 }}>
          <Text style={styles.fontFooter}>Page 1 of 1{"\n"}</Text>
          <Text style={styles.fontFooter2}>
            HRMDO-Employment and Compensation Certification
          </Text>
        </Text>
      </View>
    </Page>
  </Document>
);

export default HRMDOCompensation;
