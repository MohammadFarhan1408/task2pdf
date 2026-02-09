import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { styles } from "./sustainabilityStyles";
import { useReportStore } from "@/store/reportStore";

const SustainabilitySection = () => {
  const { continuationPlan, scalabilityPotential, replicationPossibilities } =
    useReportStore((state) => state.sustainability || {});

  return (
    <View style={styles.container} id="sustainability">
      <View style={styles.sectionCard}>
        <View style={styles.headerRow}>
          <View
            style={[styles.statusIndicator, { backgroundColor: "#10b981" }]}
          />
          <Text style={styles.sectionLabel}>
            POST-PROJECT CONTINUATION PLAN
          </Text>
        </View>
        <Text style={styles.bodyText}>
          {continuationPlan ||
            "A detailed plan for institutionalizing the lab activities within the school's daily curriculum ensures long-term impact."}
        </Text>
      </View>

      <View style={styles.sectionCard}>
        <View style={styles.headerRow}>
          <View
            style={[styles.statusIndicator, { backgroundColor: "#3b82f6" }]}
          />
          <Text style={styles.sectionLabel}>SCALABILITY POTENTIAL</Text>
        </View>
        <Text style={styles.bodyText}>
          {scalabilityPotential ||
            "The modular nature of the AI and Robotics labs allows for expansion into additional grade levels and advanced modules."}
        </Text>
      </View>

      <View style={[styles.sectionCard, { marginBottom: 0 }]}>
        <View style={styles.headerRow}>
          <View
            style={[styles.statusIndicator, { backgroundColor: "#8b5cf6" }]}
          />
          <Text style={styles.sectionLabel}>REPLICATION POSSIBILITIES</Text>
        </View>
        <Text style={styles.bodyText}>
          {replicationPossibilities ||
            "This phygital learning model can be replicated across other government and private schools to bridge the digital divide."}
        </Text>
      </View>
    </View>
  );
};

export default SustainabilitySection;
