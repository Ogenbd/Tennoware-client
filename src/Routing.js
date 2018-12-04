import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { Switch, Route, withRouter } from 'react-router-dom';
import TheVoid from './components/thevoid/TheVoid';
import Unauthorized from './components/unauthorized/Unauthorized';

// async imports for react/webpack code-splitting

// route components
const News = Loadable({
    loader: () => import('./components/news/News'),
    loading: () => null,
});

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


// data imports
const getArchgunStats = () => {
    let data = import('./data/archgunstats');
    return data;
}
const getArchgunList = () => {
    let data = import('./data/archgunlist');
    return data;
}

const getPrimaryWeaponStats = () => {
    let data = import('./data/primaryweaponstats');
    return data;
}

const getPrimaryWeaponList = () => {
    let data = import('./data/primaryweaponlist');
    return data;
}

const getSecondaryWeaponStats = () => {
    let data = import('./data/secondaryweaponstats');
    return data;
}

const getSecondaryWeaponList = () => {
    let data = import('./data/secondaryweaponlist');
    return data;
}

const getWarframeStats = () => {
    let data = import('./data/warframestats');
    return data;
}

const getWarframeList = () => {
    let data = import('./data/warframelist');
    return data;
}

const getArchwingStats = () => {
    let data = import('./data/archwingstats');
    return data;
}

const getArchwingList = () => {
    let data = import('./data/archwinglist');
    return data;
}

const getSentinelStats = () => {
    let data = import('./data/sentinelstats');
    return data;
}

const getSentinelList = () => {
    let data = import('./data/sentinellist');
    return data;
}

const getSentinelWeaponStats = () => {
    let data = import('./data/sentinelweaponstats');
    return data;
}

const getSentinelWeaponList = () => {
    let data = import('./data/sentinelweaponlist');
    return data;
}

const getBeastStats = () => {
    let data = import('./data/beaststats');
    return data;
}

