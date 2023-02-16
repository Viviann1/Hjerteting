import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";


export default function Navbar() {
    const router = useRouter();
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className='w-full shadow bg-kv-color-pink text-kv-color-text'>
            <div className='justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>
                <div>
                        <ul
                            className='relative items-center justify-center space-y-8 text-center md:flex md:space-x-6 md:space-y-0'
                            onClick={() => {
                                setNavbar(!navbar);
                            }}
                        >
                            <li className='text-black'>
                                <button className="p-4 px-10 bg-red-300 p mx--2">
                                <Link href='/about'>dette er hjerteting</Link>
                                </button>
                            </li>
                            <li className='text-black'>
                                <button className="p-4 px-10 m-2 bg-red-300">
                                <Link href='/reference'>produkter</Link>
                                </button>
                                </li>
                            <li className='text-black'>
                            <button className="p-4 px-10 m-2 bg-red-300">
                                <Link href='/reference'>mønster</Link>
                                </button>
                            </li>
                            <li className='text-black'>
                            <button className="p-4 px-10 m-2 bg-red-300">
                                <Link href='/contact'>Ta kontakt</Link>
                                </button>
                            </li>
                        </ul>
                </div>
            </div>
        </nav>
    );
}
