import React from 'react'
import Header from '../others/header'
import TaskList from '../others/Tasklist'
import Task from '../Tasks/task'



const EmployeeDashboard = () => {
  return (
    <div className='px-10 py-5 bg-[#1c1c1c] h-screen'>
        <Header/>
        <div className='mt-6'>
          <TaskList/>
        </div>

        <Task/>
    </div>
  )
}

export default EmployeeDashboard