import React from 'react'

const ChatBody = ({ chats }) => {

  const aiStyle = "bg-white bg-opacity-40 backdrop-blur-lg dropshadow-md mr-auto "
  return (
    <div className='flex flex-col gap-4'>

      {
        chats.map((message, i) => {
          return (
            <div key={i} className={`border-[#999999] break-words border-2 rounded-xl self-end px-3 py-3 max-w-[80%]
                                      ${message.sender === "ai" && aiStyle}`}>
              <pre className='whitespaces-pre-wrap'>
                <span>{message.message}</span>
              </pre>
            </div>
          )
        })
      }



    </div>
  )
}

export default ChatBody
