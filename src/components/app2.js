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

    this.redditDetails = this.redditDetails.bind(this);
    this.redditSearch = this.redditSearch.bind(this);
  }

  componentDidUpdate() {
    console.log('STATE', this.state);
  }

  componentDidMount() {
    this.loadRedditList()
      .then(data => 
        this.setState(Object.assign(...this.state, data))
      );
  }

  loadRedditList() {
    return this.load(redditAPI)
      .then(data => {
        let redditList = data.results;
        return { redditList };
      });
  }

  redditDetails(e) {
    let url = e.target.value;
    let loading = true;
    return this.load(url)
      .then(data =>
        this.setState(Object.assign(...this.state, {data}))
      );
  }

  redditSearch(search) {
    let limit = this.state.limit;
    let url = `${redditAPI}/${search}?limit=${limit}`;
    return this.load(url)
      .then(data => 
        this.setState(Object.assign(...this.state, {data}))
      );
  }

  load(url) {
    this.setState(Object.assign(...this.state, {loading: true}));
    return fetchData(url)
      .then(data => {
        this.setState(Object.assign(...this.state, {loading:false}));
        return data;
      })
  }

  render() {
    return (
      <main>
        <SearchForm />
        <SearchResultList />
      </main>
    )
  }
}

export default App2;