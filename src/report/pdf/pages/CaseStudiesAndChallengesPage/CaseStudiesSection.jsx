import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { styles } from "./caseStudyStyles";
import { useReportStore } from "@/store/reportStore";

const CaseStudiesSection = () => {
  const {
    beneficiaryBackground,
    interventionDetails,
    outcomeAchieved,
    testimonial,
  } = useReportStore((state) => state.caseStudy || {});

  return (
    <View style={styles.container} id="case-studies">
      <View style={styles.storySection}>
        <View style={[styles.block, { marginBottom: 20 }]}>
          <Text style={styles.blockHeader}>BENEFICIARY BACKGROUND</Text>
          <Text style={styles.bodyText}>
            {beneficiaryBackground || "No background data provided."}
          </Text>
        </View>

        <View style={styles.block}>
          <Text style={styles.blockHeader}>INTERVENTION DETAILS</Text>
          <Text style={styles.bodyText}>
            {interventionDetails || "No intervention details provided."}
          </Text>
        </View>

        <View style={styles.block}>
          <Text style={styles.blockHeader}>OUTCOME ACHIEVED</Text>
          <View style={styles.outcomeHighlight}>
            <Text style={styles.outcomeText}>
              {outcomeAchieved || "No outcome details provided."}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.testimonialContainer}>
        <View style={styles.quoteIcon}>
          <Text
            style={{
              fontSize: 30,
              color: "#3b82f6",
              fontFamily: "Helvetica-Bold",
            }}
          >
            “
          </Text>
        </View>
        <Text style={styles.testimonialText}>
          {testimonial ||
            "The impact of this program has been life-changing for our community."}
        </Text>
        <View style={styles.quoteIconEnd}>
          <Text
            style={{
              fontSize: 30,
              color: "#3b82f6",
              fontFamily: "Helvetica-Bold",
            }}
          >
            ”
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CaseStudiesSection;
