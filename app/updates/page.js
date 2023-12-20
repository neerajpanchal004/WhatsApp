import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";


import { FaPlus } from "react-icons/fa6";

import Image from 'next/image';


const page = () => {
  return (
    <>
      <div className='m-2  flex sm:justify-center'>
        <div className='flex justify-between  items-center sm:w-80 '>
          <h3 className='font-bold'>Status</h3>
          < BsThreeDotsVertical />
        </div>



      </div>
      {/* upper part */}

      {/* Status-Area-Start */}
      <div className='flex sm:justify-center'>

        {/* first */}
        <div className='my-4 mx-3 '>
          <Image src="/avatar.png" width="50" height="40" className='rounded-full border-2 border-emerald-600'></Image>
          <p className='text-xs'>My Status</p>
        </div>
        {/* first-end */}

        {/* Second */}
        <div className='my-4 mx-3 '>
          <Image src="/avatar.png" width="50" height="40" className='rounded-full border-2 border-emerald-600'></Image>
          <p className='text-xs ml-2'>Peter</p>
        </div>
        {/* Second-end */}

        {/* Third */}
        <div className='my-4 mx-3'>
          <Image src="/avatar.png" width="50" height="40" className='rounded-full border-2 border-emerald-600'></Image>
          <p className='text-xs ml-2'>Harry</p>
        </div>
        {/* Third-end */}

        {/* fourth */}
        <div className='my-4 mx-3'>
          <Image src="/avatar.png" width="50" height="40" className='rounded-full border-2 border-emerald-600'></Image>
          <p className='text-xs ml-3'>Leo</p>
        </div>
        {/* Fourth-end */}
      </div>
      {/* Status-Area-End */}

      {/* HR */}
      <div className=' border-2 border-black m-auto sm:w-[350px] '></div>
      {/* HR */}

      {/* Channal part */}
      <div className='m-2  flex sm:justify-center'>
        <div className='flex justify-between items-center w-80 '>
          <h3 className='font-bold'>Find Channels</h3>
          <h5 className='text-emerald-900 text-xs'>See all {">"} </h5>
        </div>



      </div>
      {/* channal cart */}
      <div className='flex gap-3 sm:justify-center flex-wrap m-5'>
        {/* first card */}
        <div className='flex-col  px-3 py-5 w-28 border-2 rounded-lg'>
          <Image src="/Thinking Emoji.png" width="40" height="10" className='m-auto'></Image>
          <p>Cravings</p>
          <button className='py-1  px-4 rounded-full bg-green-300 text-emerald-800 text-xs'>Follow</button>
        </div>
        {/* first card end */}


        {/* second card */}
        <div className='flex-col px-3 py-5 w-28 border-2 rounded-lg'>
          <Image src="/abplogo.webp" width="40" height="10" className='m-auto rounded-full mb-4 '></Image>
          <p>ABP News</p>
          <button className='py-1  px-4 rounded-full bg-green-300 text-emerald-800 text-xs mx-2'>Follow</button>
        </div>
        {/* second card end */}
        {/* third card */}
        <div className='flex-col px-3 py-5 w-28 border-2 rounded-lg'>
          <Image src="/sports.jpg" width="40" height="10" className='m-auto rounded-full mb-3'></Image>
          < p className='mx-3'>Sports</p>
          <button className='py-1  px-4 rounded-full bg-green-300 text-emerald-800 text-xs mx-2'>Follow</button>
        </div>
        {/* third card end */}
      </div>
      {/* channal part end */}

     


    </>
  )
}

export default page