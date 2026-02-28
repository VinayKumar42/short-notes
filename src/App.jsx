import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Home"
import Paste from "./components/Paste"
import ViewPaste from "./components/ViewPaste"
import Navbar from "./components/Navbar"
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";


import { useSelector } from "react-redux";

const router = createBrowserRouter(
  [
    // {
    //   path:"/",
    //   element:
    //   <div className="w-full h-full flex flex-col">
    //     <Navbar/>
    //     <Home/>
    //   </div>
    // },
    {
      path: "/",
      element: (
        <ThemeWrapper>
          {(darkMode) => <Home darkMode={darkMode} />}
        </ThemeWrapper>
      ),
    },
      {
    path: "/pastes",
    element: (
      <ThemeWrapper> 
          <Paste />
      </ThemeWrapper>
    ),
  },
    // {
    //   path:"/pastes",
    //   element: <div className="w-full h-full flex flex-col">
    //   <Navbar/>
    //   <Paste/>
    // </div>
    // },
   {
    path: "/pastes/:id",
    element: (
      <ThemeWrapper>
          <ViewPaste />
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
    path: "/register",
    element: (
      <ThemeWrapper>
        <Register />
      </ThemeWrapper>
    ),
  },

  ]
)

function ThemeWrapper({ children }) {
  const darkmode = useSelector((state) => state.theme.darkmode);

  return (
    <div
      className={`min-h-screen flex flex-col ${
        darkmode
          ? "dark bg-gray-900 text-white"
          : "bg-white text-black"
      }`}
    >
      {/* Top */}
      <Navbar />

      {/* Middle content */}
      <main className="grow">
        {children}
      </main>

      {/* Bottom */}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
