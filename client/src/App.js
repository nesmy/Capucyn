import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import './app.scss';
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Project from "./pages/Project/Project";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import ArtP from "./pages/ArtP/Artp";

const Layout = () => {
  return (
    <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/projects/",
        element: <Projects/>,
      },
      {
        path: "/project/:id",
        element: <Project/>,
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/art/:id",
        element: <ArtP/>
      }
    ],
  },
]);

function App() {
  return (
   <div>
    <RouterProvider router={router}/>
   </div>
  );
}

export default App;
