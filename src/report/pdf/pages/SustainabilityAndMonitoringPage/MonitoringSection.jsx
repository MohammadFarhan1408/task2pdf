import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { styles } from "./monitorStyles";
import { useReportStore } from "@/store/reportStore";

const MonitoringSection = () => {
  const { dataCollectionTools, assessmentMethods, monitoringFrequency } =
    useReportStore((state) => state.monitoringEvaluation || {});

  return (
    <>
      <View style={styles.methodologyGrid} id="monitoring-evaluation">
        <View style={styles.methodCard}>
          <View style={styles.cardHeaderRow}>
            <View style={[styles.dot, { backgroundColor: "#3b82f6" }]} />
            <Text style={styles.cardTitle}>DATA COLLECTION TOOLS</Text>
          </View>
          <Text style={styles.cardBody}>
            {dataCollectionTools ||
              "Standardized surveys, digital logs, and observation checklists were utilized."}
          </Text>
        </View>

        <View style={styles.methodCard}>
          <View style={styles.cardHeaderRow}>
            <View style={[styles.dot, { backgroundColor: "#8b5cf6" }]} />
            <Text style={styles.cardTitle}>ASSESSMENT METHODS</Text>
          </View>
          <Text style={styles.cardBody}>
            {assessmentMethods ||
              "Impact was measured through baseline-endline comparisons and practical skill evaluations."}
          </Text>
        </View>
      </View>

      <View style={styles.frequencyBox}>
        <Text style={styles.frequencyLabel}>MONITORING FREQUENCY</Text>
        <Text style={styles.frequencyValue}>
          {monitoringFrequency ||
            "Regular periodic assessments performed throughout the project duration."}
        </Text>
      </View>
    </>
  );
};

export default MonitoringSection;
