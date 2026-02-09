import React from "react";
import { useReportStore } from "@/store/reportStore";
import FormNavigation from "./components/FormNavigation";

const clampGenderValue = (field, value, current) => {
  const numValue = Number(value) || 0;

  const female = Number(current?.female) || 0;
  const male = Number(current?.male) || 0;
  const other = Number(current?.other) || 0;

  let used = 0;

  if (field === "female") used = male + other;
  if (field === "male") used = female + other;
  if (field === "other") used = female + male;

  const maxAllowed = 100 - used;
  const safeValue = Math.max(0, Math.min(numValue, maxAllowed));

  return {
    ...current,
    [field]: safeValue,
  };
};

const BeneficiaryProfileForm = ({
  nextStep,
  prevStep,
  isLastStep,
  generatePDF,
}) => {
  const {
    totalBeneficiaries,
    ageGroup,
    educationBackground,
    genderDistribution,
    geographicCoverage,
    socioEconomicBackground,
  } = useReportStore((state) => state.beneficiaryProfile);

  const updateBeneficiaryProfile = useReportStore(
    (state) => state.updateBeneficiaryProfile,
  );

  return (
    <>
      <div className="header">
        <h3 className="title">Beneficiary Profile</h3>
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
            <label className="labelClass" htmlFor="totalBeneficiaries">
              Total Beneficiaries (Direct & Indirect)
            </label>
            <input
              type="number"
              id="totalBeneficiaries"
              name="totalBeneficiaries"
              value={totalBeneficiaries}
              onChange={(e) =>
                updateBeneficiaryProfile("totalBeneficiaries", e.target.value)
              }
              min={1}
              required
              className="inputClass"
            />
          </div>
          <div>
            <label className="labelClass">Age Group</label>

            <div className="flex gap-2">
              <input
                type="number"
                placeholder="From"
                className="inputClass"
                required
                value={ageGroup?.split("-")[0] || ""}
                onChange={(e) => {
                  const from = e.target.value;
                  const to = ageGroup?.split("-")[1] || "";
                  updateBeneficiaryProfile(
                    "ageGroup",
                    `${from || ""}-${to || ""}`,
                  );
                }}
                min={0}
                max={ageGroup?.split("-")[1]}
              />
              <input
                type="number"
                placeholder="To"
                className="inputClass"
                required
                value={ageGroup?.split("-")[1] || ""}
                onChange={(e) => {
                  const to = e.target.value;
                  const from = ageGroup?.split("-")[0] || "";
                  updateBeneficiaryProfile(
                    "ageGroup",
                    `${from || ""}-${to || ""}`,
                  );
                }}
                min={parseInt(ageGroup?.split("-")[0]) + 1}
                max={100}
              />
            </div>
          </div>
          <div>
            <label className="labelClass">
              Gender Distribution (Total = 100)
            </label>

            <div className="grid grid-cols-3 gap-3">
              <input
                type="number"
                placeholder="Female"
                className="inputClass"
                value={genderDistribution?.female || ""}
                onChange={(e) =>
                  updateBeneficiaryProfile(
                    "genderDistribution",
                    clampGenderValue(
                      "female",
                      e.target.value,
                      genderDistribution,
                    ),
                  )
                }
                min={0}
                max={100}
                required
              />

              <input
                type="number"
                placeholder="Male"
                className="inputClass"
                value={genderDistribution?.male || ""}
                onChange={(e) =>
                  updateBeneficiaryProfile(
                    "genderDistribution",
                    clampGenderValue(
                      "male",
                      e.target.value,
                      genderDistribution,
                    ),
                  )
                }
                min={0}
                max={100}
                required
              />

              <input
                type="number"
                placeholder="Other"
                className="inputClass"
                value={genderDistribution?.other || ""}
                onChange={(e) =>
                  updateBeneficiaryProfile(
                    "genderDistribution",
                    clampGenderValue(
                      "other",
                      e.target.value,
                      genderDistribution,
                    ),
                  )
                }
                min={0}
                max={100}
                required
              />
            </div>
          </div>

          <div>
            <label className="labelClass" htmlFor="educationBackground">
              Educational Background
            </label>
            <input
              type="text"
              id="educationBackground"
              name="educationBackground"
              value={educationBackground}
              onChange={(e) =>
                updateBeneficiaryProfile("educationBackground", e.target.value)
              }
              maxLength={50}
              required
              className="inputClass"
            />
          </div>

          <div>
            <label className="labelClass" htmlFor="socioEconomicBackground">
              Socio-economic Background
            </label>
            <input
              type="text"
              id="socioEconomicBackground"
              name="socioEconomicBackground"
              value={socioEconomicBackground}
              onChange={(e) =>
                updateBeneficiaryProfile(
                  "socioEconomicBackground",
                  e.target.value,
                )
              }
              maxLength={50}
              required
              className="inputClass"
            />
          </div>

          <div className="md:col-span-2">
            <label className="labelClass" htmlFor="geographicCoverage">
              Geographic Coverage
            </label>
            <input
              type="text"
              id="geographicCoverage"
              name="geographicCoverage"
              value={geographicCoverage}
              onChange={(e) =>
                updateBeneficiaryProfile("geographicCoverage", e.target.value)
              }
              maxLength={100}
              required
              className="inputClass"
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

export default BeneficiaryProfileForm;
