import { useEffect, useState } from 'react'
import axios from 'axios'



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
      
    </>
  )
}

export default App
