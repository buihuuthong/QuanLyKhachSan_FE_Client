import React from "react";
import { EditProfile } from "../../components/Form";
import "../../index.css";

const ProFile = () => {
  return (
    <div className="flex justify-center items-center h-screen">
    <div>
      <div className="max-w-lg flex-row">
        <h1 className="font-semibold">Hồ sơ</h1>
        <hr className="my-4 mb-4" />
      </div>
        <EditProfile khachhang submit="Cập nhật"  isSignup={true} />
         <div className="max-w-lg px-5 py-1">
          <span>
            Cảm ơn bạn đã tin tưởng sử dụng khách sạn
            của chúng tôi
          </span>
        </div>
      </div>
      
    </div>
  );
};

export default ProFile;
