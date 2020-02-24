import React from 'react';


export default class Item extends React.Component {
  
  render() {
    return (
      <div className="post-item">

        <a className="link"  
            href={ this.props.post.collectionViewUrl} target="_blank">
        <img className="image" 
             src={this.props.post.artworkUrl100} /> 

                 {this.props.post.collectionName} 

        <p> {this.props.post.primaryGenreName}</p>
        <p> {this.props.post.releaseDate}</p>
        {/* <i onClick={this.onClickFavorite} > favorite_border</i> */}
        </a>

      </div>
    );
  }
}  