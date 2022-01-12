import React from "react";
import TopbarAd from "../../../components/Admin/TopbarAd";
import SidebarAd from "../../../components/Admin/SidebarAd";
import Product from "../../components/Partner/Merchant/ProductManagement";

function DashboardAd() {
  return (
    <>
      <TopbarAd />
      <div style={{ display: "flex", width: "100%", backgroundColor: "red" }}>
        <SidebarAd />
        <Product />
      </div>
    </>
  );
}

export default DashboardAd;
