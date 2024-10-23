import LoginForm from "@/components/auth/LoginForm";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Login Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.introText}>
        <h1>Welcome to My Authentication System</h1>
        <p>
          Hello, I&rsquo;m Mohamed Alfeky, a Front-End Developer with a focus on
          building efficient web applications. This project is an authentication
          system that I developed using Next.js, featuring both login and signup
          functionality.
        </p>
        <p>
          Additionally, I use JSON Web Tokens (JWT) for authentication, and the
          token is stored in the browser&rsquo;s
          <code>localStorage</code>, enabling smooth navigation across pages.
          However, it&rsquo;s important to note that storing tokens in{" "}
          <code>localStorage</code> comes with potential security risks.
        </p>
        <a
          href="https://github.com/MohamedAlfeky1/auth-system-nextjs"
          target="_blank"
        >
          Check the Source Code on GitHub
        </a>
      </div>
    </>
  );
}
