import React from 'react';

class App extends React.Component {
  render() {
           var i = 0;
      var myStyle = {
         fontSize: 100,
         color: '#FF0000'
      }

      return (
         <div>
		     {/* whenClicked is a property not an event, per se. */}
            <h1 style = {myStyle}>Header</h1>
			{10* 5}
	     <h1>{i == 1 ? 'True!' : 'False'}</h1>
         </div>
      );
   }
}

export default App;