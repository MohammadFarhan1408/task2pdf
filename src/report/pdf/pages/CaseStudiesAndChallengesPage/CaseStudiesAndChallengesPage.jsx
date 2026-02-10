import React from "react";
import { View } from "@react-pdf/renderer";
import CaseStudiesSection from "./CaseStudiesSection";
import ChallengesSection from "./ChallengesSection";
import SectionTitle from "../../components/SectionTitle";
import PDFPageLayout from "../../components/PDFPageLayout";

export const CaseStudiesAndChallengesPage = () => {
  return (
    <PDFPageLayout>
      <View id="case-studies">
        <SectionTitle title="Case Studies / Success Stories" />
        <CaseStudiesSection />
      </View>

      <View style={{ marginTop: 20 }} />

      <View id="challenges-learning">
        <SectionTitle title="Challenges & Learnings" />
        <ChallengesSection />
      </View>
    </PDFPageLayout>
  );
};
