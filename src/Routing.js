import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import AsyncComponent from './Async';

// import primaryWeapons from './data/primaryweapons';
// import primaryMods from './data/primarymods';
// import secondaryWeapons from './data/secondaryweapons';
// import secondaryMods from './data/secondarymods';

import TheVoid from './components/thevoid/TheVoid';
import News from './components/news/News';
// import ItemPicker from './components/itempicker/ItemPicker';
// import PrimaryPicker from './routes/PrimaryPicker';
// import SecondaryPicker from './routes/SecondaryPicker';
// import RangedBuilder from './routes/RangedBuilder';

const AsyncItemPicker = AsyncComponent(() => {
    return import('./components/itempicker/ItemPicker');
});

const AsyncRangedBuilder = AsyncComponent(() => {
    return import('./routes/RangedBuilder');
});

const AsyncFrameBuilder = AsyncComponent(() => {
    return import('./routes/FrameBuilder');
});

const getPrimaryWeapons = () => {
    let data = import('./data/primaryweapons');
    return data;
}

const getSecondaryWeapons = () => {
    let data = import('./data/secondaryweapons');
    return data;
}

const getPrimaryMods = () => {
    let data = import('./data/primarymods');
    return data;
}

const getSecondaryMods = () => {
    let data = import('./data/secondarymods');
    return data;
}
const getWarframes = () => {
    let data = import('./data/warframes');
    return data;
}

const getWarframeMods = () => {
    let data = import('./data/warframemods');
    return data;
}

export class Routing extends Component {

    primaryWeapons = async () => {
        let weapons = await getPrimaryWeapons();
        return weapons.default;
    }

    secondaryWeapons = async () => {
        let weapons = await getSecondaryWeapons();
        return weapons.default;
    }

    primaryMods = async () => {
        let mods = await getPrimaryMods();
        return mods.default;
    }

    secondaryMods = async () => {
        let mods = await getSecondaryMods();
        return mods.default;
    }

    warframes = async () => {
        let frames = await getWarframes();
        return frames.default;
    }

    warframeMods = async () => {
        let mods = await getWarframeMods();
        return mods.default;
    }

    render() {
        let nonRouterPropPass = {
            viewWidth: this.props.viewWidth,
            user: this.props.user,
        }
        return (
            <div className="main">
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} className="screen" classNames="fade" appear={true} timeout={100}>
                        <Switch location={this.props.location}>
                            <Route exact path='/' render={props => <News {...props} />} />
                            <Route exact path='/primaryweapons' render={props => <AsyncItemPicker {...props} {...nonRouterPropPass} title={'Primary Weapons'} items={this.primaryWeapons} />} />
                            <Route exact path='/primaryweapons/:id/:pre/:build' render={props => <AsyncRangedBuilder {...props} {...nonRouterPropPass} weapons={this.primaryWeapons} mods={this.primaryMods} />} />
                            <Route exact path='/primaryweapons/:id/:pre' render={props => <AsyncRangedBuilder {...props} {...nonRouterPropPass} weapons={this.primaryWeapons} mods={this.primaryMods} />} />
                            <Route exact path='/primaryweapons/:id' render={props => <AsyncRangedBuilder {...props} {...nonRouterPropPass} weapons={this.primaryWeapons} mods={this.primaryMods} />} />
                            <Route exact path='/secondaryweapons' render={props => <AsyncItemPicker {...props} {...nonRouterPropPass} title={'Secondary Weapons'} items={this.secondaryWeapons} />} />
                            <Route exact path='/secondaryweapons/:id/:pre/:build' render={props => <AsyncRangedBuilder {...props} {...nonRouterPropPass} weapons={this.secondaryWeapons} mods={this.secondaryMods} />} />
                            <Route exact path='/secondaryweapons/:id/:pre' render={props => <AsyncRangedBuilder {...props} {...nonRouterPropPass} weapons={this.secondaryWeapons} mods={this.secondaryMods} />} />
                            <Route exact path='/secondaryweapons/:id' render={props => <AsyncRangedBuilder {...props} {...nonRouterPropPass} weapons={this.secondaryWeapons} mods={this.secondaryMods} />} />
                            <Route exact path='/warframes' render={props => <AsyncItemPicker {...props} {...nonRouterPropPass} title={'Warframes'} items={this.warframes} />} />
                            <Route component={TheVoid} />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        )
    }
}

export default withRouter(Routing);