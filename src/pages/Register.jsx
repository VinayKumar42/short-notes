import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {

  // form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  //register handler
  const handleRegister = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
    };

    // save user locally (frontend model)
    localStorage.setItem("registeredUser", JSON.stringify(user));

    alert("Account created successfully!");

    // redirect to login
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center
                    bg-gray-100 dark:bg-gray-900 transition">

      <div className="p-8 rounded-xl shadow-lg w-[400px]
                      bg-white dark:bg-gray-800">

        <h2 className="text-2xl font-bold text-center mb-6
                       text-gray-800 dark:text-white">
          Create Account
        </h2>

        {/*added onSubmit */}
        <form className="space-y-4" onSubmit={handleRegister}>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-3 rounded-lg
                       bg-white dark:bg-gray-700
                       text-black dark:text-white
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

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
            className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-700 dark:text-gray-300">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 dark:text-blue-400 font-semibold"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}