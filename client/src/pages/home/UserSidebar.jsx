import React from "react";
import { FaSearch } from "react-icons/fa";
import User from "./User";

const UserSidebar = () => {
  return (
    <div className="max-w-[20rem] w-full h-screen  flex flex-col  border-r border-r-white/10">
      <div></div>

      <h1 className="bg-black rounded-lg mt-3 mx-3 py-1 px-2 text-[#5754E8] text-xl font-semibold ">
        Gup sup
      </h1>

      <div className="p-3">
        <label className="input">
          <FaSearch />
          <input type="search" required placeholder="Search" />
        </label>
      </div>
      <div className="h-full overflow-y-auto">
        <User />
      </div>
      <div className="flex items-center justify-between p-3">
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
            <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
          </div>
        </div>
        <button className="btn px-4 btn-sm btn-outline btn-primary">Logout</button>
      </div>
    </div>
  );
};

export default UserSidebar;
