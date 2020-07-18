import React, { useState, useEffect } from 'react';
import './Chat.css';
import PetItem from './PetItem/PetItem';
import UserItem from './UserItem/UserItem';
import InputChat from './InputChat/InputChat';
import Select from './Select/Select';
import {doing, aboutMe} from '../../data/Actions';
import Fade from 'react-reveal/Fade';

const Chat = () => {

    let idCounter = 0;

    const [msg, setMsg] = useState({});

    const [openSelect, setOpenSelect] = useState(false);

    const [chat, setChat] = useState([
        {
            id: 0,
            emitter: 'Panda',
            msg: ['¡Hola! Soy PandaBOT', '¿Cuál es tu nombre?']
        }
    ]);

    function firstResponse(name){
        let newChat = {
            id: idCounter + 2,
            emitter: 'Panda',
            msg: [
                '¡Mucho gusto, ' + name + '!',
                'Elegí una opción:'
            ]
        }
        if(newChat){
            setChat([...chat, newChat])
        }
    };

    useEffect( () => {
        if(chat.length === 2){
            setTimeout( () => firstResponse(msg.msg), 500);
            setMsg({...msg, msg: ' '});
            setTimeout( () => setOpenSelect(true), 600);
        }
    }, [chat]); 

    function getMessage(value){
        idCounter = idCounter + 1;
        setMsg({
            id: idCounter,
            emitter: 'User',
            msg: value 
        })
    };

    function sendMessage(e){
        e.preventDefault();
        setChat([...chat, msg ])
    };

    let options = [
        {
            id: "doing",
            text: "¿Qué haces?",
        },
        // {
        //     id: "meme",
        //     text: "Enviame algo gracioso",
        // },
        {
            id: "about",
            text: "Cuentame sobre pandas",
        },
    ];

    const [interactions, setInteractions] = useState([]);

    function handleSelectedOptions(value){
        let result;
        switch(value){
            case 'doing':
                result = doing[Math.floor(Math.random() * doing.length)]
                if(result){
                    setInteractions([...interactions, result.msg])
                }
                break;

            case 'about':
                result = aboutMe[Math.floor(Math.random() * aboutMe.length)]
                if(result){
                    setInteractions([...interactions, result.msg])
                }
                break;   

            default:
                console.log('No hay valores');    
        }
    }

    return(
        <div className='chatbot-chat-container'>
            <div className='chatbot-chat-content'>
                <div className='chatbot-chat'>
                    <div className='chatbot-chat-container-body'>
                        <div className='chatbot-chat-body'>
                            {chat.map((message, index) => 
                            message.emitter === 'Panda' ?
                                <PetItem
                                key={index} text={message.msg}/>
                            :
                                <UserItem
                                key={index} text={message.msg}/>    
                            )} 
                            { openSelect && 
                            <Select 
                            handleSelectedOptions={handleSelectedOptions}
                            options={options}/>
                            }
                            {
                                interactions.length > 0 && interactions.map( (interaction, index) => 
                                <>
                                <Fade left>
                                    <PetItem key={index} text={interaction} /> 
                                </Fade>
                                <Fade right>
                                    <Select 
                                        key={index}
                                        handleSelectedOptions={handleSelectedOptions}
                                        options={options}/>
                                </Fade>
                                </>
                                )
                            }
                        </div>
                    </div>
                    <div className='chatbot-chat-container-input'>
                        <InputChat 
                        chat = {chat}
                        msg = {msg}
                        getMessage = {getMessage}
                        sendMessage = {sendMessage}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Chat; 