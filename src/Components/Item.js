import React from 'react';
// import Slider from 'react-rangeslider'
// import Nouislider from 'react-nouislider';

//Third Create Item Component
export default class Item extends React.Component {
  constructor(props){
    super(props)
  }

//Add 'componentWillMount()' 
    componentWillMount() {
      this.setState({
        opacity : 0.9 
      });
    }
  


//.......................................
  render() {
    return (

//Create the main Div
      <div className="post-item">

{/* Create Anchor tag for each item inside this details item  */}
        <a 
        className="link"  
        href={ this.props.post.collectionViewUrl} target="_blank">
          
          <img className="image" src={this.props.post.artworkUrl100} /> 
          
          <hr/>
          
          <p className="para">Album Name:{this.props.post.collectionName}</p>          
          <p className="para">Genre Name:{this.props.post.primaryGenreName}</p>
          <p className="para">Date:{this.props.post.releaseDate}</p>
        </a>

           <br/>

{/* Create button add to favorit */}
        <button className="buttonFav" onClick={()=>this.props.addToFav(this.props.post.collectionName)}>Favorite</button>

           <br/>

{/* Create div for Rating the item */}
           <div class="rate">
             
             <h1>Rating:</h1>
             <input type="radio" id="star5" name="rate" value="5" />
             <label for="star5" title="text">5 stars</label>
             <input type="radio" id="star4" name="rate" value="4" />
             <label for="star4" title="text">4 stars</label>
             <input type="radio" id="star3" name="rate" value="3" />
             <label for="star3" title="text">3 stars</label>
             <input type="radio" id="star2" name="rate" value="2" />
             <label for="star2" title="text">2 stars</label>
             <input type="radio" id="star1" name="rate" value="1" />
             <label for="star1" title="text">1 star</label>
             
           </div>
          
      </div>
    );
  }
}  