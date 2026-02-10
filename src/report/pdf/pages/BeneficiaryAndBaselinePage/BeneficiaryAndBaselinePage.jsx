import React from "react";
import { View } from "@react-pdf/renderer";
import BeneficiarySection from "./BeneficiarySection";
import BaselineEndlineSection from "./BaselineEndlineSection";
import SectionTitle from "../../components/SectionTitle";
import PDFPageLayout from "../../components/PDFPageLayout";

export const BeneficiaryAndBaselinePage = () => {
  return (
    <PDFPageLayout>
      <View id="beneficiary">
        <SectionTitle title="Beneficiary Profile" />
        <BeneficiarySection />
      </View>

      <View id="baseline">
        <SectionTitle title="Baseline vs Endline" />
        <BaselineEndlineSection />
      </View>
    </PDFPageLayout>
  );
};
