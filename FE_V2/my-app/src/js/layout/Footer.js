import { Row, Col } from "antd";

export default function Footer(){
    return (
        <footer>
          <div className="container">
            <Row >
              <Col span={24}>
                <p>© Copyright 2023 <a target={"_blank"} rel="nofollow" href="https://www.facebook.com/hongdatchy">Manga Chy</a>. All Rights Reserved.</p>
              </Col>
            </Row>
          </div>
        </footer>
    )
}