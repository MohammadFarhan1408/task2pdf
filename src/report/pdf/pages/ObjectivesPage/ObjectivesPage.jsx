import React from "react";
import { Page, Text, View } from "@react-pdf/renderer";
import { styles } from "./styles";
import { useReportStore } from "@/store/reportStore";
import PDFFooter from "../../components/PDFFooter";
import PDFHeader from "../../components/PDFHeader";

export const ObjectivesPage = () => {
  const objectives = useReportStore((state) => state.objectives || {});

  const {
    primaryObjectives = "",
    secondaryObjectives = "",
    shortTermOutcomes = "",
    longTermOutcomes = "",
    sdgAlignment = "",
  } = objectives;

  return (
    <Page size="A4" style={styles.page} id="objectives">
      <PDFHeader title="Objectives & Intended Outcomes" />

      <View style={styles.container}>
        {/* Project Goals Section */}
        <View style={styles.sectionRow}>
          <View style={styles.goalCard}>
            <Text style={styles.cardLabel}>PRIMARY OBJECTIVES</Text>
            <Text style={styles.cardText}>
              {primaryObjectives ||
                "To provide hands-on STEM education and prepare students for technological careers."}
            </Text>
          </View>
          <View style={[styles.goalCard, { backgroundColor: "#f8fafc" }]}>
            <Text style={styles.cardLabel}>SECONDARY OBJECTIVES</Text>
            <Text style={styles.cardText}>
              {secondaryObjectives ||
                "To foster a culture of innovation and collaboration within the school ecosystem."}
            </Text>
          </View>
        </View>

        {/* Outcomes Timeline */}
        <View style={styles.timelineSection}>
          <Text style={styles.timelineHeader}>INTENDED OUTCOMES</Text>

          <View style={styles.outcomeRow}>
            <View style={styles.outcomeIcon}>
              <Text style={styles.iconLetter}>S</Text>
            </View>
            <View style={styles.outcomeContent}>
              <Text style={styles.outcomeLabel}>SHORT-TERM OUTCOMES</Text>
              <Text style={styles.bodyText}>
                {shortTermOutcomes ||
                  "Immediate engagement with robotics kits and foundational AI concepts."}
              </Text>
            </View>
          </View>

          <View style={styles.outcomeRow}>
            <View style={[styles.outcomeIcon, { backgroundColor: "#10b981" }]}>
              <Text style={styles.iconLetter}>L</Text>
            </View>
            <View style={styles.outcomeContent}>
              <Text style={styles.outcomeLabel}>LONG-TERM OUTCOMES</Text>
              <Text style={styles.bodyText}>
                {longTermOutcomes ||
                  "Enhanced employability and sustained interest in technology-driven careers."}
              </Text>
            </View>
          </View>
        </View>

        {/* Strategic Alignment */}
        <View style={styles.alignmentBox}>
          <Text style={styles.alignmentLabel}>
            ALIGNMENT WITH SDGs / NATIONAL PRIORITIES
          </Text>
          <Text style={styles.alignmentText}>
            {sdgAlignment ||
              "Aligned with NEP 2020 focusing on experiential learning and early childhood development."}
          </Text>
        </View>
      </View>

      <PDFFooter />
    </Page>
  );
};
