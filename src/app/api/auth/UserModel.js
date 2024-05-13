import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
  },
  phoneNumber: {
    type: Number,
  },
  profilePic: {
    type: String,
  },
  otp: {
    type: Number,
  },
  role: {
    type: String,
    enum: ["user", "mechanic"],
    default: "user",
  },
  aadhaarNumber: {
    type: String,
    required: function () {
      return this.role === "mechanic";
    },
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  address: {
    fistLine: {
      type: String,
    },
    secondLine: {
      type: String,
    },
    country: {
      type: String,
    },
    state: {
      type: String,
    },
    pinCode: {
      type: Number,
    },
  },
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
