import React from "react";

// components

import AdminNavbar from "../components/Notus/Navbars/AdminNavbar";
import Sidebar from "../components/Notus/Sidebar/Sidebar";
import HeaderStats from "../components/Notus/Headers/HeaderStats";
import FooterAdmin from "../components/Notus/Footers/FooterAdmin";
interface AdminProps {
  children: JSX.Element | JSX.Element[];
}
export default function Admin(props: AdminProps) {
  const { children } = props;
  const [sidebarOpen, setSidebarOpen] = React.useState(true);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div
        className={
          "bg-blueGray-100 relative z-0" +
          (sidebarOpen ? " md:ml-64" : " md:ml-[90px]")
        }
      >
        <AdminNavbar />
        {/* Header */}
        <div className="bg-blueGray-800 relative mb-8 pb-12 pt-8 md:pt-12">
          <div className="mx-auto w-full px-4 md:px-10">
            <div>
              {/* Card stats */}
              <div className="flex flex-wrap"></div>
            </div>
          </div>
        </div>
        <div className="mx-auto w-full px-4 md:px-10">
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
