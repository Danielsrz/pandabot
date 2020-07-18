import React from 'react';
import './PetItem.css';
import pandaAvatar from '../../../assets/images/PandaBot.PNG';

const PetItem = ({text}) => {

    return(
        <div className='pet-item-container'>   
            <img src={pandaAvatar} />
            <div className='pet-item-messages'>
                {text.map((t, index)=>
                    <label key={index} > {t} </label>
                )}  
            </div> 
        </div>
    )
};

export default PetItem;