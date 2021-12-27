import React, { useState, useEffect } from "react";
import "./Login.css";
import { Link, useHistory} from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../action/Account";
// import validator from 'validator';

const Login = ({ classes, ...props }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // const history = useHistory();
  



  const handleLogin = (e) => {
    e.preventDefault();

    try {
      
    } catch (error) {
      
    }

  };



  useEffect(() => {
    props.fetchAllAccounts();
    // console.log(AccountList);
  }, []);

  return (
    <>
      <div className="login-container">
        <div className="login-wrapper">
          <div className="left-col-container">
            <div className="greet-text">
              <p>Xin chào</p>
              <p>Đăng nhập hoặc Tạo tài khoản</p>
            </div>
            <form className="form-login">
              <div className="input-wrapper username">
                <label>SĐT/Email</label>
                <input
                  type="text"
                  placeholder=""
                  onChange={(e) => setUsername(e.target.value)}
                ></input>
              </div>

              <div className="input-wrapper password">
                <label>Password</label>
                <input
                  type="password"
                  placeholder=""
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>

              <button
                className="submit-btn"
                type="submit"
                onClick={handleLogin}
              >
                Đăng nhập
              </button>
              <Link className="register-link" to="#">
                <p>Chưa có tài khoản?</p>
              </Link>
            </form>
          </div>

          <div className="right-col-container">
            <i class="fab fa-opencart"></i>
            <p>Mua sắm ưu đãi!</p>
          </div>
        </div>
      </div>
    </>
  );
};

// export default Login;

const mapStateToProps = (state) => ({
  AccountList: state.Account.list,
});

const mapActionToProps = {
  fetchAllAccounts: actions.fetchAll,
  deleteAccounts: actions.Delete,

};

export default connect(mapStateToProps, mapActionToProps)(Login);
