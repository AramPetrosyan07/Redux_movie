import { Outlet } from "react-router-dom";
import AdminBox from "components/AdminBox";
import React from "react";
import { useSelector } from "react-redux";
import "../style/SettingsPage.css";

const SettingsPage = () => {
  const { role } = useSelector((state) => state.user);
  return (
    <div className="main_settings">
      <div className="adminBox_div">
        <div>{role === "admin" ? <AdminBox /> : <></>}</div>
      </div>
      <Outlet />
    </div>
  );
};

export default SettingsPage;
