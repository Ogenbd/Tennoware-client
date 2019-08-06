import React, { PureComponent } from 'react';

import apiUrl from '../../apiUrl';

export class Rating extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            rating: this.props.rating || 0,
            tempRating: undefined,
            hover: false,
            readOnly: this.props.readOnly || false,
            lastRatingSet: this.props.rating || 0,
            error: null
        }
    }

    generateRating = () => {
        let stars = [];
        let fullStar = this.state.hover ? require('../../assets/dynamic/rating/star-outline.png') : require('../../assets/dynamic/rating/star-full.png');
        let integer = Math.floor(this.state.rating);
        let fraction = this.state.rating % 1;
        for (let i = 1; i < 4; i++) {
            let img;
            let color;
            let word = this.getWord(i);
            if (i === integer + 1 && fraction !== 0 && fraction >= 0.125) {
                img = this.getFracImage(fraction);
                color = 'rgba(255, 249, 160, 1)'
            } else if (i > integer) {
                img = require('../../assets/dynamic/rating/star-blank.png')
                color = 'white'
            } else if (i <= integer) {
                img = fullStar;
                color = 'rgba(255, 249, 160, 1)'
            }
            stars.push(
                <div key={i} className="star-wrapper" style={{ cursor: this.props.readOnly ? 'default' : 'pointer' }} onClick={() => this.rate(i)} onMouseEnter={() => this.handleHover(i)} onMouseLeave={this.handleHoverLeave} >
                    <img style={{ width: this.props.starWidth ? this.props.starWidth : '30px' }} src={img} alt="" />
                    <p style={{ color: color }}>{word}</p>
                </div>
            );
        }
        return stars;
    }

    getWord = (i) => {
        switch (i) {
            case 1:
                return 'Good';
            case 2:
                return 'Great';
            case 3:
                return 'Meta';
            default:
                return '';
        }
    }

    getFracImage = (fraction) => {
        if (fraction < 0.375) {
            return require('../../assets/dynamic/rating/star-quarter.png');
        } else if (fraction < 0.625) {
            return require('../../assets/dynamic/rating/star-half.png');
        } else if (fraction < 0.875) {
            return require('../../assets/dynamic/rating/star-threequarter.png');
        } else {
            return require('../../assets/dynamic/rating/star-full.png');
        }
    }

    handleHover = (value) => {
        if (!this.state.readOnly) {
            this.setState({
                rating: value,
                hover: true
            });
        }
    }

    handleHoverLeave = () => {
        if (!this.state.readOnly) {
            this.setState({
                rating: this.state.lastRatingSet,
                hover: false
            });
        }
    }

    rate = (value) => {
        if (!this.state.readOnly) {
            if (this.state.lastRatingSet !== value) {
                let preChangeValue = this.state.lastRatingSet;
                this.setState({
                    rating: value,
                    lastRatingSet: value,
                    hover: false
                });
                let token = localStorage.getItem('jwt');
                fetch(`${apiUrl}/ratebuild`, {
                    method: 'post',
                    headers: { 'Content-Type': 'application/json', 'authorization': `Bearer ${token}` },
                    body: JSON.stringify({
                        build: this.props.match.params.build,
                        rating: value
                    })
                })
                    .then(res => {
                        if (res.status === 401) {
                            this.props.history.replace('/unauthorized');
                        } else if (res.status !== 200) {
                            this.setState({
                                error: 'Server error! Please try again later.',
                                rating: preChangeValue,
                                lastRatingSet: preChangeValue,
                                hover: false
                            });
                        }
                    })
                    .catch(err => {
                        this.setState({
                            error: 'Unable to connect to Tennoware server! Please try again later.',
                            rating: preChangeValue,
                            lastRatingSet: preChangeValue,
                            hover: false
                        })
                    });

            }
        }
    }

    confirmError = () => {
        this.setState({
            error: null
        });
    }

    render() {
        const rating = this.generateRating();
        return (
            <React.Fragment>
                <div className="stars-container">
                    {rating}
                </div>
                {!this.state.readOnly &&
                <div className="general-error" style={this.state.error !== null ? { opacity: 1, zIndex: 9112 } : { opacity: 0, zIndex: -1, transitionDelay: '0s, 0.2s' }}>
                    <div className="general-error-box">
                        <p>{this.state.error}</p>
                        <div className="interactable interactable-semi-inactive general-button" onClick={this.confirmError}><p className="interactable-p">Confirm</p></div>
                    </div>
                </div>
                }
            </React.Fragment>
        )
    }
}

export default Rating;
