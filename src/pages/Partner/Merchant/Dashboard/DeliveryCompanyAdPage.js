import React from "react";
import TopbarAd from "../../components/Admin/TopbarAd";
import SidebarAd from "../../components/Admin/SidebarAd";
import DeliveryCompanyAd from "../../components/Admin/DeliveryCompanyAd";
function DeliveryCompanyAdPage() {
  return (
    <>
      <TopbarAd />
      <div style={{ display: "flex", width: "100%" }}>
        <SidebarAd />
        <DeliveryCompanyAd />
      </div>
    </>
  );
}

export default DeliveryCompanyAdPage;
