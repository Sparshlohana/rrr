import { connect } from "../../DBconfig";
import { NextRequest, NextResponse } from "next/server";
import User from "../UserModel";
connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { email, otp } = reqBody;

    if (!email) {
      return NextResponse.json({ error: "email is required" }, { status: 400 });
    }
    if (!otp) {
      return NextResponse.json({ error: "otp is required" }, { status: 400 });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    if (user.otpExpiration < new Date()) {
      return NextResponse.json({ error: "OTP has expired" }, { status: 401 });
    }

    if (user.otp !== otp) {
      return NextResponse.json({ error: "Invalid OTP" }, { status: 401 });
    }


    user.isVerified = true;
    user.otp = null;
    user.otpExpiration = null;
    await user.save();

    return NextResponse.json({
      message: "Email verified successfully",
      success: true,
      user,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
