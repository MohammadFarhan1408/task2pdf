import React from "react";
import { Page, View } from "@react-pdf/renderer";
import PDFFooter from "../../components/PDFFooter";
import PDFHeader from "../../components/PDFHeader";
import QualitativeSection from "./QualitativeSection";
import QuantitativeSection from "./QuantitativeSection";
import { styles as qualitativeStyles } from "./quantitativeStyle";

export const QuantitativeAndQualitativeImpactPage = () => {
  return (
    <Page size="A4" style={qualitativeStyles.page}>
      <PDFHeader title="Qualitative Impact & Behavioral Change" />
      <QualitativeSection />

      <View style={{ marginTop: 20 }} />

      <PDFHeader title="Quantitative Impact" />
      <QuantitativeSection />

      <PDFFooter />
    </Page>
  );
};
