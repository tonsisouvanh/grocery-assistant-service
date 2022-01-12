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
            to="/pages/partner/merchant/dashboard"
            id={Style[pathname === "/pages/partner/merchant/dashboard" ? "menu_link_active" : ""]}
            className={Style["link"]}
          >
            <span>
              <i id={Style["icon"]} class="fas fa-globe"></i>
            </span>
            Ouẩn lý sản phẩm
          </Link>
          <Link
            id={
              Style[
                pathname === "/pages/partner/merchant/addProduct" ? "menu_link_active" : ""
              ]
            }
            to="/pages/partner/merchant/addProduct"
            className={Style["link"]}
          >
            <span>
              <i id={Style["icon"]} class="fas fa-user"></i>
            </span>
            Thêm sản phẩm
          </Link>
          <Link
            id={
              Style[
                pathname === "/admin/admin-delivery-company-page"
                  ? "menu_link_active"
                  : ""
              ]
            }
            to="/admin/admin-delivery-company-page"
            className={Style["link"]}
          >
            <span>
              <i id={Style["icon"]} class="fas fa-truck"></i>
            </span>
            Delivery Company
          </Link>
          <Link
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
              <i id={Style["icon"]} class="fas fa-cubes"></i>
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
              <i id={Style["icon"]} class="fas fa-coins"></i>
            </span>
            Income
          </Link>
        </div>
      </div>
    </>
  );
}

export default SidebarAd;
