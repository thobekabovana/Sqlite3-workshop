import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios'
import Display from './components/display'
import User from './components/user'
import Update from './components/update';
import Layout from './components/layout';




function App() {

   

  const [localData , setLocalData] = useState("")

  useEffect(()=> {
    axios.get(" http://localhost:5000/").then((res)=>{
       setLocalData( res.data)
    }).catch((error)=>{
      console.log(error)
    })
  },[])

console.log(localData)

  

  return (
    <>
    {/* <User></User> */}
      
      <BrowserRouter>
 <Routes>
  <Route path="/" element={<Layout />}>
    <Route path='/' element={<Display />}>
    <Route path="/update/:id" element={<Update />} />
    </Route>
    
    <Route path="user" element={<User/>} />
  </Route>
</Routes>
    </BrowserRouter>
    </>
  )
}

export default App
