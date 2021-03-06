import React, {Component} from 'react';
import './TodoInput.css';

export default class TodoInput extends Component {
    render() {
        const {item, handleChange, handleSubmit, editItem} = this.props
        return <div className="car card-body my-3">
            <form onSubmit={handleSubmit} className={"d-flex justify-content-between"}>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text bg-primary text-white">
                            <i className="fas fa-book"></i>
                        </div>
                    </div>
                    <input type="text" className="form-control text-capitalize" maxLength={"50"} minLength={"1"} placeholder="Name..."
                           value={item} onChange={handleChange}/>

                </div>
                <button type={"submit"}
                        className={editItem ? "todo_button btn btn-success"
                            : "todo_button btn btn-primary"}>
                    {editItem ? 'edit item' : "add item"}</button>
            </form>
        </div>
    }
}