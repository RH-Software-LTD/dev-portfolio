import React from 'react'

function Hello() {
  return (
    <>
    <section className='p-8 bg-black'>
        <section>
            <nav className='flex flex-row bg-blueText rounded-tl-2xl rounded-tr-2xl border-b-[1px] border-[#607B96]'>
                <h1 className='p-4 text-grayText mr-24'>harun-inam</h1>
                <div className='flex flex-row'>
                    <div className='flex flex-row gap-8 font-semibold p-4 border-x-[1px] border-[#607B96] border-b-2 border-b-[#FEA55F]'>
                        <a className='mx-4 text-white'>_hello</a>
                    </div>
                    <div className='flex flex-row gap-8 font-semibold p-4 border-r-[1px] border-[#607B96] text-[#607B96]'>
                        <a href="../components/About"className='mx-4'>_about-me</a>
                    </div>
                    <div className='flex flex-row gap-8 font-semibold p-4 border-r-[1px] border-[#607B96] text-[#607B96]'>
                        <a className='mx-4'>_projects</a>
                    </div>
                </div>
                <div className='flex flex-row gap-8 font-semibold p-4 ml-[1070px] border-l-[1px] border-[#607B96] text-[#607B96]'>
                    <a className='mx-4 justify-end'>_contact-me</a>
                </div>
            </nav>
        </section>
        <section className='bg-blueText'>
            <div className="overflow-hidden pt-22">
                <div className="container px-8 mx-auto">
                    <div className="flex flex-wrap m-8 ">
                        <div className="w-full md:w-1/2 p-8 m-auto">
                            <p className="mb-1 text-lg text-textGray font-medium md:max-w-md">Hi all. I am</p>
                            <h1 className="mb-1 text-4xl md:text-6xl lg:text-6xl text-textGray font-bold font-heading md:max-w-xl leading-none">Harun Inam</h1>
                            <p className="mb-11 text-lg text-[#4D5BCE] font-medium md:max-w-md flex flex-row items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>
                            Front-end developer
                            </p>
                            <p className="mb-2 text-sm text-grayText">// do you want to see my codes?</p>
                            <p className="mb-2 text-sm text-grayText">// you can also see it on my Github page</p>
                            <p className="text-sm">
                                <span className='text-[#4D5BCE]'>const </span>
                                <span className='text-[#43D9AD]'>githubLink </span>
                                <span className='text-white'>= </span>
                                <a className='text-[#E99287]' target="_blank" href='https://github.com/HarunInam'>https://github.com/HarunInam</a>
                            </p>
                        </div>                        
                        <div className="md:w-1/2 p-8 justify-end">
                            <img src='blurs.png' />
                         </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <nav className='flex flex-row bg-blueText rounded-bl-2xl rounded-br-2xl border-t-[1px] sm:flex sm:items-center sm:justify-between border-[#607B96]'>
                <h1 className='p-4 text-grayText'>find me in: </h1>
                <div className='flex flex-row'>
                    <div className='flex flex-row font-semibold p-4 border-x-[1px] sm:flex sm:items-center sm:justify-between border-[#607B96]'>
                        <a target="_blank" href='https://twitter.com/InamHarun'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="#607B96" class="bi bi-twitter" viewBox="0 0 16 16">
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                            </svg>
                        </a>
                    </div>
                    <div className='flex flex-row gap-8 font-semibold p-4 border-r-[1px] sm:flex sm:items-center sm:justify-between border-[#607B96] text-[#607B96]'>
                        <a target="_blank" href='https://www.linkedin.com/in/haruninam/'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <hr class="border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div class="sm:flex sm:items-center sm:justify-between">
                    <div className='flex flex-row gap-2 font-semibold p-4 border-l-[1px] border-[#607B96] text-[#607B96]'>
                        <a target="_blank" href='https://github.com/HarunInam' className='justify-end'>@haruninam</a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#607B96" class="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                    </div>
                </div>
            </nav>
        </section>
    </section>
    </>
  )
}

export default Hello