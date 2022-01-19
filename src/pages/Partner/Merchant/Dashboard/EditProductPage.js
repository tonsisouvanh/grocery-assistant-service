import React, { useEffect, useState } from "react";
import TopbarAd from "../../../../components/Partner/Merchant/TopbarAd";
import SidebarAd from "../../../../components/Partner/Merchant/SidebarAd";
import EditProduct from "../../../../components/Partner/Merchant/EditProduct";
import { useParams } from "react-router-dom";

import ProductService from "../../../../services/product.service";

const EditProductPage = ({cloundinaryUrl}) => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    let mounted = true;

    // ProductService.getAllProductType().then((res) => {
    //   if (mounted) {
    //     setProductTypeList(res && res.data);
    //   }
    // });

    ProductService.getProductsOfMerchantStore(user.storeId).then((res) => {
      if (mounted) setProduct((res && res.data) || "");
    });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      <TopbarAd />
      <div style={{ display: "flex", width: "100%" }}>
        <SidebarAd />
        {product &&
          product
            .filter((p) => p.masp === parseInt(id, 10))
            .map((p) => (
              <EditProduct
                key={p.masp}
                proId={p.masp}
                proName={p.tensp}
                proDesc={p.mota}
                proUnit={p.donvitinh}
                proPrice={p.dongia}
                proStorageQty={p.sL_KHO}
                proTypeId={p.maloai}
                imgId={p.imgurl}
                cloundinaryUrl={cloundinaryUrl}
              />
            ))}
      </div>
    </>
  );
};

export default EditProductPage;
