import React from 'react'

const Hero = () => {
  return (
    <div class="flex flex-col items-center pt-5 lg:items-start lg:pt-0">
      <h1 class="font-notosanslight text-white text-4xl text-center py-4 sm:max-w-[668px] md:text-7xl lg:text-left lg:px-10">
        Find Your Quote
      </h1>
      <h2 class="font-notosanslight text-lg text-white text-center px-3 py-3 sm:max-w-[668px] md:text-3xl md:font-notosansregular lg:text-left lg:px-10">
        The right quote for the right person can provide motivation,
        inspiration, or even salvation. Our goal is to provide you quotes in a
        clean and modern enviroment.
      </h2>
      <h3 class="font-notosanslight text-lg text-white text-center px-3 py-3 sm:max-w-[668px] md:text-3xl md:font-notosansmedium lg:text-left lg:px-10">
        Are you ready?
      </h3>
      <div class="pt-12 lg:px-10">
        <button class="inline-flex w-[85vw] sm:max-w-[530px] items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-notosansregular text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 ">
          <span class="relative w-full px-7 py-3 text-lg font-notosansmedium transition-all ease-in duration-200 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Continue to generator
          </span>
        </button>
      </div>
    </div>
  )
}

export default Hero
