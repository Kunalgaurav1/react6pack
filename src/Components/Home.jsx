import React from 'react'
import { useState } from 'react';

const Home=()=> {

   // let inputValue =0;

    const [inputValue, setInputValue] = useState(0);

    const increment = ()=>{
        setInputValue(inputValue+1);
        

    };
   

    const decrement = ()=>{
        setInputValue(inputValue + 1);

    };


    const btnStyle = {
        padding : "20px",
        border : "1px solid rgba(0, 0, 0, 0.4)",
        backgroundColor :"#f1f1f1",
        margin : "10px",
        

        
    }
  return (

    <div>

        <input 

        type="number"
        placeholder='Enter Something' 
        style={{ padding: 50 , border: "1px solid rgba(0, 0, 0, 0.4)"}}

       value={inputValue}
      readOnly

        
        />


        <button style={btnStyle}  onChange={decrement} >+</button>

        <button style={btnStyle}  onChange={increment}>-</button>

        

    </div>

  )
}

export default Home;