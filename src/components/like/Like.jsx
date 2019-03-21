import React, { Component } from "react";
import "./Like.css";

import apiUrl from "../../apiUrl";

export class Like extends Component {
  constructor(props) {
    super(props);
    this.timer = null;
    this.state = {
      liked: false,
      error: null,
      lastLikePress: 0,
      lastLikeSent: false
    };
  }

  componentDidMount() {
    if (this.props.metaInfo.Liked === 1) {
      this.setState({
        liked: true,
        lastLikeSent: true
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.metaInfo.Liked !== this.props.metaInfo.Liked) {
      if (this.props.metaInfo.Liked === 1) {
        this.setState({ liked: true });
      } else {
        this.setState({ liked: false });
      }
    }
  }

  likeButtonPress = () => {
    this.setState(
      prevState => ({
        liked: !prevState.liked
      }),
      () => {
        if (
          Date.now() - this.state.lastLikePress < 3000 &&
          this.state.lastLikePress !== 0
        ) {
          this.setState(
            {
              lastLikePress: Date.now()
            },
            this.spammerMan
          );
        } else {
          this.setState(
            {
              lastLikePress: Date.now()
            },
            this.sendLike
          );
        }
      }
    );
  };

  spammerMan = () => {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      this.sendLike();
    }, 3000);
  };

  sendLike = () => {
    if (
      !this.state.likeDispatched &&
      this.state.lastLikeSent !== this.state.liked
    ) {
      this.setState(
        {
          lastLikeSent: this.state.liked,
          likeDispatched: true
        },
        () => {
          let comp = this.state.liked ? "like" : "unlike";
          let token = localStorage.getItem("jwt");
          fetch(`${apiUrl}/${comp}`, {
            method: "post",
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
              build: this.props.match.params.build
            })
          })
            .then(res => {
              if (res.status === 200) {
                res.json().then(({ res }) => {
                  this.setState({ likeDispatched: false }, () => {
                    if (res !== this.state.liked) {
                      this.spammerMan();
                    }
                  });
                });
              } else if (res.status === 401) {
                this.props.history.replace("/unauthorized");
              } else {
                this.setState({
                  error: "Server error! Please try again later."
                });
              }
            })
            .catch(err => {
              this.setState({
                error:
                  "Unable to connect to Tennoware server! Please try again later."
              });
            });
        }
      );
    }
  };

  confirmError = () => {
    this.setState(prevState => ({
      liked: !prevState.liked,
      error: null
    }));
  };

  render() {
    return (
      <React.Fragment>
        <div
          className={
            "activatable like-button " +
            (this.state.liked ? "like-active" : "interactable-semi-inactive")
          }
          onClick={this.likeButtonPress}
        >
          <p className="interactable-p">
            {this.state.liked ? "Bookmarked" : "Bookmark"}
          </p>
        </div>
        <div
          className="general-error"
          style={
            this.state.error !== null
              ? { opacity: 1, zIndex: 9112 }
              : { opacity: 0, zIndex: -1, transitionDelay: "0s, 0.2s" }
          }
        >
          <div className="general-error-box">
            <p>{this.state.error}</p>
            <div
              className="interactable interactable-semi-inactive general-button"
              onClick={this.confirmError}
            >
              <p className="interactable-p">Confirm</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Like;
