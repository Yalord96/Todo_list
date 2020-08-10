import React, {Component} from 'react';
import TodoItem from "./TodoItem";
export default class TodoList extends Component {
    render() {
        return (
            <ul className={"list-group my-5"}>
                <button type="button" className="btn btn-primary">Clear items</button>
            </ul>
        );
    }
}