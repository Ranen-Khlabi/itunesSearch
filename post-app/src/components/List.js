import React from 'react';
import Item from './Item';

export default class List extends React.Component {
  render() {
    const allItem = this.props.search.map((post,index) => {
      //  console.log(post)
      return <Item post={post} key={index}/>
     });
    return (
      <div className="post-list">
        <h1>List</h1>

        {allItem}
       {/* {this.props.search.map((post,index) => {
        //  console.log(post)
        return <Item post={post} key={index}/>
       })} */}
      </div>
    );
  } 
}


