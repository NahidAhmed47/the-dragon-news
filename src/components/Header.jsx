import React from 'react';
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className='md:w-[30%] mx-auto mt-5'>
                 <img src="https://i.ibb.co/VmNB7ZT/logo.png" alt="" />
                 <p className='secondary-text text-center'>Journalism Without Fear or Favour</p>
                 <p className='text-center text-base font-semibold text-gray-600 font-serif'>{moment().format("dddd, MMMM D, YYYY")}</p>
             </div>
             <div className='w-full px-3 rounded py-2 text-center bg-gray-200 flex mt-3 mb-5'>
                <button className='my-btn'>Latest</button>
                <Marquee>
                Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                 </Marquee>
             </div>
             <div className='grid grid-cols-3 justify-items-end my-6'>
                <div>

                </div>
                <ul className='text-base font-medium gap-4 flex font-serif text-gray-700 mx-auto'>
                    <NavLink>Home</NavLink>
                    <NavLink>About</NavLink>
                    <NavLink>Career</NavLink>
                </ul>
                <div className=''>
                    <button className="my-btn">Login</button>
                </div>
             </div>
        </div>
    );
};

export default Header;