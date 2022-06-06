import React from 'react'
import { images } from "./images";
import { Card, Avatar, Input } from 'antd';
const { Meta } = Card;
export const CommentSection = () => {
    return (
        <div style={{ marginTop: "5%" }}>
            <span>
                <Avatar src={images.avatar1} />
                <Input placeholder="Add a comment" style={{ width: "50%", marginLeft: "5%", borderRadius:"15px" }} />
            </span>
        </div>
    )
}
