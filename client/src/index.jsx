import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/routes/error-page";
import App from "./App";
import Footer from "./components/footer/footer";
import SecondHeader from "./components/header/secondHeader";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />
    },
    {
        path: "/footer",
        element: <Footer />,
        errorElement: <ErrorPage />
    },
    {
        path: "/header",
        element: <SecondHeader />,
        errorElement: <ErrorPage />
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

