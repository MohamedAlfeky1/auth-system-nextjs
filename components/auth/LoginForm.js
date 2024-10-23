import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AuthCard from "../ui/AuthCard";

function LoginForm() {
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

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/login", { email, password });

      if (response.status === 200) {
        setMessage("Login successful");

        localStorage.setItem("token", response.data.token);

        router.push("/profile");
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <AuthCard>
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
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
        <button type="submit">Login</button>
        {message && <p>{message}</p>}
      </form>
    </AuthCard>
  );
}

export default LoginForm;
