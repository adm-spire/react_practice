import { useState } from 'react'
import Incrementer from './incremeter'


function App() {
  const [step, setStep] = useState(1)
  const [count, setCount] = useState(1)
  
  const incrementStep = () => setStep(step + 1)
  const decrementStep = () => setStep(step - 1)
  
  const incrementCount = () => setCount(count + step)
  const decrementCount = () => {
    const newCount = count - step
    if (newCount >= 0) setCount(newCount)
  }

  const futureDate = new Date()
  futureDate.setDate(futureDate.getDate() + count)

  return (
    <>
      
      
        <Incrementer text="Step" count={step} onIncrement={incrementStep} onDecrement={decrementStep}/>
         <Incrementer text="Count" count={count} onIncrement={incrementCount} onDecrement={decrementCount}/>
<p className='scoreboard'>
       {`${count} days from today is ${futureDate.toDateString()}`}
      </p>
    </>
  )
}

export default App
