import React from "react";
import { BsSend } from "react-icons/bs";

const MessageInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="w-full flex gap-2">
        <input
          type="text"
          placeholder="Send a message"
          className="border text-sm rounded-lg block flex-1 p-2.5 bg-gray-700 border-gray-600 text-white"
        />
        {/* <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
            <BsSend/>
        </button> */}
        <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
            <BsSend className="w-4 h-4"/>
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
