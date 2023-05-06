import {
  FontSizeOutlined,
  HomeOutlined,
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
  EditOutlined,
  DollarOutlined,
  FieldNumberOutlined
} from "@ant-design/icons";
import { Button, Checkbox, DatePicker, Form, Input, Select } from "antd";
import React from "react";
const { Option } = Select;

const FormItem = ({ name, required, message, children }) => {
  return (
    <Form.Item
      name={name}
      rules={[
        {
          required: required,
          message: `Vui lòng nhập ${message}!`,
        },
      ]}
    >
      {children}
    </Form.Item>
  );
};

export const AddForm = ({ khachhang, onFinish, onFinishFailed, submit, formValues }) => {
  const [form] = Form.useForm();
  form.setFieldsValue(formValues);
  
  return (
    <Form
      name="add"
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      size="midle"
      form={form}
    >
      <FormItem name="taikhoan" required={khachhang ? true : false} message="tài khoản">
        <Input placeholder=" Tài khoản" prefix={<UserOutlined />} />
      </FormItem>

      <FormItem name="matkhau" required={khachhang ? true : false} message="mật khẩu">
        <Input.Password placeholder=" Mật khẩu" prefix={<LockOutlined />} />
      </FormItem>

      <FormItem name="hoten" required={khachhang ? true : false} message="họ tên">
        <Input placeholder=" Họ tên" prefix={<FontSizeOutlined />} />
      </FormItem>

      <FormItem name="ngaysinh" required={khachhang ? true : false} message="ngày sinh">
        <DatePicker placeholder=" Ngày sinh" style={{ width: "100%" }} />
      </FormItem>

      <FormItem name="email" required={khachhang ? true : false} message="email">
        <Input placeholder=" Email" prefix={<MailOutlined />} />
      </FormItem>

      <FormItem name="diachi" required={khachhang ? true : false} message="địa chỉ">
        <Input placeholder=" Địa chỉ" prefix={<HomeOutlined />} />
      </FormItem>

      <FormItem name="sdt" required={khachhang ? true : false} message="số điện thoại">
        <Input placeholder=" Số điện thoại" prefix={<PhoneOutlined />} />
      </FormItem>

      {submit ? (
        <Form.Item>
          <Button className="large-btn" type="primary" htmlType="submit">
            {submit}
          </Button>
        </Form.Item>
      ) : null}
    </Form>
  );
};

export const SigninForm = ({ onFinish, onFinishFailed, onChecked, submit }) => {
  return (
    <Form
      name="signin"
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      size="midle"
    >
      <FormItem name="taikhoan" required={true} message="tài khoản">
        <Input placeholder="Tài khoản" prefix={<UserOutlined />} />
      </FormItem>

      <FormItem name="matkhau" required={true} message="mật khẩu">
        <Input.Password placeholder="Mật khẩu" prefix={<LockOutlined />} />
      </FormItem>

      <FormItem>
        <Checkbox onChange={onChecked}>Nhớ mật khẩu</Checkbox>
      </FormItem>

      <Form.Item>
        <Button className="large-btn" type="primary" htmlType="submit">
          {submit}
        </Button>
      </Form.Item>
    </Form>
  );
};

export const EditProfile = ({ khachhang, onFinish, onFinishFailed, submit, formValues }) => {
  const [form] = Form.useForm();
  form.setFieldsValue(formValues);
  
  return (
    <Form
      name="add"
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      size="midle"
      form={form}
    >
      <FormItem name="hoten" required={khachhang ? true : false} message="họ tên">
        <Input placeholder=" Họ tên" prefix={<FontSizeOutlined />} />
      </FormItem>

      <FormItem name="ngaysinh" required={khachhang ? true : false} message="ngày sinh">
        <DatePicker placeholder=" Ngày sinh" style={{ width: "100%" }} />
      </FormItem>

      <FormItem name="email" required={khachhang ? true : false} message="email">
        <Input placeholder=" Email" prefix={<MailOutlined />} />
      </FormItem>

      <FormItem name="diachi" required={khachhang ? true : false} message="địa chỉ">
        <Input placeholder=" Địa chỉ" prefix={<HomeOutlined />} />
      </FormItem>

      <FormItem name="sdt" required={khachhang ? true : false} message="số điện thoại">
        <Input placeholder=" Số điện thoại" prefix={<PhoneOutlined />} />
      </FormItem>

      {submit ? (
        <Form.Item>
          <Button className="large-btn" type="primary" htmlType="submit">
            {submit}
          </Button>
        </Form.Item>
      ) : null}
    </Form>
  );
};

