import { NextRequest, NextResponse } from "next/server";

import choDetails from "@/data/choTableDetails.json";
import choManagementDetails from "@/data/choManagement.json";


export async function POST(req: NextRequest) {
  try {
    const { state, district } = await req.json();

    console.log("STATE:", state);
    console.log("DISTRICT:", district);


    return NextResponse.json({
      success: true,
      data: {
        choData: choDetails,
        choManagementData: choManagementDetails,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Error fetching dashboard" },
      { status: 500 }
    );
  }
}