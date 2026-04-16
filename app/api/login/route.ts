import { NextResponse } from "next/server";

const USERS = [
  { email: "a@gmail.com", password: "1234", role: "national_coordinator" },
  { email: "b@gmail.com", password: "1234", role: "state_coordinator" },
];

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const user = USERS.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    return NextResponse.json(
      { success: false, message: "Invalid credentials" },
      { status: 401 }
    );
  }

  return NextResponse.json({
    success: true,
    data: {
      email: user.email,
      role: user.role,
    },
  });
}