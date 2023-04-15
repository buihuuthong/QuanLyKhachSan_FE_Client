import React from "react";
import logo from "../../assets/images/logo.png";
import phongdoi from "../../assets/images/phongdoi.png";
import phongdon from "../../assets/images/phongdon.png";
import phongviewSky from "../../assets/images/viewSky.png";
import phongvip from "../../assets/images/phongvip.png";

const RoomList = () => {
  return (
    <div className="container">
      <div>
      <img src={logo} style={{width: '250px', height: '200px'}} alt="logo"/>
      </div>
      <div className="room-list">
        <div className="room-item">
          <div className="room-image">
            <ul className="roomHiden">
              <li>       
                <img src={phongviewSky} alt="Phòng" />
              </li>
            </ul>
          </div>
          <div className="room-info">
            <h2 className="room-name">Phòng có ban công</h2>
            <p className="room-type">Phòng tiêu chuẩn ngoài trời</p>
            <p className="room-price">Giá: 1.000.000 đồng/đêm</p>
            <button className="btn-book">Đặt phòng</button>
          </div>
          
        </div>
        <div className="room-item">
          <div className="room-image">
            <ul className="roomHiden">
              <li>           
                <img src={phongdon} alt="Phòng" />
              </li>
            </ul>
          </div>
          <div className="room-info">
            <h2 className="room-name">Phòng đơn</h2>
            <p className="room-type">Phòng tiêu chuẩn đơn</p>
            <p className="room-price">Giá: 500.000 đồng/đêm</p>
            <button className="btn-book">Đặt phòng</button>
          </div>
        </div>
        <div className="room-item">
          <div className="room-image">
            <ul className="roomHiden">
              <li>           
                <img src={phongdoi} alt="Phòng" />
              </li>
            </ul>
          </div>
          <div className="room-info">
            <h2 className="room-name">Phòng đôi</h2>
            <p className="room-type">Phòng tiêu chuẩn đôi</p>
            <p className="room-price">Giá: 800.000 đồng/đêm</p>
            <button className="btn-book">Đặt phòng</button>
          </div>
          
        </div>
        <div className="room-item">
          <div className="room-image">
            <ul className="roomHiden">
              <li>           
                <img src={phongdon} alt="Phòng" style={{width:'100%'}}/>
              </li>
            </ul>
          </div>
          <div className="room-info">
            <h2 className="room-name">Phòng Vip</h2>
            <p className="room-type">Nội thất thời thượng</p>
            <p className="room-price">Giá: 3.000.000 đồng/đêm</p>
            <button className="btn-book">Đặt phòng</button>
          </div>
          
        </div>
       
      
      </div>
    </div>
  );
};
export default RoomList;