export const Detail = ({ phong, onFinish, onFinishFailed, submit }) => {

  return (
    <Form
      name="add"
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      size="midle"
    >

      <FormItem name="TenPhong" required={phong ? true : false} message="Tên phòng">
        <Input placeholder="Tên phòng" prefix={<FontSizeOutlined />} />
      </FormItem>

      <FormItem name="MaLoaiPhong" required={phong ? true : false} message="Mã loại phòng">
        {/* <Input placeholder="Mã loại phòng" prefix={<FontSizeOutlined />} /> */}
        <Select placeholder="Loại Phòng" allowClear>
          <Option value="1">Phòng đơn</Option>
          <Option value="2"> Phòng đôi</Option>
          <Option value="3"> Phòng View biển</Option>
          <Option value="4"> Phòng Vip</Option>
        </Select>
      </FormItem>

      <FormItem name="MaTinhTrang" required={phong ? true : false} message="Mã tình trạng">
        {/* name="ChucVu"
        required={nhanvien ? true : false}
        message="Chức Vụ" */}
        {/* <Input placeholder="Mã tình trạng" prefix={<FontSizeOutlined />} /> */}
        <Select placeholder="Tình trạng" allowClear>
          <Option value="1"> Sẳn sàng</Option>
          <Option value="2"> Đang thuê</Option>
          <Option value="3"> Đang sửa</Option>
        </Select>
      </FormItem>
    </Form>
  );
};

export const HomeBookRoom = ({
  datphong,
  onFinish,
  onFinishFailed,
  submit,
  isSignup,

}) => {
  return (
    <Form
      name="add"
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      size="midle"
    >
      <div className="flex justify-between">
        <FormItem name="KhachHang" required={datphong ? true : false} message="Tên khách hàng">
          <Input placeholder="Tên khách hàng" prefix={<UserOutlined />} />
        </FormItem>
        <FormItem name="SoNgayThue" required={datphong ? true : false} message="số ngày thuê">
          <Input placeholder="Số ngày thuê" prefix={<FieldNumberOutlined />} />
        </FormItem>
      </div>
      <div className="flex justify-between">
        <FormItem name="NgayNhan" required={datphong ? true : false} message="ngày nhận">
          <DatePicker placeholder="Ngày nhận" style={{ width: "100%" }} />
        </FormItem>
        <FormItem name="NgayTra" required={datphong ? true : false} message="ngày trả">
          <DatePicker placeholder="Ngày trả" style={{ width: "100%" }} />
        </FormItem>
      </div>
      <div className="flex justify-between">
        <FormItem name="GiaThue" required={datphong ? true : false} message="giá thuê">
          <Input placeholder="Giá thuê" prefix={<DollarOutlined />} />
        </FormItem>
        <FormItem name="TongTien" required={datphong ? true : false} message="tổng tiền">
          <Input placeholder="tổng tiền" prefix={<DollarOutlined />} />
        </FormItem>
      </div>
      <div className="flex  justify-between">
      <FormItem name="NguoiLon" required={datphong ? true : false} message="Người lớn">
          <Input placeholder="Người lớn" prefix={<UserOutlined />} />
        </FormItem>
      <FormItem name="TreEm" required={datphong ? true : false} message="Trẻ em">
          <Input placeholder="Trẻ em" prefix={<UserOutlined />} />
        </FormItem>
      </div>
      <FormItem name="GhiChu" required={datphong ? true : false} message="ghi chú">
        <Input placeholder="Ghi chú" prefix={<  EditOutlined />} />
      </FormItem>
      {submit ? (
        
       <Form.Item className="flex justify-end ">
       <Button className="mx-5" type="primary" htmlType="submit">
         {submit}
       </Button>
       <Button type="primary">Huỷ</Button>
     </Form.Item>
     
      ) : null}

    </Form>
  );
};