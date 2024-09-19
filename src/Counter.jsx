import React,{useState} from "react";
import './counter.css';

export default function Counter(){
    const [count,setCount] = useState(0);
    const [value,setValue] = useState("Type here!");
    return(
        <>
            <button style={{backgroundColor: "lightblue"}} onClick={() => setCount(count+1)}>Click Me</button>
            {' '}
            <button style={{backgroundColor: "lightgray"}} onClick={() => setCount(0)}>Reset</button>
            <p>You Click {count} times</p>

            <input type="text"
                value = {value}
                onChange = {e => {setValue(e.target.value)}}
            />
            <p>Your type {value.length} char</p>
        </>
    );
}