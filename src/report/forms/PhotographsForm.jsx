import React from "react";
import { useReportStore } from "@/store/reportStore";
import FormNavigation from "../navigation/FormNavigation";

const PhotographsForm = ({ prevStep, isLastStep, generatePDF }) => {
  const photographs = useReportStore((state) => state.photographs);
  const updatePhotographs = useReportStore((state) => state.updatePhotographs);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!photographs || photographs.length === 0) {
      alert("Please upload at least one photograph.");
      return;
    }
    if (isLastStep) {
      generatePDF();
    }
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files || []);
    updatePhotographs(files);
  };

  const removeImage = (index) => {
    const newPhotographs = photographs.filter((_, i) => i !== index);
    updatePhotographs(newPhotographs);
  };

  return (
    <>
      <div className="header" style={{ marginBottom: 0 }}>
        <h3 className="title">Photographs</h3>
      </div>

      <form className="py-4 space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="labelClass" htmlFor="photographs">
            Photographs
          </label>
          <input
            type="file"
            accept="image/*"
            id="photographs"
            name="photographs"
            multiple
            onChange={handleFileChange}
            className="fileInputClass"
            required
          />
        </div>

        {/* Preview Grid */}
        {photographs && photographs.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {photographs.map((file, index) => (
              <div
                key={index}
                className="relative border rounded-lg overflow-hidden"
              >
                <img
                  src={URL.createObjectURL(file)}
                  alt={`Photographs ${index + 1}`}
                  className="w-full h-32 object-cover"
                  loading="lazy"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-1 right-1 bg-red-600 text-white text-xs px-2 py-1 rounded"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Navigation */}
        <FormNavigation
          prevStep={prevStep}
          isLastStep={isLastStep}
          onGeneratePDF={handleSubmit}
        />
      </form>
    </>
  );
};

export default PhotographsForm;
