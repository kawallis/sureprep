import React from 'react';
import SearchBar from './searchBar';

export default function Header(){
    return (
        <header>
            <h1>Where Do You Want To Go?</h1>
            <SearchBar />
            <nav>
                {/* TODO: onclick events for outbound and inbound */}
                <div className="nav-button selected">Outbound</div>
                <div className="nav-button">Inbound</div>
            </nav>
        </header>
    )
}