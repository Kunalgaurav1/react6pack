function Footer(){
    return (
        <>
        <div className="punit">
            this is footer of this web page  saale jhuk ke rehne padega mere agge , trp tumkoo milti hai saalo 
        </div>
        
        </>
    )
}


function Footer2(){

    const footer2style = {
        backgroundColor:"blueviolet",
          color:"white",
          padding: 123,
          textAlign:"center",
          fontFamily:"sans-serif",
          fontSize:"33px"
    }
    return (
        <>
        <div className="jethalaal"  style={footer2style}>
            this is footer of this web page  from footer 2 bapu ji kaise hai app apne jalebi fafda leke aau kya 


        </div>

        <div className="container">

            <button  className="my-button" > Click Me</button>

        </div>
        
        </>
    )
}

export {Footer, Footer2};