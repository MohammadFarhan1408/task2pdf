import React, { useEffect } from "react";
import { useProposalStore } from "@/store/proposalStore";
import FormNavigation from "../navigation/FormNavigation";

const ProposalForm = ({ nextStep, prevStep, isLastStep, generatePDF }) => {
  const { to, subject, description, date } = useProposalStore(
    (state) => state.proposal,
  );
  const updateProposal = useProposalStore((state) => state.updateProposal);

  const getCurrentDateISO = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");

    return `${day}/${month}/${year}`;
  };

  const today = getCurrentDateISO();
  useEffect(() => {
    if (!date) {
      updateProposal("date", today);
    }
  }, [date, updateProposal]);

  return (
    <div className="">
      <div className="header">
        <h3 className="title">Proposal</h3>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          nextStep();
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="labelClass" htmlFor="to">
              To
            </label>
            <input
              type="text"
              id="to"
              value={to}
              onChange={(e) => updateProposal("to", e.target.value)}
              className="inputClass"
              placeholder=""
              required
            />
          </div>
          <div>
            <label className="labelClass" htmlFor="subject">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => updateProposal("subject", e.target.value)}
              maxLength={150}
              className="inputClass"
              placeholder="Subject"
              required
            />
          </div>
          <div className="md:col-span-2">
            <label className="labelClass" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              rows="4"
              value={description}
              onChange={(e) => updateProposal("description", e.target.value)}
              className="inputClass resize-none"
              placeholder="Describe Description..."
              required
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
    </div>
  );
};

export default ProposalForm;
