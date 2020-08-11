import React,  {Component} from 'react';
import TodoInput from "./components/TodoInput/TodoInput";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList/TodoList";


import 'bootstrap/dist/css/bootstrap.min.css';
import {v4 as uuidv4} from 'uuid';

export default class App extends Component {
constructor(props) {
    super(props);
    this.state = {
        items:[],
        id: uuidv4(),
        item:'',
        editItem:false
    }
};
handleChange = (event) =>{
    this.setState({
        item:event.target.value
    });
};
handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
        id:this.state.id,
        title:this.state.item
    };
    const updatedItems = [...this.state.items,newItem];
    this.setState({
        items:updatedItems,
        item:"",
        id: uuidv4(),
        editItem:false
    })
};

clearList = () =>{
    this.setState({
        items:[]
    })
}

handleDelete = (id) =>{
    const filteredItems = this.state.items.filter(item => item.id!==id)
    this.setState({
        items:filteredItems
    })
}
handleEdit = (id) =>{
    const filteredItems = this.state.items.filter(item => item.id!==id)

    const selectedItem = this.state.items.find(item => item.id ===id)


    this.setState({
        items:filteredItems,
        item: selectedItem.title,
        editItem:true,
        id:id
    })
}
    render() {
        return (
            <div className="container">
                <div className="row d-flex flex-column">
                    {/*<div className="col-10 mx-auto col-md-8 mt-4"></div>*/}
                    <h3 className="text-capitalize text-center">todo input</h3>
                    <TodoInput item={this.state.item} handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    editItem={this.state.editItem}/>
                    <TodoList items={this.state.items} clearList={this.clearList}
                    handleDelete={this.handleDelete}
                              handleEdit={this.handleEdit}/>
                </div>
            </div>
        );
    }
}
