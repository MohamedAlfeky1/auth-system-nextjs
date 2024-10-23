import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import AuthCard from "../ui/AuthCard";

function SignupForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/profile");
    }
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/signup", {
        firstName,
        lastName,
        email,
        password,
      });
      if (response.status === 200) {
        // sending email from signhp page to verify page as parameter
        router.push(`/verify?email=${encodeURIComponent(email)}`);
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <AuthCard>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Signup</button>
      </form>
      {message && <p>{message}</p>}
      {}
    </AuthCard>
  );
}
export default SignupForm;
