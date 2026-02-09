import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { styles } from "./socialStyles";
import { useReportStore } from "@/store/reportStore";

const SocialSection = () => {
  const socialImpact = useReportStore((state) => state.socialImpact || {});

  const {
    inclusionAndEquity = "",
    communityEngagement = "",
    awarenessPrograms = "",
    digitalDivideReduction = "",
  } = socialImpact;

  return (
    <View style={styles.container} id="social-impact">
      <View style={styles.impactSection}>
        <View style={styles.headerContainer}>
          <View style={[styles.circle, { backgroundColor: "#8b5cf6" }]} />
          <Text style={styles.sectionHeader}>INCLUSION & EQUITY IMPACT</Text>
        </View>
        <View style={styles.contentBox}>
          <Text style={styles.bodyText}>
            {inclusionAndEquity ||
              "Ensuring equal access to STEM resources for all students regardless of gender or socio-economic background."}
          </Text>
        </View>
      </View>

      <View style={styles.impactSection}>
        <View style={styles.headerContainer}>
          <View style={[styles.circle, { backgroundColor: "#3b82f6" }]} />
          <Text style={styles.sectionHeader}>DIGITAL DIVIDE REDUCTION</Text>
        </View>
        <View
          style={[
            styles.contentBox,
            { backgroundColor: "#eff6ff", borderColor: "#bfdbfe" },
          ]}
        >
          <Text style={[styles.bodyText, { color: "#1e3a8a" }]}>
            {digitalDivideReduction ||
              "Providing rural educational centers with the same high-tech tools found in urban private schools."}
          </Text>
        </View>
      </View>

      <View style={styles.splitRow}>
        <View style={styles.splitCard}>
          <Text style={styles.splitHeader}>COMMUNITY ENGAGEMENT</Text>
          <Text style={styles.smallBody}>
            {communityEngagement ||
              "Involvement of local stakeholders and parents in project inauguration and student showcases."}
          </Text>
        </View>
        <View style={styles.splitCard}>
          <Text style={styles.splitHeader}>AWARENESS GENERATION</Text>
          <Text style={styles.smallBody}>
            {awarenessPrograms ||
              "Promoting the importance of STEM education and early childhood learning (NEP 2020) within the region."}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SocialSection;
