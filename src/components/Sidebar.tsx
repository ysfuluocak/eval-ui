import { Layout, Menu } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

const { Sider } = Layout;

const Sidebar = () => {
  const location = useLocation();

  return (
    <Sider
      style={{
        backgroundColor: "#f0f0f0",
        paddingTop: 16,
        borderRight: "1px solid #ddd",
      }}
    >
      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        style={{ height: "100%", borderRight: 0 }}
      >
        <Menu.Item key="/" icon={<HomeOutlined />}>
          <Link to="/">Ana Sayfa</Link>
        </Menu.Item>
        <Menu.Item key="/profile" icon={<UserOutlined />}>
          <Link to="/profile">Profil</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
