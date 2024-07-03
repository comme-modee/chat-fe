import React from 'react'
import './Input.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Input = ({ message, setMessage, sendMessage }) => {
  return (
    <div className='send-input'>
        <input 
            placeholder='메세지를 입력하세요'
            type='text' 
            value={message} 
            onChange={(e) => setMessage(e.target.value)}
            onKeyUp={(e) => e.key === 'Enter' ? sendMessage(e) : null}
        />
        <button onClick={(e) => {sendMessage(e)}}><FontAwesomeIcon icon={faPaperPlane}/></button>
    </div>
  )
}

export default Input