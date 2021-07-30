import React from 'react';
import { Card, Typography } from 'antd';
import _ from 'lodash';

const { Link, Title } = Typography;

const Post = props => {
    const { title, num_comments, permalink, ups, author, score } = _.get(props, 'post.data', []);

    return (
        <Card 
            className={ score % 2 === 0 ? 'orange-background' : 'blue-background'}
            title={(
                    <Link href={`https://www.reddit.com${permalink}`} target="_blank">
                        {title}
                    </Link>
                )}
            extra={<Title level={4}>{ ups }</Title>}
            bordered={false}
            style={{maxWidth:'50em', margin: 'auto'}}>
            <strong>Author</strong><p>{ author }</p>
            <strong>Comments</strong><p>{num_comments}</p>
        </Card>
    );
};

export default Post;
