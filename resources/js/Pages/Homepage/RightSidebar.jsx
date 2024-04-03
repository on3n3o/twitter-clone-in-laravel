import React, { Children } from 'react'

export default function RightSidebar({ children }) {
  return (
    <div className="flex flex-col flex-1 bg-black text-white p-[36px] min-w-[45vw] max-w-[760px] justify-center">
        { children }
    </div>
  )
}
