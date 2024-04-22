import React from "react";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
    return(
        <nav className="flex justify-center border-b shadow-sm">
            <div className="flex justify-between items-center w-9/12">
                <Link href="/">
                    <div className="flex space-x-3 items-center"> 
                        <Image src="/brand-logo-blue.png" width={60} height={60} alt="brand-logo" /> 
                        <h1 className="kalam-bold text-primary-500 text-xl">coder e-lib</h1>
                    </div>
                </Link>
                <div className="flex space-x-3">
                    <button className="px-4 py-2 bg-white rounded-md border border-primary-500 hover:bg-primary-200 hover:text-white transition-all ease-linear">Sign in</button>
                    <button className="px-4 py-2 text-white rounded-md bg-primary-500  hover:bg-primary-700 transition-all ease-linear">Sign up</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;