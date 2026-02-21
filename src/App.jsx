import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { useState } from "react";
import Home from "./components/Home"
import Paste from "./components/Paste"
import ViewPaste from "./components/ViewPaste"
import Navbar from "./components/Navbar"


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
          {(darkMode) => <Paste darkMode={darkMode} />}
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
      path:"/pastes/:id",
      element: (
        <ThemeWrapper>
          {(darkMode) => <ViewPaste darkMode={darkMode} />}
        </ThemeWrapper>
      ),
    }
  ]
)


function ThemeWrapper({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? "dark bg-gray-900 text-gray-100" 
        : "bg-gray-50 text-gray-900"
    }`}>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      {typeof children === 'function' ? children(darkMode) : children}
    </div>
  );
}

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
