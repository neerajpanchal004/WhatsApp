import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <>
      {/* first-slide */}
      <div className=' flex w-full m-5 sm:justify-center'>
        <Image src="/one.jpg" width="50" height="10" className='rounded-full'></Image>
        <div className='mx-2'>
          <div className='flex justify-between w-full'>
            <h2 className='font-bold'>Anil</h2>

            <h5 className='text-xs'>4:30PM</h5>

          </div >
          <div className='flex justify-between '>
            <p className='truncate w-[260px]'>Hii What are u doing</p>
            <p className='bg-emerald-700 rounded-full text-white text-xs p-1 mx-2'>4</p>
          </div>

        </div>
      </div>
      {/* first-slide-end */}
         {/* second-slide */}
         <div className=' flex w-full m-5 sm:justify-center'>
         <Image src="/second.jpg" width="50" height="40" className='rounded-full'></Image>

        <div className='mx-2'>
          <div className='flex justify-between w-full'>
            <h2 className='font-bold'>Mario</h2>

            <h5 className='text-xs'>1:30PM</h5>

          </div >
          <div className='flex justify-between '>
            <p className='truncate w-[260px]'>Hii What are u doing</p>
            <p className='bg-emerald-700 rounded-full text-white text-xs p-1 mx-2'>4</p>
          </div>

        </div>
      </div>
      {/* second-slide-end */}
         {/* third-slide */}
         <div className=' flex w-full m-5 sm:justify-center'>
        <Image src="/third.jpg" width="50" height="40" className='rounded-full'></Image>
        <div className='mx-2'>
          <div className='flex justify-between w-full'>
            <h2 className='font-bold'>Peter</h2>

            <h5 className='text-xs'>9:30AM</h5>

          </div >
          <div className='flex justify-between '>
            <p className='truncate w-[260px]'>Hii!!</p>
            <p className='bg-emerald-700 rounded-full text-white text-xs p-1 mx-2'>1</p>
          </div>

        </div>
      </div>
      {/* third-slide-end */}
         {/* four-slide */}
         <div className=' flex w-full m-5 sm:justify-center'>
        <Image src="/four.jpg" width="50" height="40" className='rounded-full'></Image>
        <div className='mx-2'>
          <div className='flex justify-between w-full'>
            <h2 className='font-bold'>Sidhu</h2>

            <h5 className='text-xs'>16/12/23</h5>

          </div >
          <div className='flex justify-between '>
            <p className='truncate w-[260px]'>Good nyt 😝</p>
            <p className='bg-emerald-700 rounded-full text-white text-xs p-1 mx-2'>3</p>
          </div>

        </div>
      </div>
      {/* four-slide-end */}
         {/* five-slide */}
         <div className=' flex w-full m-5 sm:justify-center'>
        <Image src="/five.jpg" width="50" height="40" className='rounded-full'></Image>
        <div className='mx-2'>
          <div className='flex justify-between w-full'>
            <h2 className='font-bold'>Harry</h2>

            <h5 className='text-xs'>15/12/23</h5>

          </div >
          <div className='flex justify-between '>
            <p className='truncate w-[260px]'>Hmm!</p>
            <p className='bg-emerald-700 rounded-full text-white text-xs p-1 mx-2'>1</p>
          </div>

        </div>
      </div>
      {/* five-slide-end */}
         {/* six-slide */}
         <div className=' flex w-full m-5 sm:justify-center'>
        <Image src="/six.jpg" width="50" height="40" className='rounded-full'></Image>
        <div className='mx-2'>
          <div className='flex justify-between w-full'>
            <h2 className='font-bold'>Leo</h2>

            <h5 className='text-xs'>13/12/23</h5>

          </div >
          <div className='flex justify-between '>
            <p className='truncate w-[260px]'>Hii What are u doing....</p>
            <p className='bg-emerald-700 rounded-full text-white text-xs p-1 mx-2'>4</p>
          </div>

        </div>
      </div>
      {/* six-slide-end */}
         {/* seven-slide */}
         <div className=' flex w-full m-5 sm:justify-center'>
        <Image src="/seven.jpg" width="50" height="40" className='rounded-full'></Image>
        <div className='mx-2'>
          <div className='flex justify-between w-full'>
            <h2 className='font-bold'>Sonu</h2>

            <h5 className='text-xs'>12/12/23</h5>

          </div >
          <div className='flex justify-between '>
            <p className='truncate w-[260px]'>😝</p>
            <p className='bg-emerald-700 rounded-full text-white text-xs p-1 mx-2'>7</p>
          </div>

        </div>
      </div>
      {/* seven-slide-end */}
         {/* eight-slide */}
         <div className=' flex w-full m-5 sm:justify-center'>
        <Image src="/eight.jpg" width="50" height="40" className='rounded-full'></Image>
        <div className='mx-2'>
          <div className='flex justify-between w-full'>
            <h2 className='font-bold'>Ankit</h2>

            <h5 className='text-xs'>10/12/23</h5>

          </div >
          <div className='flex justify-between '>
            <p className='truncate w-[260px]'>Hii where are u now!!</p>
            <p className='bg-emerald-700 rounded-full text-white text-xs p-1 mx-2'>1</p>
          </div>

        </div>
      </div>
      {/* eight-slide-end */}
     
    </>
  )
}


export default page