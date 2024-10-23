// pages/verify.js
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import AuthCard from "../ui/AuthCard";

function VerifyForm() {
  const router = useRouter();
  const [email, setEmail] = useState(router.query.email);
  const [verificationCode, setVerificationCode] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/verify", {
        email,
        verificationCode,
      });
      setMessage(response.data.message);
      router.push("/login");
    } catch (error) {
      setMessage(response.data.message);
    }
  };

  return (
    <AuthCard>
      <h1>Verify Email</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Verification Code"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
          required
        />
        <button type="submit">Verify</button>
      </form>
      {message && <p>{message}</p>}
    </AuthCard>
  );
}
export default VerifyForm;
