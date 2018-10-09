import React, { Component } from 'react';

import { ItemPicker } from '../components/itempicker/ItemPicker.jsx';

export class SecondaryPicker extends Component {

    componentDidMount() {
        this.props.setTitle('Secondary Weapons');
    }

    handleClick = (pick) => {
        this.props.history.push(`/secondaryweapons/${pick.toLowerCase()}`);
    }

    render() {
        return <ItemPicker items={this.props.weapons} onClick={this.handleClick} />
    }
}

export default SecondaryPicker;
