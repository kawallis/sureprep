import React from 'react';
import Route from './route';

export default function Destination () {
    return (
        // TODO: Destination will change based on search in redux store
        <div className="destination">
            <h2 className="location">Sydney, Australia</h2>
            <div className="routes">
                <Route />
                {/*TODO: map this and pass values down through props*/}
            </div>
        </div>
    );
}