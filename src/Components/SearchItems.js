import React from 'react';
import axios from 'axios';


export default class CreateNewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ''
    }; 
  }
  getInput = () => {
    console.log(' getInput');
    console.log(this.state)
    axios({
      method: 'get',
      url: 'https://itunes.apple.com/search?term=sia&entity=album',
      data: this.state
    })
      .then(res => {
        console.log('RESPONSE: ', res);
        console.log('DATA: ', res.data);
      })
      .catch(err => {
        console.log('ERROR: ', err);
      });
  };

  handleChangeInput = e => {
    this.setState({ body: e.target.value });
  };
  render() {
    return (
      <div className="new-post">
        <input className="input"
          type="text"
          size="60"
          placeholder="⌕"
          onChange={event => this.handleChangeInput(event)}
        />
        <button className="button" onClick={() => this.getInput()}>Send</button>
      </div>
    );
  }
}

