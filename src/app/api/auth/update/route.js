import { connect } from "../../DBconfig";
import User from "../UserModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function PUT(request) {
  try {
    const reqBody = await request.json();
    const { _id, data } = reqBody;

    if (!_id) {
      return NextResponse.json({ error: "id is required" }, { status: 404 });
    }
    if (!data) {
      return NextResponse.json(
        { error: "updateData is required" },
        { status: 404 }
      );
    }

    const user = await User.findById(_id);

    if (!user) {
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 400 }
      );
    }

    const updatedUser = await User.findByIdAndUpdate(_id, data, { new: true });

    const response = NextResponse.json({
      message: "details updated successful",
      user: updatedUser,
      success: true,
      status: 200,
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
