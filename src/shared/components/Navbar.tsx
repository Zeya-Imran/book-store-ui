import React from "react";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
    return(
        <nav className="border-b shadow-sm px-4 md:px-0">
            <div className="mx-auto max-w-6xl justify-between items-center flex ">
                <Link href="/">
                    <div className="flex space-x-3 items-center"> 
                        <Image src="/brand-logo-safron.png" width={60} height={60} alt="brand-logo" /> 
                        <h1 className="kalam-bold text-primary-500 text-xl md:visible invisible">coder e-lib</h1>
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