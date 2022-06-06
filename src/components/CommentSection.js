import React, { useState } from "react";
import { images } from "./images";
import { Card, Avatar, Input } from "antd";
import { useDispatch } from "react-redux";
import { createCommentRequest, getPosts } from "../store/post/action";
const { Meta } = Card;
export const CommentSection = ({ postId }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    body: null,
  });

  const hanldeOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const onPressEnter = () => {
    const data = {
      postId: postId,
      text: formData.body,
    };
    dispatch(createCommentRequest(data));
    setTimeout(() => dispatch(getPosts()), 1000);
  };
  return (
    <div style={{ marginTop: "5%" }}>
      <span>
        <Avatar src={images.avatar1} />
        <Input
          placeholder="Add a comment"
          name="body"
          style={{ width: "50%", marginLeft: "5%", borderRadius: "15px" }}
          onChange={(e) => hanldeOnChange(e)}
          onPressEnter={onPressEnter}
        />
      </span>
    </div>
  );
};
