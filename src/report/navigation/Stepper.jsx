import React, { lazy, Suspense, useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useReportStore } from "../../store/reportStore";
// import ReportDocumentPDF from "../pdf/ReportDocumentPDF";

// import ProjectForm from "../forms/ProjectForm";
// import BaselineEndlineForm from "../forms/BaselineEndlineForm";
// import BeneficiaryProfileForm from "../forms/BeneficiaryProfileForm";
// import CaseStudyForm from "../forms/CaseStudyForm";
// import ChallengesForm from "../forms/ChallengesForm";
// import EconomicImpactForm from "../forms/EconomicImpactForm";
// import InnovationImpactForm from "../forms/InnovationImpactForm";
// import InstitutionalImpactForm from "../forms/InstitutionalImpactForm";
// import LearningOutcomesForm from "../forms/LearningOutcomesForm";
// import MonitoringEvaluationForm from "../forms/MonitoringEvaluationForm";
// import ObjectivesForm from "../forms/ObjectivesForm";
// import PhotographsForm from "../forms/PhotographsForm";
// import QualitativeImpactForm from "../forms/QualitativeImpactForm";
// import QuantitativeImpactForm from "../forms/QuantitativeImpactForm";
// import SocialImpactForm from "../forms/SocialImpactForm";
// import SustainabilityForm from "../forms/SustainabilityForm";

const ProjectForm = lazy(() => import("../forms/ProjectForm"));
const BaselineEndlineForm = lazy(() => import("../forms/BaselineEndlineForm"));
const BeneficiaryProfileForm = lazy(
  () => import("../forms/BeneficiaryProfileForm"),
);
const CaseStudyForm = lazy(() => import("../forms/CaseStudyForm"));
const ChallengesForm = lazy(() => import("../forms/ChallengesForm"));
const EconomicImpactForm = lazy(() => import("../forms/EconomicImpactForm"));
const InnovationImpactForm = lazy(
  () => import("../forms/InnovationImpactForm"),
);
const InstitutionalImpactForm = lazy(
  () => import("../forms/InstitutionalImpactForm"),
);
const LearningOutcomesForm = lazy(
  () => import("../forms/LearningOutcomesForm"),
);
const MonitoringEvaluationForm = lazy(
  () => import("../forms/MonitoringEvaluationForm"),
);
const ObjectivesForm = lazy(() => import("../forms/ObjectivesForm"));
const PhotographsForm = lazy(() => import("../forms/PhotographsForm"));
const QualitativeImpactForm = lazy(
  () => import("../forms/QualitativeImpactForm"),
);
const SocialImpactForm = lazy(() => import("../forms/SocialImpactForm"));
const SustainabilityForm = lazy(() => import("../forms/SustainabilityForm"));

const ReportDocumentPDF = lazy(() => import("../pdf/ReportDocumentPDF"));

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const storeData = useReportStore();

  const stepComponents = [
    ProjectForm,
    ObjectivesForm,
    BeneficiaryProfileForm,
    BaselineEndlineForm,
    QuantitativeImpactForm,
    QualitativeImpactForm,
    LearningOutcomesForm,
    InstitutionalImpactForm,
    SocialImpactForm,
    EconomicImpactForm,
    InnovationImpactForm,
    CaseStudyForm,
    ChallengesForm,
    SustainabilityForm,
    MonitoringEvaluationForm,
    PhotographsForm,
  ];

  const ActiveForm = stepComponents[currentStep];
  const totalSteps = stepComponents.length - 1;

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generatePDF = () => {
    document.getElementById("pdf-download-btn")?.click();
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-2xl">
      <ActiveForm
        nextStep={nextStep}
        prevStep={prevStep}
        isLastStep={currentStep === totalSteps}
        generatePDF={generatePDF}
      />
      <div className="flex justify-center items-center mt-6 w-full">
        <Suspense fallback={<div>Loading...</div>}>
          <PDFDownloadLink
            id="pdf-download-btn"
            document={<ReportDocumentPDF data={storeData} />}
            fileName="Report-Data.pdf"
            style={{ display: "none" }}
          >
            Download
          </PDFDownloadLink>
        </Suspense>
      </div>
    </div>
  );
};

export default Stepper;
