import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { Switch, Route, withRouter } from 'react-router-dom';
import TheVoid from './components/thevoid/TheVoid';
import News from './components/news/News';
import Unauthorized from './components/unauthorized/Unauthorized';

// const Loading = () => <img className="loading-gif" src={require('./assets/loader.svg')} alt="Loading..." />
// const Loading = () => <div className="screen loading-screen"><div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>

// async imports for react/webpack code-splitting
const ItemPicker = Loadable({
    loader: () => import('./components/itempicker/ItemPicker'),
    loading: () => null,
});

const KitgunPicker = Loadable({
    loader: () => import('./components/modularpicker/KitgunPicker'),
    loading: () => null,
});

const MoaPicker = Loadable({
    loader: () => import('./components/modularpicker/MoaPicker'),
    loading: () => null,
});

const MyBuilds = Loadable({
    loader: () => import('./components/mybuilds/MyBuilds'),
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

const SentinelBuilder = Loadable({
    loader: () => import('./routes/SentinelBuilder'),
    loading: () => null,
});

const SentinelWeaponBuilder = Loadable({
    loader: () => import('./routes/SentinelWeaponBuilder'),
    loading: () => null,
});

const BeastBuilder = Loadable({
    loader: () => import('./routes/BeastBuilder'),
    loading: () => null,
});

const KitgunBuilder = Loadable({
    loader: () => import('./routes/KitgunBuilder'),
    loading: () => null,
});

const MoaBuilder = Loadable({
    loader: () => import('./routes/MoaBuilder'),
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

const getSentinels = () => {
    let data = import('./data/sentinels');
    return data;
}

const getCompanionMods = () => {
    let data = import('./data/companionmods');
    return data;
}

const getSentinelWeapons = () => {
    let data = import('./data/sentinelweapons');
    return data;
}

const getBeasts = () => {
    let data = import('./data/beasts');
    return data;
}

const getKitguns = () => {
    let data = import('./data/kitguns');
    return data;
}

const getMoas = () => {
    let data = import('./data/moas');
    return data;
}

export class Routing extends Component {

    primaryWeapons = async () => {
        let weapons = await getPrimaryWeapons();
        return weapons.default;
    }

    primaryMods = async () => {
        let mods = await getPrimaryMods();
        return mods.default;
    }

    secondaryWeapons = async () => {
        let weapons = await getSecondaryWeapons();
        return weapons.default;
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
        let frames = await getArchwings();
        return frames.default;
    }

    archwingMods = async () => {
        let mods = await getArchwingMods();
        return mods.default;
    }

    archguns = async () => {
        let weapons = await getArchguns();
        return weapons.default;
    }

    archgunMods = async () => {
        let mods = await getArchgunMods();
        return mods.default;
    }

    sentinels = async () => {
        let frames = await getSentinels();
        return frames.default;
    }

    companionMods = async () => {
        let mods = await getCompanionMods();
        return mods.default;
    }

    sentinelWeapons = async () => {
        let weapons = await getSentinelWeapons();
        return weapons.default;
    }

    beasts = async () => {
        let frames = await getBeasts();
        return frames.default;
    }

    kitguns = async () => {
        let data = await getKitguns();
        return data.default;
    }

    moas = async () => {
        let data = await getMoas();
        return data.default;
    }

    render() {
        let nonRouterPropPass = {
            viewWidth: this.props.viewWidth,
            user: this.props.user,
            online: this.props.online
        }
        return (
            // <TransitionGroup className="main">
            // <CSSTransition key={this.props.location.key} className="screen" classNames="fade" in={true} appear={true} timeout={300}>
            <div className="main">
                <Switch key={this.props.location.key}>
                    <Route exact path='/' render={props => <News {...props} {...nonRouterPropPass} />} />
                    <Route exact path='/mybuilds' render={props => <MyBuilds {...props} {...nonRouterPropPass} />} />
                    <Route exact path='/primaryweapons/:id/:pre/:build' render={props => <RangedBuilder {...props} {...nonRouterPropPass} type={'primaryweapons'} items={this.primaryWeapons} mods={this.primaryMods} />} />
                    <Route exact path='/primaryweapons/:id/:pre' render={props => <RangedBuilder {...props} {...nonRouterPropPass} type={'primaryweapons'} items={this.primaryWeapons} mods={this.primaryMods} />} />
                    <Route exact path='/primaryweapons/:id' render={props => <RangedBuilder {...props} {...nonRouterPropPass} type={'primaryweapons'} items={this.primaryWeapons} mods={this.primaryMods} />} />
                    <Route exact path='/primaryweapons' render={props => <ItemPicker {...props} {...nonRouterPropPass} title={'PRIMARY WEAPONS'} items={this.primaryWeapons} />} />
                    <Route exact path='/secondaryweapons/:id/:pre/:build' render={props => <RangedBuilder {...props} {...nonRouterPropPass} type={'secondaryweapons'} items={this.secondaryWeapons} mods={this.secondaryMods} />} />
                    <Route exact path='/secondaryweapons/:id/:pre' render={props => <RangedBuilder {...props} {...nonRouterPropPass} type={'secondaryweapons'} items={this.secondaryWeapons} mods={this.secondaryMods} />} />
                    <Route exact path='/secondaryweapons/:id' render={props => <RangedBuilder {...props} {...nonRouterPropPass} type={'secondaryweapons'} items={this.secondaryWeapons} mods={this.secondaryMods} />} />
                    <Route exact path='/secondaryweapons' render={props => <ItemPicker {...props} {...nonRouterPropPass} title={'SECONDARY WEAPONS'} items={this.secondaryWeapons} />} />
                    <Route exact path='/warframes/:id/:pre/:build' render={props => <FrameBuilder {...props} {...nonRouterPropPass} type={'warframes'} items={this.warframes} mods={this.warframeMods} />} />
                    <Route exact path='/warframes/:id/:pre' render={props => <FrameBuilder {...props} {...nonRouterPropPass} type={'warframes'} items={this.warframes} mods={this.warframeMods} />} />
                    <Route exact path='/warframes/:id' render={props => <FrameBuilder {...props} {...nonRouterPropPass} type={'warframes'} items={this.warframes} mods={this.warframeMods} />} />
                    <Route exact path='/warframes' render={props => <ItemPicker {...props} {...nonRouterPropPass} title={'WARFRAMES'} items={this.warframes} />} />
                    <Route exact path='/archwings/:id/:pre/:build' render={props => <ArchwingBuilder {...props} {...nonRouterPropPass} type={'archwings'} items={this.archwings} mods={this.archwingMods} />} />
                    <Route exact path='/archwings/:id/:pre' render={props => <ArchwingBuilder {...props} {...nonRouterPropPass} type={'archwings'} items={this.archwings} mods={this.archwingMods} />} />
                    <Route exact path='/archwings/:id' render={props => <ArchwingBuilder {...props} {...nonRouterPropPass} type={'archwings'} items={this.archwings} mods={this.archwingMods} />} />
                    <Route exact path='/archwings' render={props => <ItemPicker {...props} {...nonRouterPropPass} title={'ARCHWINGS'} items={this.archwings} />} />
                    <Route exact path='/archguns/:id/:pre/:build' render={props => <ArchgunBuilder {...props} {...nonRouterPropPass} type={'archguns'} items={this.archguns} mods={this.archgunMods} />} />
                    <Route exact path='/archguns/:id/:pre' render={props => <ArchgunBuilder {...props} {...nonRouterPropPass} type={'archguns'} items={this.archguns} mods={this.archgunMods} />} />
                    <Route exact path='/archguns/:id' render={props => <ArchgunBuilder {...props} {...nonRouterPropPass} type={'archguns'} items={this.archguns} mods={this.archgunMods} />} />
                    <Route exact path='/archguns' render={props => <ItemPicker {...props} {...nonRouterPropPass} title={'ARCHGUNS'} items={this.archguns} />} />
                    <Route exact path='/sentinels/:id/:pre/:build' render={props => <SentinelBuilder {...props} {...nonRouterPropPass} type={'sentinels'} items={this.sentinels} mods={this.companionMods} />} />
                    <Route exact path='/sentinels/:id/:pre' render={props => <SentinelBuilder {...props} {...nonRouterPropPass} type={'sentinels'} items={this.sentinels} mods={this.companionMods} />} />
                    <Route exact path='/sentinels/:id' render={props => <SentinelBuilder {...props} {...nonRouterPropPass} type={'sentinels'} items={this.sentinels} mods={this.companionMods} />} />
                    <Route exact path='/sentinels' render={props => <ItemPicker {...props} {...nonRouterPropPass} title={'SENTINELS'} items={this.sentinels} />} />
                    <Route exact path='/sentinelweapons/:id/:pre/:build' render={props => <SentinelWeaponBuilder {...props} {...nonRouterPropPass} type={'sentinelweapons'} items={this.sentinelWeapons} primaryMods={this.primaryMods} secondaryMods={this.secondaryMods} />} />
                    <Route exact path='/sentinelweapons/:id/:pre' render={props => <SentinelWeaponBuilder {...props} {...nonRouterPropPass} type={'sentinelweapons'} items={this.sentinelWeapons} primaryMods={this.primaryMods} secondaryMods={this.secondaryMods} />} />
                    <Route exact path='/sentinelweapons/:id' render={props => <SentinelWeaponBuilder {...props} {...nonRouterPropPass} type={'sentinelweapons'} items={this.sentinelWeapons} primaryMods={this.primaryMods} secondaryMods={this.secondaryMods} />} />
                    <Route exact path='/sentinelweapons' render={props => <ItemPicker {...props} {...nonRouterPropPass} title={'ROBOTIC WEAPONS'} items={this.sentinelWeapons} />} />
                    <Route exact path='/beasts/:id/:pre/:build' render={props => <BeastBuilder {...props} {...nonRouterPropPass} type={'beasts'} items={this.beasts} mods={this.companionMods} />} />
                    <Route exact path='/beasts/:id/:pre' render={props => <BeastBuilder {...props} {...nonRouterPropPass} type={'beasts'} items={this.beasts} mods={this.companionMods} />} />
                    <Route exact path='/beasts/:id' render={props => <BeastBuilder {...props} {...nonRouterPropPass} type={'beasts'} items={this.beasts} mods={this.companionMods} />} />
                    <Route exact path='/beasts' render={props => <ItemPicker {...props} {...nonRouterPropPass} title={'BEASTS'} items={this.beasts} />} />
                    <Route exact path='/kitguns/:id/:pre/:build' render={props => <KitgunBuilder {...props} {...nonRouterPropPass} type={'kitguns'} items={this.kitguns} mods={this.secondaryMods} />} />
                    <Route exact path='/kitguns/:id/:pre' render={props => <KitgunBuilder {...props} {...nonRouterPropPass} type={'kitguns'} items={this.kitguns} mods={this.secondaryMods} />} />
                    <Route exact path='/kitguns/:id' render={props => <KitgunBuilder {...props} {...nonRouterPropPass} type={'kitguns'} items={this.kitguns} mods={this.secondaryMods} />} />
                    <Route exact path='/kitguns' render={props => <KitgunPicker {...props} {...nonRouterPropPass} items={this.kitguns} />} />
                    <Route exact path='/moas/:id/:pre/:build' render={props => <MoaBuilder {...props} {...nonRouterPropPass} type={'moas'} items={this.moas} mods={this.companionMods} />} />
                    <Route exact path='/moas/:id/:pre' render={props => <MoaBuilder {...props} {...nonRouterPropPass} type={'moas'} items={this.moas} mods={this.companionMods} />} />
                    <Route exact path='/moas/:id' render={props => <MoaBuilder {...props} {...nonRouterPropPass} type={'moas'} items={this.moas} mods={this.companionMods} />} />
                    <Route exact path='/moas' render={props => <MoaPicker {...props} {...nonRouterPropPass} items={this.moas} />} />
                    <Route exact path='/unauthorized' component={Unauthorized} />
                    <Route component={TheVoid} />
                </Switch>
            </div>
            // {/* </CSSTransition> */ }
            // {/* </TransitionGroup > */ }
        )
    }
}

export default withRouter(Routing);