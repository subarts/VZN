import App from "../App.tsx"
import { createBrowserRouter } from "react-router-dom"
import Settings from "../pages/Settings.tsx"
import Tasks from "../pages/Tasks.tsx"
import AccountingInProduction from "../pages/AccountingInProduction.tsx"
import Home from "../pages/Home.tsx"
import ModalViewingTheComposition from "../components/modalViewingTheComposition/ModalViewingTheComposition.tsx"
<<<<<<< HEAD
import ModalScan from "../components/modalScan/modalScan.tsx"
import CatalogVzn from "../pages/CatalogVzn.tsx"
import { InfoAboutVZN } from '../pages/InfoAboutVZN.tsx'
=======
import ModalScan from "../components/modalScan/modalScan.tsx
import CatalogVzn from "../pages/CatalogVzn.tsx"
import { InfoAboutVZN } from '../pages/InfoAboutVZN.tsx'

>>>>>>> 301a66b7fe89bf9718dced35130aa99db3ae2790


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
<<<<<<< HEAD
=======

>>>>>>> 301a66b7fe89bf9718dced35130aa99db3ae2790
    path: "menu/ModalViewingTheComposition",
    element: <ModalViewingTheComposition />
  },
  {
    path: "menu/ModalScan",
    element: <ModalScan />
<<<<<<< HEAD
  },
=======
  }

>>>>>>> 301a66b7fe89bf9718dced35130aa99db3ae2790
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
