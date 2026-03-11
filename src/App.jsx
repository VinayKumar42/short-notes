import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Home"
import Paste from "./components/Paste"
import ViewPaste from "./components/ViewPaste"
import Navbar from "./components/Navbar"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Footer from "./components/Footer"
import ProtectedRoute from "./components/ProtectedRoute"
import { useSelector } from "react-redux"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ThemeWrapper>
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      </ThemeWrapper>
    ),
  },
  {
    path: "/pastes",
    element: (
      <ThemeWrapper>
        <ProtectedRoute>
          <Paste />
        </ProtectedRoute>
      </ThemeWrapper>
    ),
  },
  {
    path: "/pastes/:id",
    element: (
      <ThemeWrapper>
        <ProtectedRoute>
          <ViewPaste />
        </ProtectedRoute>
      </ThemeWrapper>
    ),
  },
  {
    path: "/login",
    element: (
      <ThemeWrapper>
        <Login />
      </ThemeWrapper>
    ),
  },
  {
    path: "/signup",   // ✅ Fix #3: was "/register", now matches Signup.jsx's Link to="/signup"
    element: (
      <ThemeWrapper>
        <Signup />
      </ThemeWrapper>
    ),
  },
])

function ThemeWrapper({ children }) {
  const darkmode = useSelector((state) => state.theme.darkmode)

  return (
    <div
      className={`min-h-screen flex flex-col ${
        darkmode ? "dark bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <Navbar />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  )
}

function App() {
  return <RouterProvider router={router} />
}

export default App
