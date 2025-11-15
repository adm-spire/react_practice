import { useState } from 'react'
import Incrementer from './incremeter'


function App() {
  const [count1] = useState(0)



  return (
    <>
      
      
        <Incrementer text="Step"/>
         <Incrementer text="Count"/>
<p>
       {`${count1} days from today is `  +  new Date().toDateString()}
      </p>
    </>
  )
}

export default App
