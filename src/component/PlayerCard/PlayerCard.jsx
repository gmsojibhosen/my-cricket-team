import React, { useState } from 'react';
import userFlag from '../../assets/flag.png'
import userIcon from '../../assets/user.png'

 import {  toast } from 'react-toastify';

const PlayerCard = ({player, availableBlance, setAvailableBlance, playerSelected, setPlayerSelected}) => {
    const [isSelected, setIsSelected] = useState(false)
    
    const btnFunction = (playerData) => {
        setIsSelected(true)
        if(player.price > availableBlance) {
          return toast('not enough coin') }

          else if (playerSelected.length === 6)  {
           return toast ('Height 6 player selected')
          }
        
        {
          setAvailableBlance(availableBlance - player.price)
          setPlayerSelected([...playerSelected, playerData]) 
          
        }
        {
          toast('Select players')
        }
    }
    return (
        <div className='max-w-[1200px] mx-auto'>
         <div className="card bg-base-100 w-96 shadow-sm p-4 mb-6">
  <figure>
    <img className='w-fit h-60'
      src={player.image}
      alt={player.alt} />
  </figure>
  <div className="card-body px-0">

    <div className="flex items-center gap-3 mb-3">
        <img src={userIcon} alt="" />
        <h2 className="card-title font-bold text-2xl">{player.name}</h2>
    </div>
    <div className="flex justify-between items-center mb-3 border-b-2 border-gray-300 pb-4">
      <div className='flex gap-2'><img src={userFlag}/><span className='text-[#242323]'>{player.country}</span></div>
      <button className='btn'>All-Rounder</button>
    </div>
    
    <div className="flex justify-between items-center mb-3">
      <h1 className='font-bold'>Rating</h1>
      <span>{player.rating}</span>
    </div>

    <div className="flex justify-between items-center mb-3">
      <h1 className='font-bold'>Play Role</h1>
      <span>{player.playHandRole}</span>
    </div>

    <div className="flex justify-between items-center">
      <h1 className='font-bold'>Price: $ <span>{player.price}</span></h1>
      <button 
  type="button"
  disabled={isSelected} 
  onClick={() => btnFunction(player)} 
  className='btn'
>
  {isSelected ? "Selected" :  "Choose Player"}
</button>

    </div>
  </div>
</div>
        </div>
    );
};

export default PlayerCard;