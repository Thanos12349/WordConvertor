import React, { useState } from "react";

/**
 * Word to PDF Converter (Frontend Component)
 * -----------------------------------------
 * NOTE:
 * Browsers CANNOT directly convert .doc/.docx to PDF reliably.
 * This component works with a BACKEND API (Node / Java / .NET)
 * which performs conversion using LibreOffice or MS Word.
 *
 * Flow:
 * 1. Select multiple Word files
 * 2. Upload to backend
 * 3. Backend converts all to PDF
 * 4. PDFs are returned as a ZIP for download
 */

const WordToPdfConverter = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const handleConvert = async () => {
    if (files.length === 0) {
      alert("Please select Word files");
      return;
    }

    const formData = new FormData();
    files.forEach((file) => formData.append("files", file));

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/convert-word-to-pdf", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Conversion failed");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "converted_pdfs.zip";
      document.body.appendChild(a);
      a.click();
      a.remove();

    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      alert("Error converting files");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h4 className="mb-3">Word to PDF Converter</h4>

        <input
          type="file"
          accept=".doc,.docx"
          multiple
          className="form-control mb-3"
          onChange={handleFileChange}
        />

        <button
          className="btn btn-primary"
          onClick={handleConvert}
          disabled={loading}
        >
          {loading ? "Converting..." : "Convert & Download"}
        </button>

        <p className="text-muted mt-3">
          Select multiple Word files → Convert to PDF → Download ZIP
        </p>
      </div>
    </div>
  );
};

export default WordToPdfConverter;