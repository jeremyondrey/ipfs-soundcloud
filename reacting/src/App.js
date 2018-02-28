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
        hash: 'QmVQBDZWsiYGwpbbie7wGcbUDpJgcUetkNSs9t95Jkz89c'
      },
      {
        title: 'ting with richard',
        uploader: 'lums',
        hash: 'QmQ6udvrj8Lmn5fHc3VMhYpovXVxtTUocf2KhEwvNT4Y1Q'
      }
    ]})
  }



  render() {
    return (
      //main div, contains various components
      <div className="App">
        <h1> dapster </h1>
        <AddProject />
        <Projects projects={this.state.projects} />
        <ReactAudioPlayer
  src='https://ipfs.io/ipfs/QmfHPsUQtszrSqFRad46RzyqT6UEJAVZ2BnZKGXRnP4Frs'
  autoPlay
  controls
/>
      </div>
    );
  }
}

export default App;
