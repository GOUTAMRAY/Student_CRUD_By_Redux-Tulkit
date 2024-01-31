import { createSlice } from "@reduxjs/toolkit";
import { createStudent, deleteStudent, getAllStudents, updateStudent } from "./studentApiSlice";


// create student slice 
const studentSlice = createSlice({
  name : "student",
  initialState : {
    students : [],
    loading : true,
    error : null,
    message : null,
  },
  reducers : {},
  extraReducers : (builder) => {
    builder
    .addCase(createStudent.pending, (state) => {
      state.loading = true;
    })
    .addCase(createStudent.fulfilled, (state, action) => {
       state.loading = false;
       state.message = "Student Created Successfull";
       state.students =[ ...state.students, action.payload]
    })
    .addCase(createStudent.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })
    .addCase(getAllStudents.pending, (state) => {
      state.loading = true;
    })
    .addCase(getAllStudents.fulfilled, (state, action) => {
      state.loading = false;
      state.message = "Student All Data Get Successfull";
      state.students = [...action.payload];
    })
    .addCase(getAllStudents.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message; 
    })
    .addCase(deleteStudent.pending, (state) => {
      state.loading = true;
    })
    .addCase(deleteStudent.fulfilled, (state, action) => {
      state.loading = false;
      state.message = "Student Deleted Successfull";
      state.students = state.students.filter((data) => data.id !== action.payload.id)
    })
    .addCase(deleteStudent.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message; 
    })
    .addCase(updateStudent.pending, (state) => {
      state.loading = true;
    })
    .addCase(updateStudent.fulfilled, (state, action) => {
      state.loading = false;
      state.message = "Student updated Successfull";
      state.students[state.students.findIndex((data) => data.id === action.payload.id)] = action.payload;
    })
    .addCase(updateStudent.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message; 
    })
  }
})


// export selector 
export const studentSelector = (state) => state.student


// export action 
// export const { } = studentSlice.actions;


// export default 
export default studentSlice.reducer;











