import React from 'react'
import "./App.css";
import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

const App = () => {
  return (
    <ChatEngine 
    height = "100vh"
    projectID = "8c29f5b5-16ea-4fcf-87ef-99c4737fb05c"
    userName = "almightyAmo"
    userSecret = "123123"
    renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
  )
}

export default App