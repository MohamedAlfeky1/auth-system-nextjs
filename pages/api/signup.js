// pages/api/signup.js
import User from "../../models/User";
import dbConnect from "../../utils/dbConnect";
import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { firstName, lastName, email, password } = req.body;
    await dbConnect();
    try {
      // Check if the user already exists
      const userExists = await User.findOne({ email });
      if (userExists)
        return res.status(400).json({ message: "User already exists" });

      // Generate verification code
      const verificationCode = Math.floor(100000 + Math.random() * 900000); // 6 digit code

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = new User({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        verificationCode,
      });
      await user.save();

      // Send verification email
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER, // Use environment variables for sensitive data
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Email Verification Code",
        text: `Your verification code is ${verificationCode}`,
      };

      await transporter.sendMail(mailOptions);

      return res.status(200).json({ message: "Verification email sent" });
    } catch (error) {
      return res.status(500).json({ message: "An error occurred" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
