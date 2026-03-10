import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/authSlice";
import { Eye, EyeOff, LogIn } from "lucide-react";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);
  const darkmode = useSelector((state) => state.theme.darkmode); // ✅ reads theme from Redux

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }
    try {
      const result = await dispatch(loginUser({ email, password }));
      if (loginUser.fulfilled.match(result)) {
        navigate("/");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center transition-colors duration-200 px-4 ${
      darkmode ? "bg-gray-900" : "bg-gray-100"
    }`}>
      <div className="w-full max-w-md">
        <div className={`rounded-2xl shadow-2xl p-8 border transition-colors duration-200 ${
          darkmode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
        }`}>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 mb-4">
              <LogIn size={28} className="text-white" />
            </div>
            <h1 className={`text-3xl font-bold ${darkmode ? "text-white" : "text-gray-800"}`}>
              Welcome back
            </h1>
            <p className={`mt-2 text-sm ${darkmode ? "text-gray-400" : "text-gray-500"}`}>
              Sign in to your account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">

            {/* Email */}
            <div className="flex flex-col gap-y-1.5">
              <label className={`text-sm font-medium ${darkmode ? "text-gray-300" : "text-gray-700"}`}>
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className={`w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition ${
                  darkmode
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-500"
                    : "bg-white border-gray-300 text-black placeholder-gray-400"
                }`}
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-y-1.5">
              <label className={`text-sm font-medium ${darkmode ? "text-gray-300" : "text-gray-700"}`}>
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className={`w-full border rounded-lg px-4 py-2.5 pr-10 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition ${
                    darkmode
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-500"
                      : "bg-white border-gray-300 text-black placeholder-gray-400"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={`absolute right-3 top-1/2 -translate-y-1/2 transition ${
                    darkmode ? "text-gray-400 hover:text-gray-200" : "text-gray-400 hover:text-gray-600"
                  }`}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-2.5 rounded-lg transition duration-200 mt-2"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          {/* Footer */}
          <p className={`text-center text-sm mt-6 ${darkmode ? "text-gray-400" : "text-gray-600"}`}>
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 dark:text-blue-400 hover:text-blue-500 font-medium transition">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
