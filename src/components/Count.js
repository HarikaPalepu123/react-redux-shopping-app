import { useEffect, useState } from "react";
function Count(){
    const [c,setC]=useState(0);
    useEffect(()=>{
        console.log("count updated",c);
    },[c]);
    function inc(){
        setC(c+1);
    }
     function dec(){ 
        setC(c-1);
    }
     function reset(){
        setC(0);
    }  
     
    return (
        <div>
            <h1>count:{c}</h1>
            <button onClick={()=>{inc()}}>increment</button>
            <button onClick={()=>{dec()}}>decrement</button>
             <button onClick={()=>{reset()}}>Reset</button>  
        </div>
    )
}
export default Count;