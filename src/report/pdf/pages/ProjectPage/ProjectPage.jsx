import React from "react";
import { Page, Text, View } from "@react-pdf/renderer";
import { styles } from "./styles";
import { useReportStore } from "@/store/reportStore";
import PDFFooter from "../../components/PDFFooter";
import PDFHeader from "../../components/PDFHeader";

export const ProjectPage = () => {
  const {
    projectTitle,
    implementingOrganization,
    partnerSponsor,
    projectDuration,
    location,
    targetBeneficiaries,
    problemStatement,
    startDate,
    endDate,
  } = useReportStore((state) => state.projectOverview || {});

  const formatDate = (date) =>
    date ? new Date(date).toLocaleDateString("en-GB") : "—";

  return (
    <Page size="A4" style={styles.page} id="project-overview">
      <PDFHeader title="Project Overview" />

      <View style={styles.container}>
        {/* Main Title Section */}
        <View style={styles.titleCard}>
          <Text style={styles.label}>PROJECT TITLE</Text>
          <Text style={styles.mainTitle}>{projectTitle}</Text>
        </View>

        {/* Details Grid */}
        <View style={styles.infoGrid}>
          <View style={styles.gridItem}>
            <Text style={styles.smallLabel}>IMPLEMENTING ORGANIZATION</Text>
            <Text style={styles.valueText}>{implementingOrganization}</Text>
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.smallLabel}>PARTNER / SPONSOR</Text>
            <Text style={styles.valueText}>{partnerSponsor}</Text>
          </View>
        </View>

        <View style={styles.infoGrid}>
          <View style={styles.gridItem}>
            <Text style={styles.smallLabel}>LOCATION</Text>
            <Text style={styles.valueText}>{location}</Text>
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.smallLabel}>PROJECT DURATION</Text>
            <Text style={styles.valueText}>{projectDuration} Months</Text>
            <Text style={styles.dateRange}>
              {formatDate(startDate)} to {formatDate(endDate)}
            </Text>
          </View>
        </View>

        {/* Target Beneficiaries */}
        <View style={styles.fullWidthCard}>
          <Text style={styles.smallLabel}>TARGET BENEFICIARIES</Text>
          <Text style={styles.valueText}>
            {targetBeneficiaries ||
              "Students aged 3-18 and local teaching staff."}
          </Text>
        </View>

        {/* Problem Statement */}
        <View style={[styles.fullWidthCard, styles.problemBox]}>
          <Text style={[styles.smallLabel, { color: "#b91c1c" }]}>
            PROBLEM STATEMENT
          </Text>
          <Text style={styles.problemText}>
            {problemStatement ||
              "Lack of access to modern STEM facilities and hands-on technological learning environments in rural educational centers."}
          </Text>
        </View>
      </View>

      <PDFFooter />
    </Page>
  );
};
