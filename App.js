import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./src/layout/Header"
import Body from "./src/layout/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/layout/About";
import Contact from "./src/layout/Contact";
import Error from "./src/layout/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";

const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    },

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);