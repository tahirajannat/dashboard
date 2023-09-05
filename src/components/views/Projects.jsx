import React from "react";

import { Menu, Transition } from "@headlessui/react";
import {
    BuildingOfficeIcon,
    CheckCircleIcon,
    ChevronRightIcon,
    EllipsisVerticalIcon,
    MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import { Bars3CenterLeftIcon } from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";

const projects = [
    {
        id: 1,
        title: "GraphQL API",
        initials: "GA",
        team: "Engineering",
        members: [
            {
                name: "Dries Vincent",
                handle: "driesvincent",
                imageUrl:
                    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            },
            {
                name: "Lindsay Walton",
                handle: "lindsaywalton",
                imageUrl:
                    "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            },
            {
                name: "Courtney Henry",
                handle: "courtneyhenry",
                imageUrl:
                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            },
            {
                name: "Tom Cook",
                handle: "tomcook",
                imageUrl:
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            },
        ],
        totalMembers: 12,
        lastUpdated: "March 17, 2020",
        pinned: true,
        bgColorClass: "bg-pink-600",
    },
    {
        id: 2,
        title: "Web Development",
        initials: "GA",
        team: "Engineering",
        members: [
            {
                name: "Dries Vincent",
                handle: "driesvincent",
                imageUrl:
                    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            },
            {
                name: "Lindsay Walton",
                handle: "lindsaywalton",
                imageUrl:
                    "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            },
            {
                name: "Courtney Henry",
                handle: "courtneyhenry",
                imageUrl:
                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            },
            {
                name: "Tom Cook",
                handle: "tomcook",
                imageUrl:
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            },
        ],
        totalMembers: 12,
        lastUpdated: "March 17, 2020",
        pinned: true,
        bgColorClass: "bg-pink-600",
    },
    // More projects...
];
const pinnedProjects = projects.filter((project) => project.pinned);

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Projects() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-900">
        <body class="h-full">
        ```
      */}
            <div className="min-h-full">
                {/* Main column */}
                <div className="flex flex-col">
                    {/* Search header */}
                    <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 border-b border-gray-900 bg-gray-900 lg:hidden">
                        <button
                            type="button"
                            className="border-r border-gray-900 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 lg:hidden"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <span className="sr-only">Open sidebar</span>
                            <Bars3CenterLeftIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                            />
                        </button>
                        <div className="flex flex-1 justify-between px-4 sm:px-6 lg:px-8">
                            <div className="flex flex-1">
                                <form
                                    className="flex w-full md:ml-0"
                                    action="#"
                                    method="GET"
                                >
                                    <label
                                        htmlFor="search-field"
                                        className="sr-only"
                                    >
                                        Search
                                    </label>
                                    <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                                            <MagnifyingGlassIcon
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                            />
                                        </div>
                                        <input
                                            id="search-field"
                                            name="search-field"
                                            className="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-100 focus:border-transparent focus:outline-none focus:ring-0 focus:placeholder:text-gray-400 sm:text-sm"
                                            placeholder="Search"
                                            type="search"
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="flex items-center">
                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">
                                                Open user menu
                                            </span>
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right divide-y divide-gray-200 rounded-md bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="py-1">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                active
                                                                    ? "bg-gray-100 text-gray-100"
                                                                    : "text-gray-700",
                                                                "block px-4 py-2 text-sm"
                                                            )}
                                                        >
                                                            View profile
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                active
                                                                    ? "bg-gray-100 text-gray-100"
                                                                    : "text-gray-700",
                                                                "block px-4 py-2 text-sm"
                                                            )}
                                                        >
                                                            Settings
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                active
                                                                    ? "bg-gray-100 text-gray-100"
                                                                    : "text-gray-700",
                                                                "block px-4 py-2 text-sm"
                                                            )}
                                                        >
                                                            Notifications
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                            <div className="py-1">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                active
                                                                    ? "bg-gray-100 text-gray-100"
                                                                    : "text-gray-700",
                                                                "block px-4 py-2 text-sm"
                                                            )}
                                                        >
                                                            Get desktop app
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                active
                                                                    ? "bg-gray-100 text-gray-100"
                                                                    : "text-gray-700",
                                                                "block px-4 py-2 text-sm"
                                                            )}
                                                        >
                                                            Support
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                            <div className="py-1">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                active
                                                                    ? "bg-gray-100 text-gray-100"
                                                                    : "text-gray-700",
                                                                "block px-4 py-2 text-sm"
                                                            )}
                                                        >
                                                            Logout
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>
                    <main className="flex-1">
                        {/* Page title & actions */}
                        <div className="bg-gray-900 shadow">
                            <div className="px-4 sm:px-6 llg:px-8">
                                <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-900">
                                    <div className="min-w-0 flex-1">
                                        {/* Profile */}
                                        <div className="flex items-center">
                                            <img
                                                className="hidden h-16 w-16 rounded-full sm:block"
                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80"
                                                alt=""
                                            />
                                            <div>
                                                <div className="flex items-center">
                                                    <img
                                                        className="h-16 w-16 rounded-full sm:hidden"
                                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80"
                                                        alt=""
                                                    />
                                                    <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-100 sm:truncate sm:leading-9">
                                                        Good morning, Emilia
                                                        Birch
                                                    </h1>
                                                </div>
                                                <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                                                    <dt className="sr-only">
                                                        Company
                                                    </dt>
                                                    <dd className="flex items-center text-sm font-medium capitalize text-gray-500 sm:mr-6">
                                                        <BuildingOfficeIcon
                                                            className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                                                            aria-hidden="true"
                                                        />
                                                        Duke street studio
                                                    </dd>
                                                    <dt className="sr-only">
                                                        Account status
                                                    </dt>
                                                    <dd className="mt-3 flex items-center text-sm font-medium capitalize text-gray-500 sm:mr-6 sm:mt-0">
                                                        <CheckCircleIcon
                                                            className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
                                                            aria-hidden="true"
                                                        />
                                                        Verified account
                                                    </dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-6 flex space-x-3 md:ml-4 md:mt-0">
                                        <button
                                            type="button"
                                            className="inline-flex items-center rounded-md bg-gray-700 px-3 py-2 text-sm font-semibold text-gray-100 shadow-sm ring-1 ring-inset ring-gray-700 hover:bg-gray-7000"
                                        >
                                            Share
                                        </button>
                                        <button
                                            type="button"
                                            className="inline-flex items-center rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                                        >
                                            Create
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pinned projects */}
                        <div className="mt-6 px-4 sm:px-6 lg:px-8">
                            <h2 className="text-sm font-medium text-gray-100">
                                Pinned Projects
                            </h2>
                            <ul
                                role="list"
                                className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4"
                            >
                                {pinnedProjects.map((project) => (
                                    <li
                                        key={project.id}
                                        className="relative col-span-1 flex rounded-md shadow-sm"
                                    >
                                        <div
                                            className={classNames(
                                                project.bgColorClass,
                                                "flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white"
                                            )}
                                        >
                                            {project.initials}
                                        </div>
                                        <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-900 bg-gray-700">
                                            <div className="flex-1 truncate px-4 py-2 text-sm">
                                                <a
                                                    href="#"
                                                    className="font-medium text-gray-100 hover:text-gray-600"
                                                >
                                                    {project.title}
                                                </a>
                                                <p className="text-gray-500">
                                                    {project.totalMembers}{" "}
                                                    Members
                                                </p>
                                            </div>
                                            <Menu
                                                as="div"
                                                className="flex-shrink-0 pr-2"
                                            >
                                                <Menu.Button className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                                                    <span className="sr-only">
                                                        Open options
                                                    </span>
                                                    <EllipsisVerticalIcon
                                                        className="h-5 w-5"
                                                        aria-hidden="true"
                                                    />
                                                </Menu.Button>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <Menu.Items className="absolute right-10 top-3 z-10 mx-3 mt-1 w-48 origin-top-right divide-y divide-gray-200 rounded-md bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        <div className="py-1">
                                                            <Menu.Item>
                                                                {({
                                                                    active,
                                                                }) => (
                                                                    <a
                                                                        href="#"
                                                                        className={classNames(
                                                                            active
                                                                                ? "bg-gray-100 text-gray-100"
                                                                                : "text-gray-700",
                                                                            "block px-4 py-2 text-sm"
                                                                        )}
                                                                    >
                                                                        View
                                                                    </a>
                                                                )}
                                                            </Menu.Item>
                                                        </div>
                                                        <div className="py-1">
                                                            <Menu.Item>
                                                                {({
                                                                    active,
                                                                }) => (
                                                                    <a
                                                                        href="#"
                                                                        className={classNames(
                                                                            active
                                                                                ? "bg-gray-100 text-gray-100"
                                                                                : "text-gray-700",
                                                                            "block px-4 py-2 text-sm"
                                                                        )}
                                                                    >
                                                                        Removed
                                                                        from
                                                                        pinned
                                                                    </a>
                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                {({
                                                                    active,
                                                                }) => (
                                                                    <a
                                                                        href="#"
                                                                        className={classNames(
                                                                            active
                                                                                ? "bg-gray-100 text-gray-100"
                                                                                : "text-gray-700",
                                                                            "block px-4 py-2 text-sm"
                                                                        )}
                                                                    >
                                                                        Share
                                                                    </a>
                                                                )}
                                                            </Menu.Item>
                                                        </div>
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Projects list (only on smallest breakpoint) */}
                        <div className="mt-10 sm:hidden">
                            <div className="px-4 sm:px-6">
                                <h2 className="text-sm font-medium text-gray-100">
                                    Projects
                                </h2>
                            </div>
                            <ul
                                role="list"
                                className="mt-3 divide-y divide-gray-100 border-t border-gray-900"
                            >
                                {projects.map((project) => (
                                    <li key={project.id}>
                                        <a
                                            href="#"
                                            className="group flex items-center justify-between px-4 py-4 hover:bg-gray-700 sm:px-6"
                                        >
                                            <span className="flex items-center space-x-3 truncate">
                                                <span
                                                    className={classNames(
                                                        project.bgColorClass,
                                                        "h-2.5 w-2.5 flex-shrink-0 rounded-full"
                                                    )}
                                                    aria-hidden="true"
                                                />
                                                <span className="truncate text-sm font-medium leading-6">
                                                    {project.title}{" "}
                                                    <span className="truncate font-normal text-gray-500">
                                                        in {project.team}
                                                    </span>
                                                </span>
                                            </span>
                                            <ChevronRightIcon
                                                className="ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                                aria-hidden="true"
                                            />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Projects table (small breakpoint and up) */}
                        <div className="mt-8 hidden sm:block">
                            <div className="inline-block min-w-full border-b border-gray-900 align-middle">
                                <table className="min-w-full">
                                    <thead>
                                        <tr className="border-t border-gray-900">
                                            <th
                                                className="border-b border-gray-900 bg-gray-700 px-6 py-3 text-left text-sm font-semibold text-gray-100"
                                                scope="col"
                                            >
                                                <span className="lg:pl-2">
                                                    Project
                                                </span>
                                            </th>
                                            <th
                                                className="border-b border-gray-900 bg-gray-700 px-6 py-3 text-left text-sm font-semibold text-gray-100"
                                                scope="col"
                                            >
                                                Members
                                            </th>
                                            <th
                                                className="hidden border-b border-gray-900 bg-gray-700 px-6 py-3 text-right text-sm font-semibold text-gray-100 md:table-cell"
                                                scope="col"
                                            >
                                                Last updated
                                            </th>
                                            <th
                                                className="border-b border-gray-900 bg-gray-700 py-3 pr-6 text-right text-sm font-semibold text-gray-100"
                                                scope="col"
                                            />
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 bg-gray-900">
                                        {projects.map((project) => (
                                            <tr key={project.id}>
                                                <td className="w-full max-w-0 whitespace-nowrap px-6 py-3 text-sm font-medium text-gray-100">
                                                    <div className="flex items-center space-x-3 lg:pl-2">
                                                        <div
                                                            className={classNames(
                                                                project.bgColorClass,
                                                                "h-2.5 w-2.5 flex-shrink-0 rounded-full"
                                                            )}
                                                            aria-hidden="true"
                                                        />
                                                        <a
                                                            href="#"
                                                            className="truncate hover:text-gray-600"
                                                        >
                                                            <span>
                                                                {project.title}{" "}
                                                                <span className="font-normal text-gray-500">
                                                                    in{" "}
                                                                    {
                                                                        project.team
                                                                    }
                                                                </span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-3 text-sm font-medium text-gray-500">
                                                    <div className="flex items-center space-x-2">
                                                        <div className="flex flex-shrink-0 -space-x-1">
                                                            {project.members.map(
                                                                (member) => (
                                                                    <img
                                                                        key={
                                                                            member.handle
                                                                        }
                                                                        className="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                                                                        src={
                                                                            member.imageUrl
                                                                        }
                                                                        alt={
                                                                            member.name
                                                                        }
                                                                    />
                                                                )
                                                            )}
                                                        </div>
                                                        {project.totalMembers >
                                                        project.members
                                                            .length ? (
                                                            <span className="flex-shrink-0 text-xs font-medium leading-5">
                                                                +
                                                                {project.totalMembers -
                                                                    project
                                                                        .members
                                                                        .length}
                                                            </span>
                                                        ) : null}
                                                    </div>
                                                </td>
                                                <td className="hidden whitespace-nowrap px-6 py-3 text-right text-sm text-gray-500 md:table-cell">
                                                    {project.lastUpdated}
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-3 text-right text-sm font-medium">
                                                    <a
                                                        href="#"
                                                        className="text-indigo-600 hover:text-indigo-900"
                                                    >
                                                        Edit
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
