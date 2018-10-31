import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { Switch, Route, withRouter } from 'react-router-dom';
// import { TransitionGroup, CSSTransition } from "react-transition-group";
import TheVoid from './components/thevoid/TheVoid';
import News from './components/news/News';

// const Loading = () => <img className="loading-gif" src={require('./assets/loader.svg')} alt="Loading..." />
// const Loading = () => <div className="screen loading-screen"><div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>

// async imports for react/webpack code-splitting
const ItemPicker = Loadable({
    loader: () => import('./components/itempicker/ItemPicker'),
    loading: () => null,
});

const RangedBuilder = Loadable({
    loader: () => import('./routes/RangedBuilder'),
    loading: () => null,
});

const FrameBuilder = Loadable({
    loader: () => import('./routes/FrameBuilder'),
    loading: () => null,
});

const ArchwingBuilder = Loadable({
    loader: () => import('./routes/ArchwingBuilder'),
    loading: () => null,
});

const ArchgunBuilder = Loadable({
    loader: () => import('./routes/ArchgunBuilder'),
    loading: () => null,
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

const getArchwings = () => {
    let data = import('./data/archwings');
    return data;
}

const getArchwingMods = () => {
    let data = import('./data/archwingmods');
    return data;
}

const getArchguns = () => {
    let data = import('./data/archguns');
    return data;
}

const getArchgunMods = () => {
    let data = import('./data/archgunmods');
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

    archwings = async () => {
        let mods = await getArchwings();
        return mods.default;
    }

    archwingMods = async () => {
        let mods = await getArchwingMods();
        return mods.default;
    }

    archguns = async () => {
        let mods = await getArchguns();
        return mods.default;
    }

    archgunMods = async () => {
        let mods = await getArchgunMods();
        return mods.default;
    }

    render() {
        let nonRouterPropPass = {
            viewWidth: this.props.viewWidth,
            user: this.props.user,
        }
        return (
            // <TransitionGroup className="main">
            // <CSSTransition key={this.props.location.key} className="screen" classNames="fade" in={true} appear={true} timeout={300}>
            <div className="main">
                <Switch key={this.props.location.key}>
                    <Route exact path='/' render={props => <News {...props} />} />
                    <Route exact path='/primaryweapons' render={props => <ItemPicker {...props} {...nonRouterPropPass} title={'PRIMARY WEAPONS'} items={this.primaryWeapons} />} />
                    <Route exact path='/primaryweapons/:id/:pre/:build' render={props => <RangedBuilder {...props} {...nonRouterPropPass} type={'primaryweapons'} items={this.primaryWeapons} mods={this.primaryMods} />} />
                    <Route exact path='/primaryweapons/:id/:pre' render={props => <RangedBuilder {...props} {...nonRouterPropPass} type={'primaryweapons'} items={this.primaryWeapons} mods={this.primaryMods} />} />
                    <Route exact path='/primaryweapons/:id' render={props => <RangedBuilder {...props} {...nonRouterPropPass} type={'primaryweapons'} items={this.primaryWeapons} mods={this.primaryMods} />} />
                    <Route exact path='/secondaryweapons' render={props => <ItemPicker {...props} {...nonRouterPropPass}  title={'SECONDARY WEAPONS'} items={this.secondaryWeapons} />} />
                    <Route exact path='/secondaryweapons/:id/:pre/:build' render={props => <RangedBuilder {...props} {...nonRouterPropPass} type={'secondaryweapons'} items={this.secondaryWeapons} mods={this.secondaryMods} />} />
                    <Route exact path='/secondaryweapons/:id/:pre' render={props => <RangedBuilder {...props} {...nonRouterPropPass} type={'secondaryweapons'} items={this.secondaryWeapons} mods={this.secondaryMods} />} />
                    <Route exact path='/secondaryweapons/:id' render={props => <RangedBuilder {...props} {...nonRouterPropPass} type={'secondaryweapons'} items={this.secondaryWeapons} mods={this.secondaryMods} />} />
                    <Route exact path='/warframes' render={props => <ItemPicker {...props} {...nonRouterPropPass} title={'WARFRAMES'} items={this.warframes} />} />
                    <Route exact path='/warframes/:id/:pre/:build' render={props => <FrameBuilder {...props} {...nonRouterPropPass} type={'warframes'} items={this.warframes} mods={this.warframeMods} />} />
                    <Route exact path='/warframes/:id/:pre' render={props => <FrameBuilder {...props} {...nonRouterPropPass} type={'warframes'} items={this.warframes} mods={this.warframeMods} />} />
                    <Route exact path='/warframes/:id' render={props => <FrameBuilder {...props} {...nonRouterPropPass} type={'warframes'} items={this.warframes} mods={this.warframeMods} />} />
                    <Route exact path='/archwings' render={props => <ItemPicker {...props} {...nonRouterPropPass} title={'ARCHWINGS'} items={this.archwings} />} />
                    <Route exact path='/archwings/:id/:pre/:build' render={props => <ArchwingBuilder {...props} {...nonRouterPropPass} type={'archwings'} items={this.archwings} mods={this.archwingMods} />} />
                    <Route exact path='/archwings/:id/:pre' render={props => <ArchwingBuilder {...props} {...nonRouterPropPass} type={'archwings'} items={this.archwings} mods={this.archwingMods} />} />
                    <Route exact path='/archwings/:id' render={props => <ArchwingBuilder {...props} {...nonRouterPropPass} type={'archwings'} items={this.archwings} mods={this.archwingMods} />} />
                    <Route exact path='/archguns' render={props => <ItemPicker {...props} {...nonRouterPropPass} title={'ARCHGUNS'} items={this.archguns} />} />
                    <Route exact path='/archguns/:id/:pre/:build' render={props => <ArchgunBuilder {...props} {...nonRouterPropPass} type={'archguns'} items={this.archguns} mods={this.archgunMods} />} />
                    <Route exact path='/archguns/:id/:pre' render={props => <ArchgunBuilder {...props} {...nonRouterPropPass} type={'archguns'} items={this.archguns} mods={this.archgunMods} />} />
                    <Route exact path='/archguns/:id' render={props => <ArchgunBuilder {...props} {...nonRouterPropPass} type={'archguns'} items={this.archguns} mods={this.archgunMods} />} />
                    <Route component={TheVoid} />
                </Switch>
            </div>
                // {/* </CSSTransition> */ }
        // {/* </TransitionGroup > */ }
        )
    }
}

export default withRouter(Routing);