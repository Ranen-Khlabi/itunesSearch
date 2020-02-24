import React, {Component} from 'react';

class Favorites extends Component {

    removeAllOnClick = (e) => {
        e.stopPropagation()
        // console.log('on click work');
        this.props.removeAll()
    }


    render () {
        // console.log(this.props.favorites);
        
        return(
            <div className='favoriteContainer'>
                <div className='container'>

                <list 
                    favorites={this.props.favorites}
                    favoriteClick = {this.props.favoriteClick}/>

                </div>

                <button className="favButton"
                        onClick = {this.removeAllOnClick}>
                    Clear
                </button>
                
            </div>
            
        )

        
    }
}



export default Favorites;