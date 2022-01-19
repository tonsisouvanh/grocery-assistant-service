import React from "react";
import Style from "./UserAd.module.css";
function UserAd() {
  return (
    <>
      <div className={Style["container"]}>
        <div className={Style["user_wrapper"]}>
          <h1 className={Style["h1"]}>Users</h1>
          <div className={Style["add_wrapper"]}>
            <i id={Style["fa-search"]} className="fas fa-search"></i>
            <input
              className={Style["search_input"]}
              placeholder="Search..."
              type="text"
            />
            {/* <button className={Style["add_btn"]}>Add New</button> */}
          </div>
          <table className={Style["table"]}>
            <thead>
              <tr>
                <th className={Style["th"]}>Tel.</th>
                <th className={Style["th"]}>ID</th>
                <th className={Style["th"]}>Full Name</th>
                <th className={Style["th"]}>Date of birth</th>
                <th className={Style["th"]}>Email</th>
                <th className={Style["th"]}>Sex</th>
                <th className={Style["th"]}>Address</th>
                <th id={Style["del_col"]} className={Style["td"]}></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td id={Style["wrap_text"]} className={Style["td"]}>
                  0123847970123
                </td>
                <td id={Style["wrap_text"]} className={Style["td"]}>
                  IDK893
                </td>
                <td id={Style["wrap_text"]} className={Style["td"]}>
                  Michale Kors
                </td>
                <td id={Style["wrap_text"]} className={Style["td"]}>
                  12/01/1889
                </td>
                <td id={Style["wrap_text"]} className={Style["td"]}>
                  coded@yahoo.com
                </td>
                <td id={Style["wrap_text"]} className={Style["td"]}>
                  Female
                </td>
                <td id={Style["wrap_text"]} className={Style["td"]}>
                  21 Pasteur,district 1, Ho Chi Minh City
                </td>
                <td id={Style["del_td"]} className={Style["td"]}>
                  <button className={Style["del_btn"]}>Delete</button>
                </td>
              </tr>
              <tr>
                <td id={Style["wrap_text"]} className={Style["td"]}>
                  012384797
                </td>
                <td id={Style["wrap_text"]} className={Style["td"]}>
                  IDK893
                </td>
                <td id={Style["wrap_text"]} className={Style["td"]}>
                  Michale Kors
                </td>
                <td id={Style["wrap_text"]} className={Style["td"]}>
                  12/01/1889
                </td>
                <td id={Style["wrap_text"]} className={Style["td"]}>
                  coded@yahoo.com
                </td>
                <td id={Style["wrap_text"]} className={Style["td"]}>
                  Female
                </td>
                <td id={Style["wrap_text"]} className={Style["td"]}>
                  21 Pasteur,district 1, Ho Chi Minh City
                </td>
                <td id={Style["del_td"]} className={Style["td"]}>
                  <button className={Style["del_btn"]}>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default UserAd;
