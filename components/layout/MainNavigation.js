import Link from "next/link";
import styles from "./MainNavigation.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
function MainNavigation() {
  const router = useRouter();
  const [token, setToken] = useState("");
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    } else {
      setToken(null);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    router.push("/login");
  };
  return (
    <header className={styles.header}>
      <Link href="/">Home</Link>
      {token ? (
        <ul>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/signup">Signup</Link>
          </li>
        </ul>
      )}
    </header>
  );
}

export default MainNavigation;
