import React, {Component} from 'react';
import TodoItem from "../TodoItem";
import './TodoList.css';

export default class TodoList extends Component {
    render() {
        const {items, clearList, handleDelete, handleEdit, handleDone, handlePriority} = this.props;


        const activeTask = items.filter(task => task.completed === false);
        const completedTask = items.filter(task => task.completed === true);

        const priorityTask = [...activeTask, ...completedTask].filter(taskP => taskP.priority === true);
        const notPriorityTask = [...activeTask, ...completedTask].filter(taskP => taskP.priority === false);

        const itemsTask = [...priorityTask, ...notPriorityTask].map(item => {
                return (
                    <TodoItem key={item.id}
                              title={item.title}
                              completed={item.completed}
                              priority={item.priority}
                              handleDelete={() => handleDelete(item.id)}
                              handleEdit={() => handleEdit(item.id)}
                              handleDone={() => handleDone(item.id)}
                              handlePriority={() => handlePriority(item.id)}
                    />
                );
            }
        );
        return (
            <ul className="list-group my-5 d-flex align-items-center">
                <div>
                    {itemsTask}
                </div>
                <button type="button" className="todo_list btn btn-primary"
                        onClick={clearList}>Clear items
                </button>
            </ul>
        );
    }
}
