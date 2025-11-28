import React from 'react';
import banner from '../../assets/banner.png'
const Banner = () => {
    return (
<div className="max-w-[1200px] mx-auto mb-10 flex flex-col justify-center items-center  p-16 bg-linear-to-br from-indigo-700/50 via-black to-purple-700/50 rounded-2xl">
  <img className='mb-5' src={banner} alt="" />
  
  <h1 className='font-bold text-4xl mb-3 text-center text-white'>
    Assemble Your Ultimate Dream 11 Cricket Team
  </h1>
  
  <p className='mb-5  text-center text-white'>
    Beyond Boundaries Beyond Limits
  </p>
  
  <div className='border-3 p-1.5 border-[#E7FE29] w-fit rounded-xl'>
    <button className='px-6 py-4 rounded-xl bg-[#E7FE29] border-none font-bold' type="button">
      Claim Free Credit
    </button>
  </div>
</div>





    );
};

export default Banner;