import { createBrowserRouter, Navigate } from "react-router";
import { RouterProvider } from "react-router";
// Project Components
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Home from "./pages/Home/Home.jsx";
import Portfolio from "./pages/Portfolio/Portfolio.jsx";
import Notfound from "./components/Notfound/Notfound.jsx";
import Login from "./pages/Login/Login.jsx";
import Layout from "./components/Layout/Layout.jsx";

const routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/home" /> },
      { path: "/home", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/contact", element: <Contact /> },
      { path: "/login", element: <Login /> },
      { path: "*", element: <Notfound /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
