# Authentication System using Next.js

## Project Overview

Hello, I’m **Mohamed Alfeky**, a Front-End Developer with a focus on building efficient web applications. This project is an authentication system that I developed using **Next.js**, featuring both **login** and **signup** functionality.

The system uses **JSON Web Tokens (JWT)** for user authentication. The token is stored in the browser’s `localStorage` for seamless navigation across pages. However, **I do not use refresh tokens** in this implementation, meaning the JWT is valid for the session duration without automatic renewal.

## Features

- **User Registration (Signup)**: Users can create an account by providing their email and password. After signing up, a verification email is sent to the user's email to verify their account.
- **User Login**: Users can log in with their email and password.
- **Email Verification**: A verification code is sent to the user’s email during registration, and they are redirected to a verification page to enter the code and confirm their account.
- **JWT Authentication**: The system uses **JWT** to manage user sessions and protect routes.

## Tech Stack

- **Next.js**: The core framework for the frontend and backend.
- **MongoDB**: For storing user data, managed with **Mongoose**.
- **Mongoose**: To interact with MongoDB.
- **Nodemailer**: For sending verification emails.
- **Axios**: For handling HTTP requests to the backend API.
- **Bcrypt.js**: For securely hashing passwords before saving them in the database.
- **JWT (jsonwebtoken)**: For generating and verifying JSON Web Tokens for user authentication.

## Packages Used

The following packages are used in the project:

- **Next.js**: `next`
- **React**: `react`, `react-dom`
- **MongoDB**: `mongoose`
- **Nodemailer**: `nodemailer`
- **Axios**: `axios`
- **Bcrypt.js**: `bcryptjs`
- **JWT**: `jsonwebtoken`

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/auth-system-nextjs.git
   cd auth-system-nextjs
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:

   ```bash
   MONGODB_URI=your_mongodb_connection_string
   EMAIL_USER=your_email_address
   EMAIL_PASS=your_email_password
   JWT_SECRET=your_jwt_secret_key
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

   Visit [http://localhost:3000](http://localhost:3000) in your browser to view the app.

### Project Structure

- **/components**: Contains reusable UI components such as the login and signup forms.
- **/pages/api**: Contains API routes for signup, login, and user verification.
- **/pages/login.js**: Login page.
- **/pages/signup.js**: Signup page.
- **/pages/verify.js**: Verification page for entering the email verification code.

### API Routes

- **POST `/api/signup`**: Handles user registration and sends a verification email.
- **POST `/api/login`**: Authenticates the user and returns a JWT token.
- **GET `/api/user`**: Retrieves user information based on the provided JWT token.

### Usage

- **Signup**: Navigate to `/signup` to create an account.
- **Login**: Navigate to `/login` to log in with your credentials.
- **Verify**: After signing up, you will be redirected to `/verify?email=your_email` to enter the verification code.

### Security Considerations

While `localStorage` is used to store JWT tokens for simplicity, this method has potential security risks, such as exposure to cross-site scripting (XSS) attacks. For more secure alternatives, consider using **httpOnly cookies** for token storage.
