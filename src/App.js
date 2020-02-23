import React from 'react';
import axios from 'axios';
import List from './Components./List';
import './App.css';

 
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
     // this.search = this.search.bind(this);
  }

  search = () => {
    axios({
      type: 'GET',
      // dataType: 'jsonp',
      url: 'https://itunes.apple.com/search?term=sia&entity=album'
    })
    .then(response =>{
      console.log('Response: ', response);
      console.log('Data: ', response.data);
        this.setState({ result: response.data });
    })
    .catch(err => {
      console.log('Error: ', err);
    });
  };

  // List.propTypes = {
  //   search: React.PropTypes.func
  // };
  // Item.propTypes = {
  //   item: React.PropTypes.array
  // }

  render() {
    console.log(this);
    return (
      <div className= "aplication">
        <h1>itunes apple ...</h1>
        <button onClick={() => this.getAllItem()}>Get Items</button>
        <List items={this.state.items} />
      </div>
    );
  }
}
