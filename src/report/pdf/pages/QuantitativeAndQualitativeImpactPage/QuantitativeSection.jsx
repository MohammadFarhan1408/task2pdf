import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { styles } from "./quantitativeStyle";
import { useReportStore } from "@/store/reportStore";

const QualitativeSection = () => {
  const {
    confidenceImprovement,
    leadershipSkills,
    teamwork,
    criticalThinking,
    testimonials,
  } = useReportStore((state) => state.qualitativeImpact || {});

  return (
    <View id="quantitative-impact">
      <View style={styles.grid}>
        <View style={styles.row}>
          <View style={styles.card}>
            <View style={[styles.indicator, { backgroundColor: "#f59e0b" }]} />
            <Text style={styles.cardLabel}>CONFIDENCE IMPROVEMENT</Text>
            <Text style={styles.cardBody}>
              {confidenceImprovement ||
                "Observed increase in student participation and willingness to present projects publicly."}
            </Text>
          </View>

          <View style={styles.card}>
            <View style={[styles.indicator, { backgroundColor: "#3b82f6" }]} />
            <Text style={styles.cardLabel}>TEAMWORK & COLLABORATION</Text>
            <Text style={styles.cardBody}>
              {teamwork.charAt(0).toUpperCase() + teamwork.slice(1)}
            </Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.card}>
            <View style={[styles.indicator, { backgroundColor: "#10b981" }]} />
            <Text style={styles.cardLabel}>CRITICAL THINKING</Text>
            <Text style={styles.cardBody}>{criticalThinking}</Text>
          </View>

          <View style={styles.card}>
            <View style={[styles.indicator, { backgroundColor: "#8b5cf6" }]} />
            <Text style={styles.cardLabel}>LEADERSHIP SKILLS</Text>
            <Text style={styles.cardBody}>
              {leadershipSkills.charAt(0).toUpperCase() +
                leadershipSkills.slice(1)}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.summaryNote}>
        <Text style={styles.summaryTitle}>Feedback</Text>
        <Text style={styles.summaryText}>{testimonials}</Text>
      </View>
    </View>
  );
};

export default QualitativeSection;
