import React, {useState, useEffect} from 'react'
import Datajson from '../data/data.json'
import moment from 'moment'
import {useNavigate, useLocation} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const [item, setItem] = useState(null)

    useEffect(() => {
        let arr = [];
        Datajson.data.forEach((b) => {
            arr.push(b)
        })
        setItem(arr)
    }, [])
    const GoView = (id) => {
        navigate('/obligor/'+id)
    }
    return(<>
        <div className="mb-4">
            <nav className="flex mb-5" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
                  <li className="inline-flex items-center">
                    <a href="#" className="inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white">
                      <svg className="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                      Obligor
                    </a>
                  </li>
                  {/* <li>
                    <div className="flex items-center">
                      <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                      <a href="#" className="ml-1 text-gray-700 hover:text-primary-600 md:ml-2 dark:text-gray-300 dark:hover:text-white">E-commerce</a>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                      <span className="ml-1 text-gray-400 md:ml-2 dark:text-gray-500" aria-current="page">Products</span>
                    </div>
                  </li> */}
                </ol>
            </nav>
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">Obligor</h1>
            <div className='items-center justify-between block sm:flex md:divide-x md:divide-gray-100 dark:divide-gray-700'>
                <div className='flex items-center mb-4 sm:mb-0'>
                    <form className='sm:pr-3'>
                        <label htmlFor="products-search" className="sr-only">Search</label>
                        <div className="relative w-48 mt-1 sm:w-64 xl:w-96">
                            <input type="text" name="search" id="products-search" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search for obligor" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div className="flex flex-col">
            <div className="overflow-x-auto">
                <div className="inline-block min-w-full align-middle">
                    <div className="overflow-hidden shadow">
                        <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
                            <thead className="bg-gray-100 dark:bg-gray-700">
                                <tr>
                                    <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">CIF No.</th>
                                    <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">Obligor Name</th>
                                    <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">RM Code</th>
                                    <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">RM Name</th>
                                    <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">Team Code</th>
                                    <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">Date Created</th>
                                    <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">Action</th>
                                </tr>
                            </thead>
                            <tbody className='bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700'>
                                {
                                    item && item.map((b, index) => (
                                        <tr className='hover:bg-gray-100 dark:hover:bg-gray-700' key={index}>
                                            <td className='p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400'>{b.cif_no}</td>
                                            <td className='p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400'>{b.obligor_name}</td>
                                            <td className='p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400'>{b.rm_code}</td>
                                            <td className='p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400'>{b.rm_name}</td>
                                            <td className='p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400'>{b.team_code}</td>
                                            <td className='p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400'>{moment(b.date_last_modified).format('DD MMM YYYY')}</td>
                                            <td className='p-4 space-x-2 whitespace-nowrap'>
                                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={(e) => GoView(b.id)}>Edit Obligor</a>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default Home