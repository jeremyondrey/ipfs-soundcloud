import React, { Component } from 'react';

class ProjectItem extends Component {
  // let fileURL = "" + "{this.props.project.hash}";

  render() {
    // console.log(this.props);
    return (
      //track content div
<div>
      <li className="ProjectItem">
      {this.props.project.uploader} - <strong> {this.props.project.title} </strong> <a href="https://ipfs.io/ipfs/QmVQBDZWsiYGwpbbie7wGcbUDpJgcUetkNSs9t95Jkz89c">({this.props.project.hash})</a>

      </li>
</div>
    );
  }
}

export default ProjectItem;
