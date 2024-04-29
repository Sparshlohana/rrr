import Link from 'next/link';
import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between sticky top-0 left-0 right-0 bottom-auto w-full h-[90px] max-w-[1290px] px-2 sm:px-0 m-auto'>
            <div className='flex items-center'>
                <h1 className='font-bold text-3xl cursor-default'>
                    <Link href={"/"}>RRR</Link>
                </h1>
            </div>
            <ul className='flex font-bold gap-8 p-4 text-lg ml-16'>
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/service"}>Our Service</Link></li>
                <li><Link href={"/contact"}>Contact Us</Link></li>
                <li><Link href={"/about"}>About Us</Link></li>
                <li><Link href={"/pricing"}>Pricing</Link></li>
            </ul>
            <div className='flex items-center'>
                <button className='px-3 py-1 bg-blue-600 border-2 border-gray-800 rounded-full text-white'>Call 24/7: 7874712018</button>
            </div>
        </nav>
    )
}

export default Navbar;