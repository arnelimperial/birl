import React, {Component} from 'react';
//import logo from './logo.svg';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      birls: [],
      searchFiled: ''
    };

    
  }
  // Life-cycle
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ birls: users }));

  }

  handleChange = e => {
    this.setState({ searchFiled: e.target.value })
  };

  render(){
    const { birls, searchFiled } = this.state;
    const filteredBirls = birls.filter(birl => 
        birl.name.toLowerCase().includes(searchFiled.toLowerCase())
      );
    return(
      <div className="App">
        <h1>Birl</h1>
        <SearchBox 
          placeholder="Search name" 
          handleChange={this.handleChange}
        />
        <CardList birls={ filteredBirls } />
       
      </div>
    );
  }
}

export default App;
