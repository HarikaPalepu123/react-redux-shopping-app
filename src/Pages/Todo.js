import { useEffect, useState } from "react";

function Todo() {

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  function addTask() {
    if (task === "") return;

    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  }

  function deleteTask(index) {
    const newTasks = tasks.filter((t, i) => i !== index);
    setTasks(newTasks);
  }

  function toggleTask(index) {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  }
 function clearTasks(){
     setTasks([]);
 }
   return (
  <div style={{
    width:"350px",
    margin:"50px auto",
    padding:"20px",
    border:"1px solid #ddd",
    borderRadius:"10px",
    backgroundColor:"#f9f9f9",
    textAlign:"center"
  }}>

    <h2>Todo App</h2>

    <input
      type="text"
      placeholder="Enter task"
      value={task}
      onChange={(e)=>setTask(e.target.value)}
      onKeyDown={(e)=>{
        if(e.key==="Enter"){
          addTask();
        }
      }}
      style={{padding:"8px",width:"70%"}}
    />

    <button
      onClick={addTask}
      style={{
        padding:"8px",
        marginLeft:"10px",
        backgroundColor:"#28a745",
        color:"white",
        border:"none",
        borderRadius:"5px"
      }}
    >
      Add
    </button>

    <p>Total Tasks: {tasks.length}</p>
    <p>Completed: {tasks.filter(t=>t.completed).length}</p>

    <button
      onClick={clearTasks}
      style={{
        backgroundColor:"red",
        color:"white",
        border:"none",
        padding:"6px 10px",
        borderRadius:"5px"
      }}
    >
      Clear All
    </button>

    {tasks.length === 0 && <p>No tasks available</p>}

    <ul style={{listStyle:"none",padding:"0",marginTop:"20px"}}>
      {tasks.map((t,index)=>(
        <li key={index}
          style={{
            display:"flex",
            justifyContent:"space-between",
            marginBottom:"10px",
            padding:"5px"
          }}
        >

          <span
            onClick={()=>toggleTask(index)}
            style={{
              cursor:"pointer",
              textDecoration: t.completed ? "line-through" : "none"
            }}
          >
            {t.text}
          </span>

          <button
            onClick={()=>deleteTask(index)}
            style={{
              backgroundColor:"#dc3545",
              color:"white",
              border:"none",
              borderRadius:"4px"
            }}
          >
            Delete
          </button>

        </li>
      ))}
    </ul>

  </div>
);
}
export default Todo;