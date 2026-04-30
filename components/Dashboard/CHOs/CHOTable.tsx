"use client";

import CommonButton from "@/components/buttons/CommonButton";
import CommonTable from "@/components/common/CommonTable";
import { usePagination } from "@/hooks/common/usePagination";
import { useBreadcrumbStore } from "@/store/breadcrumb.store";
import { useGlobalDataStore } from "@/store/globalData.store";
import { CHO } from "@/types/chos/choTable";
import { Column } from "@/types/common/table";

type Props = {
  data: CHO[];
};

const getPhaseStyle = (phase: string) => {
  if (phase === "IMP") return "bg-blue-400 text-white border-primary/20";
  if (phase === "OMP") return "bg-amber-400/10 text-amber-400 border-amber-400/20";
  if (phase === "EMP") return "bg-emerald-400/10 text-emerald-400 border-emerald-400/20";

  return "bg-gray-400/10 text-gray-400 border-gray-400/20";
};

const CHOTable = ({ data }: Props) => {
  const { page, setPage, totalPages, paginatedData, totalItems, startIndex, endIndex } = usePagination({
    data,
    itemsPerPage: 5,
  });

  const { addBreadcrumb } = useBreadcrumbStore();
  const { fetchChoProfile } = useGlobalDataStore();

  const handleChoProfileClick = (choId: string, choName: string) => {
    choId = choId?.trim(); // removes leading + trailing spaces
    if (!choId) {
      return;
    }
    addBreadcrumb({
      label: `${choName} (${choId})`,
      key:"cho_profile",
      onClick: async () => {
        await fetchChoProfile(choId);
      },
    });

    //Important: trigger immediately for UX
    fetchChoProfile(choId);
};

  const columns: Column<CHO>[] = [
    {
      header: "CHO Name",
      accessor: "choName",
      render: (value: string, row: CHO) => (
        <CommonButton
          clickFunction={() => handleChoProfileClick(row.id, row.choName)}
          buttonStyle="text-sm font-semibold card-title hover:text-primary transition-colors cursor-pointer"   
          content={value}
        />
      ),
    },
    {
      header: "ID",
      accessor: "id",
    },
    {
      header: "State",
      accessor: "state",
    },
    {
      header: "National Mentor",
      accessor: "nationalMentor",
    },
    {
      header: "State Mentor",
      accessor: "stateMentor",
    },
    {
      header: "Current Phase",
      accessor: "currentPhase",
      render: (value: string) => (
        <span className={`px-2.5 py-1 rounded text-[10px] font-extrabold uppercase ${getPhaseStyle(value)}`}>
          {value}
        </span>
      ),
    },
    {
      header: "Actions",
      accessor: "id",
      align: "center",
      render: (value: string, row: CHO) => (
        <CommonButton
          clickFunction={() => handleChoProfileClick(value, row.choName)}
          buttonStyle="p-1 text-muted hover:text-primary transition-colors"        
          content={<span className="material-symbols-outlined text-[20px]">more_vert</span>}
        />
      ),
    },
  ];

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Table Card Wrapper */}
      <div className="card-bg border border-border rounded-2xl p-4">
        {/* Scroll wrapper */}
        <div className="w-full overflow-x-auto">
          <div className="min-w-[900px] md:min-w-full">
            <CommonTable columns={columns} data={paginatedData} />
          </div>
        </div>

        <div className="flex justify-between items-center mt-4 flex-wrap gap-2">
          {/* Result Info */}
          <p className="text-sm card-subtitle">
            Showing {startIndex}-{endIndex} of {totalItems} results
          </p>

          {/* Pagination */}
          <div className="flex items-center gap-2">
            <CommonButton
              buttonStyle={`px-3 py-1 text-sm rounded bg-primary text-white ${page === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
              content="Prev"
              clickFunction={() => setPage(page - 1)}
              disabled={page === 1}
            />

            <span className="text-sm card-subtitle">
              {page} / {totalPages}
            </span>

            <CommonButton
              buttonStyle={`px-3 py-1 text-sm rounded bg-primary text-white ${page === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
              content="Next"
              clickFunction={() => setPage(page + 1)}
              disabled={page === totalPages}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CHOTable;