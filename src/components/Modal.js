import { Modal } from "antd";
import React from "react";
import { ConfirmBook, Detail, HomeBookRoom } from "./Form";


export const DetailModal = ({
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

export const BookRoomModal = ({
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
        exit={() => setIsAddModal(false)}
      />
    </Modal>
  );
};

export const ConfirmModal = ({
  isAddModal,
  setIsAddModal,
  onFinish,
  onFinishFailed,
  data,
}) => {
  return (
    <Modal
      title="Xác nhận đặt phòng"
      centered
      visible={isAddModal}
      footer={null}
      onCancel={() => setIsAddModal(false)}
    >
      <ConfirmBook
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        data={data}
        exit={() => setIsAddModal(false)}
      />
    </Modal>
  );
};