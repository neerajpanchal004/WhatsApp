import React from 'react'
import { RxPlusCircled } from "react-icons/rx";
import { MdPhone } from "react-icons/md";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

import Image from 'next/image';

const page = () => {
  return (
    <>
      <div className='mx-5'>
        <div className='flex items-center my-5 sm:justify-center' >
          <div className='p-4 bg-emerald-800 rounded-full mr-2 '><RxPlusCircled />
          </div>
          <div>
            <h3 className='font-bold'>Create Call link</h3>
            <p className='font-light'>Share a link for your WhatsApp call</p>
          </div>


        </div>
        <div className='w-full sm:w-[82%] sm:justify-center flex'>
        <h3 className='font-bold'>Recent</h3>
        </div>
        

        {/* first-call */}
        <div className='flex items-center my-5 sm:justify-center w-full'>
          <div>
            <Image src="/one.jpg" width="40" height="15" className='rounded-full m-2'></Image>
          </div>
          <div>
            <h3 className=' text-red-700 w-60'>Anil</h3>
            <div className='flex'>
              <IoIosArrowRoundBack />
              <p className='font-light ml-2 mr-24 text-xs'>today 7:20PM</p>
              <MdPhone/>
            </div>

          </div>
          <div className='items-end'></div>

        </div>
        {/* first-call-end */}
        {/* second-call */}
        <div className='flex items-center my-5 sm:justify-center'>
          <div>
            <Image src="/five.jpg" width="40" height="15" className='rounded-full m-2'></Image>
          </div>
          <div>
            <h3 className='w-60'>Harry</h3>
            <div className='flex'>
              <IoIosArrowRoundForward />
              <p className='font-light ml-2 mr-32 text-xs'>18/12/23</p>
              <MdPhone/>
            </div>

          </div>
          <div className='items-end'></div>

        </div>
        {/* second-call-end */}
        {/* third-call */}
        <div className='flex items-center my-5 sm:justify-center'>
          <div>
            <Image src="/third.jpg" width="40" height="15" className='rounded-full m-2'></Image>
          </div>
          <div>
            <h3 className='w-60'>Peter</h3>
            <div className='flex'>
              <IoIosArrowRoundForward />
              <p className='font-light ml-2 mr-32 text-xs'>17/12/23</p>
              <MdPhone/>
            </div>

          </div>
          <div className='items-end'></div>

        </div>
        {/* third-call-end */}
        {/* four-call */}
        <div className='flex items-center my-5 sm:justify-center w-full'>
          <div>
            <Image src="/six.jpg" width="40" height="15" className='rounded-full m-2'></Image>
          </div>
          <div>
            <h3 className=' text-red-700 w-60'>Leo</h3>
            <div className='flex'>
              <IoIosArrowRoundBack />
              <p className='font-light ml-2 mr-32 text-xs'>15/12/23</p>
              <MdPhone/>
            </div>

          </div>
          <div className='items-end'></div>

        </div>
        {/* four-call-end */}
        {/* five-call */}
        <div className='flex items-center my-5 sm:justify-center w-full'>
          <div>
            <Image src="/seven.jpg" width="40" height="15" className='rounded-full m-2'></Image>
          </div>
          <div>
            <h3 className=' text-red-700 w-60'>Sonu</h3>
            <div className='flex'>
              <IoIosArrowRoundBack />
              <p className='font-light ml-2 mr-32 text-xs'>14/12/23</p>
              <MdPhone/>
            </div>

          </div>
          <div className='items-end'></div>

        </div>
        {/* five-call-end */}

      </div>
    </>
  )
}

export default page