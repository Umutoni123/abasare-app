import React from 'react'


export default function Contact() {
  return (

    // <!-- Container for demo purpose -->
<div class="container my-24 px-6 mx-auto">

  {/* <!-- Section: Design Block --> */}
  <section class="text-center text-gray-800">
    <div class="border rounded shadow-lg bg-[#ECECEC] max-w-[700px] mx-auto px-3 lg:px-6">
      <h2 class="text-3xl font-bold text-[#111827] mb-12 mt-6">Contact us</h2>
      <form className='p-12 rounded-2xl'>
        <div class="form-group mb-6">
          <input type="text" class="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-transparent
            border-b border-solid border-black
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-transparent focus:border-black focus:outline-none" id="exampleInput7"
            placeholder="Name" />
        </div>
        <div class="form-group mb-6">
          <input type="email" class="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-transparent
            border-b border-solid border-black
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-transparent focus:border-black focus:outline-none" id="exampleInput8"
            placeholder="Email address" />
        </div>
        <div class="form-group mb-6">
          <textarea class="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-transparent bg-clip-padding
            border-b border-solid border-black
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-transparent focus:border-black focus:outline-none
          " id="exampleFormControlTextarea13" rows="3" placeholder="Message"></textarea>
        </div>
        
        <button type="submit" class="
          w-full
          px-6
          py-4
          bg-[#111827]
          text-white
          font-medium
          text-xm
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-[#F0F0F0] hover:shadow-lg
          focus:bg-[#F0F0F0] focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-[#F0F0F0] active:shadow-lg
          transition
          duration-150
          ease-in-out
          shadow-xl">Send</button>
      </form>
    </div>
  </section>
  {/* <!-- Section: Design Block --> */}
</div>
  )
}
