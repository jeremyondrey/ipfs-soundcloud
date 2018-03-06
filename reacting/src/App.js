import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import ReactAudioPlayer from 'react-audio-player';
import './App.css';
class App extends Component {
  constructor(){
    super();
    //load tracks here
    //state is saved in main component, then passed down to components as props
    this.state = {
      projects: []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    console.log(e);
}

  componentWillMount(){
    this.setState({projects: [
      {
        title: 'spaghetti',
        uploader: 'lums',
        hash: 'QmfHPsUQtszrSqFRad46RzyqT6UEJAVZ2BnZKGXRnP4Frs'
      },
      {
        title: 'amen dub',
        uploader: 'lums',
        hash: 'QmQHfLScH69i6rmso2Vn3Tu2fhgJntYo6jMQqAEfvruCUb'
      },
      {
        title: 'ting with richard',
        uploader: 'lums',
        hash: 'QmQ6udvrj8Lmn5fHc3VMhYpovXVxtTUocf2KhEwvNT4Y1Q'
      }
    ]})
  }




  render() {
    let audioSrc='https://ipfs.io/ipfs/QmQHfLScH69i6rmso2Vn3Tu2fhgJntYo6jMQqAEfvruCUb';

    function handleClick(e) {
      e.preventDefault();
      console.log(e);
    }

    return (
      //main div, contains various components
      <div className="App">
        <h1 className="App-header"> crate </h1>
        <Projects projects={this.state.projects} handleClick={handleClick}/>
        <AddProject />
        <h1>alpha</h1>
        <ReactAudioPlayer className="Footer"
  src={audioSrc}

  controls
/>

      </div>
    );
  }
}

export default App;
