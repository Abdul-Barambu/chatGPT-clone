import React, { useState } from 'react'

const ChatInput = ({sendMessage}) => {

  const [value, setValue] = useState('');

  const handleSubmit = () => {
    if(value==="") return;
    sendMessage({sender: "user", message: value})
    setValue("")
  }

  return (
    <div className='w-full bg-white bg-opacity-10 rounded-lg py-4 overflow-auto relative'>
      
    <textarea rows={1} className='border-0 bg-transparent outline-none w-11/12 pl-1' value={value} 
              type="text" onChange={(e)=>setValue(e.target.value)}/>

    <img onClick={handleSubmit} src="./send-2.png" alt="send-button" width={25} className='absolute top-4 mx-1 right-3 hover:cursor-pointer
    ease-in duration-100 hover:scale-125' />

    </div>
  )
}

export default ChatInput
