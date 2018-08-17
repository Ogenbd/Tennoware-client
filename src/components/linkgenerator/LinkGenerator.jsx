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
      let linkUrl = `localhost:3000/${this.props.type}/${this.props.match.params.id}/${this.props.buildStr}`;
      if (this.props.match.params.build && this.props.buildStr === this.props.match.params.pre) {
        linkUrl += `/${this.props.match.params.user}/${this.props.match.params.build}`;
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
      <div className={"dark-bg " + (this.props.linkGenerator ? "show-dark-bg" : "hide-dark-bg")} onClick={this.hideLinkGenerator}>
        <div className="link-generator-window" onClick={this.stopPropagation}>
          <textarea className="link-area" value={this.state.fullLink} autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false"></textarea>
          <div className="build-action copy-button" onClick={this.copyLinkToClipboard}><p className="build-action-text">Copy</p></div>
        </div>
      </div>
    )
  }
}

export default withRouter(LinkGenerator);
