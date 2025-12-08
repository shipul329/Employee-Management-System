import React, {useEffect, useContext, useState} from 'react'
import Login from './components/Auth/login'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import {AuthContext} from './context/AuthProvider' 

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null) 
  const [userData] = useContext(AuthContext) 

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')

    if(loggedInUser) {
      const userInfo = JSON.parse(loggedInUser)
      setUser(userInfo.role)
      setLoggedInUserData(userInfo.data) 
    }
  },[]) 

  const handleLogin = (email, password) => {

    // ADMIN LOGIN
    if(email === 'admin@example.com' && password === '123'){
        setUser('admin')
        localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
        return
    }

    // EMPLOYEE LOGIN
    const employee = userData?.find(emp => emp.email === email && emp.password === password)

    if(employee){
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({role:'employee', data: employee}))
        return
    }

    alert("Invalid Credentials")  
  }

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    setLoggedInUserData(null);
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin}/>} 

      {user === 'admin' && (
        <AdminDashboard changeUser={setUser} logout={handleLogout}/>
      )}

      {user === 'employee' && (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} logout={handleLogout}/>
      )}
    </>
  )
}

export default App  
