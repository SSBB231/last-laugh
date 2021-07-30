import React from 'react';
import { List } from 'antd';
import '../css/posts.css'

import Post from './Post';

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
            className="px-4"
        />
    );
};

export default Posts;
