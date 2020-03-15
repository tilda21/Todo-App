import React, { Component } from 'react';
import axios from 'axios';


class Input extends Component {

  state = {
    action: "",
    priority: 0
  }

  addTodo = () => {
    const task = {
      action: this.state.action,
      priority: this.state.priority
    }
    
    if(task.action && task.action.length > 0){
      axios.post('/api/todos', task)
        .then(res => {
          if(res.data){
            this.props.getTodos();
            this.setState({action: ""})
          }
        })
        .catch(err => console.log(err))
    }else {
      console.log('input field required')
    }
  }

  handleChange = (e) => {
    //console.log(e.target.id)
    let stateValue = e.target.id;
    this.setState({
      [stateValue]: e.target.value
    })
  }

  render() {
    let { action, priority } = this.state;
    return (
      <div id='inputs'>
        <input id="action" type="text" onChange={this.handleChange} value={action} />
        <input 
          id="priority" 
          class="slider"
          type="range" 
          min="0" max="5" 
          value={priority} 
          onChange={this.handleChange}
          step="1"/><div id='priorityValue'>{priority}</div>
        <button onClick={this.addTodo}>Adicionar</button>
      </div>
    )
  }
}

export default Input;