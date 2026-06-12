import React from "react";

const User = ({ userDetails }) => {
  console.log(userDetails);
  
  return (
    <div className="flex gap-5 items-center ">
      <div className="avatar avatar-online p-2">
        <div className="w-12 rounded-full">
          <img src={userDetails?.avatar} />
        </div>
      </div>
      <div>
        <h2 className="line-clamp-1">{userDetails?.fullName}</h2>
        <p className="text-xs">{userDetails?.userName}</p>
      </div>
    </div>
  );
};

export default User;
