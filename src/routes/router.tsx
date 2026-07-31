import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import { PATHS } from "../constants/routes";
import { Suspense } from "react";
import Home from "../pages/Home/Home";
import Projects from "../pages/Projects/Projects";
import Contact from "../pages/Contact/Contact";
import Links from "../pages/Links/Links";
import NotFound from "../pages/NotFound/NotFound";
import Privacy from "@/pages/Legal/Privacy";

export const router = createBrowserRouter([{
    path: PATHS.HOME,
    element: <MainLayout />,
    errorElement: <div>Error</div>,
    children: [
        { index: true, element: <Suspense fallback={<div>...</div>}><Home /></Suspense> },
        { path: PATHS.PROJECTS, element: <Suspense fallback={<div>...</div>}><Projects /></Suspense> },
        { path: PATHS.CONTACT, element: <Suspense fallback={<div>...</div>}><Contact /></Suspense> },
        { path: PATHS.LINKS, element: <Suspense fallback={<div>...</div>}><Links /></Suspense> },
        { path: PATHS.PRIVACY, element: <Suspense fallback={<div>...</div>}><Privacy /></Suspense> },
        { path: "*", element: <NotFound /> }
    ]
}])