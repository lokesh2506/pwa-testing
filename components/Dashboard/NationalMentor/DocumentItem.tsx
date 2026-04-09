"use client";

import { PolicyDocument } from "@/types/dashboard/documents";
import { DOCUMENT_CONFIG } from "@/config/documentConfig";
import { useTimeAgo } from "@/hooks/dashboard/getTimeAgo";
import Link from "next/link";

interface Props {
  doc: PolicyDocument;
}

const DocumentItem = ({ doc }: Props) => {
  const config = DOCUMENT_CONFIG[doc.docType];
  const timeAgo = useTimeAgo(doc.updateDate);

  return (
    <Link
      href={doc.url}
      className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 border border-transparent hover:border-slate-600 transition-colors group"
    >
      <div
        className={`${config.color.bg} p-2 rounded ${config.color.text} ${config.color.hover} transition-colors`}
      >
        <span className="material-symbols-outlined text-xl">
          {config.icon}
        </span>
      </div>

      <div className="flex flex-col overflow-hidden">
        <span className="text-white text-sm font-medium truncate">
          {doc.docName}
        </span>
        <span className="card-subtitle text-xs">
          Updated {timeAgo}
        </span>
      </div>
    </Link>
  );
};

export default DocumentItem;