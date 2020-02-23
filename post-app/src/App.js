import React from 'react';
import SearchItems from './components/SearchItems';
import axios from 'axios';
import List from './components/List';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'jouza',
      search: ['sia']
    };
  }
  
  getAllPosts = () => {
    console.log('getAllPosts');
    axios({
      method: 'get',
      url: `https://itunes.apple.com/search?term=sia&entity=album`
    })
      .then(res => {
        console.log('RESPONSE: ', res);
        console.log('DATA: ', res.data);
        this.setState({ search: res.data.results });
      })
      .catch(err => {
        console.log('ERROR: ', err);
      });
  };

  render() {
    console.log(this);
    return (
      <div className="application">
        <h1>Itunes Page</h1>
        <button onClick={() => this.getAllPosts()}>get Items</button>
        {/* create list and list */}
        <SearchItems />
        <List search={this.state.search} />
      </div>
    );
  }
}
