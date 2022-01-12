import React from "react";
import TopbarAd from "../../../../components/Partner/Merchant/TopbarAd";
import SidebarAd from "../../../../components/Partner/Merchant/SidebarAd";
import AddProduct from '../../../../components/Partner/Merchant/AddProduct'
function AddProductPage() {
  return (
    <>
      <TopbarAd />
      <div style={{ display: "flex", width: "100%" }}>
        <SidebarAd />
        <AddProduct/>
      </div>
    </>
  );
}

export default AddProductPage;
