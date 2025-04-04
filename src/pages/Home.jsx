import React from 'react'
import { FaArrowRight, FaRegStar } from 'react-icons/fa'

export default function Home() {
  return (
    <div>
      <section className='w-[100%]  border-[1px] border-[#ccc] bg-amber-100'>
        <div className='max-w-[1370px] mx-auto flex lg:flex-row md:flex-row flex-col-reverse'>
          <div className='basis-[55%] bg-blue-500 lg:pt-[50px]'>
            <h1 className='lg:text-6xl md:text-5xl text-3xl font-bold text-white p-[50px_25px_5px_50px] lg:mb-4'>The experience makes all the difference.</h1>
            <p className='lg:text-xl text-[16px] font-bold text-white p-[10px_25px_5px_50px]'>From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
            <div className='flex gap-4 ps-12 py-4'>
              <div className='relative '>
                <button className='bg-red-500 p-[12px_29px_12px_20px] rounded-[8px] text-white'>Get Started </button>
                <FaArrowRight className='absolute top-[13px] text-white mt-1 left-[105px]  text-[15px]' />
              </div>

              <button className='border-1 p-[10px_20px] rounded-[8px]'>Offers</button>
            </div>
          </div>

          <div className='basis-[45%] bg-red-400 p-4 pt-[50px]'>
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="" />
          </div>
        </div>

        <p className='max-w-[1370px] mx-auto lg:text-5xl text-2xl lg:pt-12 pt-8 lg:pb-6 text-center'>Shop By Category</p>
        <div className='max-w-[1370px] mx-auto grid lg:grid-cols-3 my-8 gap-2 '>

          <div>
            <img className='w-[100%] h-[675px]' src="https://i.ibb.co/ThPFmzv/omid-armin-m-VSb6-PFk-VXw-unsplash-1-1.png" alt="" />
          </div>
          <div >
            <img className='mb-2' src="https://i.ibb.co/SXZvYHs/irene-kredenets-DDqx-X0-7v-KE-unsplash-1.png" alt="" />
            <img src="https://i.ibb.co/SXZvYHs/irene-kredenets-DDqx-X0-7v-KE-unsplash-1.png" alt="" />
          </div>
          <div>
            <img className='w-[100%] h-[675px]' src="https://i.ibb.co/PTtRBLL/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png" alt="" />
          </div>
        </div>

        <p className='max-w-[1370px] mx-auto lg:text-5xl text-2xl lg:pt-12 pt-8 lg:pb-6 text-center shadow-2xl mb-7'>Get difference Product</p>
        <div className='bg-gray-50 grid lg:grid-cols-5 grid-cols-1 gap-5'>
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />

        </div>
      </section>
    </div>
  )
}

function ProductItems() {
  return (

    <div className='shadow bg-white border-[1px] '>
      <img width={230} className='text-center mx-6' src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png" alt="" />
      <div className='p-3'>
        <p className='text-[19px] font-bold'>Essence Mascara Lash Princess</p>
        <p>Rs 9.99</p>
        <p className='mb-5 mt-2'>Essence</p>
        <div className='flex justify-between'>
          <div className='flex'>
            {/* <img className='w-[15px] ' src="./images/download.svg" alt="" />
            <img className='w-[15px] ' src="./images/download.svg" alt="" />
            <img className='w-[15px] ' src="./images/download.svg" alt="" />
            <img className='w-[15px] ' src="./images/download.svg" alt="" />
            <img className='w-[15px] ' src="./images/download.svg" alt="" /> */}
            <FaRegStar className='text-yellow-500'/>
            <FaRegStar className='text-yellow-500'/>
            <FaRegStar className='text-yellow-500'/>
            <FaRegStar className='text-yellow-500'/>
            <FaRegStar className='text-yellow-500'/>
          </div>
          <button className='bg-blue-600 text-white p-[5px_10px] rounded-xl'>ADD</button>
        </div>
      </div>
    </div>

  )
}