"use client";

import { useEffect, useMemo } from "react";
import CommonDropdown from "@/components/dropdowns/CommonDropdown";
import { useDropdown } from "@/hooks/common/useDropdown";
import statesData from "@/data/statesDistricts.json";
import { DropdownOption } from "@/types/common/dropdown";
import { useDashboardStore } from "@/store/dashboard.store";

const DEFAULT_STATE = { key: "__STATE__", value: "State" };
const DEFAULT_DISTRICT = { key: "__DISTRICT__", value: "District" };

const StateDistrictSelector = () => {
  const { state, district, setFilters, setStateOnly } = useDashboardStore();

  const stateOptions = statesData.states.map((s) => ({
    key: s.code,
    value: s.name,
  }));

  const districtMap = statesData.districts as Record<
    string,
    { name: string; code: string }[]
  >;

  // ================= DROPDOWNS =================
  const {
    isOpen: stateOpen,
    selected: selectedState,
    dropdownRef: stateRef,
    toggle: toggleState,
    selectOption: selectState,
  } = useDropdown([DEFAULT_STATE, ...stateOptions]);

  const {
    isOpen: districtOpen,
    selected: selectedDistrict,
    dropdownRef: districtRef,
    toggle: toggleDistrict,
    selectOption: selectDistrict,
  } = useDropdown([DEFAULT_DISTRICT]);

  // ================= DISTRICT OPTIONS =================
  const districtOptions = useMemo(() => {
    if (!selectedState || selectedState.key === "__STATE__") {
      return [DEFAULT_DISTRICT];
    }

    const districts = districtMap[selectedState.key];

    return [
      DEFAULT_DISTRICT,
      ...(districts || []).map((d) => ({
        key: d.code,
        value: d.name,
      })),
    ];
  }, [selectedState, districtMap]);

  // ================= HANDLERS =================

  const handleStateSelect = (option: DropdownOption) => {
    if (option.key === "__STATE__") return;

    selectState(option);
    selectDistrict(DEFAULT_DISTRICT);

    setStateOnly(option.key); // store update
  };

  const handleDistrictSelect = (option: DropdownOption) => {
    if (option.key === "__DISTRICT__") return;

    selectDistrict(option);

    if (selectedState && selectedState.key !== "__STATE__") {
      setFilters(selectedState.key, option.key); // API call
    }
  };

  // ================= SYNC FROM STORE =================
  useEffect(() => {
    //  Restore STATE
    if (state) {
      const stateOption = stateOptions.find((s) => s.key === state);
      if (stateOption) {
        selectState(stateOption);

        //  Restore DISTRICT (based on state from store, NOT selectedState)
        if (district) {
          const districts = districtMap[state];
          const districtOption = districts?.find((d) => d.code === district);

          if (districtOption) {
            selectDistrict({
              key: districtOption.code,
              value: districtOption.name,
            });
          }
        }
      }
    }
  }, [state, district]); //  minimal deps

  return (
    <div className="flex gap-4">
      <CommonDropdown
        options={[DEFAULT_STATE, ...stateOptions]}
        selected={selectedState}
        isOpen={stateOpen}
        dropdownRef={stateRef}
        onToggle={toggleState}
        onSelect={handleStateSelect}
      />

      <CommonDropdown
        options={
          selectedState?.key !== "__STATE__"
            ? districtOptions
            : [DEFAULT_DISTRICT]
        }
        selected={selectedDistrict}
        isOpen={districtOpen}
        dropdownRef={districtRef}
        onToggle={toggleDistrict}
        onSelect={handleDistrictSelect}
      />
    </div>
  );
};

export default StateDistrictSelector;