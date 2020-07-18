import React from 'react';
import Lottie from 'react-lottie';
import animationPanda from './panda-data.json';
import './Panda.css';

const Panda = ({history}) => {
    
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationPanda
    }

    function handleonClick(){
        history.push('/chat')
    };

    return (
        <div onClick={handleonClick}
        className='panda-container'>
            <Lottie
            options = {defaultOptions}
            />
        </div>
    )
};

export default Panda;