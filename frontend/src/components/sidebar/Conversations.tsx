import React from 'react'
import SingleConversation from './SingleConversation'
import useGetConversations from '../../hooks/useGetConversations'

const Conversations = () => {
  const {loading, conversations} = useGetConversations();
  // console.log("Conversations : ", conversations);
  return (
    <div className='pb-2 flex flex-col overflow-auto'>
        <SingleConversation />
        <SingleConversation />
        <SingleConversation />
        <SingleConversation />
        <SingleConversation />
        <SingleConversation />
        <SingleConversation />
        <SingleConversation />
        <SingleConversation />
        <SingleConversation />
        <SingleConversation />
        <SingleConversation />
       
    </div>
  )
}

export default Conversations