import React from 'react';
import moment from 'moment';

const Header = () => {
    return (
        <div className='md:w-[30%] mx-auto mt-5'>
            <img src="https://i.ibb.co/VmNB7ZT/logo.png" alt="" />
            <p className='secondary-text text-center'>Journalism Without Fear or Favour</p>
            <p className='text-center text-base font-semibold text-gray-600'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;