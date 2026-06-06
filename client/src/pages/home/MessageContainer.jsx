import React from 'react'
import User from './User'
import Message from './Message'

const MessageContainer = () => {
  return (
    <div className=' h-screen w-full'>
    
      <div className=" p-3 border-b border-b-white/15  ">
        <User />
      </div>
      <div>
        <div className="h-full overflow-y-auto p-3">
          <Message />
          <Message />
          <Message />
          <Message />
          
        </div>
     
      </div>
    </div>
  )
}

export default MessageContainer
