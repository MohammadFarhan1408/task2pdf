import React from "react";
import { Page, Text, View, Image } from "@react-pdf/renderer";
import { styles } from "./styles";
import STEMbotixLogo from "@/assets/images/STEMbotix-Logo.png";
import HaitianLogo from "@/assets/images/Haitian-Logo.jpg";
import { useReportStore } from "@/store/reportStore";
import PDFPageLayout from "../../components/PDFPageLayout";

export const CoverPage = () => {
  const { projectTitle } = useReportStore((state) => state.projectOverview);

  return (
    <PDFPageLayout>
      {/* <View style={styles.logoContainer}>
        <Image src={HaitianLogo} style={styles.logoLeft} />
        <Image src={STEMbotixLogo} style={styles.logoRight} />
      </View> */}

      <View style={styles.mainBody}>
        <View style={styles.accentBar} />

        <Text style={styles.reportType}>IMPACT ANALYSIS REPORT</Text>
        <Text style={styles.title}>{projectTitle}</Text>

        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>
            A comprehensive evaluation of outcomes, socio-economic impact, and
            institutional growth.
          </Text>
        </View>
      </View>

      {/* <View style={styles.footerInfo}>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Implementing Organization:</Text>
          <Text style={styles.value}>STEMbotix</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Location:</Text>
          <Text style={styles.value}>Ahmedabad</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Duration:</Text>
          <Text style={styles.value}>2025 - 2026</Text>
        </View>
      </View> */}
    </PDFPageLayout>
  );
};
