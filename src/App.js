import React from 'react';
import axios from 'axios';
// import ls from 'local-storage';
// import {reactLocalStorage} from 'reactjs-localstorage';
import List from './Components/List';
import Favorites from "./Components/Favorites";
import DisplyFav from './Components/DisplyFav';
import { FaGithub, FaEnvelope} from "react-icons/fa";
// import FondData from './Components/FondData'
import './App.css';


//First Create React App
//& add the states
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      add: [],
      searchTerm: '',
      search: [],
      newItem: '',
      filter: 'none',
    }
  }

//........................................
//.................    Favorite Function   .......................//


  
  addItem = (item) =>{
    this.setState({
        add:[...this.state.add, item] // ... copy the array 
    })
    console.log(this.state.add);
  }
  
  clearFav = () =>{
    // console.log("clicked");
    if( this.state.filter === 'none'){
      this.setState({ filter:'display' });
   }
   else{
       this.setState({ filter:'none' });
   }
  //  this.preventDefault.removeAll()
    // this.setState({
    //   add:[] // clear the list
    // })
  }

  addToFav = (album) => {
    console.log(album)
    // console.log("fff")
    this.setState({
        add: [... this.state.add, album],
    });
    console.log(this.state.add[0])
  }
  
  deleteItem = (event) =>{ // 
    console.log("clicked");
    console.log(event);
    const add=[...this.state.add] // ... copy the array 
    const index = add.indexOf(event); // use the index to delete one item
    add.splice(index,1) // delete it
  
    this.setState({add}) 
  }

    // handleRemove = (event) =>{ // 
    //   console.log("clicked");
    //   console.log(event);
    //   const add=[...this.state.add] // ... copy the array 
    //   const index = add.indexOf(event); // use the index to delete one item
    //   add.splice(index,1) // delete it
    
    //   this.setState({add}) 
    // }

//........................................


//Create function for search
  handleChange = (event) =>{
    event.preventDefault();
    console.log(event.target.value);
    this.setState({searchTerm: event.target.value})
    
  }

//Add function for button when click search
//& doesn't refresh the website
  Clicked=(event)=>{
    event.preventDefault()
    this.setState({
      searchTerm: event.target.value
    })
    this.getAllPosts()
  }


//Axios inside the function
  getAllPosts = () => {
    // event.preventDefault()
    // console.log('getAllPosts');
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



 //........................................ 

  render() {
    console.log(this);
    
    return (

//Create the main Div
      <div className="application">

        {/* <FondData /> */}

        <body>

{/*Add favorite button & Call Favorites component */}
<button className="FavButton" onClick={this.clearFav} >Favorites</button>

         <div className={`favorite-${this.state.filter}`}>


          <DisplyFav Fav={this.state.add} />
          </div>

          
          <div >
            <Favorites 
             deleteItem={this.deleteItem} 
             clearFav={this.clearFav} 
             adding={this.state.add}
            //  handleRemove={this.handleRemove}
            />
          </div>

          

{/* Add title and paragraphs */}
        <h1 className="title">Itunes Search</h1>
        <p className="title2">You need listen to anything?</p>
        <p className="title2">Let's search for it ...</p>


{/* add input search & button call the function ' Clicked() '  */}
        <form >
        <input className="input"
          type="text"
          size="60"
          placeholder="⌕"
          value={this.state.searchTerm}
          onChange={this.handleChange}/>
          <button className="button"  onClick={this.Clicked}>Search</button>
        </form>


{/* Call List Component inside ul & Calling the state and axios */}
        <ul className='container'>
            <List 
              search={this.state.search} 
              favorites = {this.state.favorites}
              favoriteClick = {this.favoriteClick}
              getList= {() => this.getAllPosts()}
              addToFav={this.addToFav}
            />
        </ul>


{/* Add icon footer for Github and email */}
        <footer>
            <a href="https://github.com/Ranen-Khlabi" target= "_blank"><FaGithub/></a>
            <a href="Ranen-Alkhlabi@hotmail.com" target= "_blank"><FaEnvelope/></a>
          </footer>
          </body>
      </div>

    );
  }
}
