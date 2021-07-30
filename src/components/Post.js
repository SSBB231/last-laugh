import React from 'react';
import { Card, Typography } from 'antd';

const { Link, Title } = Typography;

const Post = props => {
    const { title, num_comments, permalink, ups } = props.post.data;

    return (
        <Card 
            title={<Link href={`https://www.reddit.com${permalink}`} target="_blank">{title}</Link>}
            extra={<Title level={4}>{ups}</Title>}
            bordered={false}>
            <p>{num_comments}</p>
        </Card>
    );
};

export default Post;
