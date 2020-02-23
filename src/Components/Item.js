import React from 'react';


export default class Item extends React.Component {
  render() {
    return (
      <div className="post-item">
        <a className="link"  href={ this.props.post.collectionViewUrl} target="_blank">
        <img className="image" src={this.props.post.artworkUrl100} /> 
                                                  {this.props.post.collectionName} 
        <p> {this.props.post.primaryGenreName}</p>
        <p> {this.props.post.releaseDate}</p></a>
        {/* <p> <img className="image" src={this.props.post.artworkUrl60} /> </p> */}
        {/* releaseDate: "2014-07-04T07:00:00Z"
            primaryGenreName: "Pop" */}

        {/* <p>collectionName: {this.props.post.collectionName}</p> */}
        {/* <a href={this.props.post.collectionViewUrl}>{this.props.post.collectionName} </a> */}
        {/* <p>collectionViewUrl: {this.props.post.collectionViewUrl}</p> */}
      </div>
    );
  }
}  