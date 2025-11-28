import React from 'react';
import logo from '../../assets/nav-logo.png'
import coin from '../../assets/dollar.png'
const Navbar = ({availableBlance}) => {
    return (
        <div className="navbar bg-base-100   max-w-[1200px] mx-auto px-0 py-6 ">
  <div className="flex-1 mx-6">
    <a className="text-xl"><img src={logo}  /></a>
  </div>

  <div className="">
    <a className='text-[#13131370] mx-6' href="">Home</a>
    <a className='text-[#13131370] mx-6 ' href="">Fixture</a>
    <a className='text-[#13131370] mx-6' href="">Teams</a>
    <a className='text-[#13131370] mx-6 ' href="">Schedules</a>
    <button className='btn text-[#13131370] mx-6 ' href="#">{availableBlance} Coin <img src={coin} /></button>
  </div>
 
</div>
    );
};

export default Navbar;