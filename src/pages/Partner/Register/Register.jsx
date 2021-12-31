import React, { useState } from "react";
import "./Register.css";
import MerchantRegister from "../../../components/Partner/Register/MerchantRegister";
import ShipperRegister from "../../../components/Partner/Register/ShipperRegister";
import merchantImg from "../../../images/merchant.png";
import shipperImg from "../../../images/shipper.png";
const Register = () => {
  const [userType, setUsertype] = useState(0);
  const [visible, setVisible] = useState(1);

  const handleClick = (value) => {
    setUsertype(value);
    setVisible(0);
  };
  return (
    <>
      <div className="partner-container">
        <div className="grid-container">
          {visible === 1 ? (
            <div className="card merchant-card" onClick={() => handleClick(2)}>
              <p>MERCHANT</p>
              <img className="merchant-img" src={merchantImg} alt="image" />
            </div>
          ) : (
            ""
          )}
          {visible === 1 ? (
            <div className="card shipper-card" onClick={() => handleClick(3)}>
              <p>SHIPPER</p>
              <img className="shipper-img" src={shipperImg} alt="image" />
            </div>
          ) : (
            ""
          )}
        </div>
        {userType === 2 ? (
          <MerchantRegister userType={userType} img={merchantImg} />
        ) : (
          ""
        )}
        {userType === 3 ? (
          <ShipperRegister userType={userType} img={shipperImg} />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Register;
