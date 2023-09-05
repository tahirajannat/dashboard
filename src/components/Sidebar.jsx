import { Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { HiGlobeAlt, HiOutlineFolder, HiOutlineServer } from "react-icons/hi";
import {
    HiCog6Tooth,
    HiOutlineChartBarSquare,
    HiSignal,
} from "react-icons/hi2";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./header";
import Activity from "./views/Activity";
import Dashboard from "./views/Dashboard";
import Deployments from "./views/Deployments";
import Domains from "./views/Domains";
import Planetaria from "./views/Planetaria";
import Protocol from "./views/Protocol";
import Settings from "./views/Settings";
import TailwindLabs from "./views/TailwindLabs";

const navigation = [
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: HiOutlineChartBarSquare,
        current: false,
        id: 1,
    },
    {
        name: "Orders",
        href: "/orders",
        icon: HiOutlineFolder,
        current: false,
        id: 2,
    },

    {
        name: "Products",
        href: "/products",
        icon: HiOutlineServer,
        current: false,
        id: 3,
    },
    {
        name: "Buyer",
        href: "/buyer",
        icon: HiSignal,
        current: false,
        id: 4,
    },
    {
        name: "Customers",
        href: "/customers",
        icon: HiGlobeAlt,
        current: false,
        id: 5,
    },
    {
        name: "Invoices",
        href: "/invoices",
        icon: HiOutlineFolder,
        current: false,
        id: 6,
    },

    {
        name: "Settings",
        href: "/settings",
        icon: HiCog6Tooth,
        current: false,
        id: 7,
    },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Sidebar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleMenuItemClick = (id) => {
        // Create a new array with updated 'current' values for top-level navigation
        const updatedNavigation = navigation.map((item) => ({
            ...item,
            current: item.id === id,
        }));

        // Create a new array with updated 'current' values for teams

        // Set the updated current values for both top-level navigation and teams
        setCurrent({ navigation: updatedNavigation });
    };

    const [current, setCurrent] = useState({
        navigation: navigation,
    });

    return (
        <Router>
            <div className="grid grid-cols-12">
                <div className="bg-gray-900 col-span-2 relative">
                    <Transition.Root show={sidebarOpen} as={Fragment}>
                        {/* ... (your existing code) */}
                    </Transition.Root>

                    {/* Static sidebar for desktop */}
                    <div className="hidden xl:fixed top-0  xl:z-50 xl:flex xl:w-[330px] h-screen xl:flex-col">
                        <nav className="flex h-screen bg-black p-6">
                            <ul
                                role="list"
                                className="flex flex-1 flex-col gap-y-7"
                            >
                                <li className="-mx-6">
                                    <a
                                        href="#"
                                        className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800"
                                    >
                                        <img
                                            className="h-16 w-16 rounded-full bg-gray-800"
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        />
                                        <span className="sr-only">
                                            Your profile
                                        </span>
                                        <h2 aria-hidden="true block">
                                            Tom Cook{" "}
                                            <p aria-hidden="true">
                                                Sales Manager
                                            </p>
                                        </h2>
                                    </a>
                                </li>
                                <li>
                                    <ul role="list" className="-mx-2 space-y-1">
                                        {current.navigation.map((item) => (
                                            <li key={item.name}>
                                                <Link
                                                    to={item.href}
                                                    onClick={() =>
                                                        handleMenuItemClick(
                                                            item.id
                                                        )
                                                    } // Handle click and update 'current'
                                                    className={classNames(
                                                        item.current
                                                            ? "bg-gray-800 text-white"
                                                            : "text-gray-400 hover:text-white hover:bg-gray-800",
                                                        "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                                    )}
                                                >
                                                    <item.icon
                                                        className="h-6 w-6 shrink-0"
                                                        aria-hidden="true"
                                                    />
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="col-span-10">
                    <Header />
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/orders" element={<Deployments />} />
                        <Route path="/products" element={<Activity />} />
                        <Route path="/buyer" element={<Domains />} />
                        <Route path="/customers" element={<Planetaria />} />
                        <Route path="/invoices" element={<Protocol />} />
                        <Route
                            path="/tailwind-labs"
                            element={<TailwindLabs />}
                        />
                        <Route path="/settings" element={<Settings />} />

                        {/* Handle 404 - Page Not Found */}
                        <Route
                            path="*"
                            element={<div>404 - Page Not Found</div>}
                        />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}
