import React, { Component } from 'react'
import Input from './Input.js'
import List from './List.js'
import "./TodoList.css"
export default class Todolist extends Component {
    constructor(){
        super();
        let todo=JSON.parse(localStorage.getItem('todo'));
        if(todo===null){
            this.state={
                todo:[]
            }
        }
        else{
            this.state={
                todo:todo
            }
        }
    }
    addItem=(data)=>{
        var obj={title:data,done:false};
        this.setState({
            todo:[...this.state.todo,obj]
        })
    }
    change=(index)=>{
        let todo=[...this.state.todo];
        if(todo[index].done===false){
            todo[index].done=true;
        }
        else{
            todo[index].done=false;
        }
        this.setState({
            todo:todo
        })
    }
    del=(index)=>{
        let todo=[...this.state.todo];
        todo.splice(index,1);
        this.setState({
            todo:todo
        })
    }
    componentDidUpdate(){
        localStorage.setItem("todo",JSON.stringify(this.state.todo));
    }
    render() {
        var doing=0;
        var done=0;
        this.state.todo.map((item)=>{
            if(item.done===false){
                doing++;
            }
            else{
                done++;
            }
            return "";
        })
        return (
            <div>
            <Input add={this.addItem}/>
            <List todo={this.state.todo} change={this.change} del={this.del} doing={doing} done={done}/>  
            </div>
        )
    }
}

