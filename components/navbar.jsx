import React from "react";
import { useState } from "react";
import { useRouter } from 'next/router';


export default function Navbar() {
    const router = useRouter();
    const [navbar, setNavbar] = useState(false);
    return (
        <nav className="w-full shadow bg-rose-200">

        </nav>
    );

}