import React, {Component} from 'react';


export default class TodoInput extends Component {
    render() {
        return <div className="car card-body my-3">
            <form className={"d-flex justify-content-between"}>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text bg-primary text-white">
                            <i className="fas fa-book"></i>
                        </div>
                    </div>
                    <input type="text" className="form-control text-capitalize" placeholder="Name..."/>

                </div>
                <button type={"submit"} className="btn btn-block">Add item</button>
            </form>
        </div>
    }
}