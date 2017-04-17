import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            <h1>{this.props.header1}</h1>
            <h2>{this.props.contentProp}</h2>
         </div>
      );
   }
}

App.defaultProps = {
   header1: "Header from  props...",
   contentProp:"Content from props..."
}

export default App;