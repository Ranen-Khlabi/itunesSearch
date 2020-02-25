import React from 'react';

const Favorites = (props) =>{
    // new array to be added and button to delete it
    const Fav = props.adding.map((a,index)=>{
        return (
        <div> 
          <a key={index} className="music" href={a} alt=""/>
          {/* <button onClick={()=>props.deleteItem(a)}>Delete Item</button> */}
          {/* {this.props.post.collectionName} */}
        </div> 
        )
    })

    return(
        <div>
            {/* show the added list */}
            {Fav}
            {/* clear all the list */}
            <button className='clearList' onClick={props.deleteItem}>Clear List!</button>
            
        </div>
    );
}

export default Favorites;








// import React, {Component} from 'react';

// class Favorites extends Component {

//     removeAllOnClick = (e) => {
//         e.stopPropagation()
//         // console.log('on click work');
//         this.props.removeAll()
//     }


//     render () {
//         // console.log(this.props.favorites);
        
//         return(
//             <div className='favoriteContainer'>
//                 <div className='container'>

//                 <list 
//                     favorites={this.props.favorites}
//                     favoriteClick = {this.props.favoriteClick}/>

//                 </div>

//                 <button className="favButton"
//                         onClick = {this.removeAllOnClick}>
//                     Clear
//                 </button>
                
//             </div>
            
//         )

        
//     }
// }



// export default Favorites;