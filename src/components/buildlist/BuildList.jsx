import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './BuildList.css';

export class BuildList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            builds: [],
            requested: false
        }
    }

    componentDidUpdate() {
        if (this.props.buildList && !this.state.requested) this.requestBuilds();
    }

    hideBuildList = () => {
        this.props.hideBuildList();
    }

    requestBuilds = () => {
        // fix url
        fetch('http://192.168.1.114:50000/getbuilds', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ itemName: this.props.match.params.id })
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                this.setState({
                    requested: true
                })
            })
            .catch(err => {
                console.log('error')
            });
        console.log('requested');
    }

    render() {
        return (
            <div className={"dark-bg " + (this.props.buildList ? "show-dark-bg" : "hide-dark-bg")} onClick={this.hideBuildList}>

            </div>
        )
    }
}

export default withRouter(BuildList)
