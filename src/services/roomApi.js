import AxiosClient from "./AxiosClient";

const roomApi = {
  getAll: (page) => {
    return AxiosClient.get("phong/danh-sach-phong?page="+ page);
  },
  getById: (id) => {
    return AxiosClient.get("phong/thong-tin?id=" + id);
  },
};

export default roomApi;