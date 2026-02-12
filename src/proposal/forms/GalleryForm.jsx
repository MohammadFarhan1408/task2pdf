import React from "react";
import FormNavigation from "../navigation/FormNavigation";
import { useProposalStore } from "@/store/proposalStore";

const GalleryForm = ({ prevStep, isLastStep, generatePDF }) => {
  const gallery = useProposalStore((state) => state.gallery);
  const updateGallery = useProposalStore((state) => state.updateGallery);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!gallery || gallery.length === 0) {
      alert("Please upload at least one photograph.");
      return;
    }

    if (isLastStep) {
      generatePDF();
    }
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files || []);
    updateGallery(files);
  };

  const removeImage = (index) => {
    const newGallery = gallery.filter((_, i) => i !== index);
    updateGallery(newGallery);
  };

  return (
    <>
      <div className="header" style={{ marginBottom: 0 }}>
        <h3 className="title">Gallery</h3>
        {/* <p className="text-sm text-gray-500">Upload up to 8 images</p> */}
      </div>

      <form className="py-4 space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="labelClass" htmlFor="gallery">
            Gallery Images
          </label>
          <input
            type="file"
            accept="image/*"
            id="gallery"
            name="gallery"
            multiple
            onChange={handleFileChange}
            className="fileInputClass"
          />
        </div>

        {/* Preview Grid */}
        {gallery && gallery.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((file, index) => (
              <div
                key={index}
                className="relative border rounded-lg overflow-hidden"
              >
                <img
                  src={URL.createObjectURL(file)}
                  alt={`Gallery ${index + 1}`}
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

export default GalleryForm;
