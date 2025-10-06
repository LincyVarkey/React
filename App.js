import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./src/layout/Header"
import Body from "./src/layout/Body";

const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
        </>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);