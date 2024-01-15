import React from 'react'

export default function NavBar() {
    return (
        <>
            <div className='w-full h-[70px] container mx-auto bg-white flex justify-between items-center border-b'>
                <div className='flex text-2xl font-semibold items-center h-full'>
                    QUILL <span className='text-cyan-500 ml-2'> QUEST</span> 
                </div>
                <div>
                    <button className='w-auto bg-cyan-500 text-white rounded-full px-6 py-2 font-semibold hover:text-cyan-500 border-2 border-white hover:bg-transparent duration-300 hover:border-cyan-500'>
                        Join Now
                    </button>
                </div>
            </div>
        </>
    )
}
