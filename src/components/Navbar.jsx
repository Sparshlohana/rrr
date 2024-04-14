import Link from 'next/link';
import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-between px-12 py-3 fixed w-full'>
            <div className='flex items-center'>
                <h1 className='font-bold text-3xl cursor-default'>
                    <Link href={"/"}>RRR</Link>
                </h1>
            </div>
            <ul className='flex font-bold gap-5 p-4 text-lg'>
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/service"}>Our Service</Link></li>
                <li><Link href={"/contact"}>Contact Us</Link></li>
                <li><Link href={"/about"}>About Us</Link></li>
                <li><Link href={"/pricing"}>Pricing</Link></li>
            </ul>
            <div className='flex items-center'>
                <button className='px-3 py-1 bg-blue-600 border-2 border-gray-800 rounded-full text-white'>Call 24/7: 8154000250</button>
            </div>
        </nav>
    )
}

export default Navbar;