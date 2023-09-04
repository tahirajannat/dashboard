import React from "react";
import SidebarRight from "../SidebarRight";
import Header from "../header";
import Sidebar from "../sidebar";

export default function Page() {
    return (
        <div className="grid grid-cols-12">
            <div className=" col-span-2">
                <Sidebar />
            </div>
            <div className="col-span-8">
                <Header />
            </div>
            <div className=" col-span-2">
                <SidebarRight />
            </div>
        </div>
    );
}
