import React, {Component} from 'react';
import TodoItem from "../TodoItem";
import './TodoList.css';

export default class TodoList extends Component {
    render() {
        const {items, clearList, handleDelete, handleEdit} = this.props
        return (
            <ul className="list-group my-5 d-flex align-items-center">
                {
                    items.map(item => {
                        return (
                            <TodoItem key={item.id}
                                      title={item.title}
                                      handleDelete={()=>handleDelete(item.id)}
                                          handleEdit={()=>handleEdit(item.id)}
                            />
                        );
                    })
                }
                <button type="button" className="todo_list btn btn-primary"
                onClick={clearList}>Clear items</button>
            </ul>
        );
    }
}