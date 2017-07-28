import React, { Component } from 'react'

class App extends Component {

  constructor() {
    super()

    this.updateName = this.updateName.bind(this)
    this.addUser = this.addUser.bind(this)
  }

  updateName = (event) => {
    console.log(event.target.value)
  }

  addUser = () => {
    console.log('addUser')
  }



  render() {
    return (
      <div>
        Hello
      </div>
    )
  }
}

export default App
