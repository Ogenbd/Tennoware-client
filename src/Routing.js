import React, { PureComponent, Suspense, lazy } from 'react';
import { Transition, animated } from 'react-spring/renderprops';
import { Switch, Route, withRouter } from 'react-router-dom';

import TheVoid from './components/thevoid/TheVoid';
import Unauthorized from './components/unauthorized/Unauthorized';

import Loading from './components/loading/Loading';

// route components
const Register = lazy(() => import('./components/register/Register'));
const News = lazy(() => import('./components/news/News'));
const Privacy = lazy(() => import('./components/privacy/Privacy'));
const Terms = lazy(() => import('./components/terms/Terms'));
const ItemPicker = lazy(() => import('./components/itempicker/ItemPicker'));
const KitgunPicker = lazy(() => import('./components/modularpicker/KitgunPicker'));
const MoaPicker = lazy(() => import('./components/modularpicker/MoaPicker'));
const ZawPicker = lazy(() => import('./components/modularpicker/ZawPicker'));
const MyBuilds = lazy(() => import('./components/mybuilds/MyBuilds'));
const RangedBuilder = lazy(() => import('./routes/RangedBuilder'));
const FrameBuilder = lazy(() => import('./routes/FrameBuilder'));
const ArchwingBuilder = lazy(() => import('./routes/ArchwingBuilder'));
const ArchgunBuilder = lazy(() => import('./routes/ArchgunBuilder'));
const SentinelBuilder = lazy(() => import('./routes/SentinelBuilder'));
const SentinelWeaponBuilder = lazy(() => import('./routes/SentinelWeaponBuilder'));
const BeastBuilder = lazy(() => import('./routes/BeastBuilder'));
const KitgunBuilder = lazy(() => import('./routes/KitgunBuilder'));
const MoaBuilder = lazy(() => import('./routes/MoaBuilder'));
const MeleeBuilder = lazy(() => import('./routes/MeleeBuilder'));
const ArchmeleeBuilder = lazy(() => import('./routes/ArchmeleeBuilder'));
const ZawBuilder = lazy(() => import('./routes/ZawBuilder'));

// data imports
const archgunStats = () => import('./data/archgunstats' /* webpackChunkName: "argss" */);
const archgunLandStats = () => import('./data/archgunlandstats' /* webpackChunkName: "argls" */);
const archgunList = () => import('./data/archgunlist' /* webpackChunkName: "argl" */);
const primaryWeaponStats = () => import('./data/primaryweaponstats' /* webpackChunkName: "pris" */);
const primaryWeaponList = () => import('./data/primaryweaponlist' /* webpackChunkName: "pril" */);
const secondaryWeaponStats = () => import('./data/secondaryweaponstats' /* webpackChunkName: "secs" */);
const secondaryWeaponList = () => import('./data/secondaryweaponlist' /* webpackChunkName: "secl" */);
const warframeStats = () => import('./data/warframestats' /* webpackChunkName: "wars" */);
const warframeList = () => import('./data/warframelist' /* webpackChunkName: "warl" */);
const archwingStats = () => import('./data/archwingstats' /* webpackChunkName: "arws" */);
const archwingList = () => import('./data/archwinglist' /* webpackChunkName: "arwl" */);
const sentinelStats = () => import('./data/sentinelstats' /* webpackChunkName: "sens" */);
const sentinelList = () => import('./data/sentinellist' /* webpackChunkName: "senl" */);
const sentinelWeaponStats = () => import('./data/sentinelweaponstats' /* webpackChunkName: "sews" */);
const sentinelWeaponList = () => import('./data/sentinelweaponlist' /* webpackChunkName: "sewl" */);
const beastStats = () => import('./data/beaststats' /* webpackChunkName: "beas" */);
const beastList = () => import('./data/beastlist' /* webpackChunkName: "beal" */);
const primaryMods = () => import('./data/primarymods' /* webpackChunkName: "prim" */);
const secondaryMods = () => import('./data/secondarymods' /* webpackChunkName: "secm" */);
const warframeMods = () => import('./data/warframemods' /* webpackChunkName: "warm" */);
const archwingMods = () => import('./data/archwingmods' /* webpackChunkName: "arwm" */);
const archgunMods = () => import('./data/archgunmods' /* webpackChunkName: "argm" */);
const companionMods = () => import('./data/companionmods' /* webpackChunkName: "comm" */);
const kitguns = () => import('./data/kitguns' /* webpackChunkName: "kitg" */);
const moas = () => import('./data/moas' /* webpackChunkName: "moas" */);
const meleeWeaponList = () => import('./data/meleeweaponlist' /* webpackChunkName: "mell" */);
const meleeWeaponStats = () => import('./data/meleeweaponstats' /* webpackChunkName: "mels" */);
const meleeMods = () => import('./data/meleemods' /* webpackChunkName: "melm" */);
const archmeleeMods = () => import('./data/archmeleemods' /* webpackChunkName: "armm" */);
const archmeleeList = () => import('./data/archmeleelist' /* webpackChunkName: "arml" */);
const archmeleeStats = () => import('./data/archmeleestats' /* webpackChunkName: "arms" */);
const zaws = () => import('./data/zaws' /* webpackChunkName: "zaws" */);
const warframeArcanes = () => import('./data/warframearcanes' /* webpackChunkName: "warc" */);
const zawArcanes = () => import('./data/zawarcanes' /* webpackChunkName: "zarc" */);
const kitgunArcanes = () => import('./data/kitgunarcanes' /* webpackChunkName: "karc" */);


