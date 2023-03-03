import React, {useState, useContext, createContext,} from 'react'
import Headers from "./Header"
import Sidebar from "./Sidebar"
import { Route, Routes } from 'react-router-dom'
import routes from "../router"

const Layouts = ({ children }) => {
    const [displaySidebar, setTogglesidebar] = useState(false);
    const hndl = () => {
        setTogglesidebar(!displaySidebar)
    }
    return(<>
        <Headers hndl={hndl} props={displaySidebar}/>
        <div className="flex items-start pt-16">
            <div className={'lg:!block'+ (!displaySidebar ? ' hidden': '')}>
                <Sidebar props={displaySidebar} />
            </div>
                <main className={'overflow-y-auto relative w-full h-full bg-gray-50 dark:bg-gray-900 ' + (displaySidebar ? 'lg:ml-16' : 'lg:ml-64')}>
                    <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700">
                        <div className="w-full mb-1">
                        <Routes>
                        {routes.map((route, idx) => {
                            return (
                            route.element && (
                                <Route
                                key={idx}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                element={<route.element />}
                                />
                            )
                            )
                        })}
                        </Routes>
                        </div>
                    </div>
                </main>
        </div>
    </>)
}

export default Layouts;