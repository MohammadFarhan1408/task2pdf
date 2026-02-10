import React from "react";
import { View } from "@react-pdf/renderer";
import SustainabilitySection from "./SustainabilitySection";
import MonitoringSection from "./MonitoringSection";
import SectionTitle from "../../components/SectionTitle";
import PDFPageLayout from "../../components/PDFPageLayout";

export const SustainabilityAndMonitoringPage = () => {
  return (
    <PDFPageLayout>
      <View id="sustainability">
        <SectionTitle title="Sustainability & Scalability" />
        <SustainabilitySection />
      </View>

      <View style={{ marginTop: 20 }} />

      <View id="monitoring-evaluation">
        <SectionTitle title="Monitoring & Evaluation Methodology" />
        <MonitoringSection />
      </View>
    </PDFPageLayout>
  );
};
