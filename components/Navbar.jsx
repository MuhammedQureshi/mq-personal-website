import Link from 'next/link';
import React from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

function Navbar() {
  return (
    <div className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
        <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
            <link href='/'></link>
            <h1>MQ</h1>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/#about'>About</Link>
                </li>
                <li>
                    <Link href='/'>Projects</Link>
                </li>
                <li>
                    <Link href='/'>Services</Link>
                </li>
                <li>
                    <Link href='/'>Contact</Link>
                </li>
            </ul>
          {/* Mobile Button */}

          <div>
            <AiOutlineMenu size={20} />
          </div>
          
          {/* Mobile Menu */}
          <div>
          <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/#about'>About</Link>
                </li>
                <li>
                    <Link href='/'>Projects</Link>
                </li>
                <li>
                    <Link href='/'>Services</Link>
                </li>
                <li>
                    <Link href='/'>Contact</Link>
                </li>
            </ul>
          </div>

        </div>
    </div>
  )
}

export default Navbar