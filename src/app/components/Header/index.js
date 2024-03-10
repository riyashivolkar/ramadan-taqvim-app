'use client'
import {useState} from "react";


export default function Header () {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return <header className="bg-green-700 text-white">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
            <a className="text-xl font-semibold" href="#">
                Ramazon Taqvimi
            </a>
            <div className="hidden md:flex space-x-4">
                <a href="/" className="py-2 px-3 hover:bg-green-600 rounded transition-colors duration-300">Asosiy</a>
                <a href="/full-taqvim" className="py-2 px-3 hover:bg-green-600 rounded transition-colors duration-300">30-Kunlik</a>
                {/*<a href="#" className="py-2 px-3 hover:bg-green-600 rounded transition-colors duration-300">Zakat</a>
                <a href="#" className="py-2 px-3 hover:bg-green-600 rounded transition-colors duration-300">Duas</a>*/}
                {/* More nav items here */}
            </div>
            <div className="md:hidden flex items-center">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}/>
                    </svg>
                </button>
            </div>
        </nav>
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden flex-col px-2 pt-2 pb-4 space-y-1 sm:px-3`}>
            <a href="/"
               className="py-2 px-3 text-green-700 bg-white rounded hover:bg-gray-100 transition-colors duration-300">Asosiy</a>
            <a href="/full-taqvim"
               className="py-2 px-3 text-green-700 bg-white rounded hover:bg-gray-100 transition-colors duration-300">30-Kunlik</a>
            {/*<a href="#"
               className="py-2 px-3 text-green-700 bg-white rounded hover:bg-gray-100 transition-colors duration-300">Zakat</a>
            <a href="#"
               className="py-2 px-3 text-green-700 bg-white rounded hover:bg-gray-100 transition-colors duration-300">Duas</a>*/}
            {/* More nav items here */}
        </div>
    </header>
}