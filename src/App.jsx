import { createBrowserRouter, Navigate } from "react-router";
import { RouterProvider } from "react-router";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Notfound from "./components/Notfound/Notfound";
import Login from "./pages/Login/Login";

const routes = createBrowserRouter([
  { index: true, element: <Navigate to="/home" /> },
  { path: "/home", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/portfolio", element: <Portfolio /> },
  { path: "/contact", element: <Contact /> },
  { path: "/login", element: <Login /> },
  { path: "*", element: <Notfound /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
