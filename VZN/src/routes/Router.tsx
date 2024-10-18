import App from "../App.tsx"
import { createBrowserRouter } from "react-router-dom"
import Settings from "../pages/Settings.tsx"
import Tasks from "../pages/Tasks.tsx"
import AccountingInProduction from "../pages/AccountingInProduction.tsx"
import Home from "../pages/Home.tsx"

/* Будет делиться еще на роуты  */
export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/menu",
    element: <Home />,
  },
  {
    path: "settings",
    element: <Settings />,
  },
  {
    path: "tasks",
    element: <Tasks />,
  },
  {
    path: "tasks/AccountingInProduction",
    element: <AccountingInProduction />,
  },
])
