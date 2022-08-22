import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

User.propTypes = {

};

function User(props) {
    return (
        <div className='flex justify-between mb-2.5 mt-12 items-center text-sm'>
            <div className='flex items-center'>
                <Link to="/about">
                    <img src='/homepage/avatar.jpg' alt='avatar' className='h-[56px] w-[56px] rounded-full mr-4 cursor-pointer' />
                </Link>

                <div className=''>
                    <Link to="/about">
                        <p className='font-semibold cursor-pointer'>phuongloan</p>
                    </Link>
                    <p className='text-[#8E8E8E] ml-0.5'>Phương Loan</p>
                </div>
            </div>

            <button className='text-[#0095F6] cursor-pointer font-semibold'>Switch</button>
        </div>
    );
}

export default User;