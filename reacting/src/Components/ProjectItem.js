import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';

class ProjectItem extends Component {
  // let fileURL = "" + "{this.props.project.hash}";

  render() {

    let fileURL = "https://ipfs.io/ipfs/" + this.props.project.hash
    console.log(fileURL);
    return (
      //track content div
<div>
      <li className="ProjectItem">
      artist: {this.props.project.uploader} - <strong> {this.props.project.title} </strong> (<a href={fileURL} onClick={this.handleClick} className="trackLink">{this.props.project.hash}</a>)

      <br />
      </li>
      <ReactAudioPlayer
src={fileURL}
controls
/>
</div>
    );
  }
}

export default ProjectItem;
