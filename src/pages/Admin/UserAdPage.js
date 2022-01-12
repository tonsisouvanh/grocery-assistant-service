import React from "react";
import TopbarAd from "../../components/Admin/TopbarAd";
import SidebarAd from "../../components/Admin/SidebarAd";
import UserAd from "../../components/Admin/UserAd";
function UserAdPage() {
  return (
    <>
      <TopbarAd />
      <div style={{ display: "flex", width: "100%" }}>
        <SidebarAd />
        <UserAd/>
      </div>
    </>
  );
}

export default UserAdPage;
