import React from 'react';

const BuildError = (props) => (
    <div className="screen">
        <div></div>
        <div className={"general-error " + (props.error !== null ? 'show-general-error' : 'hide-general-error')}>
            <div className="general-error-box">
                <p>{props.error}</p>
                <div className="interactable interactable-semi-inactive general-button" onClick={props.confirmError}><p className="interactable-p">Confirm</p></div>
            </div>
        </div>
        <div></div>
    </div>
)

export default BuildError;