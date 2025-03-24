import React from 'react'

const OurFounderPage = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-5xl font-bold text-center mb-8 heading">
          Meet Our Founders
        </h1>
        <div className="flex flex-col lg:flex-row items-center px-4 space-y-8 lg:space-y-0 lg:space-x-28">
          <div className="h-96 w-96 rounded-full bg-gray-800">
            {" "}
          </div>
          <div className="max-w-2xl">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">Our Founders' Vision</h1>
            <p>
              My vision is to build a dedicated team that delivers the best client experience by staying true to our core values and ethics. I believe that human beings are in a continuous state of evolution—our current stage is not the final one. Instead, we are moving toward higher consciousness, striving to manifest divinity while living in this world.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurFounderPage
