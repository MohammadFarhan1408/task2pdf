import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { styles } from "./challengesStyles";
import { useReportStore } from "@/store/reportStore";

const ChallengesSection = () => {
  const { keyChallenges, mitigationStrategies, lessonsLearned } =
    useReportStore((state) => state.challengesAndLearnings || {});

  return (
    <View style={styles.contentContainer} id="challenges-learning">
      <View style={styles.sectionBox}>
        <View style={[styles.accentBar, { backgroundColor: "#ef4444" }]} />
        <Text style={styles.sectionLabel}>KEY CHALLENGES</Text>
        <Text style={styles.contentText}>
          {keyChallenges || "No specific challenges recorded."}
        </Text>
      </View>

      <View style={styles.sectionBox}>
        <View style={[styles.accentBar, { backgroundColor: "#3b82f6" }]} />
        <Text style={styles.sectionLabel}>MITIGATION STRATEGIES</Text>
        <Text style={styles.contentText}>
          {mitigationStrategies || "No mitigation strategies recorded."}
        </Text>
      </View>

      <View style={styles.lessonsContainer}>
        <Text style={styles.lessonsLabel}>
          LESSONS LEARNED & FUTURE INSIGHTS
        </Text>
        <View style={styles.lessonsContent}>
          <Text style={styles.lessonsText}>
            {lessonsLearned || "No lessons learned documented for this phase."}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ChallengesSection;
