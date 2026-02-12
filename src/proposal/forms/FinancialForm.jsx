import React, { useEffect } from "react";
import { useProposalStore } from "@/store/proposalStore";
import FormNavigation from "../navigation/FormNavigation";

const FinancialForm = ({ nextStep, prevStep, isLastStep, generatePDF }) => {
  const item = useProposalStore((state) => state.financialProposal);
  const updateFinancialItem = useProposalStore(
    (state) => state.updateFinancialItem,
  );
  const addFinancialItem = useProposalStore((state) => state.addFinancialItem);
  const removeFinancialItem = useProposalStore(
    (state) => state.removeFinancialItem,
  );

  const totalAmount = item.reduce((sum, it) => {
    const val = Number(it.amount) || 0;
    return sum + val;
  }, 0);

  return (
    <div className="">
      <div className="header">
        <h3 className="title">Financial Proposal</h3>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (isLastStep) {
            generatePDF(); // PDF HERE
          } else {
            nextStep();
          }
        }}
      >
        <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm mb-6">
          {/* Header Row - Desktop Only */}
          <div className="hidden md:grid grid-cols-20 gap-4 bg-slate-50 border-b border-slate-200 p-4">
            <div className="col-span-9 text-xs font-bold uppercase text-slate-600">
              Particular And Amount
            </div>
            <div className="col-span-9 text-xs font-bold uppercase text-slate-600">
              Description
            </div>
            <div className="col-span-2 text-right text-xs font-bold uppercase text-slate-600">
              Action
            </div>
          </div>

          <div className="divide-y divide-slate-100">
            {item.map((it, i) => (
              <div
                key={i}
                className="p-4 hover:bg-slate-50/50 transition-colors"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                  <div className="col-span-1 md:col-span-10">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-2">
                      <div className="col-span-1 md:col-span-8">
                        <input
                          className="inputClass"
                          placeholder="Particular Item"
                          value={it.particular}
                          onChange={(e) =>
                            updateFinancialItem(i, "particular", e.target.value)
                          }
                          maxLength={50}
                          required
                        />
                      </div>

                      <div className="col-span-1 md:col-span-4">
                        <input
                          type="number"
                          className="inputClass"
                          min={1}
                          placeholder="0"
                          value={it.amount}
                          onChange={(e) =>
                            updateFinancialItem(
                              i,
                              "amount",
                              Number(e.target.value),
                            )
                          }
                          required
                        />
                      </div>
                    </div>

                    <textarea
                      rows={3}
                      maxLength={200}
                      className="inputClass"
                      placeholder="Brief description"
                      value={it.description}
                      onChange={(e) =>
                        updateFinancialItem(i, "description", e.target.value)
                      }
                      required
                    />
                  </div>

                  <div className="col-span-1 md:col-span-2 flex items-center justify-end">
                    <button
                      type="button"
                      onClick={() => removeFinancialItem(i)}
                      className="px-3 py-1 text-xs font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded border border-red-200 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 bg-slate-50/30">
            <button
              type="button"
              onClick={addFinancialItem}
              className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center"
            >
              <span className="text-lg mr-1 leading-none">+</span> Add New Line
              Item
            </button>
          </div>
        </div>

        <div className="md:col-span-2">
          <label className="labelClass" htmlFor="totalAmount">
            Total Proposed Amount
          </label>
          <input
            type="number"
            id="totalAmount"
            value={totalAmount}
            readOnly
            className="inputClass"
            placeholder="0.00"
          />
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

export default FinancialForm;
