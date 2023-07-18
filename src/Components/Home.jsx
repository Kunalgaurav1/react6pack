import React from 'react'

function Home() {

    let inputValue ;
    let changeHandler =(e)=>{
       inputValue = e.target.value;
       console.log(inputValue);

    }

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

        onChange={changeHandler}
        
        />


        <button style={btnStyle}>+</button>

        <button style={btnStyle}>-</button>

        

    </div>

  )
}

export default Home;