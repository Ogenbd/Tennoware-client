import React, { Component } from 'react';
import '../rangedweapon/RangedWeaponStats.css';

export class WarframeStats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    toggleStats = () => {
        this.setState(prevState => ({ open: !prevState.open }))
    }
    
    render() {
        return (
            <React.Fragment>
                <div className={"pull-tab " + (this.state.open ? 'open-pull-tab' : 'closed-pull-tab')} onClick={this.toggleStats}>
                    <img src={require('../../assets/arrowicong.png')} alt=">>" className={"pull-tab-arrow " + (this.state.open ? 'point-left' : 'point-right')} />
                    <p>STATS</p>
                </div>
                <div className={"ranged-stats " + (this.state.open ? 'open-ranged-stats' : 'closed-ranged-stats')}>
                    <div className="top-bar-margin"></div>
                </div>
            </React.Fragment>
        )
    }
}

export default WarframeStats
