import React, { Component } from 'react'

export class Like extends Component {
    constructor(props) {
        super(props);
        this.timer = null;
        this.state = {
            liked: false,
            lastLikePress: 0,
            lastLikeSent: false,
        }
    }

    componentDidMount() {
        if (this.props.metaInfo.Liked === 1) {
            this.setState({
                liked: true,
                lastLikeSent: true
            })
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
        this.setState(prevState => ({
            liked: !prevState.liked,
        }), () => {
            if (Date.now() - this.state.lastLikePress < 3000 && this.state.lastLikePress !== 0) {
                this.setState({
                    lastLikePress: Date.now()
                }, this.spammerMan
                )
            } else {
                this.setState({
                    lastLikePress: Date.now()
                }, this.sendLike
                )
            }
        });
    }

    spammerMan = () => {
        if (this.timer) {
            clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
            this.sendLike();
        }, 3000);
    }

    sendLike = () => {
        if (!this.state.likeDispatched && this.state.lastLikeSent !== this.state.liked) {
            this.setState({
                lastLikeSent: this.state.liked,
                likeDispatched: true
            }, () => {
                let comp = this.state.liked ? 'like' : 'unlike';
                // fix url
                let token = localStorage.getItem('jwt');
                fetch(`http://192.168.1.114:50000/${comp}`, {
                    method: 'post',
                    headers: { 'Content-Type': 'application/json', 'authorization': `Bearer ${token}` },
                    body: JSON.stringify({
                        build: this.props.match.params.build
                    })
                })
                    .then(res => res.json())
                    .then(({ res }) => {
                        this.setState({ likeDispatched: false }, () => {
                            if (res !== this.state.liked) {
                                this.spammerMan();
                            }
                        });
                    })
                    .catch(err => {
                        console.log('error')
                    });
            });
        }
    }

    render() {
        return (
            <div className={"activatable " + (this.state.liked ? "interactable-active" : "interactable-inactive")} onClick={this.likeButtonPress}><p className="interactable-p">Like</p></div>
        )
    }
}

export default Like
