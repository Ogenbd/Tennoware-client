import React, { Component } from 'react'
import './News.css';

const Loading = () => <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

export class News extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
  }

  render() {
    return (
      <Loading />
      // <div className="screen">
       
      // </div>
    )
  }
}

export default News;