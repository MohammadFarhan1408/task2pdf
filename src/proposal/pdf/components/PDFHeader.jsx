import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Svg,
  Polygon,
  Rect,
} from "@react-pdf/renderer";
import STEMbotixLogo from "@/assets/images/STEMbotix-Logo.png";

const PDFHeader = () => (
  <View style={styles.headerContainer} fixed>
    {/* Left Side: Logo */}
    <View style={styles.logoSection}>
      <Image src={STEMbotixLogo} style={styles.logo} />
    </View>

    {/* Right Side: Decorative SVG Ribbon */}
    <View style={styles.ribbonWrapper}>
      <Svg viewBox="0 0 400 60" style={styles.svg}>
        {/* First Dark Blue Slant */}
        <Polygon points="30,0 0,0 30,60 60,60" fill="#2E3192" />

        {/* Orange Slant */}
        <Polygon points="105,0 40,0 70,60 135,60" fill="#F15A24" />

        {/* Main Blue Block */}
        <Polygon points="145,60 400,60 400,0 115,0" fill="#2E3192" />
      </Svg>
    </View>
  </View>
);

const styles = StyleSheet.create({
  // headerContainer: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "space-between",
  //   height: 60,
  //   marginBottom: 20,
  // },
  headerContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 60,
  },

  logoSection: {
    marginLeft: 20,
  },
  logo: {
    width: 180,
    height: "auto",
  },
  ribbonWrapper: {
    width: 300,
    height: 60,
  },
  svg: {
    width: "100%",
    height: "100%",
  },
});

export default PDFHeader;
