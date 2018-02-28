import React, { Component } from 'react';

class AddProject extends Component {
  constructor(){
    super();
    this.state ={
      newProject:{}
    }
  }
  static defaultProps = {
    categories: ['track','ep','album','mix']
  }

  handleSubmit(e){
    if (this.refs.title.value === '') {
      alert('title required');
    } else {
      
    }
    console.log('submitted');
    e.preventDefault();
  }

  render() {
    let categoryOptions = this.props.categories.map(e => {
      return <option key={e} value="category">{e}</option>
    });
    return (
      //add track form
      <div className="AddProject">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label><br />
            <input type="text" ref="title" />
          </div>
          <div>
            <label>Category</label><br />
            <select ref="category">
              {categoryOptions}
            </select>
            </div>
            <input type="submit" value="submit" />
      </form>
      </div>
    );
  }
}

export default AddProject;
