import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div>
        <div>
            <link href='/'></link>
            <h1>MQ</h1>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/'>About</Link>
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
  )
}

export default Navbar