export class Routing extends PureComponent {
    render() {
        let appProps = {
            viewWidth: this.props.viewWidth,
            user: this.props.user,
            online: this.props.online,
            updateRequired: this.props.updateRequired
        }
        let currLocation = this.props.location;
        return (
            <Transition
                native
                items={currLocation}
                keys={currLocation => currLocation.pathname}
                config={{ duration: 300 }}
                from={{ opacity: 0 }}
                enter={{ opacity: 1 }}
                leave={{ opacity: 0 }}>
                {currLocation => style => (
                    <animated.div style={style}>
                        <Suspense fallback={<Loading />}>
                            <Switch location={currLocation}>
                                <Route exact path='/' render={props => <News {...props} {...appProps} />} />
                                <Route exact path='/mybuilds' render={props => <MyBuilds {...props} {...appProps} primaryweapons={primaryWeaponList} secondaryweapons={secondaryWeaponList} warframes={warframeList} archwings={archwingList} archguns={archgunList} sentinels={sentinelList} sentinelweapons={sentinelWeaponList} beasts={beastList} kitguns={kitguns} moas={moas} meleeweapons={meleeWeaponList} archmelee={archmeleeList} zaws={zaws} />} />
                                <Route exact path='/primaryweapons/:id/:pre/:build' render={props => <RangedBuilder {...props} {...appProps} type={'primaryweapons'} items={primaryWeaponStats} mods={primaryMods} />} />
                                <Route exact path='/primaryweapons/:id/:pre' render={props => <RangedBuilder {...props} {...appProps} type={'primaryweapons'} items={primaryWeaponStats} mods={primaryMods} />} />
                                <Route exact path='/primaryweapons/:id' render={props => <RangedBuilder {...props} {...appProps} type={'primaryweapons'} items={primaryWeaponStats} mods={primaryMods} />} />
                                <Route exact path='/primaryweapons' render={props => <ItemPicker {...props} {...appProps} title={'PRIMARY WEAPONS'} items={primaryWeaponList} />} />
                                <Route exact path='/secondaryweapons/:id/:pre/:build' render={props => <RangedBuilder {...props} {...appProps} type={'secondaryweapons'} items={secondaryWeaponStats} mods={secondaryMods} />} />
                                <Route exact path='/secondaryweapons/:id/:pre' render={props => <RangedBuilder {...props} {...appProps} type={'secondaryweapons'} items={secondaryWeaponStats} mods={secondaryMods} />} />
                                <Route exact path='/secondaryweapons/:id' render={props => <RangedBuilder {...props} {...appProps} type={'secondaryweapons'} items={secondaryWeaponStats} mods={secondaryMods} />} />
                                <Route exact path='/secondaryweapons' render={props => <ItemPicker {...props} {...appProps} title={'SECONDARY WEAPONS'} items={secondaryWeaponList} />} />
                                <Route exact path='/warframes/:id/:pre/:build' render={props => <FrameBuilder {...props} {...appProps} type={'warframes'} items={warframeStats} mods={warframeMods} arcanes={warframeArcanes} />} />
                                <Route exact path='/warframes/:id/:pre' render={props => <FrameBuilder {...props} {...appProps} type={'warframes'} items={warframeStats} mods={warframeMods} arcanes={warframeArcanes} />} />
                                <Route exact path='/warframes/:id' render={props => <FrameBuilder {...props} {...appProps} type={'warframes'} items={warframeStats} mods={warframeMods} arcanes={warframeArcanes} />} />
                                <Route exact path='/warframes' render={props => <ItemPicker {...props} {...appProps} title={'WARFRAMES'} items={warframeList} />} />
                                <Route exact path='/archwings/:id/:pre/:build' render={props => <ArchwingBuilder {...props} {...appProps} type={'archwings'} items={archwingStats} mods={archwingMods} />} />
                                <Route exact path='/archwings/:id/:pre' render={props => <ArchwingBuilder {...props} {...appProps} type={'archwings'} items={archwingStats} mods={archwingMods} />} />
                                <Route exact path='/archwings/:id' render={props => <ArchwingBuilder {...props} {...appProps} type={'archwings'} items={archwingStats} mods={archwingMods} />} />
                                <Route exact path='/archwings' render={props => <ItemPicker {...props} {...appProps} title={'ARCHWINGS'} items={archwingList} />} />
                                <Route exact path='/archguns-space/:id/:pre/:build' render={props => <ArchgunBuilder {...props} {...appProps} type={'archguns-space'} locType={'SPACE'} items={archgunStats} mods={archgunMods} />} />
                                <Route exact path='/archguns-space/:id/:pre' render={props => <ArchgunBuilder {...props} {...appProps} type={'archguns-space'} locType={'SPACE'} items={archgunStats} mods={archgunMods} />} />
                                <Route exact path='/archguns-space/:id' render={props => <ArchgunBuilder {...props} {...appProps} type={'archguns-space'} locType={'SPACE'} items={archgunStats} mods={archgunMods} />} />
                                <Route exact path='/archguns-space' render={props => <ItemPicker {...props} {...appProps} title={'ARCHGUNS - SPACE'} items={archgunList} />} />
                                <Route exact path='/archguns-land/:id/:pre/:build' render={props => <ArchgunBuilder {...props} {...appProps} type={'archguns-land'} locType={'LAND'} items={archgunLandStats} mods={archgunMods} />} />
                                <Route exact path='/archguns-land/:id/:pre' render={props => <ArchgunBuilder {...props} {...appProps} type={'archguns-land'} locType={'LAND'} items={archgunLandStats} mods={archgunMods} />} />
                                <Route exact path='/archguns-land/:id' render={props => <ArchgunBuilder {...props} {...appProps} type={'archguns-land'} locType={'LAND'} items={archgunLandStats} mods={archgunMods} />} />
                                <Route exact path='/archguns-land' render={props => <ItemPicker {...props} {...appProps} title={'ARCHGUNS - LAND'} items={archgunList} />} />
                                <Route exact path='/sentinels/:id/:pre/:build' render={props => <SentinelBuilder {...props} {...appProps} type={'sentinels'} items={sentinelStats} mods={companionMods} />} />
                                <Route exact path='/sentinels/:id/:pre' render={props => <SentinelBuilder {...props} {...appProps} type={'sentinels'} items={sentinelStats} mods={companionMods} />} />
                                <Route exact path='/sentinels/:id' render={props => <SentinelBuilder {...props} {...appProps} type={'sentinels'} items={sentinelStats} mods={companionMods} />} />
                                <Route exact path='/sentinels' render={props => <ItemPicker {...props} {...appProps} title={'SENTINELS'} items={sentinelList} />} />
                                <Route exact path='/sentinelweapons/:id/:pre/:build' render={props => <SentinelWeaponBuilder {...props} {...appProps} type={'sentinelweapons'} items={sentinelWeaponStats} primaryMods={primaryMods} secondaryMods={secondaryMods} meleeMods={meleeMods} />} />
                                <Route exact path='/sentinelweapons/:id/:pre' render={props => <SentinelWeaponBuilder {...props} {...appProps} type={'sentinelweapons'} items={sentinelWeaponStats} primaryMods={primaryMods} secondaryMods={secondaryMods} meleeMods={meleeMods} />} />
                                <Route exact path='/sentinelweapons/:id' render={props => <SentinelWeaponBuilder {...props} {...appProps} type={'sentinelweapons'} items={sentinelWeaponStats} primaryMods={primaryMods} secondaryMods={secondaryMods} meleeMods={meleeMods} />} />
                                <Route exact path='/sentinelweapons' render={props => <ItemPicker {...props} {...appProps} title={'ROBOTIC WEAPONS'} items={sentinelWeaponList} />} />
                                <Route exact path='/beasts/:id/:pre/:build' render={props => <BeastBuilder {...props} {...appProps} type={'beasts'} items={beastStats} mods={companionMods} />} />
                                <Route exact path='/beasts/:id/:pre' render={props => <BeastBuilder {...props} {...appProps} type={'beasts'} items={beastStats} mods={companionMods} />} />
                                <Route exact path='/beasts/:id' render={props => <BeastBuilder {...props} {...appProps} type={'beasts'} items={beastStats} mods={companionMods} />} />
                                <Route exact path='/beasts' render={props => <ItemPicker {...props} {...appProps} title={'BEASTS'} items={beastList} />} />
                                <Route exact path='/kitguns/:id/:pre/:build' render={props => <KitgunBuilder {...props} {...appProps} type={'kitguns'} items={kitguns} mods={secondaryMods} arcanes={kitgunArcanes} />} />
                                <Route exact path='/kitguns/:id/:pre' render={props => <KitgunBuilder {...props} {...appProps} type={'kitguns'} items={kitguns} mods={secondaryMods} arcanes={kitgunArcanes} />} />
                                <Route exact path='/kitguns/:id' render={props => <KitgunBuilder {...props} {...appProps} type={'kitguns'} items={kitguns} mods={secondaryMods} arcanes={kitgunArcanes} />} />
                                <Route exact path='/kitguns' render={props => <KitgunPicker {...props} {...appProps} items={kitguns} />} />
                                <Route exact path='/moas/:id/:pre/:build' render={props => <MoaBuilder {...props} {...appProps} type={'moas'} items={moas} mods={companionMods} />} />
                                <Route exact path='/moas/:id/:pre' render={props => <MoaBuilder {...props} {...appProps} type={'moas'} items={moas} mods={companionMods} />} />
                                <Route exact path='/moas/:id' render={props => <MoaBuilder {...props} {...appProps} type={'moas'} items={moas} mods={companionMods} />} />
                                <Route exact path='/moas' render={props => <MoaPicker {...props} {...appProps} items={moas} />} />
                                <Route exact path='/zaws/:id/:pre/:build' render={props => <ZawBuilder {...props} {...appProps} type={'zaws'} items={zaws} mods={meleeMods} arcanes={zawArcanes} />} />
                                <Route exact path='/zaws/:id/:pre' render={props => <ZawBuilder {...props} {...appProps} type={'zaws'} items={zaws} mods={meleeMods} arcanes={zawArcanes} />} />
                                <Route exact path='/zaws/:id' render={props => <ZawBuilder {...props} {...appProps} type={'zaws'} items={zaws} mods={meleeMods} arcanes={zawArcanes} />} />
                                <Route exact path='/zaws' render={props => <ZawPicker {...props} {...appProps} items={zaws} />} />
                                <Route exact path='/meleeweapons/:id/:pre/:build' render={props => <MeleeBuilder {...props} {...appProps} type={'meleeweapons'} items={meleeWeaponStats} mods={meleeMods} />} />
                                <Route exact path='/meleeweapons/:id/:pre' render={props => <MeleeBuilder {...props} {...appProps} type={'meleeweapons'} items={meleeWeaponStats} mods={meleeMods} />} />
                                <Route exact path='/meleeweapons/:id' render={props => <MeleeBuilder {...props} {...appProps} type={'meleeweapons'} items={meleeWeaponStats} mods={meleeMods} />} />
                                <Route exact path='/meleeweapons' render={props => <ItemPicker {...props} {...appProps} title={'MELEE WEAPONS'} items={meleeWeaponList} />} />
                                <Route exact path='/archmelee/:id/:pre/:build' render={props => <ArchmeleeBuilder {...props} {...appProps} type={'archmelee'} items={archmeleeStats} mods={archmeleeMods} />} />
                                <Route exact path='/archmelee/:id/:pre' render={props => <ArchmeleeBuilder {...props} {...appProps} type={'archmelee'} items={archmeleeStats} mods={archmeleeMods} />} />
                                <Route exact path='/archmelee/:id' render={props => <ArchmeleeBuilder {...props} {...appProps} type={'archmelee'} items={archmeleeStats} mods={archmeleeMods} />} />
                                <Route exact path='/archmelee' render={props => <ItemPicker {...props} {...appProps} title={'ARCHMELEE'} items={archmeleeList} />} />
                                <Route exact path='/register' render={() => <Register logUser={this.props.logUser} user={this.props.user} />} />
                                <Route exact path='/terms' render={() => <Terms />} />
                                <Route exact path='/privacy' render={() => <Privacy />} />
                                <Route exact path='/unauthorized' render={() => <Unauthorized />} />
                                <Route component={TheVoid} />
                            </Switch>
                        </Suspense>
                    </animated.div>
                )}
            </Transition>
        )
    }
}

export default withRouter(Routing);