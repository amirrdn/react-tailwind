import moment from "moment"
const DetailTable = (props) => {
    if(props.props){
        return(<>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <table className="table-detail min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
                    <tbody className='bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700'>
                        <tr>
                            <td className='p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400'>Obligor Name</td>
                            <td className='p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400'>:</td>
                            <td className='p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400'>{props.props.obligor_name}</td>
                        </tr>
                        <tr>
                            <td className='p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400'>Entity</td>
                            <td className='p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400'>:</td>
                            <td className='p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400'>{props.props.entyty}</td>
                        </tr>
                        <tr>
                            <td className='p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400'>Swift Code</td>
                            <td className='p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400'>:</td>
                            <td className='p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400'>{props.props.swift_code}</td>
                        </tr>
                        <tr>
                            <td className='p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400'>Industry</td>
                            <td className='p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400'>:</td>
                            <td className='p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400'>{props.props.industry}</td>
                        </tr>
                        <tr>
                            <td className='p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400'>Team Code</td>
                            <td className='p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400'>:</td>
                            <td className='p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400'>{props.props.team_code}</td>
                        </tr>
                        <tr>
                            <td className='p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400'>Bussiness Unit</td>
                            <td className='p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400'>:</td>
                            <td className='p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400'>{props.props.bussiness_unit}</td>
                        </tr>
                        <tr>
                            <td className='p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400'>RM Name</td>
                            <td className='p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400'>:</td>
                            <td className='p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400'>{props.props.rm_name}</td>
                        </tr>
                        <tr>
                            <td className='p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400'>Last Modified</td>
                            <td className='p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400'>:</td>
                            <td className='p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400'>{props.props.industry}</td>
                        </tr>
                    </tbody>
                </table>
                <table className="table-detail min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
                    <tbody className='bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700'>
                        <tr>
                            <td className='p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400'>CIF No.</td>
                            <td className='p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400'>:</td>
                            <td className='p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400'>{props.props.cif_no}</td>
                        </tr>
                        <tr>
                            <td className='p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400'>Date of Corporation</td>
                            <td className='p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400'>:</td>
                            <td className='p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400'>{moment(props.props.date_in_corporation).format('DD MMM YYYY')}</td>
                        </tr>
                        <tr>
                            <td className='p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400'>Country of Incoraption</td>
                            <td className='p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400'>:</td>
                            <td className='p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400'>{props.props.country_incoraption}</td>
                        </tr>
                        <tr>
                            <td className='p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400'>Borrowing Group</td>
                            <td className='p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400'>:</td>
                            <td className='p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400'>{props.props.borrowing_group}</td>
                        </tr>
                        <tr>
                            <td className='p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400'>Team Location</td>
                            <td className='p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400'>:</td>
                            <td className='p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400'>{props.props.team_location}</td>
                        </tr>
                        <tr>
                            <td className='p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400'>RM Code</td>
                            <td className='p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400'>:</td>
                            <td className='p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400'>{props.props.rm_code}</td>
                        </tr>
                        <tr>
                            <td className='p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400'>Date Last Modified</td>
                            <td className='p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400'>:</td>
                            <td className='p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400'>{props.props.industry}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>)

    }
}
export default DetailTable