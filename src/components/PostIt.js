import React, { useState } from 'react'
import { Skeleton, Switch, Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { iamges } from './images';
const { Meta } = Card;

export const PostIt = () => {
    // const [loading, setLoading] = useState(true);

    // const onChange = (checked) => {
    //     console.log(checked)
    //     setLoading(!checked);
    // };
    return (
        
        <Card
            style={{
                width: 300,
                backgroundColor: "white",
                boxShadow: "0px 0px 15px rgb(0 0 0 / 10%)"
            }}
            // cover={
            //     <img
            //         alt="example"
            //         src=''
            //     />
            // }
            actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
            ]}
        >
            <Meta
                avatar={<Avatar size="small" src={iamges.avatar1} />}
                title="Card title"
                description="This is the description"
            />
        </Card>
    )
}
