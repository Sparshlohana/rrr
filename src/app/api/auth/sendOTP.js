import nodemailer from "nodemailer";

const nodemailerEmail = process.env.NODEMAILER_EMAIL;
const nodemailerPass = process.env.NODEMAILER_PASS;

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: nodemailerEmail,
    pass: nodemailerPass,
  },
});

export async function sendOTP(email, otp) {
  const info = await transporter.sendMail({
    from: "Rapid road resQ ", // sender address
    to: email, // list of receivers
    subject: "for email verification", // Subject line
    html: `<p>this is your otp for verify your email address</p> <br/> <b>${otp}</b>`, // html body
  });
}
