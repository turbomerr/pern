import React, { use } from 'react'
import { ShoppingCart, ShoppingBag } from 'lucide-react';
import { Link, useResolvedPath } from 'react-router-dom';
import ThemeSelector from "../components/ThemeSelector"
import { useProductStore } from '../store/useProductStore';

const Navbar = () => {

    const { pathname } = useResolvedPath();
    const isHomePage = pathname == "/";
    const { products } = useProductStore()

    return (

        <nav className='bg-base-100 border-b border-base-300 sticky top-0 z-50'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='navbar flex justify-between h-16 items-center  px-4'>
                    <div className="flex-1 lg:flex-none">
                        <Link to="/" className="hover:opacity-80 transition-opacity">
                            <div className="flex items-center gap-2">
                                <ShoppingCart className="size-9 text-primary" />
                                <span
                                    className="font-semibold font-mono tracking-widest text-2xl 
                                    bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
                                >
                                    POSGRESTORE
                                </span>
                            </div>
                        </Link>
                    </div>
                    <div className='flex items-center gap-4'>
                        <ThemeSelector />

                        {isHomePage && (
                            <div className="indicator">
                                <div className='p-2 rounded-full hover:bg-base-200 transition-colors'>
                                    <ShoppingBag className='size-5' />
                                    {products.length > 0 && (
                                        <span className='badge badge-sm badge-primary indicator-item'>
                                            {products.length}
                                        </span>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Navbar