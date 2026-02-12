import React, { lazy, Suspense, useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useProposalStore } from "@/store/proposalStore";

const ProposalForm = lazy(() => import("../forms/ProposalForm"));
const FinancialForm = lazy(() => import("../forms/FinancialForm"));
const ProjectProposalForm = lazy(() => import("../forms/ProjectProposalForm"));
// const GalleryForm = lazy(() => import("../forms/GalleryForm"));

const ProposalDocumentPDF = lazy(() => import("../pdf/ProposalDocumentPDF"));

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const proposalData = useProposalStore();

  const stepComponents = [
    ProposalForm,
    ProjectProposalForm,
    FinancialForm,
    // GalleryForm,
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
            document={<ProposalDocumentPDF data={proposalData} />}
            fileName="Proposal-Data.pdf"
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
