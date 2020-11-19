import React, { Component } from 'react'
import {connect} from 'react-redux'

class CreateTodo extends Component {
  state = {
    todo: '',
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state)
    this.setState({todo: ''})
  }
  render() {
    return(
      <div>
        <form onChange={this.handleOnChange} onSubmit={this.handleSubmit}>
          <p>
            <label>Add Todo</label>
            <input name="todo" type="text" value={this.state.todo}/>
          </p>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (formData) => dispatch({type: 'ADD_TODO', payload: formData})
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo);
