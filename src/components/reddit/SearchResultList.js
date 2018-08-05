import React from 'react';

export default class SearchResultList extends React.Component {

  constructor(props) {
    super(props);

    this.renderList = this.renderList.bind(this);
  }

  renderList() {
    return this.props.listInfo.map((articles, i) => {
      return <li key={i}><a href={articles.data.url}>{articles.data.title}</a><p>Up Votes: {articles.data.ups}</p></li>
    })
  }

  render() {
    return (
      <div className="ResultsList">
        <h3>Reddit Search Results</h3>
        <ul>
          {this.renderList()}
        </ul>
      </div>
    )
  }
}