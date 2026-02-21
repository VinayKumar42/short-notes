import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { useState } from "react";
import Home from "./components/Home"
import Paste from "./components/Paste"
import ViewPaste from "./components/ViewPaste"
import Navbar from "./components/Navbar"
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./middleware/ProtectedRoute";


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
          <Home />
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
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"}>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      {children}
    </div>
  );
}

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
