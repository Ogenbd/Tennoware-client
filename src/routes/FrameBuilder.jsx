import React, { Component } from 'react';
import Loadable from 'react-loadable';

import Loading from '../components/loading/Loading';

const WarframeModding = Loadable({
    loader: () => import('../components/warframe/WarframeModding'),
    loading: Loading,
    delay: 400
});

class FrameBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            loading: false,
            item: {},
            relevantMods: [],
            slotPolarities: [],
            originalPolarityCount: {},
            metaInfo: {
                UserID: undefined,

            }
        }
    }

    componentDidMount() {
        if (this.props.match.params.build) {
            this.setState({
                loading: true
            }, this.confirmBuild)
        } else {
            this.setupBuilder()
        }
    }


    setupBuilder = async () => {
        let items = await this.props.items();
        let mods = await this.props.mods();
        let selected = items.find(item => {
            return item.name.toLowerCase() === this.props.match.params.id.toLowerCase();
        });
        if (selected !== undefined) {
            let slotPolarities = [];
            let originalPolarityCount = { madurai: 0, naramon: 0, vazarin: 0, zenurik: 0, unairu: 0, penjaga: 0, umbra: 0 };
            let filteredMods = mods.filter(mod => {
                return mod.type === 'WARFRAME' || mod.type === 'AURA' || mod.type === 'EXILUS' || mod.type === selected.name;
            });
            filteredMods.forEach((mod, index) => mod.index = index);
            if (selected.polarities.length > 0) {
                selected.polarities.forEach(polarity => {
                    slotPolarities.push(polarity);
                    originalPolarityCount[polarity]++
                });
            }
            this.setState({
                title: selected.name,
                item: selected,
                relevantMods: filteredMods,
                slotPolarities: slotPolarities,
                originalPolarityCount: originalPolarityCount
            });
        } else {
            this.redirectToVoid();
        }
    }

    confirmBuild = () => {
        // fix url
        fetch('http://192.168.1.114:50000/getbuild', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ buildId: this.props.match.params.build, userId: this.props.user })
        })
            .then(res => res.json())
            .then(({ res }) => {
                if (res.ItemName === this.props.match.params.id.toLowerCase() && res.BuildStr === this.props.match.params.pre) {
                    this.setState({
                        metaInfo: res
                    });
                    this.setupBuilder();
                } else {
                    this.redirectToVoid();
                }
            })
            .catch(err => {
                console.log('error')
            });
    }

    redirectToVoid = () => {
        this.props.history.replace('/void');
    }

    render() {
        return (
            <div className="screen">
                <div className="top-title"><p>{this.state.title}</p></div>
                {this.state.loading &&
                    <Loading />
                }
                {this.state.item.name &&
                    <WarframeModding redirectToVoid={this.redirectToVoid} frame={this.state.item} mods={this.state.relevantMods} slotPolarities={this.state.slotPolarities} originalPolarityCount={this.state.originalPolarityCount} viewWidth={this.props.viewWidth} match={this.props.match} user={this.props.user} metaInfo={this.state.metaInfo} />
                }
            </div>
        )
    }
}

export default FrameBuilder;