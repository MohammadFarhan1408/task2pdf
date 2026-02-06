import React from "react";
import { useReportStore } from "@/store/reportStore";
import FormNavigation from "./components/FormNavigation";

const EconomicImpactForm = ({
  nextStep,
  prevStep,
  isLastStep,
  generatePDF,
}) => {
  const {
    employabilityEnhancement,
    incomeOpportunities,
    costPerBeneficiary,
    roi,
  } = useReportStore((state) => state.economicImpact);

  const updateEconomicImpact = useReportStore(
    (state) => state.updateEconomicImpact,
  );

  return (
    <>
      <div className="header">
        <h3 className="title">Economic Impact (Optional)</h3>
      </div>

      <form
        className="py-4 space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          nextStep();
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="labelClass" htmlFor="employabilityEnhancement">
              Employability Enhancement
            </label>
            <textarea
              id="employabilityEnhancement"
              rows="4"
              value={employabilityEnhancement}
              onChange={(e) =>
                updateEconomicImpact("employabilityEnhancement", e.target.value)
              }
              className="inputClass resize-none"
              placeholder="Describe employability improvements..."
            />
          </div>
          <div className="md:col-span-2">
            <label className="labelClass" htmlFor="incomeOpportunities">
              Income Opportunities
            </label>
            <textarea
              id="incomeOpportunities"
              rows="4"
              value={incomeOpportunities}
              onChange={(e) =>
                updateEconomicImpact("incomeOpportunities", e.target.value)
              }
              className="inputClass resize-none"
              placeholder="Describe income opportunities..."
            />
          </div>
          <div>
            <label className="labelClass" htmlFor="costPerBeneficiary">
              Cost Per Beneficiary
            </label>
            <input
              type="text"
              id="costPerBeneficiary"
              value={costPerBeneficiary}
              onChange={(e) =>
                updateEconomicImpact("costPerBeneficiary", e.target.value)
              }
              className="inputClass"
              placeholder="Enter amount"
            />
          </div>
          <div>
            <label className="labelClass" htmlFor="roi">
              Return on Investment (%)
            </label>
            <input
              type="number"
              id="roi"
              value={roi}
              onChange={(e) => updateEconomicImpact("roi", e.target.value)}
              className="inputClass"
              placeholder="Enter ROI %"
            />
          </div>
        </div>
        <FormNavigation
          prevStep={prevStep}
          nextStep={nextStep}
          isLastStep={isLastStep}
          onGeneratePDF={generatePDF}
        />
      </form>
    </>
  );
};

export default EconomicImpactForm;
