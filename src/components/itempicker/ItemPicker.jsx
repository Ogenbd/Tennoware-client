import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import './ItemPicker.css';

import RightAd from '../adunits/RightAd';
import TopAd from '../adunits/TopAd';
import Loading from '../loading/Loading';

function imagesLoaded(parentNode) {
    const imgElements = [...parentNode.querySelectorAll(".item-image")];
    for (let i = 0; i < imgElements.length; i += 1) {
        const img = imgElements[i];
        if (!img.complete) {
            return false;
        }
    }
    return true;
}

export class ItemPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            displayItems: [],
            picked: false,
            ready: false
        }
    }

    componentDidMount() {
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

    imgLoaded = () => {
        if (!this.state.ready) {
            let loaded = imagesLoaded(this.itemList);
            if (loaded) {
                this.setState({ ready: loaded });
            }
        }
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
                        <div ref={element => { this.itemList = element; }} className="item-picker-content" style={this.state.ready ? { opacity: 1 } : { opacity: 0 }}>
                            <div className="items-display-wrapper">
                                {this.props.online &&
                                    <TopAd />
                                }
                                <div className="items-display">
                                    {this.state.displayItems.map((item, index) => (
                                        <Link key={index} to={`${this.props.match.path}/${item.name.toLowerCase()}`} className="item-wrapper">
                                            <img className="item-image" onLoad={this.imgLoaded} src={item.img} alt="" />
                                            <div className="item-name"><p>{item.name}</p></div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="side-panel">
                        {(this.props.viewWidth > 1363 && this.props.online) &&
                            <div className="right-g">
                                <RightAd />
                            </div>
                        }
                    </div>
                </div>
                {!this.state.ready &&
                    <Loading />
                }
            </React.Fragment>
        )
    }
}



export default ItemPicker;
