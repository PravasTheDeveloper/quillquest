import AddDataNew from '@/components/AddDataNew'
import React from 'react'


export default function signin() {
    return (
        <>
            <div className='w-full h-screen bg-slate-200 flex justify-center items-center'>
                <div className='w-[600px] h-[400px] bg-white shadow-lg rounded-lg'>
                    <AddDataNew />
                </div>
            </div>
        </>
    )
}
