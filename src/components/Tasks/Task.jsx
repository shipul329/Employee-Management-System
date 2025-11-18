import React from 'react'

const Task = () => {
  return (
     <div id='task' className='h-[55%] overflow-x-auto overflow-y-hidden flex items-center justify-start gap-5 flex-nowrap w-full py-5 bg-red-500 mt-10'>

        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-slate-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-lime-600 text-sm px-3 py-1 rounded'> First </h3>
                <h4 className='text-sm'>date : 18 Nov 2025</h4>
            </div>

            <h2 className='mt-5 text-2xl font-semibold'> Complete React Project </h2>
            <p className='text-sm mt-2'>Your task is to learn first then build a project. Do remember time is limited. We will not consider if you won't finish in time</p>
        </div>

        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-500 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-lime-600 text-sm px-3 py-1 rounded'> Second </h3>
                <h4 className='text-sm'>date : 25 Nov 2025</h4>
            </div>

            <h2 className='mt-5 text-2xl font-semibold'> Upload your code on Github </h2>
            <p className='text-sm mt-2'> Once you finish then you shold start build and update as you are working on that perticular project.</p>
        </div>

        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-cyan-500 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-lime-600 text-sm px-3 py-1 rounded'> Third </h3>
                <h4 className='text-sm'>date : 01 Dec 2025</h4>
            </div>

            <h2 className='mt-5 text-2xl font-semibold'> Upload your Linkedin profile </h2>
            <p className='text-sm mt-2'>Your task is to create and update your profile on Linkedin. </p>
        </div>

        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-lime-600 text-sm px-3 py-1 rounded'> Four </h3>
                <h4 className='text-sm'>date : 08 Dec 2025</h4>
            </div>

            <h2 className='mt-5 text-2xl font-semibold'> Post a update on Linkedin </h2>
            <p className='text-sm mt-2'>One week later post on Linkedin about your update you work on your project! </p>
        </div>

        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-cyan-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-lime-600 text-sm px-3 py-1 rounded'> Five </h3>
                <h4 className='text-sm'>date : 15 Dec 2025</h4>
            </div>

            <h2 className='mt-5 text-2xl font-semibold'> Complete Your Project </h2>
            <p className='text-sm mt-2'> It's time to finish your project and explain about your project and what you work on and what you build and update. </p>
        </div>
     </div>
  )
}

export default Task