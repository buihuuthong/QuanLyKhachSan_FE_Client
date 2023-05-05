import React from "react";
import logo from "../assets/images/logo.png";
import { Button, Dropdown, Menu } from "antd";
import { userInfoSelector } from "../redux/userSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const user = useSelector(userInfoSelector);
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center">
      <img src={logo} style={{ width: "250px", height: "200px" }} alt="logo" />
      {user ? (
        <div>
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item key="profile">
                  <a href="/home">Hồ sơ</a>
                </Menu.Item>
                <Menu.Item key="logout">
                  <a href="/signin">Đăng xuất</a>
                </Menu.Item>
              </Menu>
            }
          >
            <Button className="text-white">
              <span>{user.hoten}</span>
            </Button>
          </Dropdown>
        </div>
      ) : (
        <div>
          <Button onClick={() => navigate("/signin")}>Đăng nhập</Button>
          <Button onClick={() => navigate("/signup")}>Đăng ký</Button>
        </div>
      )}
    </div>
  );
};

export default Header;
