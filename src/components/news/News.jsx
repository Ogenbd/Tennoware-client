import React, { Component } from 'react'
import './News.css';

export class News extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.setTitle('News');
  }

  render() {
    return (
      <div className="screen">
       
      </div>
    )
  }
}

export default News;