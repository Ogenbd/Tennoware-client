import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './LinkGenerator.css';

export class LinkGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLinkGenerator: false,
      fullLink: ''
    }
  }

  showLinkGenerator = () => {
    let type = this.props.match.url.split('/', 2);
    let buildState = this.props.getBuildStr();
    // fix url
    let linkUrl = `localhost:3000/${type[1]}/${encodeURIComponent(this.props.match.params.id)}/${buildState.buildStr}`;
    if (this.props.match.params.build && buildState.buildStr === this.props.match.params.pre) {
      linkUrl += `/${this.props.match.params.build}`;
    }
    this.setState({
      fullLink: linkUrl,
      showLinkGenerator: true
    });
  }

  hideLinkGenerator = () => {
    this.setState({
      showLinkGenerator: false
    });
  }

  copyLinkToClipboard = ({ target }) => {
    let text = target.parentElement.previousSibling;
    text.select();
    document.execCommand('copy');
    this.hideLinkGenerator();
  }


  stopPropagation = (e) => {
    e.stopPropagation()
  }

  render() {
    return (
      <React.Fragment>
        <div className="interactable interactable-semi-inactive" onClick={this.showLinkGenerator}><p className="interactable-p">Link</p></div>
        <div className={"popup " + (this.state.showLinkGenerator ? "popup-active" : "popup-inactive")}>
          <div className={"popup-topbar " + (this.state.showLinkGenerator ? "popup-active" : "popup-inactive")}>
            <div className="popup-x" onClick={this.hideLinkGenerator}>
              <div className="popup-x-bar one-bar"></div>
              <div className="popup-x-bar two-bar"></div>
            </div>
          </div>
          <div className="popup-content link-generator">
            <textarea className="link-area" value={this.state.fullLink} readOnly autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false"></textarea>
            <div className="interactable interactable-semi-inactive" onClick={this.copyLinkToClipboard}><p className="interactable-p">Copy</p></div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(LinkGenerator);
