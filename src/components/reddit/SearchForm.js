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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearch(e) {
    let search = e.target.value;
    this.setState({ search });
  }

  handleLimit(e) {
    let limit = e.target.value;
    this.setState({ limit })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchMethod(this.state);
  }

  render() {
    return (
      <div className={this.props.error}>
        <h3>Enter a keyword and limit number</h3>
        <form onSubmit={this.handleSubmit}>
          Search Keyword
          <br/>
          <input onChange={this.handleSearch} id="keyword" type="text" placeholder="Enter text" />
          <br/>
          Search Limit (1-100)
          <br/>
          <input onChange={this.handleLimit} id="entries" type="number" min="1" max="100" placeholder="Enter number" />

        <br/>
        <button type="submit">submit</button>
        </form>
      </div>
    )
  }
}