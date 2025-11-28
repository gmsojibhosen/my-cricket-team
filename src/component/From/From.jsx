import React from 'react';
import footerImg from '../../assets/nav-logo.png'
const From = () => {
    return (
        <div className='relative w-full   h-full'>
          
        <div className=' p-4 w-[80%]   border border-white rounded-2xl bg-[#ecf2f630]  absolute  left-1/2 -translate-x-1/2 -translate-y-1/2 '>
            <div className="p-22 mx-auto  text-center rounded-xl bg-linear-to-r from-[#BEE7F6] via-[#BEBEBE] to-yellow-400">
                <h1 className='font-bold text-4xl mb-3'>Subscribe to our Newsletter</h1>
                <p className='text-gray-700 mb-6'>Get the latest updates and news right in your inbox!</p>
                <form className = 'flex items-center justify-center gap-4 '> 
                    <input type="email" name="email" id="email" placeholder="Enter your email"  className='bg-white px-7 py-4 rounded-2xl w-100  outline-amber-500 text-[1rem]'/>
                    <input type="submit" value='Subscribe' className='bg-linear-to-r from-[#C979AF] to-yellow-400 font-semibold text-[1rem]  w-35 px-7 py-4  outline-white rounded-2xl text-center'></input>
                </form>
            </div>
        </div>

        <div className=''>
                    <footer className='bg-black py-60 '>
                        <img src={footerImg}alt=""  className='mx-auto w-34'/>

                        <div className="flex justify-between mb-18 max-w-[1200px] mx-auto">
                            <div className="w-1/3">
                                <h5 className='font-semibold text-white mb-6'>About</h5>
                                <p className='text-gray-400'>We are a passionate team <br />dedicated to providing the best <br />services to our customers.</p>
                            </div>
                            <div className='w-1/3'>
                                <h5 className='font-semibold text-white mb-6'>Quick Links</h5>
                                <ul className='text-gray-400 list-disc'>
                                    <li>Home</li>
                                    <li>Services</li>
                                    <li>About</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                            <div className="w-1/3">
                                <h5 className='font-semibold text-white mb-6'>Subscribe</h5>
                                <p className='text-gray-400 mb-6'>Subscribe to our newsletter for the <br /> latest updates.</p>
                                 <form className = 'flex items-center justify-center '> 
                    <input type="email" name="email" id="email" placeholder="Enter your email"  className='bg-white px-7 py-3 rounded-l-2xl w-100  outline-amber-500 text-[1rem]'/>
                    <input type="submit" value='Subscribe' className='bg-linear-to-r from-[#C979AF] to-yellow-400 font-semibold text-[1rem]  w-35 px-7 py-3  outline-white rounded-r-2xl text-center'></input>
                </form>
                            </div>
                        </div>
                   
                   <p className='text-center text-gray-400'>@2024 Your Company All Rights Reserved.</p>
                    </footer>
                </div>

                </div>

                
    );
};

export default From;
