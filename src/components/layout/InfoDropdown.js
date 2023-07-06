import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';


function InfoDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center ">
      <div className="relative ">
        <div className='flex'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-10 block rounded-md p-2 focus:outline-none"
          >
            Admin
          </button>
          <span className=' mt-[9px]' data-bs-toggle="dropdown" onClick={() => setIsOpen(!isOpen)}>
            <FontAwesomeIcon  icon={faCaretDown} />
          </span>
        </div>
        {isOpen && (
          <div>
            <div
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 h-full w-full z-10"
            ></div>

            <div
              className="absolute right-0  bg-white rounded-md shadow-sm overflow-hidden z-20"
              style={{ width: '10rem' }}
            >
              <div className='hover:bg-gray-200 p-2 hover:text-[#05C605]'>
                <Link to="#" className="">My Accounts</Link>
              </div>
              <div className=" hover:bg-gray-200 p-2 hover:text-[#05C605]">
                <Link to="/" >Log Out</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>

  )
}
export default InfoDropdown