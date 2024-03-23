import React from 'react'

function form() {
    return (
        <div>
            <div className="w-full h-auto overflow-scroll block h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4 flex items-center justify-center" >
                <div className="bg-white py-6 px-10 sm:max-w-md w-full ">
                    <div className="sm:text-3xl text-2xl font-semibold text-center text-sky-600  mb-12">
                       Entry Data
                    </div>
                    <div className="">
                        <div>
                            <input type="text" className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500"  placeholder="Name "/>
                        </div>
                        <div>
                            <input type="email" className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 my-8"  placeholder="Course"/>
                        </div>
                        <div>
                        <input type="text" className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"  placeholder="Year Level "/>
                        </div>
                        <div>
                        <input type="date" className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"  placeholder="Time/Date "/>
                        </div>
                        <div className="">
                            <input type="text" className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"  placeholder="Purpose " />
                        </div>
                        <div className="flex justify-center my-6">
                            <button type='submit' className=" rounded-full  p-3 w-full sm:w-56   bg-gradient-to-r from-sky-600  to-teal-300 text-white text-lg font-semibold " >
                                Create Account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default form