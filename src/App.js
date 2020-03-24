import React, {Component} from 'react';
//import logo from './logo.svg';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      birls: []
    };
  }
  // Life-cycle
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ birls: users }));

  }

  render(){
    return(
      <div className="App">
        <CardList birls={ this.state.birls } />
       
      </div>
    );
  }
}

export default App;
