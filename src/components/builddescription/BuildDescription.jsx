import React, { Component } from 'react';
import './BuildDescription.css';

export class BuildDescription extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showDescription: false
        }
    }

    showDescription = () => {
        this.setState({ showDescription: true });
    }

    hideDescription = () => {
        this.setState({ showDescription: false });
    }

    render() {
        return (
            <React.Fragment>
                <div className="interactable interactable-semi-inactive" onClick={this.showDescription}><p className="interactable-p">Description</p></div>
                <div className={"popup " + (this.state.showDescription ? "popup-active" : "popup-inactive")}>
                    <div className={"popup-topbar " + (this.state.showDescription ? "popup-active" : "popup-inactive")}>
                        <div className="popup-x" onClick={this.hideDescription}>
                            <div className="popup-x-bar one-bar"></div>
                            <div className="popup-x-bar two-bar"></div>
                        </div>
                    </div>
                    <div className="popup-content build-description">
                        <div className="build-title">{this.props.metaInfo.BuildName}</div>
                        <div className="build-description-box">{this.props.metaInfo.BuildDesc}</div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BuildDescription
