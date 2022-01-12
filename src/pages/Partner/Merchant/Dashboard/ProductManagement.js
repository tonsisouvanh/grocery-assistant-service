import React from "react";
import TopbarAd from "../../../../components/Partner/Merchant/TopbarAd";
import SidebarAd from "../../../../components/Partner/Merchant/SidebarAd";
import Product from "../../../../components/Partner/Merchant/ProductManagement";

function DashboardAd() {
  return (
    <>
      <TopbarAd />
      <div style={{ display: "flex", width: "100%" }}>
        <SidebarAd />
        <Product />
      </div>
    </>
  );
}

export default DashboardAd;
