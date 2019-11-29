
import React from 'react'
import guittar from './Guittar.jpg'
import "./App.css"

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      newItem : "",
      list : []
    }
  }

addItem(todovalue){
  if(todovalue != ""){
      const newItem={
        id : Date.now(),
        value: todovalue,
        isDone:false
      };
      const list= [...this.state.list];
      list.push(newItem);
      this.setState({
        list ,
        newItem: ""
      })

  }
}



deleteItem(id){
  const list=[...this.state.list];
  const updatedList= list.filter(item=> item.id !== id);
  this.setState({
    list: updatedList
  });
}



updateInput(input)
{
  this.setState({
    newItem:input
  });
}
render(){
  return (
    <div>
     <img src={guittar} width="75" height="150" className="guittar"/>
     <h1 className="app-title">ToDo ReactApp </h1>
     <div className="container">
     Add an Item ....
     <br />
      <input  type="text" 
              className="input-text" 
              placeholder="Write the Todo For React"  
              value={this.state.newItem} 
              onChange={e => this.updateInput(e.target.value)} />

       <button className="add-btn" 
                onClick={() => this.addItem(this.state.newItem)}
                disabled={!this.state.newItem.length}
       >Add ToDo</button>       

          <div className="list">
              
          <ul>
              <li><input type="checkbox" />
              Record Youtube Video
              <button className="btn">Delete</button>
              </li>
                
                {this.state.list.map(item => {
                  return (
                    <li key={item.id}>
                    <input type="checkbox" name="isDone" checked={item.isDone} onChange={() => {}} />
                    {item.value}
                    <button className="btn" onClick={ () => this.deleteItem(item.id)}>Delete</button>

                    </li>
                  );

                } )}


              </ul>
          </div>
     </div>
    </div>
  );
}


}


export default App;




















{/*import React from 'react'
import logo from './logo.svg'
import "./App.css";

function App(){
return (
  <div className="App">
  <header className="App-header">
  <img src={logo} className="App-logo" />
  <p >Learn React with Surendra Pratap Singh</p>
  </header>
  
  </div>
);
}

export default App;


*/}












{/*
  import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/}