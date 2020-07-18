import React from 'react';
import Panda from './components/Panda/Panda';
import './Home.css';
import Fade from 'react-reveal/Fade';

const  Home = ({history}) => {

    return (
        <div className='home-pandabot-container'>
            <div className='home-pandabot-content'>
                <Panda history={history}/>
                <div className='home-pandabot-greeting'>
                    <Fade opposite>
                        <h2> ¡BIENVENIDO! </h2>
                    </Fade>
                    <Fade opposite>
                        <label>¿Quieres saber sobre pandas?</label>
                        <label>¡Clickeame para empezar!</label>
                    </Fade>
                </div>
            </div>
        </div>
    )
};

export default Home;