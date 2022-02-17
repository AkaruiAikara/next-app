import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';
import Dropdown from '../dropdown';

export default function Navbar(props) {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-600 my-5">
            <div className="flex flex-wrap justify-between items-center">
                <Link href="/">
                    <img className="cursor-pointer" src="/assets/img/logo.png" alt="logo" />
                </Link>
                {props.isLoggedIn ? (
                    <ul className="flex justify-end items-center space-x-12">
                        <li>
                            <Link href="/cart">
                                <img className="cursor-pointer" src="/assets/img/shopbasket.png" alt="avatar" />
                            </Link>
                        </li>
                        <li>
                            <div className="relative">
                                <button type="button" onClick={() => {setIsOpen(() => {return (isOpen) ? false : true})}}>
                                    <img src="/assets/img/avatar.png" alt="avatar" />
                                </button>
                                {isOpen ? (
                                    <Dropdown />
                                ) : null}
                            </div>
                        </li>
                    </ul>
                ) : (
                    <ul className="flex justify-end space-x-2">
                        <li>
                            <Link href={router.pathname + '/?login=true'} as="/login">
                                <button className="text-blood font-product bg-white border-solid border-2 border-blood hover:bg-blood hover:text-white focus:ring-4 focus:ring-red-200 font-medium rounded-md text-sm p-10 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-blood dark:focus:ring-red-800">Login</button>
                            </Link>
                        </li>
                        <li>
                            <Link href={router.pathname + '/?register=true'} as="/register">
                                <button className="text-white font-product bg-blood border-solid border-2 border-blood hover:bg-red-600 focus:ring-4 focus:ring-red-200 font-medium rounded-md text-sm px-10 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-blood dark:focus:ring-red-800">Register</button>
                            </Link>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    )
}