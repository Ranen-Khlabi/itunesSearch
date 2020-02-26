import React from 'react';
import FavItem from './FavItem';

//Second Create List Component
export default class DisplyFav extends React.Component {
  render() {

//Create map function 
    const FavAlbum = this.props.Fav.map((post,index) => {
      //  console.log(List)
      //Call Item component 
      return <FavItem post={post} key={index} />
     });

     //Call the map function
    return (
      
      <div className="post-list">
       {FavAlbum}
      </div>
      
    );
  } 
}
