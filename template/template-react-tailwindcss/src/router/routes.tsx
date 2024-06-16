import type { RouteObject } from "react-router-dom";

import { Navigate } from "react-router-dom";
import ErrorPage from "../components/error-page";
import React, { Suspense } from "react";
import Notfound from "../pages/404";
import AppLayout from "../layouts/appLayout";
const Home = React.lazy(() => import("../pages/Home/index.tsx"));
// 页面枚举
export enum PageEnum {
    HOME = "/home",
    ABOUT = "/about",
    NOTFOUND = "/404",
}

const routes: Array<RouteObject> = [
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <Navigate to="/home" />,
            },
            {
                path: "/home",
                element: (
                    <Suspense>
                        <Home />
                    </Suspense>
                ),
            },
            {
                path: "/about",
                element: <div>about</div>,
            },
            {
                path: "*",
                element: (
                    <Suspense>
                        <Notfound />
                    </Suspense>
                ),
            },
        ],
    },
];
export default routes;
