import React, { Component } from 'react';
import './BuildList.css';

export class BuildList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showBuildList: false,
            builds: [],
            requested: false
        }
    }

    showBuildList = () => {
        this.setState({
            showBuildList: true
        });
    }

    hideBuildList = () => {
        this.setState({
            showBuildList: false
        });
    }

    requestBuilds = () => {
        // fix url
        fetch('http://192.168.1.114:50000/getbuilds', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ itemName: this.props.itemName })
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    builds: res,
                    requested: true
                })
            })
            .catch(err => {
                console.log('error')
            });
    }

    render() {
        return (
            <React.Fragment>
                <div className="interactable interactable-semi-inactive" onClick={this.showBuildList}><p className="interactable-p">Community Builds</p></div>
                <div className={"popup " + (this.state.showBuildList ? "popup-active" : "popup-inactive")}>
                    <div className={"popup-topbar " + (this.state.showBuildList ? "popup-active" : "popup-inactive")}>
                        <div className="popup-x" onClick={this.hideBuildList}>
                            <div className="popup-x-bar one-bar"></div>
                            <div className="popup-x-bar two-bar"></div>
                        </div>
                    </div>
                    <div className="popup-content build-list">
                        <div className="build-item"></div>
                        <div className="build-item"></div>
                        <div className="build-item"></div>
                        <div className="build-item"></div>
                        <div className="build-item"></div>
                        <div className="build-item"></div>
                        <div className="build-item"></div>
                        <div className="build-item"></div>
                        <div className="build-item"></div>
                        <div className="build-item"></div>
                        <div className="build-item"></div>
                        <div className="build-item"></div>
                        <div className="build-item"></div>
                        <div className="build-item"></div>
                        <div className="build-item"></div>
                        <div className="build-item"></div>
                        <div className="build-item"></div>
                        <div className="build-item"></div>
                        <div className="build-item"></div>
                        <div className="build-item"></div>
                        <div className="build-item"></div>
                        <div className="build-item"></div>
                        <div className="build-item"></div>
                        <div className="build-item"></div>
                        <div className="build-item"></div>
                        <div className="build-item"></div>
                        <div className="build-item"></div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BuildList
