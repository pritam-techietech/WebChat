import React from "react";
import SingleConversation from "./SingleConversation";
import useGetConversations from "../../hooks/useGetConversations";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  // console.log("Conversations : ", conversations);
  return (
    <div className="pb-2 flex flex-col overflow-auto">
      {loading ? <div className="loading loading-spinner self-center"></div> :
      conversations.map((conversation) => (
        <SingleConversation key={conversation._id} data={conversation} />
      ))}
      {/* <div className="loading loading-spinner"></div> */}
    </div>
  );
};

export default Conversations;
