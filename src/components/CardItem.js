import { Modal } from "antd";
import { CheckCircleOutlined, FileTextOutlined, WarningOutlined } from "@ant-design/icons";
import { Detail, HomeBookRoom } from "./Form";
import { Card } from "antd";
import React, { useState } from "react";
const { Meta } = Card;

const CardItem = ({ item }) => {
  const [isModalDetail, setIsModalDetail] = useState(false);
  const [isBookRoomModal, setIsBookRoomModal] = useState(false);

  const DetailModal = ({
    isAddModal,
    setIsAddModal,
    onFinish,
    onFinishFailed,
    phong,
  }) => {
    return (
      <Modal
        title="Chi tiết"
        centered
        visible={isAddModal}
        footer={null}
        onCancel={() => setIsAddModal(false)}
      >
        <Detail
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          phong={phong}
        />
      </Modal>
    );
  };
  const BookRoomModal = ({
    isAddModal,
    setIsAddModal,
    onFinish,
    onFinishFailed,
    datphong,
  }) => {
    return (
      <Modal
        title="Đặt phòng"
        centered
        visible={isAddModal}
        footer={null}
        onCancel={() => setIsAddModal(false)}
      >
        <HomeBookRoom
          submit="Xác nhận"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          datphong={datphong}
        />
      </Modal>
    );
  };
  const handleDetailClick = () => {
    setIsModalDetail(true);
  };

  const handleBookRoomClick = () => {
    setIsBookRoomModal(true);
  };

  return (
    <div>
      <Card
        style={{
          width: 300,
        }}
        cover={
          <img
            alt="phong"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <span
            className="bg-teal-500 text-white py-2 px-5 rounded-md"
            onClick={handleDetailClick}
          >
            <FileTextOutlined /> Chi tiết
          </span>,
          item.MaTinhTrang === 1 ? (
            <span
              className="bg-green-500 text-white py-2 px-5 rounded-md"
              onClick={handleBookRoomClick}
            >
              <CheckCircleOutlined /> Đặt phòng
            </span>
          ) : (
            <span
              className="bg-red-500 text-white py-2 px-5 rounded-md"
            >
              <WarningOutlined /> Hết phòng
            </span>
          ),
        ]}
      >
        <Meta title={item.TenPhong} description={item.LoaiPhong?.TenLoaiPhong} />
      </Card>

      <DetailModal
        isAddModal={isModalDetail}
        setIsAddModal={setIsModalDetail}
        onFinish={() => console.log("Đặt phòng thành công")}
        onFinishFailed={() => console.log("Đặt phòng thất bại")}
        phong={item}
      />

      <BookRoomModal
        isAddModal={isBookRoomModal}
        setIsAddModal={setIsBookRoomModal}
        onFinish={() => console.log("Đặt phòng thành công")}
        onFinishFailed={() => console.log("Đặt phòng thất bại")}
        datphong={item}
      />
    </div>
  );
};

export default CardItem;
