import React, {useState, useEffect} from 'react'
import logoicon from '../images/icon.png'

const Headers = (props) => {
    const [navcollapsed, setNavcollapsed] = useState(false)
    const clicker = () => {
        props.hndl()
    }
    return(<>
        
        <nav className="fixed z-30 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar"
                        onClick={clicker}
                        aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                            <span className="sr-only">Open sidebar</span>
                            <svg className={"w-6 h-6"+ (props.props ? ' hidden' : '')} aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                            </svg>
                            <svg id="toggleSidebarMobileClose" className={"w-6 h-6"+(!props.props ? ' hidden' : '')} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                        <a href="https://flowbite.com" className="flex ml-2 md:mr-24">
                        <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-blue-600">PILOT MULTIMEDIA</span>
                        </a>
                        <form class="ml-16 hidden md:block">
                            <label class="text-sm font-medium text-gray-900 dark:text-gray-300 sr-only" for="search">Search</label>
                            <div class="flex">
                                <div class="relative w-full">
                                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="h-5 w-5 text-gray-500 dark:text-gray-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <input class="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 pl-10 rounded-lg p-2.5 text-sm" id="search" name="search" placeholder="Search" required="" size="32" type="search" />
                                </div>
                            </div>
                        </form>
                    </div>
                <div className="flex items-center">
                    <div className="flex items-center ml-3">
                        <div>
                        <button type="button" onClick={(e) => setNavcollapsed(!navcollapsed)} className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                            <span className="sr-only">Open user menu</span>
                            <img className="w-8 h-8 rounded-full" src={logoicon} alt="user photo" />
                        </button>
                        </div>
                        <div 
                        className={navcollapsed ? 'z-50 block absolute-nav my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600'
                        : 'z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600'
                        }
                        id="dropdown-user">
                        <div className="px-4 py-3" role="none">
                            <p className="text-sm text-gray-900 dark:text-white" role="none">
                            Amir Rudin
                            </p>
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                            4mir.rdn@gmail.com
                            </p>
                        </div>
                        <ul className="py-1" role="none">
                            <li>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </nav>
    </>)
}

export default Headers;