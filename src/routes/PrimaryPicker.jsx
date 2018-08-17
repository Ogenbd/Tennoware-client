import React, { Component } from 'react';

import { ItemPicker } from '../components/itempicker/ItemPicker.jsx';

export class PrimaryPicker extends Component {

    componentDidMount() {
        this.props.setTitle('Primary Weapons');
    }

    handleClick = (pick) => {
        this.props.history.push(`/primaryweapons/${pick.toLowerCase()}`);
    }

    render() {
        return <ItemPicker items={this.props.weapons} onClick={this.handleClick} />
    }
}

export default PrimaryPicker;
