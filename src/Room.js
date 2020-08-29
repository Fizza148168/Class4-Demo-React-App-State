import React, {useState} from 'react';
import './Room.css'

function Room()
{
    let [isLit,setLit] = useState(true);
    let [temp, setTemp] =useState(22);    
 /*   const State = useState(true);
    const isLit= State[0];
    const setLit= State[1];*/
   
   /* function updateLit(){
        console.log("Button Clicked");
       setLit(!isLit);
        }

    function updateAge(){
        console.log("Increased Age");
        setAge(++age);
        }
*/
 //This is room component Lit: {JSON.stringify(isLit)} <br/>
    return (
   <div className={`room ${isLit? "lit" : "dark"}`}>
        This room is : {JSON.stringify(isLit? "lit" : "dark")}
        <button onClick={()=> setLit(true)}> Turn On Light</button> 
        <button onClick={()=> setLit(false)}> Turn Off Light</button> <br/>
        Temperature : {temp}<br/>
        <button onClick={()=> setTemp(++temp)}> + </button> 
        <button onClick={()=> setTemp(--temp)}> - </button> 
        </div>);
}

export default Room;