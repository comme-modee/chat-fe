import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Join = () => {
    const [ name, setName ] = useState('');
    const [ room, setRoom ] = useState('');

    return (
        <div>
            <div>Join</div>
            <div><input text='text' placeholder='이름을 입력하세요' value={name} onChange={(e) => setName(e.target.value)}/></div>
            <div><input text='text' placeholder='방 이름을 입력하세요' value={room} onChange={(e) => setRoom(e.target.value)}/></div>
            <Link onClick={(e) => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                <button type='submit'>Sign In</button>
            </Link>
        </div>
    )
}

export default Join