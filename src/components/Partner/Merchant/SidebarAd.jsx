import React from "react";
import Style from "./SidebarAd.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function SidebarAd() {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <>
      <div className={Style["container"]}>
        <div className={Style["menu_links_wrapper"]}>
          <Link
            to="/pages/partner/merchant/productManagement"
            id={
              Style[
                pathname === "/pages/partner/merchant/productManagement"
                  ? "menu_link_active"
                  : ""
              ]
            }
            className={Style["link"]}
          >
            <span>
              <i id={Style["icon"]} className="fab fa-product-hunt"></i>
            </span>
            Ouẩn lý sản phẩm
          </Link>

          <Link
            id={
              Style[
                pathname === "/pages/partner/merchant/addProduct"
                  ? "menu_link_active"
                  : ""
              ]
            }
            to="/pages/partner/merchant/addProduct"
            className={Style["link"]}
          >
            <span>
              <i id={Style["icon"]} className="fas fa-plus-circle"></i>
            </span>
            Thêm sản phẩm
          </Link>

          <Link
            id={
              Style[
                pathname === "/pages/partner/merchant/ordersManagement"
                  ? "menu_link_active"
                  : ""
              ]
            }
            to="/pages/partner/merchant/ordersManagement"
            className={Style["link"]}
          >
            <span>
              <i id={Style["icon"]} className="fas fa-clipboard"></i>
            </span>
            Quản lý đơn hàng
          </Link>
          {/* <Link
            id={
              Style[
                pathname === "/admin/admin-service-packages-page"
                  ? "menu_link_active"
                  : ""
              ]
            }
            to="/admin/admin-service-packages-page"
            className={Style["link"]}
          >
            <span>
              <i id={Style["icon"]} className="fas fa-cubes"></i>
            </span>
            Service Packages
          </Link>
          <Link
            id={
              Style[
                pathname === "/admin/admin-income-page"
                  ? "menu_link_active"
                  : ""
              ]
            }
            to="/admin/admin-income-page"
            className={Style["link"]}
          >
            <span>
              <i id={Style["icon"]} className="fas fa-coins"></i>
            </span>
            Income
          </Link> */}
        </div>
      </div>
    </>
  );
}

export default SidebarAd;
