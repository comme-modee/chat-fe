import React from 'react'
import './Messages.css'
import Message from '../Message/Message'

const Messages = ({ messages, name, messagesEndRef }) => {
  return (
    <div className='messages'>
        {messages?.map((msg, i) =>
            <div key={i}>
                <Message msg={msg} name={name}></Message>
                <div ref={messagesEndRef}></div>
            </div>
        )}
    </div>
  )
}

export default Messages