import React from 'react';

class App extends React.Component {
    constructor(props) {
      super(props);
	 this.state = {
         headerProp: "Header from state...",
         "content": "Content from state..."
      }

	}
   render() {
      return (
         <div>
            <h1>{this.props.headerProp}</h1>
            <h2>{this.props.contentProp}</h2>
         </div>
      );
   }
}

export default App;
