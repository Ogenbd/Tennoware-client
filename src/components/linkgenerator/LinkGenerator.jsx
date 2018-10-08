import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './LinkGenerator.css';

export class LinkGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullLink: ''
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.linkGenerator === false && this.props.linkGenerator === true) {
      // fix url
      let linkUrl = `localhost:3000/${this.props.type}/${encodeURIComponent(this.props.match.params.id)}/${this.props.buildStr}`;
      if (this.props.match.params.build && this.props.buildStr === this.props.match.params.pre) {
        linkUrl += `/${this.props.match.params.build}`;
      }
      this.setState({ fullLink: linkUrl });
    }
  }

  copyLinkToClipboard = ({ target }) => {
    let text = target.parentElement.previousSibling;
    text.select();
    document.execCommand('copy');
    this.props.hideLinkGenerator();
  }

  hideLinkGenerator = () => {
    this.props.hideLinkGenerator();
  }

  stopPropagation = (e) => {
    e.stopPropagation()
  }

  render() {
    return (
      // <div className={"link-generator dark-bg " + (this.props.linkGenerator ? "show-dark-bg" : "hide-dark-bg")} >
      // <div className={"dark-bg " + (this.props.linkGenerator ? "show-dark-bg" : "hide-dark-bg")} onClick={this.hideLinkGenerator}>
      // {/* <div className="link-generator-window" onClick={this.stopPropagation}> */}
      <div className={"popup " + (this.props.linkGenerator ? "popup-active" : "popup-inactive")}>
        <div className={"popup-topbar " + (this.props.linkGenerator ? "popup-active" : "popup-inactive")}>
          <div className="popup-x" onClick={this.hideLinkGenerator}>
            <div className="popup-x-bar one-bar"></div>
            <div className="popup-x-bar two-bar"></div>
          </div>
        </div>
        <div className="popup-content link-generator">
          <textarea className="link-area" value={this.state.fullLink} autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false"></textarea>
          <div className="interactable interactable-semi-inactive" onClick={this.copyLinkToClipboard}><p className="interactable-p">Copy</p></div>
        </div>
      </div>
    )
  }
}

export default withRouter(LinkGenerator);
