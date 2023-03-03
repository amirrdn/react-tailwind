import React, {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom';
import Datajson from '../data/data.json'
import DetailPage from './Detail'
import FormPage from './Form'

const DetailObligor = () => {
    const [item, setItem] = useState(null)
    const [action, setAction] = useState(null)
    const {id} = useParams();

    useEffect(() => {
        getItem();
        setAction('view')
        
    }, [])

    const getItem = () => {
        const itm = Datajson.data.find(obj => {
            return obj.id.toString() === id.toString();
        });
        setItem(itm)
    }
    const Buttonaction = () => {
        if(action === 'view'){
            return(<>
                <button type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    onClick={(e) => setAction('edit')}>
                    Edit
                </button>
            </>)
        }
        // else if(action === 'edit'){
        //     return(<>
        //         <button type="button"
        //             className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        //             onClick={(e) => setAction('view')}>
        //             Cancel
        //         </button>
        //     </>)
        // }
    }

    return(<>
        <div className="mb-4">
            <nav className="flex mb-5" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
                  <li className="inline-flex items-center">
                    <Link to="/" className="inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white">
                      <svg className="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                      Obligor
                    </Link>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                      <span className="ml-1 text-gray-400 md:ml-2 dark:text-gray-500" aria-current="page">{item && item.obligor_name}</span>
                    </div>
                  </li>
                </ol>
            </nav>
            <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className="inline-block min-w-full align-middle">
                        {
                            action === 'view' ? <DetailPage props={item} setAction={setAction} /> : <FormPage setAction={setAction} props={item} />
                        }
                        <div className='float-right'>
                            {Buttonaction()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default DetailObligor