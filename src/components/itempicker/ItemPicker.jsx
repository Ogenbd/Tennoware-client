import React, { Component } from 'react';
import './ItemPicker.css';

export class ItemPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayItems: this.props.items,
            picked: false
        }
    }

    filterItems = ({ target }) => {
        if (target.value.length < 1) {
            this.setState({ displayItems: this.props.items })
        } else {
            let regExp = new RegExp(target.value, 'i')
            let searchResaults = this.props.items.filter(item => {
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

    pickItem = (pickedItem) => {
        this.setState({ picked: true }, this.routeToBuilder(pickedItem));
    }

    routeToBuilder = (pickedItem) => {
        setTimeout(() => {
            this.props.onClick(pickedItem);
        }, 100);
    }

    render() {
        return (
            <div className="screen">
                <div className={"item-picker " + (this.state.picked ? 'fade-picker' : '')}>
                    <div className="item-picker-content">
                        <div className="item-picker-topbar">
                            <input className="item-search" type="text" placeholder="Sreach..." onChange={this.filterItems} onKeyUp={this.blurInput} />
                        </div>
                        <div className="items-display">
                            {this.state.displayItems.map(item => (
                                <div key={item.name} className="item-wrapper" onClick={() => this.pickItem(item.name)}>
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
