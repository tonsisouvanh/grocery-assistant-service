import React from "react";
import TopbarAd from "../../../../components/Partner/Merchant/TopbarAd";
import SidebarAd from "../../../../components/Partner/Merchant/SidebarAd";
import OrdersManagement from "../../../../components/Partner/Merchant/OrdersManagement";
function OrdersManagementPage() {
  return (
    <>
      <TopbarAd />
      <div style={{ display: "flex", width: "100%" }}>
        <SidebarAd />
        <OrdersManagement />
      </div>
    </>
  );
}

export default OrdersManagementPage;
