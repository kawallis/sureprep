import React from 'react';

export default function Route () {
    // TODO: take values from props and map them corresponding tags
    return (
        <div className="route">
            <span className="route-detail airline">Atlantic International Airlines</span>
            <span className="route-detail time">6:57 AM</span>
            <iframe className="destination-map" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?q=-33.9460983,151.177002&z=3&hl=en&output=embed"></iframe>
            <p className="airport"><span className="name">Sydney Kingsford Smith International Airport</span> <span className="iata">(SYD)</span></p>
        </div>
    )
}