const getBeastList = () => {
    let data = import('./data/beastlist');
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


const getWarframeMods = () => {
    let data = import('./data/warframemods');
    return data;
}

const getArchwingMods = () => {
    let data = import('./data/archwingmods');
    return data;
}

const getArchgunMods = () => {
    let data = import('./data/archgunmods');
    return data;
}

const getCompanionMods = () => {
    let data = import('./data/companionmods');
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
    
    archgunList = async () => {
        let weapons = await getArchgunList();
        return weapons.default;
    }

    archgunStats = async () => {
        let weapons = await getArchgunStats();
        return weapons.default;
    }

    primaryWeaponList = async () => {
        let weapons = await getPrimaryWeaponList();
        return weapons.default;
    }

    primaryWeaponStats = async () => {
        let weapons = await getPrimaryWeaponStats();
        return weapons.default;
    }

    primaryMods = async () => {
        let mods = await getPrimaryMods();
        return mods.default;
    }

    secondaryWeaponList = async () => {
        let weapons = await getSecondaryWeaponList();
        return weapons.default;
    }

    secondaryWeaponStats = async () => {
        let weapons = await getSecondaryWeaponStats();
        return weapons.default;
    }

    secondaryMods = async () => {
        let mods = await getSecondaryMods();
        return mods.default;
    }

    warframeList = async () => {
        let frames = await getWarframeList();
        return frames.default;
    }

    warframeStats = async () => {
        let frames = await getWarframeStats();
        return frames.default;
    }

    warframeMods = async () => {
        let mods = await getWarframeMods();
        return mods.default;
    }

    archwingList = async () => {
        let frames = await getArchwingList();
        return frames.default;
    }

    archwingStats = async () => {
        let frames = await getArchwingStats();
        return frames.default;
    }

    archwingMods = async () => {
        let mods = await getArchwingMods();
        return mods.default;
    }

    archgunMods = async () => {
        let mods = await getArchgunMods();
        return mods.default;
    }

    sentinelList = async () => {
        let frames = await getSentinelList();
        return frames.default;
    }

    sentinelStats = async () => {
        let frames = await getSentinelStats();
        return frames.default;
    }

    companionMods = async () => {
        let mods = await getCompanionMods();
        return mods.default;
    }

    sentinelWeaponList = async () => {
        let weapons = await getSentinelWeaponList();
        return weapons.default;
    }

    sentinelWeaponStats = async () => {
        let weapons = await getSentinelWeaponStats();
        return weapons.default;
    }

    beastList = async () => {
        let frames = await getBeastList();
        return frames.default;
    }

    beastStats = async () => {
        let frames = await getBeastStats();
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
                    <Route exact path='/mybuilds' render={props => <MyBuilds {...props} {...nonRouterPropPass} primaryweapons={this.primaryWeaponList} secondaryweapons={this.secondaryWeaponList} warframes={this.warframeList} archwings={this.archwingList} archguns={this.archgunList} sentinels={this.sentinelList} sentinelweapons={this.sentinelWeaponList} beasts={this.beastList} kitguns={this.kitguns} moas={this.moas}/>} />
                    <Route exact path='/primaryweapons/:id/:pre/:build' render={props => <RangedBuilder {...props} {...nonRouterPropPass} type={'primaryweapons'} items={this.primaryWeaponStats} mods={this.primaryMods} />} />
                    <Route exact path='/primaryweapons/:id/:pre' render={props => <RangedBuilder {...props} {...nonRouterPropPass} type={'primaryweapons'} items={this.primaryWeaponStats} mods={this.primaryMods} />} />
                    <Route exact path='/primaryweapons/:id' render={props => <RangedBuilder {...props} {...nonRouterPropPass} type={'primaryweapons'} items={this.primaryWeaponStats} mods={this.primaryMods} />} />
                    <Route exact path='/primaryweapons' render={props => <ItemPicker {...props} {...nonRouterPropPass} title={'PRIMARY WEAPONS'} items={this.primaryWeaponList} />} />
                    <Route exact path='/secondaryweapons/:id/:pre/:build' render={props => <RangedBuilder {...props} {...nonRouterPropPass} type={'secondaryweapons'} items={this.secondaryWeaponStats} mods={this.secondaryMods} />} />
                    <Route exact path='/secondaryweapons/:id/:pre' render={props => <RangedBuilder {...props} {...nonRouterPropPass} type={'secondaryweapons'} items={this.secondaryWeaponStats} mods={this.secondaryMods} />} />
                    <Route exact path='/secondaryweapons/:id' render={props => <RangedBuilder {...props} {...nonRouterPropPass} type={'secondaryweapons'} items={this.secondaryWeaponStats} mods={this.secondaryMods} />} />
                    <Route exact path='/secondaryweapons' render={props => <ItemPicker {...props} {...nonRouterPropPass} title={'SECONDARY WEAPONS'} items={this.secondaryWeaponList} />} />
                    <Route exact path='/warframes/:id/:pre/:build' render={props => <FrameBuilder {...props} {...nonRouterPropPass} type={'warframes'} items={this.warframeStats} mods={this.warframeMods} />} />
                    <Route exact path='/warframes/:id/:pre' render={props => <FrameBuilder {...props} {...nonRouterPropPass} type={'warframes'} items={this.warframeStats} mods={this.warframeMods} />} />
                    <Route exact path='/warframes/:id' render={props => <FrameBuilder {...props} {...nonRouterPropPass} type={'warframes'} items={this.warframeStats} mods={this.warframeMods} />} />
                    <Route exact path='/warframes' render={props => <ItemPicker {...props} {...nonRouterPropPass} title={'WARFRAMES'} items={this.warframeList} />} />
                    <Route exact path='/archwings/:id/:pre/:build' render={props => <ArchwingBuilder {...props} {...nonRouterPropPass} type={'archwings'} items={this.archwingStats} mods={this.archwingMods} />} />
                    <Route exact path='/archwings/:id/:pre' render={props => <ArchwingBuilder {...props} {...nonRouterPropPass} type={'archwings'} items={this.archwingStats} mods={this.archwingMods} />} />
                    <Route exact path='/archwings/:id' render={props => <ArchwingBuilder {...props} {...nonRouterPropPass} type={'archwings'} items={this.archwingStats} mods={this.archwingMods} />} />
                    <Route exact path='/archwings' render={props => <ItemPicker {...props} {...nonRouterPropPass} title={'ARCHWINGS'} items={this.archwingList} />} />
                    <Route exact path='/archguns/:id/:pre/:build' render={props => <ArchgunBuilder {...props} {...nonRouterPropPass} type={'archguns'} items={this.archgunStats} mods={this.archgunMods} />} />
                    <Route exact path='/archguns/:id/:pre' render={props => <ArchgunBuilder {...props} {...nonRouterPropPass} type={'archguns'} items={this.archgunStats} mods={this.archgunMods} />} />
                    <Route exact path='/archguns/:id' render={props => <ArchgunBuilder {...props} {...nonRouterPropPass} type={'archguns'} items={this.archgunStats} mods={this.archgunMods} />} />
                    <Route exact path='/archguns' render={props => <ItemPicker {...props} {...nonRouterPropPass} title={'ARCHGUNS'} items={this.archgunList} />} />
                    <Route exact path='/sentinels/:id/:pre/:build' render={props => <SentinelBuilder {...props} {...nonRouterPropPass} type={'sentinels'} items={this.sentinelStats} mods={this.companionMods} />} />
                    <Route exact path='/sentinels/:id/:pre' render={props => <SentinelBuilder {...props} {...nonRouterPropPass} type={'sentinels'} items={this.sentinelStats} mods={this.companionMods} />} />
                    <Route exact path='/sentinels/:id' render={props => <SentinelBuilder {...props} {...nonRouterPropPass} type={'sentinels'} items={this.sentinelStats} mods={this.companionMods} />} />
                    <Route exact path='/sentinels' render={props => <ItemPicker {...props} {...nonRouterPropPass} title={'SENTINELS'} items={this.sentinelList} />} />
                    <Route exact path='/sentinelweapons/:id/:pre/:build' render={props => <SentinelWeaponBuilder {...props} {...nonRouterPropPass} type={'sentinelweapons'} items={this.sentinelWeaponStats} primaryMods={this.primaryMods} secondaryMods={this.secondaryMods} />} />
                    <Route exact path='/sentinelweapons/:id/:pre' render={props => <SentinelWeaponBuilder {...props} {...nonRouterPropPass} type={'sentinelweapons'} items={this.sentinelWeaponStats} primaryMods={this.primaryMods} secondaryMods={this.secondaryMods} />} />
                    <Route exact path='/sentinelweapons/:id' render={props => <SentinelWeaponBuilder {...props} {...nonRouterPropPass} type={'sentinelweapons'} items={this.sentinelWeaponStats} primaryMods={this.primaryMods} secondaryMods={this.secondaryMods} />} />
                    <Route exact path='/sentinelweapons' render={props => <ItemPicker {...props} {...nonRouterPropPass} title={'ROBOTIC WEAPONS'} items={this.sentinelWeaponList} />} />
                    <Route exact path='/beasts/:id/:pre/:build' render={props => <BeastBuilder {...props} {...nonRouterPropPass} type={'beasts'} items={this.beastStats} mods={this.companionMods} />} />
                    <Route exact path='/beasts/:id/:pre' render={props => <BeastBuilder {...props} {...nonRouterPropPass} type={'beasts'} items={this.beastStats} mods={this.companionMods} />} />
                    <Route exact path='/beasts/:id' render={props => <BeastBuilder {...props} {...nonRouterPropPass} type={'beasts'} items={this.beastStats} mods={this.companionMods} />} />
                    <Route exact path='/beasts' render={props => <ItemPicker {...props} {...nonRouterPropPass} title={'BEASTS'} items={this.beastList} />} />
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