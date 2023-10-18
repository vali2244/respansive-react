import React from 'react'
import DemoCarousel from './Carosal'

const Home = () => {
  return (
// {/* <>
// <DemoCarousel/>
// </> */}
// //    


<>
<div className="flex w-full h-28 items-center md:justify-evenly justify-evenly " >
    <div className="flex md:w-[30%] h-28 items-center justify-center bg-white ">
     <span className='md:text-4xl flex text-black font-bold'>  SYED BABAVALI</span>
    </div>
    <div className="md:w-[30%] h-28 md:flex bg-white items-center hidden justify-center">
        <button className=' h-[40px] p-2 text-[15px] bg-green-400 rounded-xl flex justify-center items-center md:text-xl m-0 font-bold '>BOOK MY SHOW</button>
    </div>
</div>
<section className="w-full h-screen flex-col flex md:flex-row items-center md:justify-evenly justify-evenly">
    <div className="flex md:w-[40%] w-full h-[60vh] items-start justify-evenly flex-col  p-3 md:gap-5 ">
        <span className='md:text-3xl text-2xl text-red-300 font-medium '>The employee
and emergency communications platform</span>
<p className='text-black md:text-xl text-[15px]'>The world’s first employee communication platform with built-in AI and enterprise-ready OpenAI GPT integration</p>
<button className='flex items-center justify-center  w-full md:w-[150px] h-[40px] bg-blue-400 text-lg font-semibold rounded-2xl '>Discover Net</button>
    </div>
    <div className="md:w-[40%] w-full flex items-center justify-center">
        <img className='w-[70%] md:w-full flex  items-center justify-center' src="https://netpresenter.wpenginepowered.com/wp-content/uploads/2022/04/2022-Home-Header-Employee-Communication-Alerting-EN-a-640x640.png" alt="" />
    </div>
</section>
<section className="flex w-full h-screen flex-col md:flex-row items-center md:justify-evenly justify-evenly gap-3">
    <div className="flex items-center justify-center md:w-[40%] w-full">
        <img className='w-[80%] md:w-full mt-[69px]' src="https://netpresenter.wpenginepowered.com/wp-content/uploads/2022/01/2022-Informed-Engaged-Productive-Safe-CombinedShadow-640x640.png" alt="" />
    </div>
    <div className="flex md:w-[40%] w-full items-start justify-evenly flex-col gap-6 p-3">
        <p className='md:text-[40px] text-2xl font-bold flex items-center justify-start '><h1 className='text-blue-500 md:text-4xl text-2xl'>Solutions</h1> that solve </p>
        <p className=' md:text-4xl text-2xl flex font-bold'>communication challenges</p>
        <span className='md:text-[18px] text-[12px]'>Employee and emergency communication can support an organization in many ways: during a merger or acquisition, to keep everyone on the same page in a hybrid workplace, change in leadership, during system outages, and even in case of a crisis. Discover our four pillars with a wide range of innovative solutions with which we can solve various communication challenges, and keep your employees measurably better informed, engaged, productive, and safe</span>
        <button className='md:w-[200px] w-full h-[40px] flex items-center justify-center bg-blue-700 rounded-xl text-black font-medium' >Discover our solutions</button>
    </div>


</section>

    </>
  ) }

export default Home