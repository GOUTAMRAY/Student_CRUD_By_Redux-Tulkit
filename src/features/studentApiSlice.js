import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// get all students
export const getAllStudents = createAsyncThunk(
  "student/getAllStudents" , 
  async() => {
    try {
      const response = await axios.get(`http://localhost:5000/students`);
      return response.data;
    } catch (error) {
       throw new Error(error.message)
    }
  }
);


// create student 
export const createStudent = createAsyncThunk(
  "student/createStudent", 
  async(data) => {
    try {
      const response = await axios.post(`http://localhost:5000/students`, data);
      return response.data;
    } catch (error) {
       throw new Error(error.message);
    }
  }
);


// delete student 
export const deleteStudent = createAsyncThunk(
  "student/deleteStudent", 
  async(id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/students/${id}`);
      return response.data;
    } catch (error) {
       throw new Error(error.message);
    }
  }
);

// update student 
export const updateStudent = createAsyncThunk(
  "student/updateStudent", 
  async(data) => {
    try {
      const response = await axios.patch(`http://localhost:5000/students/${data.id}`, data);
      return response.data;
    } catch (error) {
       throw new Error(error.message);
    }
  }
);


















