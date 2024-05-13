import React from 'react';
import {useState} from 'react';
import 'remixicon/fonts/remixicon.css';
import './App.css'
const App = () => {
  const model={
    fullname:'',
    subject:'',
   
    roll:'',
    class:'',
    dob:''
  }
  const [editIndex,setEditIndex]=useState(null)
  const [right, setRight]=useState(-450)
  const [students,setStudents]=useState([])

  const [form,setForm]=useState(
   model
  )

  const handleDrawer=()=>{
    setRight(0)
  }

  const handleInput=(e)=>{

    const input=e.target
   const value=input.value
   const key=input.name
//console.log(key)
setForm({
  ...form,
  [key]:value
})
  }
const createStudent=(e)=>{
  e.preventDefault()
  //console.log(form)
setStudents([
  ...students,
  form
])
setForm(model)
setRight(-450)
}
const deleteStudent=(index)=>{
//alert(index)
const backup=[...students]
backup.splice(index,1)
//console.log(backup)
setStudents(backup)
}

const editStudent=(index)=>{
setEditIndex(index)
setRight(0)
setForm(students[index])
}
const saveStudent=(e)=>{
  //alert()
  e.preventDefault();
  const backup=[...students]
  //console.log(backup)
  backup[editIndex] = form
  //console.log(backup)
  setStudents(backup)
  setForm(model)
  setEditIndex(null)
  setRight(-450)
  //setForm(model)
}

const closeDrawer=()=>{
  setRight(-450)
  setForm(model)
  setEditIndex(null)
}

  return (
    <div style={{
      background:'#ddd',
      minHeight:'100vh'
    }}>
      <div style={{
width:'70%',
background:'white',
margin:'32px auto',
padding:32

      }}>
        <h1 style={{
          padding:0,
          margin:0,
          textAlign:'center'
        }}>
        CodingSchool
        </h1>
        <button
        onClick={handleDrawer}
        style={{
          border:'none',
          background:"#8407ba",
          color:'white',
          fontSize:'20px',
          borderRadius:'5px',
          padding:'14px 32px',
          cursor:'pointer',
          margin:'20px 0'
        }}>
        <i className="ri-user-add-line"></i>
        New Student</button>
        <table className='crud-app'>
          <thead>
            <tr>
              <th>S.NO</th>
              <th>Student's Name</th>
              <th>Subject</th>
              <th>Roll</th>
              <th>Class</th>
              <th>DOB</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {
            students.map((item,index)=>(
              <tr>
              <td>{index}.</td>
              <td>{item.fullname}</td>
              <td>{item.subject}</td>
              <td>{item.roll}</td>
              <td>{item.class}<sup>th</sup></td>
              <td>{item.dob}</td>
              <td>
                <div>
                  <button 
                  onClick={()=>editStudent(index)}
                  style={{
                    border:'none',
                    width:32,
                    height:32,
                    background:'#076c5d',
                    color:'white',
                    borderRadius:"4px"
                  }}>
                  <i className="ri-edit-box-line"></i>
                  </button>

                  <button 
                  onClick={()=>deleteStudent(index)}
                  style={{
                    border:'none',
                    width:32,
                    height:32,
                    background:'red',
                    color:'white',
                    borderRadius:"4px",
                    marginLeft:'2px'
                  }}>
                  <i className="ri-delete-bin-line"></i>
                  </button>
                </div>
               
              </td>
            </tr>
            ))
          }
        
          </tbody>
        </table>
      </div>
      <aside style={{
        position:'fixed',
        top:'0',
        right:right,
        width:400,
        background:'white',
        height:'100%',
        boxShadow:'0 0 40px rgba(0, 0, 0, 0.2)',
        padding:32,
        boxSizing:'border-box',
        transition:'1.0s'
      }}>
      <button 
      onClick={closeDrawer}
      style={{
        border:'none',
        background:'transparent',
        fontSize:18,
        color:'#8407ba',
        position:'absolute',
        top:20,
        right:20,
       cursor:'pointer'
      }}>
      <i className="ri-close-circle-line"></i></button>
        <h1>New Student</h1>
        
     
        
      <form 
      onSubmit={editIndex == null ? createStudent : saveStudent}
      style={{
        display:'flex',
        flexDirection:'column',
        gap:"24px"
      }}>
        <input
        value={form.fullname}
        onChange={handleInput}
         required
        name='fullname'
        type='text'
        placeholder='Please Enter Your Name'
        style={{
          border:'1px solid #ccc',
          padding:'12px',
          borderRadius:'5px',

        }} />

<input 
 value={form.class}
 required
 onChange={handleInput}
        name='class'
        type='number'
        placeholder='Please Enter Your class'
        style={{
          border:'1px solid #ccc',
          padding:'12px',
          borderRadius:'5px',
          cursor:'pointer'
        }} />

<input 
 value={form.roll}
 required
 onChange={handleInput}
        name='roll'
        type='number'
        placeholder='Please Enter Your roll'
        style={{
          border:'1px solid #ccc',
          padding:'12px',
          borderRadius:'5px',
          cursor:'pointer'
        }} />

<input 
 value={form.subject}
 required
 onChange={handleInput}
        name='subject'
        type='text'
        placeholder='Please Enter Your subject'
        style={{
          border:'1px solid #ccc',
          padding:'12px',
          borderRadius:'5px',
          cursor:'pointer'
        }} />


<input 
value={form.dob}
onChange={handleInput}
        required
        name='dob'
        type='date'
        placeholder='Please Enter Your D.O.B'
        style={{
          border:'1px solid #ccc',
          padding:'12px',
          borderRadius:'5px',
          
        }} />
       {
        editIndex == null ?
        <button
        style={{
        border:'none',
        background:'transparent',
        fontSize:18,
        color:'#8407ba',
        position:'absolute',
        backgroundColor:'#8407BA',
        color:'white',
        top:440,
        right:20,
       cursor:'pointer'
      }}>
        Submit</button>
:
        <button
        style={{
        border:'none',
        background:'transparent',
        fontSize:18,
        color:'#8407ba',
        position:'absolute',
        backgroundColor:'#8407BA',
        color:'white',
        top:440,
        right:320,
       cursor:'pointer'
      }}>
        Save</button>
       }
      </form>
      </aside>
    </div>
  )
}

export default App
