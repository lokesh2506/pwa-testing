"use client";

import { useBreadcrumbStore } from "@/store/breadcrumb.store";
import CommonButton from "../buttons/CommonButton";
import { useState } from "react";

const Breadcrumbs = () => {
  const { breadcrumbs, handleClick } = useBreadcrumbStore();
  const [loading, setLoading] = useState(false);

  if (breadcrumbs.length === 0) return null;

  const onBreadcrumbClick = async (index: number) => {
    setLoading(true);
    try {
      await handleClick(index);
    } finally {
      setLoading(false);
    }
  };
  if (breadcrumbs.length <= 1) return null;

  return (
    <div className="py-3 flex items-center gap-2 text-sm ">
      {breadcrumbs.map((item, index) => {
        const isLast = index === breadcrumbs.length - 1;

        return (
          <div key={item.key} className="flex items-center gap-2">
            {isLast ? (
              <span className="card-title font-semibold truncate ">{item.label}</span>
            ) : (
              <CommonButton
                clickFunction={() => onBreadcrumbClick(index)}
                buttonStyle="card-subtitle hover:underline transition-colors cursor-pointer text-nowrap"
                type="button"
                content={item.label}
                disabled={loading}
              />
            )}

            {!isLast && <span className="card-subtitle text-gray-400">/</span>}
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;