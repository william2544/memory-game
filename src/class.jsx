import React, { useState } from "react";
import './App.css';

const HundleInput = ({input})=>{
    const [Todo,setTodo] = useState(['My fisrt todo','second one']);
    const [data,setData] = useState('');


    const addData=(e)=>{
        setData(e.target.value);
    }
    const HundleSubmit = (e)=>{
        e.preventDefault;
        setTodo(()=>[...Todo, data]);
        setData('')
    }
    const deleteItemInList=(data)=>{
        setTodo()
    }

    return (
        <>
            <h2>My Todo List</h2>
            <ul>
                {Todo.map((data)=>(
                    <li key={data.id} onClick={()=>{DeleteData}}>{data}</li>
                ))}
            </ul>
            <form action="" onSubmit={HundleSubmit}>
                <input type="text" value={data} placeholder="Add you todo list" onChange={addData}/>
                <button type="submit">add</button>
            </form>
        </>
    )
}
export default HundleInput
