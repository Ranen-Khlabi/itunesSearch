import React from "react";
import Item from "./Pages./Item";

export default class SearchBox extends React.Component {
    constructor(props) {
      super(props);
      // this.handleAjax = this.handleAjax.bind(this);
    }
    // handleAjax() { 
    //   let query = ReactDOM.findDOMNode(this.refs.query).value;
    //   let category = ReactDOM.findDOMNode(this.refs.category).value;
    //   let URL = `https://itunes.apple.com/search?term=${query}&country=${(this.refs.country).value}&entity=${category}`;
    //   this.props.search(URL);
    // }
    render() {
        
      return (

        <div className="Result-list">
          <h1>List</h1>
          {this.props.result.map((result) => {
            return <Item result={result}/>
          })}  
        </div>

       );
    }
  }   
        // <div className='searchBox'>
        //   <input type="text" ref="query" className='input' placeholder='search something' />
        //   <select ref="category" className='select'>
        //     <option value="software">Apps</option>
        //     <option value="musicTrack">Music</option>
        //     <option value="podcast">Podcast</option>
        //     <option value="movie">Movies(USA)</option>
        //   </select>
        //   <select ref="country" className='select'>
        //     <option value="cn">China</option>
        //     <option value="us">USA</option>
        //   </select>
        //   <button type="submit" className='button' onClick={this.handleAjax}>Search</button>
        // </div>
    