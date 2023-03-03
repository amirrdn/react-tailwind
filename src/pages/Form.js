import React, {useState, useEffect, useRef} from 'react'
import { Select, Option } from "@material-tailwind/react"
import Datepicker from "flowbite-datepicker/Datepicker"
import moment from 'moment'
import {useNavigate, useLocation} from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const FormObligor = (props) => {
    const navigate = useNavigate();
    const [itmform, setItemform] = useState(null)
    const optentity = ['Bank', 'Cash', 'Credit']
    const optcountry_incoraption = ['Singapore', 'Malaysia', 'Indonesia', 'Filipina', 'Australia']
    const optindustry = ['6273687-Full licence banks located Singapore', '6273684-Full licence banks located Malaysia' ]
    const optteam_code = ['B01', 'B02', 'B03', 'B04', 'B05']
    const toastref = useRef();
    const [showtoast, setShowtoast] = useState(false)

    useEffect(() => {
        if(props.props){
            setItemform(props.props)
        }
    }, [])
    useEffect(() => {
        if(itmform){
            const datepickerEl = document?.getElementById("datepickerId");
            new Datepicker(datepickerEl, {});
        }
    }, [itmform])

    const onchangeInput = (e) => {
        setItemform({...itmform, [e.target.name]: e.target.value});
    }
    const onSubmit = (e) => {
        e.preventDefault();
        toast.success("Success Notification !", {
            position: toast.POSITION.TOP_CENTER
          })
          setTimeout(() => {
            navigate('/')
          }, 1000);
    }
    if(itmform === null){
        return(<></>)
    }else{

    return(<>
        <ToastContainer />
        <form className="w-full pt-6" onSubmit={onSubmit}>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" value={itmform.obligor_name} name="obligor_name" id="obligor_name" 
                    onChange={onchangeInput}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="obligor_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Obligor Name</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="cif_no" id="cif_no" value={itmform.cif_no}
                    onChange={onchangeInput}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="cif_no" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">CIF No.</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">                    
                    <Select variant="static" name='entyty' label="Select Entity" value={itmform.entyty} onChange={onchangeInput}>
                        {
                            optentity.map((b) => (
                                <Option value={b.toString()}>{b}</Option>
                            ))
                        }
                    </Select>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input datepicker datepicker-autohide id="datepickerId" type="text" 
                    onChange={onchangeInput}
                    value={moment(itmform.date_in_corporation).format('DD-MM-YYYY')}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Select Date of Corporation" />
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="swift_code"
                    onChange={onchangeInput}
                     id="swift_code" value={itmform.swift_code} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="swift_code" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Swift Code</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">                    
                    <Select variant="static" label="Country in Coprporation" name='country_incoraption' value={itmform.country_incoraption} onChange={onchangeInput}>
                        {
                            optcountry_incoraption.map((b, index) => (
                                <Option value={b.toString()} key={index}>{b}</Option>
                            ))
                        }
                    </Select>
                </div>
                <div className="relative z-0 w-full mb-6 group">                    
                    <Select variant="static" label="Industry" name='industry' value={itmform.industry} onChange={onchangeInput}>
                        {
                            optindustry.map((b, index) => (
                                <Option value={b.toString()} key={index}>{b}</Option>
                            ))
                        }
                    </Select>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="borrowing_group"
                    onChange={onchangeInput}
                     id="swift_borrowing_groupcode" value={itmform.borrowing_group} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="borrowing_group" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Borrowing Group</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">                    
                    <Select variant="static" label="Team Code" name='team_code' value={itmform.team_code} onChange={onchangeInput}>
                        {
                            optteam_code.map((b, index) => (
                                <Option value={b.toString()} key={index}>{b}</Option>
                            ))
                        }
                    </Select>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="team_location"
                    onChange={onchangeInput}
                     id="team_location" value={itmform.team_location} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlhtmlFor="team_location" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Team Location</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="bussiness_unit"
                    onChange={onchangeInput}
                     id="bussiness_unit" value={itmform.bussiness_unit} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="bussiness_unit" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Bussiness Unit</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="rm_code"
                    onChange={onchangeInput}
                     id="rm_code" value={itmform.rm_code} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="rm_code" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">RM Code</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="rm_name"
                    onChange={onchangeInput}
                     id="rm_name" value={itmform.rm_name} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="rm_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">RM Name</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="date_last_modified"
                    onChange={onchangeInput}
                     id="date_last_modified" value={itmform.date_last_modified} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="date_last_modified" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Date Last Modified</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="last_modifed_by"
                    onChange={onchangeInput}
                     id="last_modifed_by" value={itmform.last_modifed_by} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="last_modifed_by" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last Modified By</label>
                </div>
            </div>
            <div className='float-right'>
                <button type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    Submit
                </button>
                <button type="button"
                    className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    onClick={(e) => props.setAction('view')}>
                    Cancel
                </button>
                
            </div>
        </form>
    </>)
    }
}
export default FormObligor