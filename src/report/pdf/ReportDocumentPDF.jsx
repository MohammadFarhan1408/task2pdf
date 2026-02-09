import { Document } from "@react-pdf/renderer";

import { CoverPage } from "./pages/CoverPage/CoverPage";
import { TableOfContentsPage } from "./pages/TableOfContentsPage/TableOfContentsPage";
import { SummaryPage } from "./pages/SummaryPage/SummaryPage";
import { ProjectPage } from "./pages/ProjectPage/ProjectPage";
import { ObjectivesPage } from "./pages/ObjectivesPage/ObjectivesPage";
import { BeneficiaryAndBaselinePage } from "./pages/BeneficiaryAndBaselinePage/BeneficiaryAndBaselinePage";
import { QuantitativeAndQualitativeImpactPage } from "./pages/QuantitativeAndQualitativeImpactPage/QuantitativeAndQualitativeImpactPage";
import { LearningAndInstitutionalImpactPage } from "./pages/LearningAndInstitutionalImpactPage/LearningAndInstitutionalImpactPage";
import { SocialAndInnovationImpactPage } from "./pages/SocialAndInnovationImpactPage/SocialAndInnovationImpactPage";
import { CaseStudiesAndChallengesPage } from "./pages/CaseStudiesAndChallengesPage/CaseStudiesAndChallengesPage";
import { SustainabilityAndMonitoringPage } from "./pages/SustainabilityAndMonitoringPage/SustainabilityAndMonitoringPage";
import { EconomicImpactPage } from "./pages/EconomicImpactPage/EconomicImpactPage";
import { PhotographsPage } from "./pages/PhotographsPage/PhotographsPage";
import { BackPage } from "./pages/BackPage/BackPage";

const isEmptyText = (text) => !text || text.trim() === "";

const isEmptyNumber = (n) =>
  n === "" || n === null || n === undefined || Number.isNaN(n);

const isEconomicImpactEmpty = (e) => {
  return (
    isEmptyText(e.employabilityEnhancement) &&
    isEmptyText(e.incomeOpportunities) &&
    isEmptyNumber(e.costPerBeneficiary) &&
    isEmptyNumber(e.roi)
  );
};

const ReportDocumentPDF = ({ data }) => {
  const hideEconomic = isEconomicImpactEmpty(data.economicImpact);

  return (
    <Document>
      <CoverPage />
      <TableOfContentsPage />
      <SummaryPage />
      <ProjectPage />
      <ObjectivesPage />
      <BeneficiaryAndBaselinePage />
      <QuantitativeAndQualitativeImpactPage />
      <LearningAndInstitutionalImpactPage />
      <SocialAndInnovationImpactPage />
      <CaseStudiesAndChallengesPage />
      <SustainabilityAndMonitoringPage />
      {!hideEconomic && <EconomicImpactPage />}
      <PhotographsPage />
      <BackPage />
    </Document>
  );
};

export default ReportDocumentPDF;
