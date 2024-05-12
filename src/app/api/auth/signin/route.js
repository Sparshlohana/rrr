import { connect } from "../../DBconfig";
import User from "../UserModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

const jwtSecrete = process.env.JWT_Secrete;
export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    if (!email) {
      return NextResponse.json({ error: "email is required" }, { status: 404 });
    }
    if (!password) {
      return NextResponse.json(
        { error: "password is required" },
        { status: 404 }
      );
    }

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 400 }
      );
    }

    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json({ error: "Invalid password" }, { status: 400 });
    }

    const tokenData = {
      _id: user._id,
    };

    const token = await jwt.sign(tokenData, jwtSecrete, { expiresIn: "7d" });

    const response = NextResponse.json({
      message: "Login successful",
      access_Token: token,
      success: true,
      user: user,
      status: 200,
    });

    response.cookies.set("access_Token", token, {
      httpOnly: true,
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
