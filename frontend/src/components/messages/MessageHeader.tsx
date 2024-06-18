import React from 'react'
interface MessageHeaderProps{
  fullName: string;
}
const MessageHeader = ({fullName}:MessageHeaderProps) => {
  return (
    <div className='bg-slate-500 px-4 py-2 mb-2'>
        <span className='label-text'>To : </span>
        <span className='text-green-900 font-bold'>{fullName}</span>
    </div>
  )
}

export default MessageHeader