import React from "react";
import { Page, Text, View } from "@react-pdf/renderer";
import { styles } from "./styles";
import { useReportStore } from "@/store/reportStore";
import PDFFooter from "../../components/PDFFooter";
import PDFHeader from "../../components/PDFHeader";
import SectionTitle from "../../components/SectionTitle";
import PDFPageLayout from "../../components/PDFPageLayout";

export const SummaryPage = () => {
  const { summaryOfImpact, keyTakeaways, recommendations } = useReportStore(
    (state) => state.conclusion || {},
  );

  return (
    <PDFPageLayout>
      <View id="summary">
        <SectionTitle title="Summary" />
        <View style={styles.container}>
          <View style={styles.summaryBox}>
            <Text style={styles.sectionLabel}>SUMMARY OF IMPACT</Text>
            <Text style={styles.bodyText}>
              {summaryOfImpact ||
                "The ISTEM Collective Foundation, with a proven track record of installing over 150 STEM labs and 5 AmRit Anganwadis, and training over 2,000 students and 500 teachers, has successfully implemented two transformative educational projects, fully sponsored by Haitian Huayuan Machinery (India) Pvt Ltd. These initiatives include the establishment of AI and Robotics Labs in two schools and the setup of AmRit Anganwadi centers. The projects were inaugurated on March 31, 2025, by Hon'ble MLA Shri Mukesh Bhai Patel (Mehsana Constituency) in the gracious presence of Shri Sunil Chaudhary, Director of Haitian Huayuan Machinery (India) Pvt Ltd, other company members, and the District Education Officer. Aligned with the National Education Policy 2020 (NEP2020), these projects promote hands-on STEM education and interactive early childhood learning. This report details the project implementations, including lab setups, training programs, educational tools, and outcomes, with placeholders for photographs to document the work for submission to Haitian Huayuan Machinery (India) Pvt Ltd."}
            </Text>
          </View>
          <View style={styles.takeawaySection}>
            <Text style={styles.sectionLabel}>KEY TAKEAWAYS</Text>
            <View style={styles.takeawayCard}>
              <Text style={styles.italicText}>
                {keyTakeaways ||
                  "Strategic partnerships and hands-on technological integration are essential for modernizing rural education landscapes."}
              </Text>
            </View>
          </View>
          <View style={styles.recommendationSection}>
            <View style={styles.headerRow}>
              <View style={styles.targetIcon} />
              <Text style={styles.sectionLabel}>
                RECOMMENDATIONS FOR FUTURE PHASES
              </Text>
            </View>
            <View style={styles.recommendationBox}>
              <Text style={styles.bodyText}>
                {recommendations ||
                  "Expanding digital infrastructure and continuous teacher training are recommended to maintain the momentum of innovation."}
              </Text>
            </View>
          </View>
          <View style={styles.signOff}>
            <Text style={styles.signOffText}>
              The ISTEM Collective Foundation remains committed to advancing
              STEM education and early childhood development in collaboration
              with our valued partners.
            </Text>
          </View>
        </View>
      </View>
    </PDFPageLayout>
  );
};
