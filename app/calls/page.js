import React from "react";
import { RxPlusCircled } from "react-icons/rx";
import { MdPhone } from "react-icons/md";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="px-3">
        <div className="flex  my-5 sm:justify-center">
          <div className="p-3 bg-emerald-800 rounded-full  text-white ">
            <RxPlusCircled size={23} />
          </div>
          <div>
            <h3 className="font-bold">Create Call link</h3>
            <p className="font-light">Share a link for your WhatsApp call</p>
          </div>
        </div>
        <div className="w-full sm:w-[82%] sm:justify-center flex">
          <h3 className="font-bold">Recent</h3>
        </div>

        {/* first-call */}
        <div className="flex  my-5 sm:justify-center w-full">
          <Image
            alt="user-image inside calls"
            src="/one.jpg"
            width={40}
            height={40}
            style={{
              objectFit: "cover",
              marginRight: 10,
            }}
            className="rounded-full"
          ></Image>
          <div>
            <h3 className=" text-red-700 ">Anil</h3>
            <div className="flex">
              <IoIosArrowRoundBack />
              <p className="font-light ml-2 mr-24 text-xs">today 7:20PM</p>
              <MdPhone />
            </div>
          </div>
        </div>
        {/* first-call-end */}
        {/* second-call */}
        <div className="flex   sm:justify-center">
          <Image
            alt="user-image inside calls"
            src="/five.jpg"
            width={40}
            height={40}
            style={{
              objectFit: "cover",
              marginRight: 10,
            }}
            className="rounded-full"
          />
          <div>
            <h3 className="w-60">Harry</h3>
            <div className="flex">
              <IoIosArrowRoundForward />
              <p className="font-light ml-2 mr-32 text-xs">18/12/23</p>
              <MdPhone />
            </div>
          </div>
          <div className="items-end"></div>
        </div>
        {/* second-call-end */}
        {/* third-call */}
        <div className="flex  my-5 sm:justify-center">
          <Image
            alt="user-image inside calls"
            src="/third.jpg"
            width={40}
            height={40}
            className="rounded-full"
            style={{
              objectFit: "cover",
              marginRight: 10,
            }}
          ></Image>
          <div>
            <h3 className="w-60">Peter</h3>
            <div className="flex">
              <IoIosArrowRoundForward />
              <p className="font-light ml-2 mr-32 text-xs">17/12/23</p>
              <MdPhone />
            </div>
          </div>
          <div className="items-end"></div>
        </div>
        {/* third-call-end */}
        {/* four-call */}
        <div className="flex  my-5 sm:justify-center w-full">
          <Image
            alt="user-image inside calls"
            src="/six.jpg"
            width={40}
            height={40}
            className="rounded-full"
            style={{
              objectFit: "cover",
              marginRight: 10,
            }}
          ></Image>
          <div>
            <h3 className=" text-red-700 w-60">Leo</h3>
            <div className="flex">
              <IoIosArrowRoundBack />
              <p className="font-light ml-2 mr-32 text-xs">30/12/23</p>
              <MdPhone />
            </div>
          </div>
          <div className="items-end"></div>
        </div>
        {/* four-call-end */}
        {/* five-call */}
        <div className="flex  my-5 sm:justify-center w-full">
          <Image
            alt="user-image inside calls"
            src="/seven.jpg"
            width={40}
            height={40}
            className="rounded-full"
            style={{
              objectFit: "cover",
              marginRight: 10,
            }}
          ></Image>
          <div>
            <h3 className=" text-red-700 w-60">Sonu</h3>
            <div className="flex">
              <IoIosArrowRoundBack />
              <p className="font-light ml-2 mr-32 text-xs">14/12/23</p>
              <MdPhone />
            </div>
          </div>
          <div className="items-end"></div>
        </div>
        {/* five-call-end */}
      </div>
    </>
  );
};

export default page;
