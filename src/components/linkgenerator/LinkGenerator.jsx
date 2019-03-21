import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./LinkGenerator.css";

import apiUrl from "../../apiUrl";

export class LinkGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLinkGenerator: false,
      fullLink: ""
    };
  }

  showLinkGenerator = () => {
    document.body.classList.add("noscroll");
    let linkUrl = `${apiUrl}/${this.props.type}/${encodeURIComponent(
      this.props.match.params.id
    )}/${this.props.build.buildStr}`;
    if (
      this.props.match.params.build &&
      this.props.build.buildStr === this.props.match.params.pre
    ) {
      linkUrl += `/${this.props.match.params.build}`;
    }
    this.setState({
      fullLink: linkUrl,
      showLinkGenerator: true
    });
  };

  hideLinkGenerator = () => {
    document.body.classList.remove("noscroll");
    this.setState({
      showLinkGenerator: false
    });
  };

  copyLinkToClipboard = ({ target }) => {
    let text = target.parentElement.previousSibling;
    text.select();
    document.execCommand("copy");
    this.hideLinkGenerator();
  };

  stopPropagation = e => {
    e.stopPropagation();
  };

  render() {
    return (
      <React.Fragment>
        <div
          className="interactable interactable-semi-inactive"
          onClick={this.showLinkGenerator}
        >
          <p className="interactable-p">Link</p>
        </div>
        <div
          className={
            "popup " +
            (this.state.showLinkGenerator ? "popup-active" : "popup-inactive")
          }
        >
          <div
            className={
              "popup-topbar " +
              (this.state.showLinkGenerator ? "popup-active" : "popup-inactive")
            }
          >
            <div className="popup-x" onClick={this.hideLinkGenerator}>
              <div className="popup-x-bar one-bar" />
              <div className="popup-x-bar two-bar" />
            </div>
          </div>
          <div className="popup-content link-generator">
            <textarea
              className="link-area"
              value={this.state.fullLink}
              readOnly
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
            />
            <div
              className="interactable interactable-semi-inactive"
              onClick={this.copyLinkToClipboard}
            >
              <p className="interactable-p">Copy</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(LinkGenerator);
