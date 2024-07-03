import React, { useEffect, useRef, useState } from 'react'
import queryString from 'query-string';
import { io } from 'socket.io-client'
import { useLocation } from 'react-router';
import InfoBar from '../InfoBar/InfoBar'
import Input from '../Input/Input'
import Messages from '../Messages/Messages'
import './Chat.css'

let socket;

const Chat = () => {
  const location = useLocation();
  const [ name, setName ] = useState('');
  const [ room, setRoom ] = useState('');
  const [ message, setMessage ] = useState('');
  const [ messages, setMessages ] = useState([]);
  const messagesEndRef = useRef(null);
  const ENDPOINT = `http://localhost:5000`;

  //메세지가 업데이트될때마다 스크롤을 부드럽게 아래로 내림
  const scrollToBottom = () => {
      if (messagesEndRef.current) {
          messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
      }
  };

  //채팅방 입장하면 스크롤을 아래로 내림
  const enterChatRoomAndScrollToBottom = () => {
      if (messagesEndRef.current) {
          messagesEndRef.current.scrollIntoView();
      }
  };

  useEffect(() => {
    scrollToBottom()
  },[message])

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT)

    setName(name)
    setRoom(room)

    socket.emit('join', { name, room }, () => {
      
    })
    
    enterChatRoomAndScrollToBottom()

    return () => {
      socket.emit('userLeft')

      socket.off()
    }
  },[ENDPOINT, location.search])

  console.log(message,messages)

  const sendMessage = (e) => {
    e.preventDefault();
    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''))
    }
    scrollToBottom();
  }

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message])
    })
  },[messages])
  
  return (
  <div className='chat-container'>

    <InfoBar room={room} socket={socket}/>

    <Messages messages={messages} name={name} messagesEndRef={messagesEndRef}/>

    <Input 
      message={message} 
      setMessage={setMessage} 
      sendMessage={sendMessage}
    />

  </div>
  )
}

export default Chat