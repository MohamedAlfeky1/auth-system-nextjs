// pages/api/user.js
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    return res.status(200).json({ decoded });
  } else {
    return res.status(405).end(`Method Not Allowed`);
  }
}
