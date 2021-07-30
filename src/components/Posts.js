import React from 'react';
import { List, Typography } from 'antd';
import Post from './Post';

const { Title } = Typography;

const Posts = props => {

    const { posts } = props;

    const renderItem = post => (
        <List.Item>
            <Post post={post}/>
        </List.Item>
    );

    return (
        <List
            itemLayout="vertical"
            dataSource={posts}
            renderItem={renderItem}
            header={<Title level={5} style={{textAlign: 'center'}}>Top - ProgrammerHumor</Title>}
            split={false}
        />
    );
};

export default Posts;
