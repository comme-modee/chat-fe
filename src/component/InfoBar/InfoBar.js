import React from 'react'
import './InfoBar.css'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const InfoBar = ({ room, socket }) => {
    const navigate = useNavigate()

    const leftTheRoom = () => {
        socket.emit('userLeft')
        socket.disconnect()
        navigate('/')
    }

    return (
        <div className='info-bar'>
            <div>{room}</div>
            <div onClick={() => leftTheRoom()}>
                <FontAwesomeIcon icon={faXmark}/>
            </div>
        </div>
    )
}

export default InfoBar