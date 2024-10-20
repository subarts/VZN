import App from "../App.tsx"
import { createBrowserRouter } from "react-router-dom"
import Settings from "../pages/Settings.tsx"
import Tasks from "../pages/Tasks.tsx"
import AccountingInProduction from "../pages/AccountingInProduction.tsx"
import Home from "../pages/Home.tsx"
import CatalogVzn from "../pages/CatalogVzn.tsx"
import { InfoAboutVZN } from '../pages/InfoAboutVZN.tsx'


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
    path: "menu/settings",
    element: <Settings />,
  },
  {
    path: "/menu/tasks",
    element: <Tasks />,
  },
  {
    path: "menu/tasks/AccountingInProduction",
    element: <AccountingInProduction />,
  },
  {
    path: "/ListReceipt",
    element: <CatalogVzn />,
  },
  {
    path: "/ListConsignment",
    element: <CatalogVzn />,
  },
  {
    path: "/InfoAboutVZN",
    element: <InfoAboutVZN />,
  },
])
