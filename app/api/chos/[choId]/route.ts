import { NextRequest, NextResponse } from "next/server";
import choDetails from "@/data/chosProfileDetails.json";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ choId: string }> }
) {
  const { choId } = await context.params; // 

  try {
    const normalize = (id: string) => id.trim();

    const cho = choDetails.find(
      (item: any) => normalize(item.id) === normalize(choId)
    );

    if (!cho) {
      return NextResponse.json(
        { success: false, message: "CHO not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: cho,
    });
  } catch (error) {
    console.error("Error fetching CHO profile:", error);

    return NextResponse.json(
      { success: false, message: "Error fetching CHO profile" },
      { status: 500 }
    );
  }
}