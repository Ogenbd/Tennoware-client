import React, { Component, lazy, Suspense } from 'react';
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
const archgunStats = () => import('./data/archgunstats' /* webpackChunkName: "argss" */ );
const archgunLandStats = () => import('./data/archgunlandstats' /* webpackChunkName: "argls" */ );
const archgunList = () => import('./data/archgunlist' /* webpackChunkName: "argl" */ );
const primaryWeaponStats = () => import('./data/primaryweaponstats' /* webpackChunkName: "pris" */ );
const primaryWeaponList = () => import('./data/primaryweaponlist' /* webpackChunkName: "pril" */ );
const secondaryWeaponStats = () => import('./data/secondaryweaponstats' /* webpackChunkName: "secs" */ );
const secondaryWeaponList = () => import('./data/secondaryweaponlist' /* webpackChunkName: "secl" */ );
const warframeStats = () => import('./data/warframestats' /* webpackChunkName: "wars" */ );
const warframeList = () => import('./data/warframelist' /* webpackChunkName: "warl" */ );
const archwingStats = () => import('./data/archwingstats' /* webpackChunkName: "arws" */ );
const archwingList = () => import('./data/archwinglist' /* webpackChunkName: "arwl" */ );
const sentinelStats = () => import('./data/sentinelstats' /* webpackChunkName: "sens" */ );
const sentinelList = () => import('./data/sentinellist' /* webpackChunkName: "senl" */ );
const sentinelWeaponStats = () => import('./data/sentinelweaponstats' /* webpackChunkName: "sews" */ );
const sentinelWeaponList = () => import('./data/sentinelweaponlist' /* webpackChunkName: "sewl" */ );
const beastStats = () => import('./data/beaststats' /* webpackChunkName: "beas" */ );
const beastList = () => import('./data/beastlist' /* webpackChunkName: "beal" */ );
const primaryMods = () => import('./data/primarymods' /* webpackChunkName: "prim" */ );
const secondaryMods = () => import('./data/secondarymods' /* webpackChunkName: "secm" */ );
const warframeMods = () => import('./data/warframemods' /* webpackChunkName: "warm" */ );
const archwingMods = () => import('./data/archwingmods' /* webpackChunkName: "arwm" */ );
const archgunMods = () => import('./data/archgunmods' /* webpackChunkName: "argm" */ );
const companionMods = () => import('./data/companionmods' /* webpackChunkName: "comm" */ );
const kitguns = () => import('./data/kitguns' /* webpackChunkName: "kitg" */ );
const moas = () => import('./data/moas' /* webpackChunkName: "moas" */ );
const meleeWeaponList = () => import('./data/meleeweaponlist' /* webpackChunkName: "mell" */ );
const meleeWeaponStats = () => import('./data/meleeweaponstats' /* webpackChunkName: "mels" */ );
const meleeMods = () => import('./data/meleemods' /* webpackChunkName: "melm" */ );
const archmeleeMods = () => import('./data/archmeleemods' /* webpackChunkName: "armm" */ );
const archmeleeList = () => import('./data/archmeleelist' /* webpackChunkName: "arml" */ );
const archmeleeStats = () => import('./data/archmeleestats' /* webpackChunkName: "arms" */ );
const zaws = () => import('./data/zaws' /* webpackChunkName: "zaws" */ );
const warframeArcanes = () => import('./data/warframearcanes' /* webpackChunkName: "warc" */ );


