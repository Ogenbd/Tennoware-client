import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Spring, animated } from 'react-spring/renderprops';
import { Helmet } from "react-helmet";
import './ItemPicker.css';

// import Loading from '../loading/Loading';
import RightAd from '../adunits/RightAd';
import BottomAd from '../adunits/BottomAd';

export class ItemPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            displayItems: [],
            picked: false
        }
    }

    componentDidMount() {
        // (window.adsbygoogle = window.adsbygoogle || []).push({
        //     google_ad_client: "ca-pub-9367218977396146"
        // });
        this.props.items().then(items => {
            this.setState({
                items: items.default,
                displayItems: items.default,
            });
        });
    }

    filterItems = ({ target }) => {
        if (target.value.length < 1) {
            this.setState({ displayItems: this.state.items })
        } else {
            let searchResaults = this.state.items.filter(item => {
                return (item.name.toLowerCase().includes(target.value.toLowerCase()) || (item.noise && item.noise.toLowerCase().includes(target.value.toLowerCase())) || (item.type && item.type.some(type => {
                    return type.toLowerCase().includes(target.value.toLowerCase())
                })));
            });
            this.setState({ displayItems: searchResaults });
        }
    }

    blurInput = ({ key, target }) => {
        if (key === 'Enter') {
            target.blur();
        }
    }

    handlePick = (pick) => {
        this.setState({ picked: true }, () => this.animDelay(pick));
    }

    animDelay = (pick) => {
        setTimeout(() => {
            this.routeToBuilder(pick);
        }, 100);
    }

    routeToBuilder = (pick) => {
        this.props.history.push(`${this.props.match.path}/${pick.toLowerCase()}`);
    }

    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>Tennoware - {this.props.title.toLowerCase()}</title>
                </Helmet>
                <div className="top-title"><p>{this.props.title}</p></div>
                <div className="screen">
                    <div></div>
                    <div className="item-picker">
                        <div className="item-picker-topbar">
                            <div className="search-wrapper item-picker-search">
                                <input className="search" type="text" placeholder="Search..." onChange={this.filterItems} onKeyUp={this.blurInput} />
                            </div>
                        </div>
                        <div className="item-picker-content">
                            <div className="items-display-wrapper">
                                <BottomAd />
                                <div className="items-display">
                                    {this.state.displayItems.map((item, index) => (
                                        <Spring
                                            key={index}
                                            native
                                            config={{ duration: 200 }}
                                            from={{ opacity: 0 }}
                                            to={{ opacity: 1 }}>
                                            {props => (
                                                <animated.div style={props}>
                                                    <Link to={`${this.props.match.path}/${item.name.toLowerCase()}`} className="item-wrapper">
                                                        <img className="item-image" src={item.img} alt="" />
                                                        <div className="item-name"><p>{item.name}</p></div>
                                                    </Link>
                                                </animated.div>
                                            )}
                                        </Spring>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="side-panel">
                        {this.props.viewWidth > 1363 &&
                            <div className="right-g">
                                <RightAd />
                            </div>
                        }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}



export default ItemPicker;
