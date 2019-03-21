import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Switch from "react-switch";

import apiUrl from "../../apiUrl";

export class BuildUpdater extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBuildUpdater: false,
      private: this.props.metaInfo.Private ? true : false,
      error: null,
      loading: false,
      inputError: null,
      buildName: this.props.metaInfo.BuildName || "",
      buildDesc: this.props.metaInfo.BuildDesc || ""
    };
  }

  showBuildUpdater = () => {
    document.body.classList.add("noscroll");
    this.setState({
      showBuildUpdater: true,
      error: null
    });
  };

  hideBuildUpdater = () => {
    document.body.classList.remove("noscroll");
    this.setState({
      showBuildUpdater: false,
      error: null
    });
  };

  togglePrivate = () => {
    this.setState(prevState => ({
      private: !prevState.private
    }));
  };

  makePublic = () => {
    this.setState({
      private: false
    });
  };

  handleBuildName = ({ target }) => {
    this.setState({
      buildName: target.value
    });
  };

  handleBuildDesc = ({ target }) => {
    this.setState({
      buildDesc: target.value
    });
  };

  saveBuild = () => {
    if (this.hasChanged()) {
      if (!this.state.loading) {
        if (this.state.buildName.length < 8) {
          this.setState({
            inputError: "name"
          });
          setTimeout(() => {
            this.setState({
              inputError: null
            });
          }, 5000);
        } else {
          this.setState({
            loading: true
          });
          let buildData = {
            orokin: this.props.orokin,
            forma: this.props.formaCount,
            buildStr: this.props.build.buildStr,
            riven: this.props.build.riven,
            private: this.state.private ? 1 : 0,
            buildName: this.state.buildName,
            buildDesc: this.state.buildDesc,
            item: decodeURIComponent(this.props.match.params.id),
            type: this.props.type
          };
          this.props.orokin ? (buildData.orokin = 1) : (buildData.orokin = 0);
          let token = localStorage.getItem("jwt");
          if (this.props.match.params.build && this.props.metaInfo.Owner) {
            buildData.buildId = this.props.match.params.build;
            fetch(`${apiUrl}/updatebuild`, {
              method: "post",
              headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`
              },
              body: JSON.stringify(buildData)
            })
              .then(res => {
                if (res.status === 200) {
                  res.json().then(() => {
                    this.setState({
                      error: "Build saved.",
                      buildData: buildData,
                      buildId: buildData.buildId,
                      loading: false
                    });
                  });
                } else if (res.status === 401) {
                  this.props.history.replace("/unauthorized");
                } else {
                  this.setState({
                    error: "Server error! Please try again later.",
                    loading: false
                  });
                }
              })
              .catch(err => {
                this.setState({
                  error:
                    "Unable to connect to Tennoware server! Please try again later.",
                  loading: false
                });
              });
          } else {
            fetch(`${apiUrl}/savebuild`, {
              method: "post",
              headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`
              },
              body: JSON.stringify(buildData)
            })
              .then(res => {
                if (res.status === 200) {
                  res.json().then(({ res }) => {
                    this.setState({
                      error: "Build saved.",
                      buildData: buildData,
                      buildId: res,
                      loading: false
                    });
                  });
                } else if (res.status === 401) {
                  this.props.history.replace("/unauthorized");
                } else {
                  this.setState({
                    error: "Server error! Please try again later.",
                    loading: false
                  });
                }
              })
              .catch(err => {
                this.setState({
                  error:
                    "Unable to connect to Tennoware server! Please try again later.",
                  loading: false
                });
              });
          }
        }
      }
    }
  };

  okClick = () => {
    document.body.classList.remove("noscroll");
    let newUrl = `/${this.props.type}/${decodeURIComponent(
      this.props.match.params.id
    )}/${this.state.buildData.buildStr}/${this.state.buildId}`;
    if (
      newUrl !==
      `/${this.props.type}/${decodeURIComponent(this.props.match.params.id)}/${
        this.props.match.params.pre
      }/${this.props.match.params.build}`
    ) {
      this.redirectToSaved(newUrl);
    } else {
      this.props.updateInfo(
        this.state.buildName,
        this.state.buildDesc,
        this.state.private ? 1 : 0
      );
      this.hideBuildUpdater();
    }
  };

  redirectToSaved = newUrl => {
    this.props.history.push(newUrl);
  };

  hasChanged = () => {
    let hasChanged = false;
    let privateOrigin = this.props.metaInfo.Private ? true : false;
    if (this.props.hasChanged) {
      hasChanged = true;
    } else if (
      this.props.metaInfo.BuildName !== this.state.buildName ||
      this.props.metaInfo.BuildDesc !== this.state.buildDesc ||
      privateOrigin !== this.state.private
    ) {
      hasChanged = true;
    }
    return hasChanged;
  };

  render() {
    const hasChanged = this.hasChanged();
    return (
      <React.Fragment>
        <div
          className="interactable interactable-semi-inactive"
          onClick={this.showBuildUpdater}
        >
          <p className="interactable-p">Save</p>
        </div>
        <div
          className={
            "popup " +
            (this.state.showBuildUpdater ? "popup-active" : "popup-inactive")
          }
        >
          <div
            className={
              "popup-topbar " +
              (this.state.showBuildUpdater ? "popup-active" : "popup-inactive")
            }
          >
            <div className="popup-x" onClick={this.hideBuildUpdater}>
              <div className="popup-x-bar one-bar" />
              <div className="popup-x-bar two-bar" />
            </div>
          </div>
          <div className="popup-content build-saver">
            {this.state.error !== null && (
              <div className="error-box">
                <p className="error-text">{this.state.error}</p>
                <div
                  className="interactable interactable-semi-inactive"
                  onClick={this.okClick}
                >
                  <p className="interactable-p">OK</p>
                </div>
              </div>
            )}
            {this.state.error === null && (
              <React.Fragment>
                <div className="public-saver">
                  <p>Guidelines:</p>
                  <ul>
                    <li>
                      Public builds must have a descriptive name in english.
                    </li>
                    <li>
                      Private builds are still accessible to the public but do
                      not show up in community builds lists. You can still share
                      them by linking directly to them.
                    </li>
                    <li>
                      Troll/joke builds should not be saved as public builds.
                    </li>
                    <li>
                      Avoid using offensive language in a public build's name or
                      description.
                    </li>
                    <li>
                      Saved public builds might be privatized by a moderator if
                      a user does not follow these very simple guidelines.
                    </li>
                  </ul>
                </div>
                <label className="build-label build-name" name="build-name">
                  <p>Build Name</p>
                  <input
                    className={
                      "build-input " +
                      (this.state.inputError === "name" ? "error-border" : "")
                    }
                    name="build-name"
                    type="text"
                    spellCheck="false"
                    placeholder="Minimum 8 characters"
                    value={this.state.buildName}
                    onChange={this.handleBuildName}
                  />
                </label>
                <label className="build-label build-desc" name="build-desc">
                  <p>Build Description</p>
                  <textarea
                    className="build-input build-desc-box"
                    name="build-desc"
                    type="text"
                    spellCheck="false"
                    placeholder="Optional"
                    value={this.state.buildDesc}
                    onChange={this.handleBuildDesc}
                  />
                </label>
                <div className="private-option">
                  <p>Private?</p>
                  <Switch
                    onChange={this.togglePrivate}
                    checked={this.state.private}
                  />
                </div>
                <div className="check-private">
                  <div
                    className={
                      hasChanged
                        ? "interactable interactable-semi-inactive"
                        : "uninteractable interactable-inactive"
                    }
                    onClick={this.saveBuild}
                  >
                    {this.state.loading ? (
                      <div className="spinner gold-spinner">
                        <div className="bounce1" />
                        <div className="bounce2" />
                        <div className="bounce3" />
                      </div>
                    ) : (
                      <p className="interactable-p">Save</p>
                    )}
                  </div>
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(BuildUpdater);
