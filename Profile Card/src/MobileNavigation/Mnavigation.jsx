import React from "react";
import { IoPersonSharp } from "react-icons/io5";
import { TbMathGreater } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { RiHome4Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { BsGraphUpArrow } from "react-icons/bs";
import { CgCommunity } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";
import { FaQq } from "react-icons/fa";

const Mnavigation = () => {
  return (
    <div className="bg-white mt-20 w-[400px] flex gap-3 flex-col ml-[35%] rounded-2xl">
      {/* User Info */}
      <div className="flex items-center gap-5 mb-5">
        <img
          className="w-[70px]"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_GjIV6tFWc4FUXNfYkgcqZ9nGs-YF4-2mEg&s"
          alt="User"
        />
        <div>
          <h3 className="text-xl font-bold">Lisa Rechard</h3>
          <p>Environment Metology!</p>
        </div>
      </div>

      {/* Navigation Items */}
      <div className="flex items-center justify-between px-4 ">
        <div className="flex items-center gap-3">
          <div className="w-[32px] h-[28px] rounded-lg bg-gray-300 flex items-center justify-center">
            <IoPersonSharp />
          </div>
          <p className="text-sm font-medium">Personal data!</p>
        </div>
        <TbMathGreater />
      </div>

      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="w-[32px] h-[28px] rounded-lg bg-gray-300 flex items-center justify-center">
            <IoMdNotifications />
          </div>
          <p className="text-sm font-medium">Notification!</p>
        </div>
        <TbMathGreater />
      </div>

      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="w-[32px] h-[28px] rounded-lg bg-gray-300 flex items-center justify-center">
            <FaLocationDot />
          </div>
          <p className="text-sm font-medium">Location!</p>
        </div>
        <TbMathGreater />
      </div>

      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="w-[32px] h-[28px] rounded-lg bg-gray-300 flex items-center justify-center">
            <MdEmail />
          </div>
          <p className="text-sm font-medium">Email!</p>
        </div>
        <TbMathGreater />
      </div>

      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="w-[32px] h-[28px] rounded-lg bg-gray-300 flex items-center justify-center">
          <CgCommunity />
          </div>
          <p className="text-sm font-medium">Community!</p>
        </div>
        <TbMathGreater />
      </div>

      <div className="px-4 py-6">
        <hr />
      </div>

        <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="w-[32px] h-[28px] rounded-lg bg-gray-300 flex items-center justify-center">
          <FaQq />
          </div>
          <p className="text-sm font-medium">FAQ's!</p>
        </div>
        <TbMathGreater />
      </div>


      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="w-[32px] h-[28px] rounded-lg bg-gray-300 flex items-center justify-center">
          <IoMdSettings />
          </div>
          <p className="text-sm font-medium">Setting!</p>
        </div>
        <TbMathGreater />
      </div>

      {/* Bottom Navigation */}
      <div className="flex justify-around text-2xl cursor-pointer py-4 mt-[100px] bg-gray-100">
        <RiHome4Line />
        <CgProfile />
        <BsGraphUpArrow />
        <MdEmail />
      </div>
    </div>
  );
};

export default Mnavigation;