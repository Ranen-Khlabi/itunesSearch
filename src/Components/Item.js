import React from 'react';

export default class Item extends React.Component {

    render(){
        // function Item(props) {

        //     let resultItems = props.item.map((result) => {
        //       if (result.trackName.length > 40) {
        //         result.trackName = result.trackName.slice(0, 40) + '...';
        //       }
        //       return (
        //         <li key={result.trackId}>
        //           <img src={result.artworkUrl60} />
        //           <a href={result.trackViewUrl} target='_blank' rel='noopener noreferrer'>
        //              {result.trackName}
        //           </a>
        //         </li>
        //       );
        //     });
            return (
              // <ul> {resultItems} </ul>
              <div className="result-item">
                <p>title: {this.props.result.title}</p>
                <p>body: {this.props.result.body}</p>
              </div>
            );
          }
    }