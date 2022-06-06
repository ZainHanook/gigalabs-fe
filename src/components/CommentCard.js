import React, { useState } from "react";
import { CommentSection } from "./CommentSection";
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
  Collapse
} from "antd";
import { LikeOutlined, CommentOutlined } from "@ant-design/icons";
const { Panel } = Collapse;
const { Header, Content } = Layout;
const { Meta } = Card;
const { TextArea } = Input;
export const CommentCard = ({ posts }) => {
  const [showComment, setShowComment] = useState(false);
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
                    <span style={{ display: "flex" }}>
                      <Avatar src={images.avatar1} />
                      <h2 style={{ fontSize: "20px", marginLeft: "3%" }}>{d.user.firstName + " " + d.user.lastName}</h2>
                    </span>
                    <span>
                      <p>{d.body}</p>
                      <Divider></Divider>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                          backgroundColor: "grey",
                        }}
                      >
                        <button style={{ border: "none", cursor: "pointer" }}>
                          <LikeOutlined /> Like
                        </button>
                        <button onClick={() => { setShowComment(!showComment) }} style={{ border: "none", cursor: "pointer" }}>
                          <CommentOutlined /> Comment
                        </button>
                      </div>
                    </span>
                    <div>
                      {showComment ? <CommentSection /> : ''}

                    </div>
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
