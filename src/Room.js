import React, {useState} from 'react';


function Room()
{
    let [isLit,setLit] = useState(true);
    let [age, setAge] =useState(23);    
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
    return (<div>
        This is room component Lit: {JSON.stringify(isLit)} <br/>
        This room is : {JSON.stringify(isLit? "lit" : "dark")}<br/>
        The Age here is : {age}<br/>
        <button onClick={()=> setLit(!isLit)}> Toogle Light</button> 
        <button onClick={()=> setAge(++age)}> Increase Age</button> 
        </div>);
}

export default Room;