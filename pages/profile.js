// pages/Profile.js
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (typeof window !== "undefined") {
          const token = localStorage.getItem("token");

          if (!token) {
            router.push("/login");
            return;
          }

          const response = await axios.get("/api/user", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setUserData(response.data.decoded);
        }
      } catch (err) {
        setError(err.response?.data?.message || "An error occurred");
        if (err.response?.status === 401) {
          router.push("/login");
        }
      }
    };

    fetchUserData();
  }, [router]);

  if (error) return <div>Error: {error}</div>;
  if (!userData) return <div>Loading...</div>;

  return (
    <div>
      <h1>Welcome, {userData.firstName}</h1>
      <h2>First Name: {userData.firstName}</h2>
      <h2>Last Name: {userData.lastName}</h2>
      <h2>Email: {userData.email}</h2>
    </div>
  );
};

export default Profile;
