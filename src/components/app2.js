import React from 'react';

import SearchForm from './reddit/SearchForm';
import SearchResultList from './reddit/SearchResultList';
import { fetchData } from '../lib/utils';

const redditAPI = 'https://www.reddit.com/r';

class App2 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      redditData: {},
      redditList: [],
      loading: false,
    };

    this.getRedditInfo = this.getRedditInfo.bind(this);
  }

  getRedditInfo(obj) {
    let url = `${redditAPI}/${obj.search}.json?limit=${obj.limit}`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setState({redditList: json.data.children})
      })
  }

  render() {
    return (
      <main>
        <SearchForm searchMethod = {this.getRedditInfo}/>
        <SearchResultList listInfo = {this.state.redditList} />
      </main>
    )
  }
}

export default App2;