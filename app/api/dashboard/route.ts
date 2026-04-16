import { NextRequest, NextResponse } from "next/server";

import metricData from "@/data/metricCardData.json";
import smData from "@/data/smPerformance.json";
import choData from "@/data/choPerformance.json";
import batchData from "@/data/batchDetails.json";
import stateData from "@/data/stateComparison.json";

export async function POST(req: NextRequest) {
  try {
    const { state, district } = await req.json();

    console.log("STATE:", state);
    console.log("DISTRICT:", district);


    return NextResponse.json({
      success: true,
      data: {
        metricCardData: metricData,
        smPerformanceData: smData,
        choPerformanceData: choData,
        batchDetails: batchData,
        stateComparison: stateData,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Error fetching dashboard" },
      { status: 500 }
    );
  }
}