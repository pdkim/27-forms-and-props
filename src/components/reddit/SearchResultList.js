import React from 'react';

export default class SearchResultList extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="ResultsList">
        <h3>Reddit Search Results</h3>
        <ul>
          <li>test line</li>
          {/* {this.props.data.children.map((articles, i) =>
          <li key={i}><a href={articles.data.url}>{articles.data.title}</a></li>
          )} */}
        </ul>
      </div>
    )
  }
}