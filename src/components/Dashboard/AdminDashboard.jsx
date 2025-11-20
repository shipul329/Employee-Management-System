import React from 'react'
import Header from '../others/header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDashboard = ({ logout }) => {
  return (
    <div className='h-screen w-full p-10'>
        <Header logout={logout} />
        <CreateTask/>
        <AllTask/>
    </div>
  )
}

export default AdminDashboard
