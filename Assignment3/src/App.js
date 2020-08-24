import React, { Component } from 'react';
import InputBox from './components/InputBox'
import './App.css';
import Display from './components/Display'

class App extends Component {
  state = {
    tasks:[]
  }
  addTask =(task) => {
    console.log(task);
    let tasks = this.state.tasks
    task.id =  Math.ceil(Math.random() * 10000)
    task.crossout = false
    tasks = [...tasks,task]
    this.setState({tasks:tasks})
    console.log(this.state);    
  }
  deleteTask=(target)=>{
    let tasks = this.state.tasks
    let updatedTasks = tasks.filter(element=>{
      return element.id!==target
    })
    this.setState({
      tasks:updatedTasks
    })
  }
  strikeTask=(target)=>{
    let tasks = this.state.tasks
    let updatedTasks = tasks.map(element=>{
      if(element.id===target){
        element.crossout= !element.crossout
        return element
      }
      else{
        return element
      }
    })
    this.setState({
      tasks:updatedTasks
    })

  }

  render(){
    return (
      <div className="App ">
        <h1 className='red-text z-depth-3 container-class deep-orange accent-4'>What TO DO ???</h1>
        <div className='container'>
        <InputBox addTask = {this.addTask}/>
        <Display tasks={this.state.tasks} deleteTask={this.deleteTask} strikeTask={this.strikeTask}/>
        
        </div>
      </div>
    );
  }
  

}

export default App;
