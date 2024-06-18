import { FormEvent, useState } from "react";
import { BsSend } from "react-icons/bs";
import { useUserContext } from "../../context/UserContext";
import { UserModel } from "../../models/UserModel";
import useSendMessage from "../../hooks/useSendMessage";
import useConversation from "../../zustand/useConversation";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();
  const {selectedConversation} = useConversation();
  const { user } = useUserContext();
  const handleSubmit = (e:FormEvent) => {
    e.preventDefault();
    const loggedUserId:UserModel = JSON.parse(user!);
    console.log("senderId : " + loggedUserId._id);
    console.log("receiverId : " + selectedConversation!._id);
    console.log("message : " + message);
    sendMessage({
      message: message,
      senderId: loggedUserId._id,
      receiverId: selectedConversation!._id,
    });
    setMessage("");
    
  };
  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full flex gap-2">
        <input
          type="text"
          placeholder="Send a message"
          className="border text-sm rounded-lg block flex-1 p-2.5 bg-gray-700 border-gray-600 text-white"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {/* <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
            <BsSend/>
        </button> */}
        <button type="submit" className="btn btn-circle bg-sky-500 text-white" disabled={loading}>
          <BsSend className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
