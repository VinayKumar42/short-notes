import { Link } from "react-router-dom";

export default function Login() {

  //  handler (no auth logic)
  const handleLogin = (e) => {
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
          Sign In
        </h2>

        {/* form only UI */}
        <form className="space-y-4" onSubmit={handleLogin}>

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