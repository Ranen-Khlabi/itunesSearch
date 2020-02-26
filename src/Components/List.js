import React from 'react';
import Item from './Item';

//Second Create List Component
export default class List extends React.Component {


  render() {

//Create map function 
    const allItem = this.props.search.map((post,index) => {
      //  console.log(List)
      //Call Item component 
      return <Item post={post} key={index}  addToFav={this.props.addToFav}/>
     });

     //Call the map function
    return (
      <div className="post-list">
        {allItem}
      </div>
    );
  } 
}
