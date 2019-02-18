import React, { PureComponent } from 'react';

import withErrorBoundary from '../errorboundaries/AdErrorBoundary';

export class RightAd extends PureComponent {

    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render() {
        return (
            <ins
                className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-9367218977396146"
                data-ad-slot="5687275874"
                data-ad-format="auto"
            >
            </ins>
        )
    }
}

export default withErrorBoundary(RightAd);
