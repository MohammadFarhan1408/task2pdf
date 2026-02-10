import React from "react";
import { View } from "@react-pdf/renderer";
import LearningSection from "./LearningSection";
import InstitutionalSection from "./InstitutionalSection";
import SectionTitle from "../../components/SectionTitle";
import PDFPageLayout from "../../components/PDFPageLayout";

export const LearningAndInstitutionalImpactPage = () => {
  return (
    <PDFPageLayout>
      <View id="learning-and-skill">
        <SectionTitle title="Learning & Skill Outcomes" />
        <LearningSection />
      </View>

      <View style={{ marginTop: 20 }} />

      <View id="institutional-impact">
        <SectionTitle title="Institutional / Ecosystem Impact" />
        <InstitutionalSection />
      </View>
    </PDFPageLayout>
  );
};