export class Routing extends Component {
    render() {
        let nonRouterPropPass = {
            viewWidth: this.props.viewWidth,
            user: this.props.user,
            online: this.props.online,
            updateRequired: this.props.updateRequired
        }
        return (
            <div className="main">
                <Suspense fallback={<Loading />}>
                    <Switch key={this.props.location.key}>
                        <Route exact path='/' render={props => <News {...props} {...nonRouterPropPass} />} />
                        <Route exact path='/mybuilds' render={props => <MyBuilds {...props} {...nonRouterPropPass} primaryweapons={primaryWeaponList} secondaryweapons={secondaryWeaponList} warframes={warframeList} archwings={archwingList} archguns={archgunList} sentinels={sentinelList} sentinelweapons={sentinelWeaponList} beasts={beastList} kitguns={kitguns} moas={moas} meleeweapons={meleeWeaponList} archmelee={archmeleeList} zaws={zaws} />} />
                        <Route exact path='/primaryweapons/:id/:pre/:build' render={props => <RangedBuilder {...props} {...nonRouterPropPass} type={'primaryweapons'} items={primaryWeaponStats} mods={primaryMods} />} />
                        <Route exact path='/primaryweapons/:id/:pre' render={props => <RangedBuilder {...props} {...nonRouterPropPass} type={'primaryweapons'} items={primaryWeaponStats} mods={primaryMods} />} />
                        <Route exact path='/primaryweapons/:id' render={props => <RangedBuilder {...props} {...nonRouterPropPass} type={'primaryweapons'} items={primaryWeaponStats} mods={primaryMods} />} />
                        <Route exact path='/primaryweapons' render={props => <ItemPicker {...props} {...nonRouterPropPass} title={'PRIMARY WEAPONS'} items={primaryWeaponList} />} />
                        <Route exact path='/secondaryweapons/:id/:pre/:build' render={props => <RangedBuilder {...props} {...nonRouterPropPass} type={'secondaryweapons'} items={secondaryWeaponStats} mods={secondaryMods} />} />
                        <Route exact path='/secondaryweapons/:id/:pre' render={props => <RangedBuilder {...props} {...nonRouterPropPass} type={'secondaryweapons'} items={secondaryWeaponStats} mods={secondaryMods} />} />
                        <Route exact path='/secondaryweapons/:id' render={props => <RangedBuilder {...props} {...nonRouterPropPass} type={'secondaryweapons'} items={secondaryWeaponStats} mods={secondaryMods} />} />
                        <Route exact path='/secondaryweapons' render={props => <ItemPicker {...props} {...nonRouterPropPass} title={'SECONDARY WEAPONS'} items={secondaryWeaponList} />} />
                        <Route exact path='/warframes/:id/:pre/:build' render={props => <FrameBuilder {...props} {...nonRouterPropPass} type={'warframes'} items={warframeStats} mods={warframeMods} arcanes={warframeArcanes} />} />
                        <Route exact path='/warframes/:id/:pre' render={props => <FrameBuilder {...props} {...nonRouterPropPass} type={'warframes'} items={warframeStats} mods={warframeMods} arcanes={warframeArcanes} />} />
                        <Route exact path='/warframes/:id' render={props => <FrameBuilder {...props} {...nonRouterPropPass} type={'warframes'} items={warframeStats} mods={warframeMods} arcanes={warframeArcanes} />} />
                        <Route exact path='/warframes' render={props => <ItemPicker {...props} {...nonRouterPropPass} title={'WARFRAMES'} items={warframeList} />} />
                        <Route exact path='/archwings/:id/:pre/:build' render={props => <ArchwingBuilder {...props} {...nonRouterPropPass} type={'archwings'} items={archwingStats} mods={archwingMods} />} />
                        <Route exact path='/archwings/:id/:pre' render={props => <ArchwingBuilder {...props} {...nonRouterPropPass} type={'archwings'} items={archwingStats} mods={archwingMods} />} />
                        <Route exact path='/archwings/:id' render={props => <ArchwingBuilder {...props} {...nonRouterPropPass} type={'archwings'} items={archwingStats} mods={archwingMods} />} />
                        <Route exact path='/archwings' render={props => <ItemPicker {...props} {...nonRouterPropPass} title={'ARCHWINGS'} items={archwingList} />} />
                        <Route exact path='/archguns-space/:id/:pre/:build' render={props => <ArchgunBuilder {...props} {...nonRouterPropPass} type={'archguns-space'} locType={'SPACE'} items={archgunStats} mods={archgunMods} />} />
                        <Route exact path='/archguns-space/:id/:pre' render={props => <ArchgunBuilder {...props} {...nonRouterPropPass} type={'archguns-space'} locType={'SPACE'} items={archgunStats} mods={archgunMods} />} />
                        <Route exact path='/archguns-space/:id' render={props => <ArchgunBuilder {...props} {...nonRouterPropPass} type={'archguns-space'} locType={'SPACE'} items={archgunStats} mods={archgunMods} />} />
                        <Route exact path='/archguns-space' render={props => <ItemPicker {...props} {...nonRouterPropPass} title={'ARCHGUNS - SPACE'} items={archgunList} />} />
                        <Route exact path='/archguns-land/:id/:pre/:build' render={props => <ArchgunBuilder {...props} {...nonRouterPropPass} type={'archguns-land'} locType={'LAND'} items={archgunLandStats} mods={archgunMods} />} />
                        <Route exact path='/archguns-land/:id/:pre' render={props => <ArchgunBuilder {...props} {...nonRouterPropPass} type={'archguns-land'} locType={'LAND'} items={archgunLandStats} mods={archgunMods} />} />
                        <Route exact path='/archguns-land/:id' render={props => <ArchgunBuilder {...props} {...nonRouterPropPass} type={'archguns-land'} locType={'LAND'} items={archgunLandStats} mods={archgunMods} />} />
                        <Route exact path='/archguns-land' render={props => <ItemPicker {...props} {...nonRouterPropPass} title={'ARCHGUNS - LAND'} items={archgunList} />} />
                        <Route exact path='/sentinels/:id/:pre/:build' render={props => <SentinelBuilder {...props} {...nonRouterPropPass} type={'sentinels'} items={sentinelStats} mods={companionMods} />} />
                        <Route exact path='/sentinels/:id/:pre' render={props => <SentinelBuilder {...props} {...nonRouterPropPass} type={'sentinels'} items={sentinelStats} mods={companionMods} />} />
                        <Route exact path='/sentinels/:id' render={props => <SentinelBuilder {...props} {...nonRouterPropPass} type={'sentinels'} items={sentinelStats} mods={companionMods} />} />
                        <Route exact path='/sentinels' render={props => <ItemPicker {...props} {...nonRouterPropPass} title={'SENTINELS'} items={sentinelList} />} />
                        <Route exact path='/sentinelweapons/:id/:pre/:build' render={props => <SentinelWeaponBuilder {...props} {...nonRouterPropPass} type={'sentinelweapons'} items={sentinelWeaponStats} primaryMods={primaryMods} secondaryMods={secondaryMods} />} />
                        <Route exact path='/sentinelweapons/:id/:pre' render={props => <SentinelWeaponBuilder {...props} {...nonRouterPropPass} type={'sentinelweapons'} items={sentinelWeaponStats} primaryMods={primaryMods} secondaryMods={secondaryMods} />} />
                        <Route exact path='/sentinelweapons/:id' render={props => <SentinelWeaponBuilder {...props} {...nonRouterPropPass} type={'sentinelweapons'} items={sentinelWeaponStats} primaryMods={primaryMods} secondaryMods={secondaryMods} />} />
                        <Route exact path='/sentinelweapons' render={props => <ItemPicker {...props} {...nonRouterPropPass} title={'ROBOTIC WEAPONS'} items={sentinelWeaponList} />} />
                        <Route exact path='/beasts/:id/:pre/:build' render={props => <BeastBuilder {...props} {...nonRouterPropPass} type={'beasts'} items={beastStats} mods={companionMods} />} />
                        <Route exact path='/beasts/:id/:pre' render={props => <BeastBuilder {...props} {...nonRouterPropPass} type={'beasts'} items={beastStats} mods={companionMods} />} />
                        <Route exact path='/beasts/:id' render={props => <BeastBuilder {...props} {...nonRouterPropPass} type={'beasts'} items={beastStats} mods={companionMods} />} />
                        <Route exact path='/beasts' render={props => <ItemPicker {...props} {...nonRouterPropPass} title={'BEASTS'} items={beastList} />} />
                        <Route exact path='/kitguns/:id/:pre/:build' render={props => <KitgunBuilder {...props} {...nonRouterPropPass} type={'kitguns'} items={kitguns} mods={secondaryMods} />} />
                        <Route exact path='/kitguns/:id/:pre' render={props => <KitgunBuilder {...props} {...nonRouterPropPass} type={'kitguns'} items={kitguns} mods={secondaryMods} />} />
                        <Route exact path='/kitguns/:id' render={props => <KitgunBuilder {...props} {...nonRouterPropPass} type={'kitguns'} items={kitguns} mods={secondaryMods} />} />
                        <Route exact path='/kitguns' render={props => <KitgunPicker {...props} {...nonRouterPropPass} items={kitguns} />} />
                        <Route exact path='/moas/:id/:pre/:build' render={props => <MoaBuilder {...props} {...nonRouterPropPass} type={'moas'} items={moas} mods={companionMods} />} />
                        <Route exact path='/moas/:id/:pre' render={props => <MoaBuilder {...props} {...nonRouterPropPass} type={'moas'} items={moas} mods={companionMods} />} />
                        <Route exact path='/moas/:id' render={props => <MoaBuilder {...props} {...nonRouterPropPass} type={'moas'} items={moas} mods={companionMods} />} />
                        <Route exact path='/moas' render={props => <MoaPicker {...props} {...nonRouterPropPass} items={moas} />} />
                        <Route exact path='/zaws/:id/:pre/:build' render={props => <ZawBuilder {...props} {...nonRouterPropPass} type={'zaws'} items={zaws} mods={meleeMods} />} />
                        <Route exact path='/zaws/:id/:pre' render={props => <ZawBuilder {...props} {...nonRouterPropPass} type={'zaws'} items={zaws} mods={meleeMods} />} />
                        <Route exact path='/zaws/:id' render={props => <ZawBuilder {...props} {...nonRouterPropPass} type={'zaws'} items={zaws} mods={meleeMods} />} />
                        <Route exact path='/zaws' render={props => <ZawPicker {...props} {...nonRouterPropPass} items={zaws} />} />
                        <Route exact path='/meleeweapons/:id/:pre/:build' render={props => <MeleeBuilder {...props} {...nonRouterPropPass} type={'meleeweapons'} items={meleeWeaponStats} mods={meleeMods} />} />
                        <Route exact path='/meleeweapons/:id/:pre' render={props => <MeleeBuilder {...props} {...nonRouterPropPass} type={'meleeweapons'} items={meleeWeaponStats} mods={meleeMods} />} />
                        <Route exact path='/meleeweapons/:id' render={props => <MeleeBuilder {...props} {...nonRouterPropPass} type={'meleeweapons'} items={meleeWeaponStats} mods={meleeMods} />} />
                        <Route exact path='/meleeweapons' render={props => <ItemPicker {...props} {...nonRouterPropPass} title={'MELEE WEAPONS'} items={meleeWeaponList} />} />
                        <Route exact path='/archmelee/:id/:pre/:build' render={props => <ArchmeleeBuilder {...props} {...nonRouterPropPass} type={'archmelee'} items={archmeleeStats} mods={archmeleeMods} />} />
                        <Route exact path='/archmelee/:id/:pre' render={props => <ArchmeleeBuilder {...props} {...nonRouterPropPass} type={'archmelee'} items={archmeleeStats} mods={archmeleeMods} />} />
                        <Route exact path='/archmelee/:id' render={props => <ArchmeleeBuilder {...props} {...nonRouterPropPass} type={'archmelee'} items={archmeleeStats} mods={archmeleeMods} />} />
                        <Route exact path='/archmelee' render={props => <ItemPicker {...props} {...nonRouterPropPass} title={'ARCHMELEE'} items={archmeleeList} />} />
                        <Route exact path='/register' render={() => <Register logUser={this.props.logUser} user={this.props.user} />} />
                        <Route exact path='/terms' render={() => <Terms />} />
                        <Route exact path='/privacy' render={() => <Privacy />} />
                        <Route exact path='/unauthorized' render={() => <Unauthorized />} />
                        <Route component={TheVoid} />
                    </Switch>
                </Suspense>
            </div>
        )
    }
}

export default withRouter(Routing);