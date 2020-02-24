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
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

//   favoriteClick =(music) => {
//     // keep getting object object but works on both favorite and unfavorite
//     // console.log(`${music} add to favorites`);
//     const newFavorites = [...this.state.favorites ];
//     const musicIndex = newFavorites.indexOf(music);
  
    

//     if (musicIndex === -1) {
//       // console.log(`Adding ${music} to favorites`);
//       newFavorites.push(music)
//     } else {

//       // console.log(`Removing ${book} from favorites`);
//       newFavorites.splice(musicIndex, 1);
//     }
    
//     this.setState({
//         favorites : newFavorites
//     })
// }

//   removeAll = () => {
//     this.setState({
//       favorites : []
//   })
//   }


  // newSearch = (searchquerry) =>{
  //   console.log(`starting new search for ${searchquerry}`);
    
  //   const query = searchquerry;

    
//     const url =  `https://itunes.apple.com/search?term=${query}&entity=album`
//     // console.log(url);

//     fetch(url)
//     .then((resp) => {
//       resp.text()
//         .then(str => {

//         // turns response from XML to json
//         let json = parser.xml2js(str, {
//           compact: true,
//           ignoreDoctype: true,
//           attributesKey: "attributes"
//         });


//         // book search querry location 
//         // const querryResult = json.GoodreadsResponse.search.results.work;
//         // console.log(json.GoodreadsResponse.search.results.work)

        
//         // add new book items to search state
//         let searcharray= []
//         const musicContents = (querryResult).map((item, index) => {
//           // console.log(item)
//           // searcharray.push(item.best_musics.title._text)
//           searcharray.push(item.best_music)
//         })     

//         this.setState({
//           search: searcharray
//         })
//         // check current state after adding musics
//         // console.log(this.state.search);
//       })
//     })

//     .catch((error) => {
//       console.log(error)
//     })
//   }

  handleChange(event) {
    // this.setState({value: event.target.value});
    // console.log(`value changed to ${this.state.value}`);
    console.log(event.target.value);

    
  }

//   handleSubmit(event) {
//     console.log('a music search was submitted ' + this.state.value);
//     event.preventDefault();
//     this.newSearch(this.state.value);
//   }






  getAllPosts = () => {
    console.log('getAllPosts');
    axios({
      method: 'get',
      url: `https://itunes.apple.com/search?term=${this.stats.searchTerm}&entity=album`
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
    // console.log(this);
    
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
        <form onSubmit={this.handleSubmit}>
        <input className="input"
          type="text"
          size="60"
          placeholder="⌕"
          onChange={this.handleChange}/>
          <button className="button" onClick={() => this.getAllPosts()}>Search</button>
        </form>

        <ul className='container'>
            <List 
              search={this.state.search} 
              favorites = {this.state.favorites}
              favoriteClick = {this.favoriteClick}

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
