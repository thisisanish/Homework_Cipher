import React, { Component } from 'react'


class InputBox extends Component {


    state={
            taskName: "",
            date:""
        }
    
    handleChange= (e )=> {
        let today = new Date().toDateString();
        let time = new Date().toLocaleTimeString()
        let date = today + " "+ time
        let task = e.target.value
        this.setState({
            taskName: task,
            date: date
        })
    }

    addTask=(e)=>{
        e.preventDefault()
        this.props.addTask(this.state);

        this.setState({taskName:"",date:""})
       

 
        
        // var dd = String(today.getDate()).padStart(2, '0');
        // var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        // var yyyy = today.getFullYear();

        // today = mm + '/' + dd + '/' + yyyy;
        
  
    }
    render(){
            return (
        <div className="card-panel z-depth-5 teal">
        <form onSubmit={this.addTask}>
          <input type="text" name="content" required onChange={this.handleChange} placeholder="So, what you need to do ??"value={this.state.taskName}/>
          <button type="submit" className="btn">Add</button>
        </form>
      </div>
            )
        }
    

}

export default InputBox