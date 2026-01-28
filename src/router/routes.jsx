import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CallPage from "../components/pages/CallPage";
import Appointments from "../components/pages/Appointments";
import Settings from "../components/pages/Settingspage";
import Home from "../components/pages/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,   
    children: [
       {
        path: "/",
        element: <Home/>
      },
      {
        path: "/calls",
        element: <CallPage/>
      },
      {
        path: "appointments",
        element: <Appointments />
      },
      {
        path: "settings",
        element: <Settings/>
      }
    ]
  }
]);

export default router;
