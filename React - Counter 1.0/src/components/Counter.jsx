import React, { useState } from 'react'

const Counter = ({initial_value}) => {
    const [count,setCount]=useState(initial_value)
    console.log(initial_value)
    console.log(count)
    const handleAdd=()=>{
        setCount((prev)=>prev+1)
    }
    
    const handleSubs=()=>{
        setCount((prev)=>prev-1)
        // setCount((prev) => {
        //     if (prev==1) {
        //       return 1
        //     }
        //     return prev-1
        //   })
    } 
    const handleDouble=()=>{
        setCount((prev)=>prev*2)
    }

    const handleReset=()=>{
        setCount((prev)=>prev*0)
    }

    // const handleSteps=()=>{
    //     //setStep((prev) => !prev);
    //     if(!count>=1){
    //         <h3> so the steps are you clicked on add button whose value is {count} initally count was {count} and once you click your count then value got updated because
    //         we are storing </h3>
    //     }
    // }
  return (
    <div>
    <h2  data-testid = "counter-header">Counter</h2> 
    <h3 data-testid = "count">{count}</h3>
        <button data-testid = "add-btn" onClick={handleAdd}>+</button>{" "}
        <button data-testid = "subtract-btn" onClick={handleSubs} disabled={count<1}>-</button>{" "}
        <button data-testid = "double-btn" onClick={handleDouble} disabled={count==0}>Double</button>{" "}
        <button onClick={handleReset}>Reset</button>{" "}
        {/* <button onClick={handleSteps}>{step ? "Step On":"Step Off"} Steps</button> */}
        
    </div>
  )
}

export default Counter