import Link from 'next/link';

export default function Dropdown() {
    return (
        <div className="absolute right-0 z-30 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
            <ul className="py-3">
                <li>
                    <Link href="add-product">
                        <div href="#" className="block py-4 px-4 text-md text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                            <button href="/profile" className="flex mx-auto items-center gap-4">
                                <span>Add Product</span>
                            </button>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="add-topping">
                        <div href="#" className="block py-4 px-4 text-md text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                            <button href="/profile" className="flex mx-auto items-center gap-4">
                                <span>Add Topping</span>
                            </button>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/profile">
                        <div className="block py-4 px-4 text-md text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                            <button href="/profile" className="flex items-center gap-4">
                                <img src="/assets/img/profileicon.svg" alt="" />
                                <span>Profile</span>
                            </button>
                        </div>
                    </Link>
                </li>
                <li>
                    <a onClick={() => Logout()} className="block py-4 px-4 text-md text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                        <div className="flex items-center gap-4">
                            <img src="/assets/img/logouticon.svg" alt="" />
                            <span>Logout</span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    )
}