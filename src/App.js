import './App.css';



function Mycomponent({name, nameforclass, income=10000000 }){
  return (
    <>
  
    <div className={nameforclass}>
  
   {name} : {income}
  
    </div>
    
    </>
  )

};

function App() {
  return (

    
    <div id="adas" className="custom" >
      hello kunal 
      <Mycomponent name={"abhishek"}   income={"500"} nameforclass="div1"/> 

      <Mycomponent name={"kunal gaurav"}   income={45333} nameforclass="div2"/> 

      <Mycomponent name={"priti"}    nameforclass="div3"/>  

      <Mycomponent name={"chahal"}  income={4344334} nameforclass="div4"/>

      <button >click me!</button>
    </div>

    
    





  
   
   
    
    
  );
}






export default App;
