import { connect } from "../../DBconfig";
import User from "../UserModel";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

connect();

const jwtSecrete = process.env.JWT_Secrete;
export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { access_Token } = reqBody;

    if (!access_Token) {
      return NextResponse.json(
        { error: "access_Token is required" },
        { status: 404 }
      );
    }

    const result = await jwt.verify(access_Token, jwtSecrete);
    if (!result) {
      return NextResponse.json(
        { error: "invalid access_Token" },
        { status: 404 }
      );
    }

    const user = await User.findById(result._id);

    const response = NextResponse.json({
      message: "Login successful",
      user: user,
      success: true,
      status: 200,
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
