import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

const routes = [
    {
        path: "/",
        exact: true,
        sidebar: () => <div>home!</div>,
        main: () => <h2>Home</h2>,
    },
    {
        path: "/settings", // Corrected path from "/bubblegum" to "/settings"
        sidebar: () => <div>settings!</div>,
        main: () => <h2>Settings</h2>,
    },
    {
        path: "/shoelaces",
        sidebar: () => <div>shoelaces!</div>,
        main: () => <h2>Shoelaces</h2>,
    },
];

export default function Sidebarleft() {
    return (
        <Router>
            <div style={{ display: "flex" }}>
                <div
                    style={{
                        padding: "10px",
                        width: "40%",
                        background: "#f0f0f0",
                    }}
                >
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                        {routes.map((route, index) => (
                            <li key={index}>
                                <Link to={route.path}>{route.sidebar()}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div style={{ flex: 1, padding: "10px" }}>
                    <Routes>
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                element={route.main()}
                            />
                        ))}
                    </Routes>
                </div>
            </div>
        </Router>
    );
}
