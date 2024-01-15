import React from 'react'
import CategoryData from '../DataSection/CategoryData'

export default function CategorySection() {



    return (
        <>
            <div className='w-full h-auto py-10 bg-red-200 container mx-auto flex flex-wrap'>
                {
                    CategoryData.map((data, index): any => {
                        return (
                            <div key={index} className='bg-slate-700 rounded-full px-4 py-1 mr-3 font-semibold text-white select-none cursor-pointer'>
                                {data.name}
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
