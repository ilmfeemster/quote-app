import React from 'react'

const Button = (props) => {
  return (
    <div class="pt-12 lg:px-10">
      <button
        onClick={props.updateQuote}
        class="inline-flex w-[85vw] sm:max-w-[530px] items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-notosansregular text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 "
      >
        <span class="relative w-full px-7 py-3 text-lg font-notosansmedium transition-all ease-in duration-200 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          {props.text}
        </span>
      </button>
    </div>
  )
}

export default Button
