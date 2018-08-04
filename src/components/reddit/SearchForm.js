import React from 'react';

//import './searchForm.scss';

export default class SearchForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
      limit: '',
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleLimit = this.handleLimit.bind(this);
  }

  handleSearch(e) {
    let search = e.target.value;
    this.setState({ search });
  }

  handleLimit(e) {
    let limit = e.target.value;
    this.setState({ limit })
  }

  render() {
    return (
      <div className="redditSearch">
        <h3>Enter a keyword and limit number</h3>
        <form onSubmit={this.handleSubmit}>
          Search Keyword
          <br/>
          <input onChange={this.handleSearch} placeholder="Enter text" />
          <br/>
          Search Limit (1-100)
          <br/>
          <input onChange={this.handleLimit} placeholder="Enter number" />
        </form>
      </div>
      //
    )
  }
}