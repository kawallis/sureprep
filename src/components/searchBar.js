import React from 'react';
import '../App.css';
import { connect } from 'react-redux';  
import { updateForm } from '../actions/searchActions';

function SearchBar ({updateForm}) {
    return (
        <form onChange={e => {
            e.preventDefault();
            updateForm(e.target.value);
        }}>
            <input className="location-search" placeholder="City or airport code"/>
        </form>
    );
}
//connect to redux store

export default connect(
    state => ({ 
        searchQuery: state.searchQuery
    }),
    dispatch => ({ 
        updateForm(value) { dispatch(updateForm(value)); }
    }) 
)(SearchBar);