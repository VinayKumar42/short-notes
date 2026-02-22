import { Link } from "react-router-dom";

export default function Register() {

  //handler (no auth logic)
  const handleRegister = (e) => {
    e.preventDefault();
    alert("Authentication functionality will be added soon.");
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

        {/* UI only form */}
        <form className="space-y-4" onSubmit={handleRegister}>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-3 rounded-lg
                       bg-white dark:bg-gray-700
                       text-black dark:text-white
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg
                       bg-white dark:bg-gray-700
                       text-black dark:text-white
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
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