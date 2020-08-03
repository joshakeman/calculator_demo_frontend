import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './components/calculator/Calculator'
import MessageList from './components/messages/MessageList'

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state= {
      conn: null,
      messages: []
    }
  }

  componentDidMount(){
    const connection = new WebSocket('ws://ec2-54-211-231-23.compute-1.amazonaws.com/ws');
    //const connection = new WebSocket('ws://localhost:8080/ws');

    connection.onmessage = evt => {
      if (this.state.messages.length < 10) {
        this.setState({
          messages: [evt.data, ...this.state.messages]
        })
      } else if (this.state.messages.length === 10) {
        let trimmedMessages = this.state.messages
        trimmedMessages.splice(-1)
        this.setState({
          messages: [evt.data, ...trimmedMessages]
        })
      }

    }
    this.setState({
      conn: connection
    })
  }

  render() {
    return (
      <div className="body">
        <div className="calc-wrapper">
          <Calculator conn={this.state.conn} />
        </div>
        <div className="messages-wrapper">
          <MessageList messages={this.state.messages}/>
        </div>
      </div>
    );
  }
}

export default App;
