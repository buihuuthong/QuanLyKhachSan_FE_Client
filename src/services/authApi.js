import AxiosClient from "./AxiosClient";

const authApi = {
  signin: (data) => {
    return AxiosClient.post("khachhang/signin", {
      TaiKhoan: data.taikhoan,
      MatKhau: data.matkhau,
    });
  },
  signup: (data) => {
    return AxiosClient.post("khachhang/signup", {
      TaiKhoan: data.TaiKhoan,
      MatKhau: data.MatKhau,
      HoTen: data.HoTen,
      NgaySinh: data.NgaySinh,
      DiaChi: data.DiaChi,
      SDT: data.SDT,
      Email: data.Email,
    });
  },
};

export default authApi;
