import 'antd/dist/antd.css';
import './App.css';
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

    const posts = _.get(jsonData, 'data.children', [])
    setState({
      posts: _.orderBy(posts, 'data.num_comments', 'desc')
    });
  };

  useEffect(() => {
    getSubredditListings();
  }, []);

  return (
    <Layout>
      <Header><h3 style={{color: 'white', textAlign: 'center'}}>Last Laugh - Reddit Client</h3></Header>
      <Content 
        className="px-4 white-background">
        <Posts posts={state.posts}/>
      </Content>
    </Layout>

)};

export default App;
