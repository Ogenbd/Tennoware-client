import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { primaryWeapons } from './data/primaryweapons';
import { primaryMods } from './data/primarymods';
import { secondaryWeapons } from './data/secondaryweapons';
import { secondaryMods } from './data/secondarymods';

import TheVoid from './components/thevoid/TheVoid';
import News from './components/news/News';
import PrimaryPicker from './routes/PrimaryPicker';
import SecondaryPicker from './routes/SecondaryPicker';
import RangedBuilder from './routes/RangedBuilder';

export class Routing extends Component {

    setTitle = (title) => {
        this.props.setTitle(title);
    }

    render() {
        let nonRouterPropPass = {
            viewWidth: this.props.viewWidth,
            user: this.props.user,
            setTitle: this.props.setTitle,
            title: this.props.title
        }
        return (
            <div className="main">
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} className="screen" classNames="fade" appear={true} timeout={100}>
                        <Switch location={this.props.location}>
                            <Route exact path='/' render={props => <News {...props} setTitle={this.setTitle} />} />
                            <Route exact path='/primaryweapons' render={props => <PrimaryPicker {...props} {...nonRouterPropPass} weapons={primaryWeapons} />} />
                            <Route exact path='/primaryweapons/:id/:pre/:build' render={props => <RangedBuilder {...props} {...nonRouterPropPass} weapons={primaryWeapons} mods={primaryMods} />} />
                            <Route exact path='/primaryweapons/:id/:pre' render={props => <RangedBuilder {...props} {...nonRouterPropPass} weapons={primaryWeapons} mods={primaryMods} />} />
                            <Route exact path='/primaryweapons/:id' render={props => <RangedBuilder {...props} {...nonRouterPropPass} weapons={primaryWeapons} mods={primaryMods} />} />
                            <Route exact path='/secondaryweapons' render={props => <SecondaryPicker {...props} {...nonRouterPropPass} weapons={secondaryWeapons} />} />
                            <Route exact path='/secondaryweapons/:id/:pre/:build' render={props => <RangedBuilder {...props} {...nonRouterPropPass} weapons={secondaryWeapons} mods={secondaryMods} />} />
                            <Route exact path='/secondaryweapons/:id/:pre' render={props => <RangedBuilder {...props} {...nonRouterPropPass} weapons={secondaryWeapons} mods={secondaryMods} />} />
                            <Route exact path='/secondaryweapons/:id' render={props => <RangedBuilder {...props} {...nonRouterPropPass} weapons={secondaryWeapons} mods={secondaryMods} />} />
                            <Route component={TheVoid} />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        )
    }
}

export default withRouter(Routing);