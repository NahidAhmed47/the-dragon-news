import React from 'react';
import moment from 'moment';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <div>
            <div className='md:w-[30%] mx-auto mt-5'>
                 <img src="https://i.ibb.co/VmNB7ZT/logo.png" alt="" />
                 <p className='secondary-text text-center'>Journalism Without Fear or Favour</p>
                 <p className='text-center text-base font-semibold text-gray-600 font-serif'>{moment().format("dddd, MMMM D, YYYY")}</p>
             </div>
             <div className='w-full px-3 rounded py-2 text-center bg-gray-200 flex mt-3 mb-5'>
                <button className='bg-red-800 font-mono text-sm font-semibold text-white px-2 py-1 rounded'>Latest</button>
                <Marquee>
                Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                 </Marquee>
             </div>
        </div>
    );
};

export default Header;