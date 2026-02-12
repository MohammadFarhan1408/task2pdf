import React from "react";
import { useProposalStore } from "@/store/proposalStore";
import FormNavigation from "../navigation/FormNavigation";

const ProjectProposalForm = ({
  nextStep,
  prevStep,
  isLastStep,
  generatePDF,
}) => {
  const proposal = useProposalStore((state) => state.projectProposal);
  const updateProposal = useProposalStore(
    (state) => state.updateProjectProposal,
  );

  const { title, intro, objectives, provision } = proposal;

  // ---------- LIST HELPERS ----------

  const handleListChange = (index, field, value, listName) => {
    const updated = [...proposal[listName]];
    updated[index][field] = value;
    updateProposal(listName, updated);
  };

  const addItem = (listName, template) => {
    updateProposal(listName, [...proposal[listName], template]);
  };

  const removeItem = (listName, index) => {
    const updated = proposal[listName].filter((_, i) => i !== index);
    updateProposal(listName, updated);
  };

  // ---------- UI ----------

  return (
    <div>
      <div className="header">
        <h3 className="title">Project Proposal</h3>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          nextStep();
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* TITLE */}
          <div>
            <label className="labelClass">Title</label>
            <input
              type="text"
              value={title}
              required
              onChange={(e) => updateProposal("title", e.target.value)}
              className="inputClass"
            />
          </div>

          {/* INTRO */}
          <div>
            <label className="labelClass">Intro</label>
            <input
              type="text"
              value={intro}
              required
              onChange={(e) => updateProposal("intro", e.target.value)}
              maxLength={150}
              className="inputClass"
            />
          </div>

          {/* PROVISION */}
          <div className="md:col-span-2">
            <label className="labelClass">Provision</label>

            {provision.map((item, i) => (
              <div
                key={i}
                className="mb-4 p-4 border-l-4 border-blue-500 bg-blue-50/30"
              >
                <input
                  className="inputClass"
                  placeholder="Service Title"
                  value={item.title}
                  required
                  onChange={(e) =>
                    handleListChange(i, "title", e.target.value, "provision")
                  }
                />

                <textarea
                  className="inputClass mt-2"
                  placeholder="Service Content"
                  rows="4"
                  value={item.content}
                  required
                  onChange={(e) =>
                    handleListChange(i, "content", e.target.value, "provision")
                  }
                />

                <button
                  type="button"
                  onClick={() => removeItem("provision", i)}
                  className="text-red-500 text-xs mt-1"
                >
                  Remove
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={() => addItem("provision", { title: "", content: "" })}
              className="text-blue-600 text-sm font-bold"
            >
              + Add Provision
            </button>
          </div>

          {/* OBJECTIVES */}
          <div className="md:col-span-2">
            <label className="labelClass">Objectives</label>

            {objectives.map((obj, i) => (
              <div
                key={i}
                className="mb-4 p-4 border-l-4 border-green-500 bg-green-50/30"
              >
                <input
                  className="inputClass"
                  placeholder="Objective Title"
                  value={obj.name}
                  required
                  onChange={(e) =>
                    handleListChange(i, "name", e.target.value, "objectives")
                  }
                />

                <textarea
                  className="inputClass mt-2"
                  placeholder="Objective Description"
                  rows="3"
                  value={obj.description}
                  required
                  onChange={(e) =>
                    handleListChange(
                      i,
                      "description",
                      e.target.value,
                      "objectives",
                    )
                  }
                />

                <button
                  type="button"
                  onClick={() => removeItem("objectives", i)}
                  className="text-red-500 text-xs mt-1"
                >
                  Remove
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={() =>
                addItem("objectives", { name: "", description: "" })
              }
              className="text-green-600 text-sm font-bold"
            >
              + Add Objective
            </button>
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

export default ProjectProposalForm;
