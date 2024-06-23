import React from "react";
import { useUserContext } from "../../context/UserContext";
import { IoChatbubblesOutline } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const SidebarHeader = () => {
  const { user } = useUserContext();
  const { loading, logout } = useLogout();
  return (
    <div className="bg-gray-900 px-4 py-2 mb-2 flex text-white rounded-md mx-[-0.5rem]">
      <div className=" font-bold flex-1 text-center me-10 flex gap-2 items-center">
        <IoChatbubblesOutline />
        <span>WebChat</span>
      </div>
      <div className="cursor-pointer flex justify-center items-center w-5 rounded-md">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button">
            <SlOptionsVertical />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-gray-800 rounded-box z-[1] w-52 p-2 shadow mt-4"
          >
            <li className="hovger:bg-gray-700 hover:rounded-lg">
              <div>
                <img
                  src={user?.profilePic}
                  alt={user?.fullName}
                  className="rounded-full h-10 w-10"
                />
                <span className="ml-2">{user?.fullName}</span>
              </div>
            </li>
            <li className="hover:bg-gray-700 hover:rounded-lg" onClick={logout}>
              {loading ? (
                <div className="w-6 h-6 text-red-600 animate-spin"></div>
              ) : (
                <div>
                  <BiLogOut /> Logout
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarHeader;
