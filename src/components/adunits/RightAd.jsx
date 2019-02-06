import React, { Component } from 'react';

export class RightAd extends Component {

    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render() {
        return (
            <ins
                className="adsbygoogle"
                style={{ display: "block", maxWidth: "300px" }}
                data-ad-client="ca-pub-9367218977396146"
                data-ad-slot="5687275874"
                data-ad-format="auto"
                >
            </ins>
        )
    }
}

export default RightAd;
