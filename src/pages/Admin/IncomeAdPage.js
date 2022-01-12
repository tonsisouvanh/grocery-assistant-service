import React from "react";
import TopbarAd from "../../components/Admin/TopbarAd";
import SidebarAd from "../../components/Admin/SidebarAd";
import IncomeAd from "../../components/Admin/IncomeAd";
function IncomeAdPage() {
  return (
    <>
      <TopbarAd />
      <div style={{ display: "flex", width: "100%" }}>
        <SidebarAd />
        <IncomeAd />
      </div>
    </>
  );
}

export default IncomeAdPage;
