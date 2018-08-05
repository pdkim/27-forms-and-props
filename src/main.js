import React from 'react';
import ReactDom from 'react-dom';

import App2 from './components/app2.js';

class Main extends React.Component {

  render() {
    return (
      <React.Fragment>
        <App2 />
      </React.Fragment>
    );
  }

}

ReactDom.render(<Main/>, document.getElementById('root'));