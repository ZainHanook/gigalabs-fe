import React from "react";
import { images } from "./images";
import {
  Layout,
  Menu,
  Card,
  Avatar,
  Form,
  Input,
  Button,
  Divider,
  Row,
  Col,
} from "antd";
import { LikeOutlined, CommentOutlined } from "@ant-design/icons";
const { Header, Content } = Layout;
const { Meta } = Card;
const { TextArea } = Input;
export const CommentCard = ({ posts }) => {
  return (
    <div>
      {posts.map((d) => (
        <Row
          gutter={{
            xs: 24,
            sm: 16,
            md: 24,
            lg: 32,
          }}
        >
          <Layout className="layout">
            <Col className="gutter-row" span={24}>
              <Content
                style={{
                  padding: "0 50px",
                  //   marginTop: "5%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div className="site-layout-content" style={{ width: "50%" }}>
                  <Card
                    style={{
                      width: "100%",
                      borderRadius: "10px",
                    }}
                  >
                    <Meta
                      avatar={<Avatar src={images.avatar1} />}
                      // title="Card title"
                      // description="This is the description"
                    />
                    <span>{d.user.firstName + " " + d.user.lastName}</span>
                    <span>
                      <p>{d.body}</p>
                      <Divider></Divider>
                      <div
                        style={{
                          diplay: "flex",
                          justifyContent: "space-between",
                          backgroundColor: "grey",
                        }}
                      >
                        <LikeOutlined /> Like
                        <CommentOutlined /> Comment
                      </div>
                    </span>
                  </Card>
                </div>
              </Content>
            </Col>
            <div className="" style={{ marginTop: "5%" }}></div>
          </Layout>
        </Row>
      ))}
    </div>
  );
};
