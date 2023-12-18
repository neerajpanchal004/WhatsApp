"use client"
import Link from 'next/link'
import React from 'react'
// import {FaCamera,BsThreeDotsVertical} from 'react-icons/bs'


const Header = () => {
    return (
        <>
            <div className='bg-emerald-900 text-white p-3 w-full sm:mx-auto sm:w-[400px] '>
                <div>
                    <h1 className='text-xl'>WhatsApp</h1>
                </div>

                <div>
                    

                </div>
                {/* navbar */}
                <div className='flex justify-between p-5'>
                <Link href="chats">chats</Link>
                <Link href="updates">Updates</Link>
                <Link href="calls">Calls</Link>
                </div>
                     {/* navbar-end */}
            </div>
        </>
    )
}

export default Header