import { CheckCircleOutlined, FileTextOutlined, WarningOutlined } from "@ant-design/icons";
import { Card } from "antd";
const { Meta } = Card;

const CardItem = ({ item }) => (
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
        onClick={() => console.log("hihiih")}
      >
        <FileTextOutlined /> Chi tiết
      </span>,
      item.MaTinhTrang === 1 ? (
        <span
          className="bg-green-500 text-white py-2 px-5 rounded-md"
          onClick={() => console.log("hihiih")}
        >
          <CheckCircleOutlined /> Đặt phòng
        </span>
      ) : (
        <span
          className="bg-red-500 text-white py-2 px-5 rounded-md"
          onClick={() => console.log("hihiih")}
        >
          <WarningOutlined /> Hết phòng
        </span>
      ),
    ]}
    onTabChange={(key) => console.log(key)}
  >
    <Meta title={item.TenPhong} description={item.LoaiPhong?.TenLoaiPhong} />
  </Card>
);

export default CardItem;
