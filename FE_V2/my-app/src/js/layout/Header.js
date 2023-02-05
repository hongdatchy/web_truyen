import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Button, Menu, Input } from "antd";
import { useState } from "react";
import { Row, Col } from "antd";
import { useRouter } from "next/router";
import { useWindowWide } from "../utils/Util";

export default function Header({listCategory}) {
  const { Search } = Input;
 
  function getItem(label, key, icon, children, type) {
    return { key, icon, children, label, type };
  }
  
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const wide = useWindowWide(992); // 992 tương ứng với lg
  const router = useRouter();

  const onSearch = (value) => console.log(value);
  const onclickItemMenu = ({ key }) => {
    
    router.push({
      pathname: "/category",
      query: { categoryId: key },
    });
  };

  return (
    <>
      <div id="banner">
        <Row>
          <Col lg={6} span={12}>
            <span className="text_blue">Manga</span>
            <span className="text_red"> Chy</span>
          </Col>
          <Col lg={10} span={12}>
            <Search
              placeholder="search"
              onSearch={onSearch}
              style={{
                width: "80%",
              }}
            />
          </Col>
          <Col lg={wide ? 8 : 7} span={12}>
            <a href="">Login </a>
            <span className="text_red">/</span>
            <a href="">Sign</a>
          </Col>

          {!wide ? (
            <Col lg={1} span={12}>
              <Button
                className="btn-menu"
                type="primary"
                onClick={toggleCollapsed}
                style={{
                  marginBottom: 16,
                }}
              >
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              </Button>
            </Col>
          ) : null}
        </Row>
      </div>

      {!collapsed ? (
        <Menu
          style={centerStyle}
          mode={wide ? "horizontal" : "vertical"}
          theme="light"
          items={listCategory.map((category) => {
            return getItem(category.name, category.id);
          })}
          onClick={onclickItemMenu}
        />
      ) : null}
    </>
  );
}

const centerStyle = {
  justifyContent: "center",
  textAlign: "center",
};


