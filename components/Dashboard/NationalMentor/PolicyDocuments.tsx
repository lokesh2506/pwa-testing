"use client";

import { useState } from "react";
import documentsData from "@/data/documents.json";
import DocumentItem from "./DocumentItem";
import { PolicyDocument } from "@/types/dashboard/documents";
import CommonButton from "@/components/buttons/CommonButton";

const INITIAL_COUNT = 2;
const EXPANDED_COUNT = 4;

const PolicyDocuments = () => {
  const [expanded, setExpanded] = useState(false);

  const documents = documentsData.documents as PolicyDocument[];

  const visibleDocs = expanded
    ? documents.slice(0, EXPANDED_COUNT)
    : documents.slice(0, INITIAL_COUNT);

  return (
    <div className="card-bg rounded-xl border border-slate-700/50 p-6 shadow-sm flex-1">
      <h3 className="card-title text-base font-bold mb-4">
        Policy Documents
      </h3>

      {/* Document List */}
      <div
        className={`flex flex-col gap-3 ${
          expanded ? "max-h-[50vh] overflow-y-auto custom-scrollbar pr-1" : ""
        }`}
      >
        {visibleDocs.map((doc) => (
          <DocumentItem key={doc.id} doc={doc} />
        ))}
      </div>

      {/* Toggle */}
      {documents.length > INITIAL_COUNT && (
        <CommonButton 
          clickFunction={() => setExpanded((prev) => !prev)}
          buttonStyle="block w-full text-center selected-menu-text text-sm font-medium hover:underline mt-3"
          content={expanded ? "Show less" : "View all documents"}
        />
      )}
    </div>
  );
};

export default PolicyDocuments;