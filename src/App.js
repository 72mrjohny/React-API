import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
    xhr.onload = () => {
      console.log(xhr.status);
      if (xhr.status === 200) {
        const users = JSON.parse(xhr.response);
        console.log(users)
        this.setState({ users })

      }
    }


    xhr.send(null)
  }


  render() {
    const users = this.state.users.map(user => (
      <div id="user" key={user.id}>
        <h4>{user.name}</h4>
        <p>{user.email}</p>
      </div>
    ))
    return (
      <div>
        Dane pobrane z API:  https://jsonplaceholder.typicode.com/users
        {users}
      </div>
    );
  }
}

export default App;
