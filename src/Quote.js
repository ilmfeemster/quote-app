import React from 'react'

const Quote = (props) => {
  return (
    <div>
      <p class="font-notosansmedium text-xl text-white text-center px-3 py-3 sm:max-w-[668px] md:text-3xl lg:text-left lg:px-10">
        "{props.quote[0]}"
      </p>
      <p class="font-notosansregular text-xl text-white text-center px-3 py-3 sm:max-w-[668px] md:text-3xl lg:text-left lg:px-10">
        - {props.quote[1]}.
      </p>
    </div>
  )
}

export default Quote
