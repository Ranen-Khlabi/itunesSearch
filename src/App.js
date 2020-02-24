import React from 'react';
// import SearchItems from './Components/SearchItems';
import axios from 'axios';
// import parser from 'xml-js';
import List from './Components/List';
import { FaGithub, FaEnvelope} from "react-icons/fa";
// import Temp from './Components./Temp';
import './App.css';
import Favorites from './Components/Favorites';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
      searchTerm: '',
      search: []
    }
  }


  handleChange = (event) =>{
    event.preventDefault();
    console.log(event.target.value);
    this.setState({searchTerm: event.target.value})
    
  }
  Clicked=(event)=>{
    event.preventDefault()
    this.setState({
      searchTerm: event.target.value
    })
    this.getAllPosts()
  }
  getAllPosts = () => {
    
    // event.preventDefault()
    console.log('getAllPosts');
    //${this.stats.searchTerm}
    axios({
      method: 'get',
      url: `https://itunes.apple.com/search?term=${this.state.searchTerm}}`
    })
      .then(res => {
        console.log('RESPONSE: ', res);
        console.log('DATA: ', res.data);
        this.setState({ search: res.data.results});
      })
      .catch(err => {
        console.log('ERROR: ', err);
      });
  };

  render() {
    console.log(this);
    
    return (

      <div className="application">

        <body>

          <h2>your Favorites</h2>

          <ul>
            <Favorites favorites={this.state.favorites}
                       favoriteClick={this.favoriteClick}
                       removeAll={this.removeAll}/>
          </ul>

        <h1 className="title">Itunes Page</h1>
        <form >
        <input className="input"
          type="text"
          size="60"
          placeholder="⌕"
          value={this.state.searchTerm}
          onChange={this.handleChange}/>
          <button className="button"  onClick={this.Clicked}>Search</button>
        </form>

        <ul className='container'>
            <List 
              search={this.state.search} 
              favorites = {this.state.favorites}
              favoriteClick = {this.favoriteClick}
              getList= {() => this.getAllPosts()}
            />
          </ul>

        {/* <List search={this.state.search} /> */}
        <footer>
            <a href="https://github.com/Ranen-Khlabi" target= "_blank"><FaGithub/></a>
            <a href="Ranen-Alkhlabi@hotmail.com" target= "_blank"><FaEnvelope/></a>
          </footer>
          </body>
      </div>

    );
  }
}
