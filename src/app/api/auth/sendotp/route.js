import { connect } from "../../DBconfig";
import { NextRequest, NextResponse } from "next/server";
import User from "../UserModel";
import otpGenerator from "otp-generator";
import { sendOTP } from "../sendOTP";
connect();

async function generateOTP() {
  let otp = await otpGenerator.generate(4, {
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });
  const otpExpiration = new Date(Date.now() + 1 * 60 * 1000); // OTP valid for 1 minutes

  return { otp, otpExpiration };
}
export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { email } = reqBody;
    const { otp, otpExpiration } = await generateOTP();

    if (!email) {
      return NextResponse.json({ error: "email is required" }, { status: 400 });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    if (user?.isVerified === true) {
      return NextResponse.json(
        { error: "User already verified" },
        { status: 404 }
      );
    }

    const setOtp = await User.findByIdAndUpdate(user?._id, {
      otp,
      otpExpiration,
    });

    await sendOTP(email, otp);

    return NextResponse.json({
      message: "otp send successfully",
      otp,
      otpExpiration,
      success: true,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
