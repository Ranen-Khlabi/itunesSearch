import React from 'react';

const Favorites = (props) =>{
    // new array to be added and button to delete it
    const Fav = props.adding.map((a,index)=>{
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
