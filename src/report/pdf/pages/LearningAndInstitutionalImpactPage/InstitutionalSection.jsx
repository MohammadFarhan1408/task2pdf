import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { styles } from "./institutionalStyle";
import { useReportStore } from "@/store/reportStore";

const InstitutionalSection = () => {
  const {
    teacherCapacityBuilding,
    infrastructureUse,
    curriculumEnhancement,
    sustainabilityMeasures,
  } = useReportStore((state) => state.institutionalImpact || {});

  return (
    <View style={styles.container} id="institutional-impact">
      <View style={styles.impactCard}>
        <Text style={styles.cardHeader}>
          CAPACITY BUILDING OF TEACHERS/STAFF
        </Text>
        <Text style={styles.cardBody}>
          {teacherCapacityBuilding ||
            "No specific data on staff training recorded."}
        </Text>
      </View>

      <View style={styles.impactCard}>
        <Text style={styles.cardHeader}>INFRASTRUCTURE UTILIZATION</Text>
        <Text style={styles.cardBody}>
          {infrastructureUse || "No infrastructure usage data documented."}
        </Text>
      </View>

      <View style={styles.impactCard}>
        <Text style={styles.cardHeader}>CURRICULUM ENHANCEMENT</Text>
        <Text style={styles.cardBody}>
          {curriculumEnhancement ||
            "No curriculum updates recorded for this phase."}
        </Text>
      </View>

      <View style={[styles.impactCard, styles.sustainabilityHighlight]}>
        <View style={styles.row}>
          <View style={styles.leafIcon} />
          <Text
            style={[styles.cardHeader, { marginBottom: 0, color: "#166534" }]}
          >
            SUSTAINABILITY MEASURES
          </Text>
        </View>
        <View style={styles.separator} />
        <Text style={[styles.cardBody, { color: "#14532d" }]}>
          {sustainabilityMeasures ||
            "No long-term sustainability plans documented."}
        </Text>
      </View>
    </View>
  );
};

export default InstitutionalSection;
