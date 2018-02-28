import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {

  render() {
    let projectItems;
    if(this.props.projects){
      // console.log(this.props.projects);
      projectItems = this.props.projects.map(project => {
        // console.log(track);
        return (
        <ProjectItem key={project.hash} project={project}/>
      );
      });
    }

    // console.log(this.props);
    return (
      //main div, contains various components
      <div className="Projects">
        my tracks:
        {projectItems}
      </div>
    );
  }
}

export default Projects;
