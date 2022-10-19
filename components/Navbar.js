import React from 'react'

function navbar() {
  return (
    <section>
        <nav className='flex flex-row bg-[#1E2D3D] border-[1px] border-[#607B96]'>
            <h1 className='p-4 text-[#607B96]'>harun-inam</h1>
            <div className='ml-[154px] flex flex-row'>
                <div className='flex flex-row gap-8 font-semibold p-4 border-x-[1px] border-[#607B96] border-b-2 border-b-[#FEA55F]'>
                    <a className='mx-4 text-white'>_hello</a>
                </div>
                <div className='flex flex-row gap-8 font-semibold p-4 border-r-[1px] border-[#607B96] text-[#607B96]'>
                    <a className='mx-4'>_about-me</a>
                </div>
                <div className='flex flex-row gap-8 font-semibold p-4 border-r-[1px] border-[#607B96] text-[#607B96]'>
                    <a className='mx-4'>_projects</a>
                </div>
            </div>
            <div className='flex flex-row gap-8 font-semibold p-4 border-[#607B96] text-[#607B96]'>
                <a className='mx-4 justify-end'>_contact-me</a>
            </div>
        </nav>
    </section>
  )
}

export default navbar