import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Home"
import Paste from "./components/Paste"
import ViewPaste from "./components/ViewPaste"
import Navbar from "./components/Navbar"
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
          <Home />
        </ThemeWrapper>
      ),
    },
    {
      path: "/pastes",
      element: (
        <ThemeWrapper>
          {/* <div className="w-full h-full flex flex-col"> */}

          <Paste />
          {/* </div> */}
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
      element: <div className="w-full h-full flex flex-col">
        <Navbar />
        <ViewPaste />
      </div>,
    }
  ]
)

function ThemeWrapper({ children }) {
  const darkmode = useSelector((state) => state.theme.darkmode);

  return (
    <div className={darkmode ? "dark bg-gray-900 text-white" : "bg-white text-black"}>
      <Navbar />
      {children}
    </div>
  );
}

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
