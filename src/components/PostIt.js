import React, { useEffect, useState } from "react";
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
import "antd/dist/antd.css";
import { FileImageOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { createPostRequest, getPosts } from "../store/post/action";
import { CommentCard } from "./CommentCard";
const { Header, Content } = Layout;
const { Meta } = Card;
const { TextArea } = Input;

export const PostIt = () => {
  const { posts } = useSelector((state) => state.PostReducer);
  const dispatch = useDispatch();
  const [value, setValue] = useState();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const onFinish = (values) => {
    if (value !== "") {
      dispatch(createPostRequest({ body: value }));
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Row
        gutter={{
          xs: 24,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              items={new Array(3).fill(null).map((_, index) => {
                const key = index + 1;
                return {
                  key,
                  label: `nav ${key}`,
                };
              })}
            />
          </Header>
          <Col className="gutter-row" span={24}>
            <Content
              style={{
                padding: "0 50px",
                marginTop: "5%",
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
                  <span>
                    <Form
                      name="basic"
                      labelCol={{
                        span: 8,
                      }}
                      wrapperCol={{
                        span: 16,
                      }}
                      initialValues={{
                        remember: true,
                      }}
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                      autoComplete="off"
                    >
                      <Form.Item
                        rules={[
                          {
                            required: true,
                            message: "Please insert before post!",
                          },
                        ]}
                      >
                        <TextArea
                          value={value}
                          onChange={(e) => setValue(e.target.value)}
                          placeholder="What is on your mind?"
                          bordered={false}
                          autoSize={{
                            minRows: 3,
                            maxRows: 5,
                          }}
                        />
                      </Form.Item>

                      <Divider></Divider>
                      <Form.Item
                        className="FormItemBtn"
                        // wrapperCol={{
                        //     offset: 8,
                        //     span: 16,
                        // }}
                      >
                        <Button
                          className="imgBtn"
                          type="light"
                          htmlType=""
                          style={{
                            backgroundColor: "black",
                            color: "wheat",
                            borderRadius: "20px",
                            float: "left",
                          }}
                        >
                          <FileImageOutlined />
                          Photo/Video
                        </Button>
                        <Button
                          className="formBtn"
                          type="primary"
                          htmlType="submit"
                        >
                          Post It
                        </Button>
                      </Form.Item>
                    </Form>
                  </span>
                </Card>
              </div>
            </Content>
          </Col>
          <div className="" style={{ marginTop: "5%" }}></div>
        </Layout>
      </Row>
      <CommentCard posts={posts} />
    </div>
  );
};
