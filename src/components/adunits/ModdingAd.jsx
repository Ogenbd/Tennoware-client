import React, { PureComponent } from 'react';

import withErrorBoundary from '../errorboundaries/AdErrorBoundary';

export class ModdingAd extends PureComponent {

    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render() {
        return (
            <ins
                className="adsbygoogle"
                style={{ display: "inline-block", width: '100%', height: '90px' }}
                data-ad-client="ca-pub-9367218977396146"
                data-ad-slot="3188144583"
            >
            </ins>
        )
    }
}

export default withErrorBoundary(ModdingAd);
