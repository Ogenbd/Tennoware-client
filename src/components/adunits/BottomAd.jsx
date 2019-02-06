import React, { Component } from 'react';

export class BottomAd extends Component {

    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render() {
        return (
            <ins
                className="adsbygoogle bottom-g-in"
                style={{ display: "block" }}
                data-ad-client="ca-pub-9367218977396146"
                data-ad-slot="9456142257"
            >
            </ins>
        )
    }
}

export default BottomAd;
