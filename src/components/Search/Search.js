import React, {Component} from 'react';

export default class Search extends Component {
    render() {
        return (
            <form className="form-inline ">
                <input className="form-control form-control-sm mr-3 w-15" type="text" placeholder="Search"
                       aria-label="Search" />
                <i className="fas fa-search" aria-hidden="true"></i>
            </form>
        );
    }
}