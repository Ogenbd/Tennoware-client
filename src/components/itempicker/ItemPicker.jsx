import React, { Component } from 'react';
import './ItemPicker.css';

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
                return (item.name.search(regExp) !== -1 || item.noise.search(regExp) !== -1 || item.type.some(type => {
                    return type.search(regExp) !== -1
                }));
            });
            this.setState({ displayItems: searchResaults });
        }
    }

    blurInput = ({ key, target }) => {
        if (key === 'Enter') {
            target.blur();
        }
    }

    // pickItem = (pick) => {
    //     this.setState({ picked: true }, this.routeToBuilder(pick));
    // }

    // routeToBuilder = (pickedItem) => {
    //     setTimeout(() => {
    //         this.props.onClick(pickedItem);
    //     }, 100);
    // }

    handleClick = (pick) => {
        this.props.history.push(`${this.props.match.path}/${pick.toLowerCase()}`);
    }

    render() {
        return (
            <div className="screen">
                <div className="top-title"><p>{this.state.title}</p></div>
                <div className={"item-picker " + (this.state.picked ? 'fade-picker' : '')}>
                    <div className="item-picker-content">
                        <div className="item-picker-topbar">
                            <div className="search-wrapper item-picker-search">
                                <input className="search" type="text" placeholder="Sreach..." onChange={this.filterItems} onKeyUp={this.blurInput} />
                            </div>
                        </div>
                        <div className="items-display">
                            {this.state.displayItems.map(item => (
                                <div key={item.name} className="item-wrapper" onClick={() => this.handleClick(item.name)}>
                                    <img className="item-image" src={item.img} alt="" />
                                    <p className="item-name">{item.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemPicker
