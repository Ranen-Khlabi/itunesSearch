import React from 'react';

export default class FaveItem extends React.Component {
  // Remove = e => {
  //   e.preventDefault();
  //   console.log("click remove");
  //   this.props.handleRemove();
  // };

  render() {
    return (
      <div>
        <div className="favecards">
        {this.props.post}
        </div>
        {/* <button onClick={this.handleRemove}>X</button> */}
        </div>
    );
  }
}






// export default class FavItem extends React.Component {
//   constructor(props){
//     super(props)
//   }
//   render() {

//      //Call the map function
//     return (
//       <li>
//       <div >
//         {this.props.post}
//         {/* <button onClick={this.deleteItem}>X</button> */}
//       </div>
//       </li>
//     );
//   } 
// }
