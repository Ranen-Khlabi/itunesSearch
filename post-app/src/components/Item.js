import React from 'react';

export default class Item extends React.Component {
  render() {
    return (
      <div className="post-item">
        <h1>Item</h1>
        <p> Album Name:<a href={this.props.post.collectionViewUrl}>{this.props.post.collectionName} </a></p>
        <p> type: {this.props.post.primaryGenreName}</p>
        <p> date: {this.props.post.releaseDate}</p>
        {/* releaseDate: "2014-07-04T07:00:00Z"
primaryGenreName: "Pop" */}

        {/* <p>collectionName: {this.props.post.collectionName}</p> */}
        {/* <a href={this.props.post.collectionViewUrl}>{this.props.post.collectionName} </a> */}
        {/* <p>collectionViewUrl: {this.props.post.collectionViewUrl}</p> */}
      </div>
    );
  }
}  