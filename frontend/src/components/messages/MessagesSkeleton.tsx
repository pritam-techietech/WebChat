const MessagesSkeleton = () => {
  return (
    <>
      <div>
        <div className={`chat chat-start`}>
          <div className={`chat-bubble skeleton w-60`}></div>
        </div>
      </div>
      <div>
        <div className={`chat chat-end`}>
          <div className={`chat-bubble skeleton w-60`}></div>
        </div>
      </div>
      <div>
        <div className={`chat chat-start`}>
          <div className={`chat-bubble skeleton w-60`}></div>
        </div>
      </div>
      <div>
        <div className={`chat chat-end`}>
          <div className={`chat-bubble skeleton w-60`}></div>
        </div>
      </div>
      <div>
        <div className={`chat chat-start`}>
          <div className={`chat-bubble skeleton w-60`}></div>
        </div>
      </div>
      <div>
        <div className={`chat chat-end`}>
          <div className={`chat-bubble skeleton w-60`}></div>
        </div>
      </div>
    </>
  );
};

export default MessagesSkeleton;
