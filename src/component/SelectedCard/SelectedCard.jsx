import React from 'react';
import deletes from '../../assets/delete.png';
const SelectedCard = ({player,removePlayer,}) => {
const handleRemove = () => {
    removePlayer(player)
}  
    return (
        <div className='max-w-[1200px] mx-auto'>
            <div className='w-full p-6 rounded-2xl border border-gray-200 shadow-sm flex justify-between items-center mb-6'>
            <div className='flex items-center gap-6'>
               <img className='w-20 h-20 rounded-2xl'  src={player.image} alt="" />
                <div className="">
                    <h1 className='font-bold text-2xl mb-3'>{player.name}</h1>
                    <p>{player.playHandRole}</p>
                </div>
            </div>
            <div className="" onClick={() => handleRemove()}>
                <img src={deletes} alt="" />
            </div>
        </div>
        
        </div>
    );
};

export default SelectedCard;