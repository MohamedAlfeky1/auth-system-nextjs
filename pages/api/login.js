// pages/api/login.js
import dbConnect from "../../utils/dbConnect";
import User from "../../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    await dbConnect();

    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Invalid email or password" });
      }

      const isEmailVerified = user.isVerified;
      if (!isEmailVerified) {
        return res.status(400).json({ message: "Email not verified" });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid email or password" });
      }

      const token = jwt.sign(
        {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        },
        process.env.JWT_SECRET
      );

      return res.status(200).json({ token });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
