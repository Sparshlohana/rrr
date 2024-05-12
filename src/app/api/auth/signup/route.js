import { connect } from "../../DBconfig";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import User from "../UserModel";
connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { firstName, lastName, email, password, role, aadhaarNumber } =
      reqBody;

    if (!firstName) {
      return NextResponse.json(
        { error: "firstName is required" },
        { status: 404 }
      );
    }
    if (!lastName) {
      return NextResponse.json(
        { error: "lastName is required" },
        { status: 404 }
      );
    }
    if (!email) {
      return NextResponse.json({ error: "email is required" }, { status: 404 });
    }
    if (!password) {
      return NextResponse.json(
        { error: "password is required" },
        { status: 404 }
      );
    }
    if (role === "mechanic") {
      if (!aadhaarNumber)
        return NextResponse.json(
          { error: "aadhaarNumber is required" },
          { status: 404 }
        );
    }
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser =
      role === "mechanic"
        ? new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            role,
            aadhaarNumber,
          })
        : new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
          });

    const savedUser = await newUser.save();

    return NextResponse.json({
      message: "signUp successfully",
      success: true,
      savedUser,
      status: 201,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
