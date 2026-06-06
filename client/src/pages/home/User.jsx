import React from "react";

const User = () => {
  return (
    <div className="flex gap-5 items-center ">
      <div className="avatar avatar-online p-2">
        <div className="w-12 rounded-full">
          <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
        </div>
      </div>
      <div>
        <h2 className="line-clamp-1">Full name</h2>
        <p className="text-xs">Username</p>
      </div>
    </div>
  );
};

export default User;
