import React from 'react';

class App extends React.Component {
   
   render() {
    this.sree = {
         dat: 
         [
            {
               "id":1,
               "name":"Foo",
               "age":"20"
            },
				
            {
               "id":2,
               "name":"Bar",
               "age":"30"
            },
				
            {
               "id":3,
               "name":"Baz",
               "age":"40"
            }
         ]
      }
      return (
         <div>
            <Header/>
            <table>
               <tbody>
                  {this.sree.dat.map((person) => <TableRow dat2= {person} />)}
               </tbody>
            </table>
         </div>
      );
   }
}

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Header</h1>
         </div>
      );
   }
}

class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.dat2.id}</td>
            <td>{this.props.dat2.name}</td>
            <td>{this.props.dat2.age}</td>
         </tr>
      );
   }
}

export default App;