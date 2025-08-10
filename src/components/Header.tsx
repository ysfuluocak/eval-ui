import { Layout, Button, Dropdown, Avatar, Space } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { UserOutlined, LogoutOutlined, LoginOutlined, HomeOutlined } from "@ant-design/icons";
import { useAuth } from "../context/AuthContext";

const { Header: AntHeader } = Layout;

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const menuItems = [
    {
      key: "profile",
      label: <Link to="/profile">Profile</Link>,
      icon: <UserOutlined />,
    },
    {
      key: "logout",
      label: <span onClick={handleLogout}>Logout</span>,
      icon: <LogoutOutlined />,
    },
  ];

  return (
    <AntHeader
      style={{
        backgroundColor: "#764ba2",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: 64,
        paddingInline: 24,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <Link
          to="/"
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: "20px",
            textDecoration: "none",
          }}
        >
          MyLogo
        </Link>

        <Link to="/">
          <Button
            type="primary"
            icon={<HomeOutlined />}
            style={{ height: "40px" }}>
            Home
          </Button>
        </Link>
      </div>

      {/* Sağ: Login / Avatar */}
      <Space>
        {!user ? (
          <Link to="/login">
            <Button type="primary" icon={<LoginOutlined />} style={{ height: 40 }}>
              Login
            </Button>
          </Link>
        ) : (
          <Dropdown menu={{ items: menuItems }} placement="bottomRight">
            <Space style={{ cursor: "pointer", color: "white" }}>
              <Avatar icon={<UserOutlined />} />
              {user.name}
            </Space>
          </Dropdown>
        )}
      </Space>
    </AntHeader>
  );
};

export default Header;