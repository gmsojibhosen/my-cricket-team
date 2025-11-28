
import  { use } from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';


const AvailablePlayers = ({promisePlayer, availableBlance, setAvailableBlance, playerSelected, setPlayerSelected}) => {
    const players = use(promisePlayer)
    
    return (
   <div className='grid grid-cols-3 gap-6 max-w-[1200px] mx-auto'> 
    {
      players.map(player => <PlayerCard 
        key={player.id}
        player = {player} 
        availableBlance = {availableBlance} 
        setAvailableBlance = {setAvailableBlance}
        playerSelected = {playerSelected}
        setPlayerSelected = {setPlayerSelected}></PlayerCard>
      
        
)
    }
   </div>
        
    );
};

export default AvailablePlayers;