import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { styles } from "./innovationStyles";
import { useReportStore } from "@/store/reportStore";

const InnovationSection = () => {
  const { newTechnologies, innovationProjects, research } = useReportStore(
    (state) => state.innovationImpact || {},
  );

  return (
    <View style={styles.container} id="innovation-impact">
      <View style={styles.techSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>NEW TECHNOLOGIES ADOPTED</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.bodyText}>
            {newTechnologies || "No new technology adoption data recorded."}
          </Text>
        </View>
      </View>

      <View style={styles.techSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>INNOVATION PROJECTS DEVELOPED</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.bodyText}>
            {innovationProjects ||
              "No specific innovation projects documented."}
          </Text>
        </View>
      </View>

      <View style={styles.techSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>RESEARCH & IP OUTCOMES</Text>
        </View>
        <View style={styles.researchCard}>
          <Text style={styles.researchText}>
            {research ||
              "No research or intellectual property outcomes recorded for this phase."}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default InnovationSection;
