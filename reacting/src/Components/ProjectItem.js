import React, { Component } from 'react';

class ProjectItem extends Component {
  // let fileURL = "" + "{this.props.project.hash}";

  render() {

    let fileURL = "https://ipfs.io/ipfs/" + this.props.project.hash
    console.log(fileURL);
    return (
      //track content div
<div>
      <li className="ProjectItem">
      artist: {this.props.project.uploader} - <strong> {this.props.project.title} </strong> (<a href={fileURL} className="trackLink">{this.props.project.hash}</a>)
      </li>

</div>
    );
  }
}

export default ProjectItem;
