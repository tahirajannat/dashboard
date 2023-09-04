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
import Deployments from "./views/Deployments";
import Domains from "./views/Domains";
import Planetaria from "./views/Planetaria";
import Projects from "./views/Projects";
import Protocol from "./views/Protocol";
import Settings from "./views/Settings";
import TailwindLabs from "./views/TailwindLabs";
import Usage from "./views/Usage";

const navigation = [
    {
        name: "Projects",
        href: "/projects",
        icon: HiOutlineFolder,
        current: false,
        id: 1,
    },
    {
        name: "Deployments",
        href: "/deployments",
        icon: HiOutlineServer,
        current: false,
        id: 2,
    },
    {
        name: "Activity",
        href: "/activity",
        icon: HiSignal,
        current: false,
        id: 3,
    },
    {
        name: "Domains",
        href: "/domains",
        icon: HiGlobeAlt,
        current: false,
        id: 4,
    },
    {
        name: "Usage",
        href: "/usage",
        icon: HiOutlineChartBarSquare,
        current: false,
        id: 5,
    },
    {
        name: "Settings",
        href: "/settings",
        icon: HiCog6Tooth,
        current: false,
        id: 6,
    },
];

const teams = [
    {
        id: 1,
        name: "Planetaria",
        href: "/planetaria",
        initial: "P",
        current: false,
    },
    {
        id: 2,
        name: "Protocol",
        href: "/protocol",
        initial: "P",
        current: false,
    },
    {
        id: 3,
        name: "Tailwind Labs",
        href: "/tailwind-labs",
        initial: "T",
        current: false,
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
        const updatedTeams = teams.map((team) => ({
            ...team,
            current: team.id === id,
        }));

        // Set the updated current values for both top-level navigation and teams
        setCurrent({ navigation: updatedNavigation });
        setCurrentTeam({ teams: updatedTeams });
    };
    const handleTeamMenuItemClick = (id) => {
        // Create a new array with updated 'current' values for top-level navigation

        // Create a new array with updated 'current' values for teams
        const updatedTeams = teams.map((team) => ({
            ...team,
            current: team.id === id,
        }));

        // Set the updated current values for both top-level navigation and teams
        setCurrentTeam({ teams: updatedTeams });
    };

    const [current, setCurrent] = useState({
        navigation: navigation,
    });
    const [currentTeam, setCurrentTeam] = useState({
        teams: teams,
    });

    return (
        <Router>
            <div className="grid grid-cols-12">
                <div className="bg-gray-900 col-span-2">
                    <Transition.Root show={sidebarOpen} as={Fragment}>
                        {/* ... (your existing code) */}
                    </Transition.Root>

                    {/* Static sidebar for desktop */}
                    <div className="hidden xl:fixed xl:inset-y-0 xl:z-50 xl:flex xl:w-[375px] xl:flex-col">
                        {/* Sidebar component, swap this element with another sidebar if you like */}
                        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-black  px-6 ring-1 ring-white/5">
                            <div className="flex h-16 shrink-0 items-center">
                                {/* ... (your existing code) */}
                            </div>
                            <nav className="flex flex-1 flex-col">
                                <ul
                                    role="list"
                                    className="flex flex-1 flex-col gap-y-7"
                                >
                                    <li>
                                        <ul
                                            role="list"
                                            className="-mx-2 space-y-1"
                                        >
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
                                    <li>
                                        <div className="text-xs font-semibold leading-6 text-gray-400">
                                            Your teams
                                        </div>
                                        <ul
                                            role="list"
                                            className="-mx-2 mt-2 space-y-1"
                                        >
                                            {currentTeam.teams.map((team) => (
                                                <li key={team.name}>
                                                    <Link
                                                        to={team.href}
                                                        onClick={() =>
                                                            handleTeamMenuItemClick(
                                                                team.id
                                                            )
                                                        }
                                                        className={classNames(
                                                            team.current
                                                                ? "bg-gray-800 text-white"
                                                                : "text-gray-400 hover:text-white hover:bg-gray-800",
                                                            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                                        )}
                                                    >
                                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                                                            {team.initial}
                                                        </span>
                                                        <span className="truncate">
                                                            {team.name}
                                                        </span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                    <li className="-mx-6 mt-auto">
                                        <a
                                            href="#"
                                            className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800"
                                        >
                                            <img
                                                className="h-8 w-8 rounded-full bg-gray-800"
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
                                            <span className="sr-only">
                                                Your profile
                                            </span>
                                            <span aria-hidden="true">
                                                Tom Cook
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="col-span-10">
                    <Header />
                    <Routes>
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/deployments" element={<Deployments />} />
                        <Route path="/activity" element={<Activity />} />
                        <Route path="/domains" element={<Domains />} />
                        <Route path="/planetaria" element={<Planetaria />} />
                        <Route path="/protocol" element={<Protocol />} />
                        <Route
                            path="/tailwind-labs"
                            element={<TailwindLabs />}
                        />
                        <Route path="/usage" element={<Usage />} />
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
