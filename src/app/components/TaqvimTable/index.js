'use client'

import useSWR from "swr";
import {fetcher} from "@/utils/fetcher";
import useFilter from "@/hooks/useFilter";
import {getComputedTime, getWeekdayAndMonth} from "@/utils/taqvimTableUtils";


export default function TaqvimTable () {
    const {data, isLoading} = useSWR('/api/taqvim', fetcher)
    const {onFilterByRegionSelected, filter, filterRegions} = useFilter()

    return <div className="overflow-auto w-full">
        <select
            onChange={onFilterByRegionSelected}
            defaultValue={0}
            className="form-select lg:w-44 w-[90%] mb-3 mx-2
            py-1.5 text-base font-normal text-gray-700 bg-white
            border border-solid border-gray-300 rounded"
            aria-label="Filter by Region"
        >
            {filterRegions.map((region, index) => (
                <option key={index} value={region.id}>
                    {region?.name}
                </option>
            ))}
        </select>
        <table className="md:w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto overflow-x-scroll md:overflow-auto">
            <thead className="text-xs text-white uppercase bg-green-700 dark:bg-green-600">
            <tr>
                <th scope="col" className="px-4 py-2 lg:px-6 lg:py-3">
                    Kun
                </th>
                <th scope="col" className="px-4 py-2 lg:px-6 lg:py-3">
                    Hafta Kunlari
                </th>
                <th scope="col" className="px-4 py-2 lg:px-6 lg:py-3">
                    Mart/Aprel
                </th>
                <th scope="col" className="px-4 py-2 lg:px-6 lg:py-3">
                    Saharlik Vaqti
                </th>
                <th scope="col" className="px-4 py-2 lg:px-6 lg:py-3">
                    Iftor Vaqti
                </th>
            </tr>
            </thead>
            <tbody className='h-[40rem] overflow-scroll'>
            {!isLoading ? data.map((entry, index) => (
                <tr key={index} className="bg-white border-b">
                    <th scope="row"
                        className="px-4 py-3 lg:px-6 lg:py-4 font-medium text-gray-900 whitespace-nowrap">
                        {entry?.id}
                    </th>
                    <td className="px-4 py-3 lg:px-6 lg:py-4 text-lg">
                        {getWeekdayAndMonth(entry?.date)?.weekday}
                    </td>
                    <td className="px-4 py-3 lg:px-6 lg:py-4 text-lg">
                        {`${getWeekdayAndMonth(entry?.date)?.day} ${getWeekdayAndMonth(entry?.date)?.month}`}
                    </td>
                    <td className="px-4 py-3 lg:px-6 lg:py-4 font-semibold text-2xl">
                        {getComputedTime(entry?.date, filter, entry?.time?.morning, 'MORNING')}
                    </td>
                    <td className="px-4 py-3 lg:px-6 lg:py-4 font-semibold text-2xl">
                        {getComputedTime(entry?.date, filter, entry?.time?.evening, 'EVENING')}
                    </td>
                    <div>
                        
                    </div>
                </tr>
            )) : null}
            </tbody>
        </table>
    </div>

}