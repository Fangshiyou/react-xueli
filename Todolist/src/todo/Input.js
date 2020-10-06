import React, { Component } from 'react'
import "./TodoList.css"
export default class Input extends Component {
    handInput=(e)=>{
        if(e.keyCode===13 && e.target.value !== ""){
            this.props.add(e.target.value);
            e.target.value="";           
        }
    }
    render() {
        return (
            <div className="tab">
                <span>ToDoList</span>
                <input type="text" placeholder="添加ToDo" onKeyDown={this.handInput}/>
            </div>
        )
    }
}
