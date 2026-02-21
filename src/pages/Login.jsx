import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { useState } from "react";

export default function Login() {

  //form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //login handler
  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser =
      JSON.parse(localStorage.getItem("registeredUser"));

    if (
      savedUser &&
      savedUser.email === email &&
      savedUser.password === password
    ) {
      // redux login
      dispatch(login(savedUser));

      // redirect after login
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center
                    bg-gray-100 dark:bg-gray-900 transition">

      <div className="p-8 rounded-xl shadow-lg w-[400px]
                      bg-white dark:bg-gray-800">

        <h2 className="text-2xl font-bold text-center mb-6
                       text-gray-800 dark:text-white">
          Sign In
        </h2>

        {/*added onSubmit */}
        <form className="space-y-4" onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-3 rounded-lg
                       bg-white dark:bg-gray-700
                       text-black dark:text-white
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-3 rounded-lg
                       bg-white dark:bg-gray-700
                       text-black dark:text-white
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-700 dark:text-gray-300">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-600 dark:text-blue-400 font-semibold"
          >
            Sign Up
          </Link>
        </p>

      </div>
    </div>
  );
}