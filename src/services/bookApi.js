import AxiosClient from "./AxiosClient";

const bookApi = {
  book: (data) => {
    console.log(data);
    return AxiosClient.post("dat-phong/tao-don", {
      MaKhachHang: data.MaKhachHang,
      MaPhong: data.MaPhong,
      NgayNhan: data.NgayNhan,
      NgayTra: data.NgayTra,
      SoNgayThue: data.SoNgayThue,
      NguoiLon: data.NguoiLon,
      TreEm: data.TreEm,
      GiaThue: data.GiaThue,
      PhuThu: data.PhuThu,
      TongTien: data.TongTien,
      GhiChu: data.GhiChu,
      MaNhanVien: data.MaNhanVien,
      MaTrangThai: data.MaTrangThai,
      Email: data.Email
    });
  },
};

export default bookApi;
