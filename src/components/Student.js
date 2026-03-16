import { useState } from "react";

function Student(){

const [name,setName] = useState("");
const [age,setAge] = useState("");
const [students,setStudents] = useState([]);

function addStudent(){
  const newStudent = {name:name, age:age};
  setStudents([...students,newStudent]);
  setName("");
  setAge("");
}

function deleteStudent(index){
  const newList = students.filter((item,i)=> i !== index);
  setStudents(newList);
}

return(
<>
<h2>Student Manager</h2>

<input
 type="text"
 placeholder="Name"
 value={name}
 onChange={(e)=>setName(e.target.value)}
/>

<br/><br/>

<input
 type="text"
 placeholder="Age"
 value={age}
 onChange={(e)=>setAge(e.target.value)}
/>

<br/><br/>

<button onClick={addStudent}>Add Student</button>

<hr/>

{students.map((item,index)=>(
  <div key={index}>
    {item.name} - {item.age}
    <button onClick={()=>deleteStudent(index)}>Delete</button>
  </div>
))}

</>
)

}

export default Student;