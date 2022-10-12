import React from 'react'
import { useState, useEffect } from 'react'
import Button from './Button'
import Quote from './Quote'

const Hero = () => {
  const [quote, setQuote] = useState([])

  async function updateQuote() {
    // Fetch a random quote from the Quotable API
    const response = await fetch('https://api.quotable.io/random')
    const data = await response.json()
    if (response.ok) {
      console.log(data)
      setQuote([data.content, data.author])
    } else {
      console.log(data)
    }
  }

  useEffect(() => {
    updateQuote()
  }, [])
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
      <h3 class=" text-lg text-white text-center px-3 py-3 sm:max-w-[668px] md:text-3xl font-notosansregular lg:text-left lg:px-10">
        Are you ready?
      </h3>
      <Quote quote={quote} />
      <Button text="Generate Quote" updateQuote={updateQuote} />
    </div>
  )
}

export default Hero
