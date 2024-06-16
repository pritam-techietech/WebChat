import React from "react";

const SingleMessage = () => {
  return (
    <div>
      {/** Opposite user */}
      <div className="chat chat-start">
        <div className="chat-bubble chat-bubble-info">
          That's never been done in the history of the Jedi. It's insulting!
        </div>
        <div className="chat-footer text-white opacity-80"><time>10:10</time></div>
      </div>

      {/** Loggedin user */}
      <div className="chat chat-end">
        <div className="chat-bubble chat-bubble-accent">Calm down, Anakin.</div>
        <div className="chat-footer text-white opacity-80"><time className="">10:10</time></div>
      </div>

    </div>
  );
};

export default SingleMessage;
