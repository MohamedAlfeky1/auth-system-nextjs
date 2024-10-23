import User from "@/models/User";
import dbConnect from "@/utils/dbConnect";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, verificationCode } = req.body;
    await dbConnect();

    try {
      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ message: "User not found" });

      if (user.verificationCode === verificationCode) {
        user.isVerified = true;
        user.verificationCode = null; // Clear the code
        await user.save();
        return res.status(200).json({ message: "Email verified successfully" });
      } else {
        return res.status(400).json({ message: "Invalid verification code" });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
