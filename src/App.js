import React from 'react'
import logo from './logo.svg'
import './App.css'


// const status = ["...", "Completed"];

class App extends React.Component {
  state = {
    message: "Button pressed!",
    posts: [
      {id: 0,
      name: 'Kitchen',
      description: 'Cook something tasty',
      completed: 0},

      {id: 1,
        name: 'StudyRoom',
        description: 'Do home works',
        completed: 1},

      {id: 2,
      name: 'Bath',
      description: 'Clean bathroom',
      completed: 0},

      {id: 3,
      name: 'Garden',
      description: 'Take care of plants',
      completed: 1}
    ]
  }

  change = () => {
    console.log("Button pressed\n");   
    this.setState(cur => ({
    //something changed
    }));
  }

  Item = ({id, name, description, completed}) => {
    return(
    <div onClick = {this.change}>
    <div>{id}</div>
    <div>{name}</div>
    <div>{description}</div>
    <div>{completed}</div>
    </div>
  )}

  List = () => {
    return (
    <div>
      {this.state.posts.map(it => <this.Item id={it.id} name={it.name} description={it.description} completed={it.completed} />)}
    </div>
    )
  }
  render() {
    return (<div> <this.List/> </div>)
   }
}




export default App
