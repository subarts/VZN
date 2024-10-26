import App from "../App.tsx"
import { createBrowserRouter } from "react-router-dom"
import Settings from "../pages/Settings.tsx"
import Tasks from "../pages/Tasks.tsx"
import AccountingInProduction from "../pages/AccountingInProduction.tsx"
import Home from "../pages/Home.tsx"
import ModalViewingTheComposition from "../components/modalViewingTheComposition/ModalViewingTheComposition.tsx"
import CatalogVzn from "../pages/CatalogVzn.tsx"
import { InfoAboutVZN } from "../pages/InfoAboutVZN.tsx"
import ModalScan from "../components/modalScan/ModalScan.tsx"
import { ProtectedRoute } from "../utils/protectedRoute.tsx"

const isUserAuthorized = () => {
  return !!sessionStorage.getItem("authToken")
};

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/menu",
    element: (
      <ProtectedRoute isAllowed={isUserAuthorized()} redirectPath="/">
          <Home />
      </ProtectedRoute>
  ),
  },
  {
    path: "menu/settings",
    element: (
      <ProtectedRoute isAllowed={isUserAuthorized()} redirectPath="/">
          <Settings />
      </ProtectedRoute>
  ),
  },
  {
    path: "/menu/tasks",
    element: (
      <ProtectedRoute isAllowed={isUserAuthorized()} redirectPath="/">
          <Tasks />
      </ProtectedRoute>
  ),
  },
  {
    path: "menu/tasks/AccountingInProduction",
    element: (
      <ProtectedRoute isAllowed={isUserAuthorized()} redirectPath="/">
          <AccountingInProduction />
      </ProtectedRoute>
  ),
  },
  {
    path: "menu/ModalViewingTheComposition",
    element: (
      <ProtectedRoute isAllowed={isUserAuthorized()} redirectPath="/">
          <ModalViewingTheComposition />
      </ProtectedRoute>
  ),
  },
  {
    path: "/menu/modalScan",
    element: (
      <ProtectedRoute isAllowed={isUserAuthorized()} redirectPath="/">
          <ModalScan />
      </ProtectedRoute>
  ),
  },
  {
    path: "/ListReceipt",
    element: (
      <ProtectedRoute isAllowed={isUserAuthorized()} redirectPath="/">
          <CatalogVzn />
      </ProtectedRoute>
  ),
  },
  {
    path: "/ListConsignment",
    element: (
      <ProtectedRoute isAllowed={isUserAuthorized()} redirectPath="/">
          <CatalogVzn />
      </ProtectedRoute>
  ),
  },
  {
    path: "/ListConsignment/:numberUnicCodeVzn",
    element: (
      <ProtectedRoute isAllowed={isUserAuthorized()} redirectPath="/">
          <InfoAboutVZN />
      </ProtectedRoute>
  ),
  },
  {
    path: "/ListReceipt/:numberUnicCodeVzn",
    element: (
      <ProtectedRoute isAllowed={isUserAuthorized()} redirectPath="/">
          <InfoAboutVZN />
      </ProtectedRoute>
  ),
  },
  {
    path: "/create/:numberUnicCodeVzn",
    element: (
      <ProtectedRoute isAllowed={isUserAuthorized()} redirectPath="/">
          <InfoAboutVZN />
      </ProtectedRoute>
  ),
  },
])
