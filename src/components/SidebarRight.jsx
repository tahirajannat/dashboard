/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

import { HiGlobeAlt, HiOutlineFolder, HiOutlineServer } from "react-icons/hi";
import {
    HiCog6Tooth,
    HiOutlineChartBarSquare,
    HiSignal,
} from "react-icons/hi2";

const navigation = [
    { name: "Projects", href: "#", icon: HiOutlineFolder, current: false },
    { name: "Deployments", href: "#", icon: HiOutlineServer, current: false },
    { name: "Activity", href: "#", icon: HiSignal, current: false },
    { name: "Domains", href: "#", icon: HiGlobeAlt, current: false },
    { name: "Usage", href: "#", icon: HiOutlineChartBarSquare, current: false },
    { name: "Settings", href: "#", icon: HiCog6Tooth, current: true },
];
const teams = [
    { id: 1, name: "Planetaria", href: "#", initial: "P", current: false },
    { id: 2, name: "Protocol", href: "#", initial: "P", current: false },
    { id: 3, name: "Tailwind Labs", href: "#", initial: "T", current: false },
];
const secondaryNavigation = [
    { name: "Account", href: "#", current: true },
    { name: "Notifications", href: "#", current: false },
    { name: "Billing", href: "#", current: false },
    { name: "Teams", href: "#", current: false },
    { name: "Integrations", href: "#", current: false },
];
const deployments = [
    {
        id: 1,
        href: "#",
        projectName: "ios-app",
        teamName: "Planetaria",
        status: "offline",
        statusText: "Initiated 1m 32s ago",
        description: "Deploys from GitHub",
        environment: "Preview",
    },
    {
        id: 2,
        href: "#",
        projectName: "ios-app",
        teamName: "Planetaria",
        status: "offline",
        statusText: "Initiated 1m 32s ago",
        description: "Deploys from GitHub",
        environment: "Preview",
    },
    {
        id: 3,
        href: "#",
        projectName: "ios-app",
        teamName: "Planetaria",
        status: "offline",
        statusText: "Initiated 1m 32s ago",
        description: "Deploys from GitHub",
        environment: "Preview",
    },
    {
        id: 4,
        href: "#",
        projectName: "ios-app",
        teamName: "Planetaria",
        status: "offline",
        statusText: "Initiated 1m 32s ago",
        description: "Deploys from GitHub",
        environment: "Preview",
    },
    // More deployments...
];
const activityItems = [
    {
        user: {
            name: "Michael Foster",
            imageUrl:
                "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        projectName: "ios-app",
        commit: "2d89f0c8",
        branch: "main",
        date: "1h",
        dateTime: "2023-01-23T11:00",
    },
    {
        user: {
            name: "Michael Foster",
            imageUrl:
                "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        projectName: "ios-app",
        commit: "2d89f0c8",
        branch: "main",
        date: "1h",
        dateTime: "2023-01-23T11:00",
    },
    {
        user: {
            name: "Michael Foster",
            imageUrl:
                "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        projectName: "ios-app",
        commit: "2d89f0c8",
        branch: "main",
        date: "1h",
        dateTime: "2023-01-23T11:00",
    },
    {
        user: {
            name: "Michael Foster",
            imageUrl:
                "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        projectName: "ios-app",
        commit: "2d89f0c8",
        branch: "main",
        date: "1h",
        dateTime: "2023-01-23T11:00",
    },
    {
        user: {
            name: "Michael Foster",
            imageUrl:
                "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        projectName: "ios-app",
        commit: "2d89f0c8",
        branch: "main",
        date: "1h",
        dateTime: "2023-01-23T11:00",
    },
];

export default function SidebarRight() {
    return (
        <>
            {/* Activity feed */}
            <aside className="bg-black lg:fixed lg:bottom-0 lg:right-0 lg:top-0 lg:w-[375px] lg:overflow-y-auto lg:border-l lg:border-white/5">
                <header className="flex items-center justify-between border-b border-white/5 px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
                    <h2 className="text-base font-semibold leading-7 text-white">
                        Activity feed
                    </h2>
                    <a
                        href="#"
                        className="text-sm font-semibold leading-6 text-indigo-400"
                    >
                        View all
                    </a>
                </header>
                <ul role="list" className="divide-y divide-white/5">
                    {activityItems.map((item) => (
                        <li
                            key={item.commit}
                            className="px-4 py-4 sm:px-6 lg:px-8"
                        >
                            <div className="flex items-center gap-x-3">
                                <img
                                    src={item.user.imageUrl}
                                    alt=""
                                    className="h-6 w-6 flex-none rounded-full bg-gray-800"
                                />
                                <h3 className="flex-auto truncate text-sm font-semibold leading-6 text-white">
                                    {item.user.name}
                                </h3>
                                <time
                                    dateTime={item.dateTime}
                                    className="flex-none text-xs text-gray-600"
                                >
                                    {item.date}
                                </time>
                            </div>
                            <p className="mt-3 truncate text-sm text-gray-500">
                                Pushed to{" "}
                                <span className="text-gray-400">
                                    {item.projectName}
                                </span>{" "}
                                (
                                <span className="font-mono text-gray-400">
                                    {item.commit}
                                </span>{" "}
                                on{" "}
                                <span className="text-gray-400">
                                    {item.branch}
                                </span>
                                )
                            </p>
                        </li>
                    ))}
                </ul>
            </aside>
        </>
    );
}
