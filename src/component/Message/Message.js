import React, { useEffect, useState } from 'react'

const Message = ({ msg: { user, text } , name }) => {
    const [ isSentByCurrentUser, setIsSentByCurrentUser ] = useState(false)
    const trimmedName = name.trim().toLowerCase();

    console.log(user, trimmedName)
    
    useEffect(() => {
        if(user === trimmedName) {
            setIsSentByCurrentUser(true)
        }
    },[user, trimmedName])
    
    return (

        isSentByCurrentUser ?

        <div className='message-container sender'>
            <div className='message-box'>
                <div>{user}</div>
                <div>{text}</div>
            </div>
        </div>
    
        :
    
        <div className='message-container recipient'>
            <div className='message-box'>
                <div>{user}</div>
                <div>{text}</div>
            </div>
        </div>

    )
}

export default Message