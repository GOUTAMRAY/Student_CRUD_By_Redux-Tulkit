import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStudent, deleteStudent, getAllStudents, updateStudent } from "../features/studentApiSlice";
import { studentSelector } from "../features/studentSlice";



const Student = () => {
   const dispatch = useDispatch();
   const { students , loading } = useSelector(studentSelector);

   const [editMode, setEditMode ] = useState(false);

  // get form data
  const [input, setInput] = useState({
    name : "",
    email : "",
    roll : "",
    location : "",
    photo : "",
  });

  // handle input change 
  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  };

 // handleCreateStudent 
 const handleCreateStudent = () => {

  if (editMode) {
    dispatch(updateStudent(input));
    setEditMode(false);
  }else{
    dispatch(createStudent(input));
    
  }

   setInput({
    name : "",
    email : "",
    roll : "",
    location : "",
    photo : "",
   })
 };

 // getAllStudents
 useEffect(() => {
  dispatch(getAllStudents())
 }, [dispatch]);

// handleDeleteStudent 
const handleDeleteStudent = (id) => {
   dispatch(deleteStudent(id))
};

// handleStudentEdit 
const handleStudentEdit = (data) => {
   setInput(data);
   setEditMode(true);
};




  return (
    <>
    { loading &&  <h2> Loading . . . . . </h2> }
   
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
               <div className="card-body">
                 <div className="my-2">
                    <input type="text" placeholder="Name" name="name" className="form-control" value={input.name} onChange={handleInputChange} />
                 </div>
                 <div className="my-2">
                   <input type="text" placeholder="Email" name="email" className="form-control" value={input.email} onChange={handleInputChange}/> 
                 </div>
                 <div className="my-2">
                    <input type="text" placeholder="Roll" name="roll" className="form-control" value={input.roll} onChange={handleInputChange}/>
                 </div>
                 <div className="my-2">
                    <input type="text" placeholder="Location" name="location" className="form-control" value={input.location} onChange={handleInputChange}/>
                 </div>
                 <div className="my-2">
                   <input type="text" placeholder="Photo" name="photo" className="form-control" value={input.photo} onChange={handleInputChange}/>
                 </div>
                  <button className="btn btn-primary" onClick={handleCreateStudent}> { editMode ? "Update" : "Add"} </button>
               </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card">
              <h3 className="text-center"> All Student Data </h3> <hr />
              <div className="card-body">
                 <table className="table table-bordered table-striped">
                  <thead>
                    <tr> 
                      <th> # </th>
                      <th> Name </th>
                      <th> Photo </th>
                      <th> Email </th>
                      <th> Roll </th>
                      <th> Action </th>
                    </tr>
                  </thead>
                  <tbody>
                    { students.length > 0 ? students.map((item, index) => {
                      return  <tr className="align-middle" key={index}> 
                      <td> {index + 1} </td>
                      <td> {item.name} </td>
                      <td> 
                        <img style={{width: "60px", height: "60px", borderRadius: "50%"}} src={item.photo} />
                      </td>
                      <td> {item.email} </td>
                      <td> {item.roll} </td>
                      <td> 
                        <button className="btn btn-sm btn-info" onClick={() => handleStudentEdit(item)}> EDIT </button> &nbsp;
                        <button className="btn btn-sm btn-danger" onClick={() => handleDeleteStudent(item.id)}> DELT </button>
                      </td>
                    </tr>
                    }) : "No Student Found"} 
                   
                  </tbody>
                 </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Student;













