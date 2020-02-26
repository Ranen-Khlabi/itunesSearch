import React from 'react';

//Second Create List Component
export default class FavItem extends React.Component {
  constructor(props){
    super(props)
  }
  render() {

     //Call the map function
    return (
      <li>
      <div >
        {this.props.post}
        {/* <button onClick={this.deleteItem}>X</button> */}
      </div>
      </li>
    );
  } 
}
