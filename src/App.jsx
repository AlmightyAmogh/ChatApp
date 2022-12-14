import React from 'react'
import "./App.css";
import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm/>
  return (
    <ChatEngine 
    height = "100vh"
    projectID = "8c29f5b5-16ea-4fcf-87ef-99c4737fb05c"
    userName = {localStorage.getItem('username')}
    userSecret = {localStorage.getItem('password')}
    renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
  )
}

export default App