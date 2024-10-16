import App from "../App.tsx"
import { createBrowserRouter } from "react-router-dom"
import Settings from "../pages/Settings.tsx"

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    /*  children: [
      {
        path: "menu/settings",
        element: <Settings />,
      },
    ], */
  },
  {
    path: "settings",
    element: <Settings />,
  },
  {},
])
