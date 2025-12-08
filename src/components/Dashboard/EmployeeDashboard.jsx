import React from 'react'
import Header from '../others/header'
import TaskList from '../others/Tasklist'
import Task from '../Tasks/task'

const EmployeeDashboard = ({ props }) => {
  return (
    <div className='px-10 py-5 bg-[#1c1c1c] h-screen'>
        <Header changeUser={props.changeUser} data={props.data} logout={props.logout} />
        
        <TaskList data={props.data}/>

        <Task data={props.data}/> 
    </div>
  )
}

export default EmployeeDashboard 
