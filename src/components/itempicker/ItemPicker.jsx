import React, { Component } from 'react';
import { CSSTransition } from "react-transition-group";
import './ItemPicker.css';

import Loading from '../loading/Loading';

export class ItemPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            items: [],
            displayItems: [],
            picked: false
        }
    }

    async componentDidMount() {
        let items = await this.props.items();
        this.setState({
            items: items,
            displayItems: items,
            title: this.props.title
        });
    }

    filterItems = ({ target }) => {
        if (target.value.length < 1) {
            this.setState({ displayItems: this.state.items })
        } else {
            let regExp = new RegExp(target.value, 'i')
            let searchResaults = this.state.items.filter(item => {
                return (item.name.search(regExp) !== -1 || (item.noise && item.noise.search(regExp) !== -1) || (item.type && item.type.some(type => {
                    return type.search(regExp) !== -1
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
                    <div className="top-title"><p>{this.state.title}</p></div>
                    {this.state.picked &&
                        <Loading />
                    }
                    <div className={"item-picker " + (this.state.picked ? 'picker-fadeout' : 'picker-in')}>
                        <div className="item-picker-content">
                            <div className="item-picker-topbar">
                                <div className="search-wrapper item-picker-search">
                                    <input className="search" type="text" placeholder="Sreach..." onChange={this.filterItems} onKeyUp={this.blurInput} />
                                </div>
                            </div>
                            <div className="items-display">
                                {this.state.displayItems.map(item => (
                                    <div key={item.name} className="item-wrapper" onClick={() => this.handlePick(item.name)}>
                                        <img className="item-image" src={item.img} alt="" />
                                        <div className="item-name"><p>{item.name}</p></div>
                                    </div>
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
