
import { Suspense, useState } from 'react';
import './App.css'
import AvailablePlayers from './component/AvailablePlayers/AvailablePlayers'
import Banner from './component/Banner/Banner'
import Navbar from './component/Navbar/Navbar'
import SelectedPlayers from './component/SelectedPlayers/SelectedPlayers';
import From from './component/From/From';
 import { ToastContainer} from 'react-toastify';

const fetchPlayer = async  () => {
  const res = await fetch('/players.json')
  return res.json();
}
 const promisePlayer = fetchPlayer();

function App() {
  const [toggle, setToggle] = useState(false)
  const [availableBlance, setAvailableBlance] = useState(600000)
  const [playerSelected, setPlayerSelected] = useState([])



  const removePlayer = (p) => {
    const filterData = playerSelected.filter(ply => ply.id !== p.id)
    setPlayerSelected(filterData)
    setAvailableBlance(availableBlance + p.price)
    
  }

 
 

  return (
    <div className=' mx-auto'>
    <Navbar availableBlance = {availableBlance}></Navbar>
    <div className='flex justify-between items-center mb-6 max-w-[1200px] mx-auto'>
      <h1 className='font-bold text-3xl'>{(!toggle) ? "Available Player" : `Selected Player(${playerSelected.length})`}
</h1>
      <div className='border text-gray-400  rounded-2xl 
      '>
        <button onClick={() => {setToggle(false)}} className={`btn px-7 py-3 rounded-l-2xl text-gray-800 ${(!toggle)? "bg-amber-300" : "bg-white"}`}>Available</button> 
        <button onClick={() => {setToggle(true)}}  className={`btn px-5 py-3 rounded-r-2xl text-gray-800 ${(toggle)? "bg-amber-300" : "bg-white"}`}>Selected ({playerSelected.length}/6)</button>
        </div>
    </div>
     <Banner></Banner> 
    {
      (!toggle) ? <Suspense fallback = {"Loading....."}>
    <AvailablePlayers 
    key={promisePlayer.id}
    promisePlayer = {promisePlayer} 
    availableBlance = {availableBlance} 
    setAvailableBlance = {setAvailableBlance}
    playerSelected = {playerSelected}
    setPlayerSelected = {setPlayerSelected}></AvailablePlayers>
   </Suspense> : <SelectedPlayers setToggle = {setToggle} promisePlayer = {promisePlayer} playerSelected = {playerSelected} removePlayer={ removePlayer}></SelectedPlayers>
    }
      

  <From></From>
<ToastContainer />
    </div>
  )
}

export default App
