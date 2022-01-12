import React from "react";
import TopbarAd from "../../components/Admin/TopbarAd";
import SidebarAd from "../../components/Admin/SidebarAd";
import ServicePackageAd from "../../components/Admin/ServicePackageAd";
function ServicePackageAdPage() {
  return (
    <>
      <TopbarAd />
      <div style={{ display: "flex", width: "100%" }}>
        <SidebarAd />
        <ServicePackageAd />
      </div>
    </>
  );
}

export default ServicePackageAdPage;
