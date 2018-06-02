import React, { Component } from 'react';
import Form from './components/Form/Form';
import Image from './components/Image/Image';

class App extends Component {
  
  state = {
    imageURL: ''
  };

  imageURLHandler = imageURL => {
    this.setState({ imageURL })
  };

  render() {
    return (
      <div className="App">
        <Form imageURLHandler={ this.imageURLHandler } />
        <Image image={ this.state.imageURL } />
      </div>
    );
  }
}

export default App;
