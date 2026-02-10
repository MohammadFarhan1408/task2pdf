import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { styles } from "./qualitativeStyle";
import { useReportStore } from "@/store/reportStore";

const QuantitativeSection = () => {
  const {
    participantsTrained,
    attendanceRate,
    completionRate,
    certificationsAchieved,
    assessmentImprovement,
  } = useReportStore((state) => state.quantitativeImpact || {});

  return (
    <View style={styles.container}>
      <View style={styles.heroRow}>
        <View style={styles.heroBox}>
          <Text style={styles.heroLabel}>PARTICIPANTS TRAINED</Text>
          <Text style={styles.heroValue}>{participantsTrained}</Text>
        </View>
        <View style={[styles.heroBox, { backgroundColor: "#3b82f6" }]}>
          <Text style={[styles.heroLabel, { color: "#bfdbfe" }]}>
            CERTIFICATIONS ACHIEVED
          </Text>
          <Text style={[styles.heroValue, { color: "#ffffff" }]}>
            {certificationsAchieved}
          </Text>
        </View>
      </View>

      <View style={styles.progressSection}>
        <Text style={styles.sectionTitle}>
          Key Performance Indicators (KPIs)
        </Text>

        <View style={styles.metricItem}>
          <View style={styles.metricHeader}>
            <Text style={styles.metricName}>Attendance / Retention Rate</Text>
            <Text style={styles.metricPercent}>{attendanceRate}%</Text>
          </View>
          <View style={styles.progressBarBg}>
            <View
              style={[
                styles.progressBarFill,
                { width: `${attendanceRate}%`, backgroundColor: "#f59e0b" },
              ]}
            />
          </View>
        </View>

        <View style={styles.metricItem}>
          <View style={styles.metricHeader}>
            <Text style={styles.metricName}>Completion Rate</Text>
            <Text style={styles.metricPercent}>{completionRate}%</Text>
          </View>
          <View style={styles.progressBarBg}>
            <View
              style={[
                styles.progressBarFill,
                { width: `${completionRate}%`, backgroundColor: "#10b981" },
              ]}
            />
          </View>
        </View>

        <View style={[styles.metricItem, { marginBottom: 0 }]}>
          <View style={styles.metricHeader}>
            <Text style={styles.metricName}>
              Improvement in Assessment Scores
            </Text>
            <Text style={styles.metricPercent}>+{assessmentImprovement}%</Text>
          </View>
          <View style={styles.progressBarBg}>
            <View
              style={[
                styles.progressBarFill,
                {
                  width: `${assessmentImprovement}%`,
                  backgroundColor: "#8b5cf6",
                },
              ]}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default QuantitativeSection;
