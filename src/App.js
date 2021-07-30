import 'antd/dist/antd.css';
import { useState, useEffect } from 'react';
import _ from 'lodash';

import { Layout } from 'antd';
import Posts from './components/Posts';

const { Header, Content } = Layout;
const subreddit = 'ProgrammerHumor';
const initialState = {
  posts: [],
}

const App = () => {

  const [state, setState] = useState(initialState);

  async function getSubredditListings() {
    const result = await fetch(`https://www.reddit.com/r/${subreddit}/top.json?limit=20`);
    const jsonData = await result.json();
    setState({
      posts: _.orderBy(jsonData.data.children, 'data.num_comments', 'desc')
    });
  };

  useEffect(() => {
    getSubredditListings();
  }, []);

  return (
    <Layout>
      <Header><h3 style={{color: 'white'}}>Last Laugh - Reddit For Programmers</h3></Header>
      <Content>
        <Posts posts={state.posts}/>
      </Content>
    </Layout>

)};

export default App;
