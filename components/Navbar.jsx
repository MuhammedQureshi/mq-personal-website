import Link from 'next/link';
import React from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

function Navbar() {
  return (
    <div className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
        <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
            <link href='/'></link>
            <h1 className='font-bold text-4xl'>MQ</h1>
            <ul className='hidden sm:flex '>
                <li className='p-4'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='p-4'>
                    <Link href='/#about'>About</Link>
                </li>
                <li className='p-4'>
                    <Link href='/'>Projects</Link>
                </li>
                <li className='p-4'>
                    <Link href='/'>Services</Link>
                </li>
                <li className='p-4'>
                    <Link href='/'>Contact</Link>
                </li>
                <li className='p-3'>
                    <Link href='/'>
                    <button className='px-4 py-1 border-blue rounded-xl bg-blue-600 hover:bg-emerald-500'>Resume</button>
                    </Link>
                </li>
            </ul>
          {/* Mobile Button */}

          <div className='block sm:hidden z-10'>
            <AiOutlineMenu size={20} />
          </div>
          
          {/* Mobile Menu */}
          <div className='sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen'>
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