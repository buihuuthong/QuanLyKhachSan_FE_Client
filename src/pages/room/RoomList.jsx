import React, { useEffect, useState } from "react";
import CardItem from "../../components/CardItem";
import roomApi from "../../services/roomApi";
import { Pagination, notification } from "antd";
import Main from "../../layout/Main";

const RoomList = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const getList = async () => {
    try {
      const res = await roomApi.getAll(page);
      setData(res.list);
      setTotal(res.totalItems);
      notification.success({
        message: "Lấy danh sách thành công",
        description: "Lấy danh sách phòng thành công!",
      });
    } catch (e) {
      console.log(e);
      notification.error({
        message: "Lấy danh sách phòng thất bại",
        description: e.response?.data?.message,
      });
    }
  };

  useEffect(() => {
    getList();
  }, [page]);

  const onPageChange = (page) => {
    setPage(page);
  };

  return (
    <Main>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridGap: "16px",
        }}
      >
        {data.map((item) => (
          <div key={item.id}>
            <CardItem item={item} />
          </div>
        ))}
      </div>
      <Pagination
        current={page}
        total={total}
        pageSize={10}
        onChange={onPageChange}
        showSizeChanger={false}
      />
    </Main>
  );
};
export default RoomList;
