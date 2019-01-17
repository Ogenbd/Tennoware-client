import React, { Component } from 'react';
import { CSSTransition } from "react-transition-group";
import { Helmet } from "react-helmet";
import './ItemPicker.css';

import Loading from '../loading/Loading';

export class ItemPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            items: [],
            displayItems: [],
            picked: false
        }
    }

    async componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: "ca-pub-9367218977396146",
            enable_page_level_ads: true
        });
        let items = await this.props.items();
        this.setState({
            items: items.default,
            displayItems: items.default,
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
            <CSSTransition classNames="fade" in={true} appear={true} timeout={200}>
                <div className="screen">
                    <Helmet>
                        <title>Tennoware - {this.props.title.toLowerCase()}</title>
                    </Helmet>
                    <div className="top-title"><p>{this.props.title}</p></div>
                    {this.state.picked &&
                        <Loading />
                    }
                    <div className={"item-picker " + (this.state.picked ? 'picker-fadeout' : 'picker-in')}>
                        <div className="item-picker-content">
                            <div className="item-picker-topbar">
                                <div className="search-wrapper item-picker-search">
                                    <input className="search" type="text" placeholder="Search..." onChange={this.filterItems} onKeyUp={this.blurInput} />
                                </div>
                            </div>
                            <div className="items-display">
                                {this.state.displayItems.map(item => (
                                    <CSSTransition key={item.name} classNames="fade" in={true} appear={true} timeout={200}>
                                        <div className="item-wrapper" onClick={() => this.handlePick(item.name)}>
                                            <img className="item-image" src={item.img} alt="" />
                                            <div className="item-name"><p>{item.name}</p></div>
                                        </div>
                                    </CSSTransition>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </CSSTransition>
        )
    }
}

export default ItemPicker
