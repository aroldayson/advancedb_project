import AcmeLogo from '@/app/ui/acme-logo';
import styles from '@/app/ui/home.module.css';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';

export default function Page() {
  return (
      <div>
{/* <link rel="stylesheet" href="https://kit-pro.fontawesome.com/releases/v5.15.1/css/pro.min.css" /> */}

<div className="min-h-screen flex flex-col items-center justify-center bg-gray-300">
<div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
  <div className="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">Login To Your Account</div>
  <div className="mt-10">
    <form action="/dashboard">
      <div className="flex flex-col mb-6">
        
        {/* <label for="email" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">E-Mail Address:</label> */}
        <div className="relative">
          <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
            <svg className="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
          </div>

          <input id="email" type="email" name="email" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="E-Mail Address" />
        </div>
      </div>
      <div className="flex flex-col mb-6">
        {/* <label for="password" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Password:</label> */}
        <div className="relative">
          <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
            <span>
              <svg className="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </span>
          </div>

          <input id="password" type="password" name="password" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Password" />
        </div>
      </div>

      <div className="flex w-full">
        <button type="submit" className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in">
          <span className="mr-2 uppercase">Login</span>
          <span>
            <svg className="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
             
            </svg>
          </span>
        </button>
        <button className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in">
          <span className="mr-2 uppercase"><a href="signup"></a>Sign Up</span>
        </button>
      </div>
    </form>
  </div>
  <div className="flex justify-center items-center mt-6">
  </div>
</div>
</div>
      </div>
  )
}