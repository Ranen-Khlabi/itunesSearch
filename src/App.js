import React from 'react';
import SearchItems from './Components/SearchItems';
import axios from 'axios';
import List from './Components/List';
// import Temp from './Components./Temp';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      search: [ ],
      // weather: Temp
    };
  }
  
  getAllPosts = () => {
    console.log('getAllPosts');
    axios({
      method: 'get',
      url: `https://itunes.apple.com/search?term=${this.searchTerm}&entity=album`
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
        <h1 className="title">Itunes Page</h1>
        <button className="button" onClick={() => this.getAllPosts()}>Search</button>
        <SearchItems />
        {/* <Temp weather={this.state.weather}/> */}
        <List search={this.state.search} />
      </div>
    );
  }
}
