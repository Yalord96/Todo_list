import React, {Component} from 'react';

export default class TodoItem extends Component {
    render() {
        const {title,handleDelete, handleEdit,handleDone,handlePriority,priority} = this.props
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h6>{title}</h6>
                <div className="todo_icon">
                     <span className="mx-2"
                           onClick={handlePriority}><i className={priority ? "fas fa-star text-warning" : "fas fa-star"}></i></span>
                    <input type="checkbox" className="mx-2"
                          onChange={handleDone}/>
                    <span className="mx-2 text-primary"
                          onClick={handleEdit}><i className="fas fa-pen"></i></span>
                    <span className="mx-2 text-danger"
                    onClick={handleDelete}><i className="fas fa-trash"></i></span>
                </div>
            </li>
        );
    }
}