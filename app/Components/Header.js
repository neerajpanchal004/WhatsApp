"use client";
import Link from "next/link";
import React from "react";
import { CiCamera } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";

// import {FaCamera,BsThreeDotsVertical} from 'react-icons/bs'

const Header = () => {
  return (
    <>
      <div className="bg-emerald-900 text-white p-4 w-full sm:mx-auto sm:w-[350px] ">
        <div className="flex justify-between">
          <div>
            <h1 className="text-xl">WhatsApp</h1>
          </div>
          <div className="flex">
            <CiCamera style={{ fontSize: 20 }} />
            <div className="mx-5">
              <IoSearch />
            </div>
            <BsThreeDotsVertical />
          </div>
        </div>

        {/* navbar */}
        <div className="flex justify-between p-1 pt-9 ">
          <Link href="chats">Chats</Link>
          <Link href="updates">Updates</Link>
          <Link href="calls">Calls</Link>
        </div>
        {/* navbar-end */}
      </div>
    </>
  );
};

export default Header;
