import { createSlice } from "@reduxjs/toolkit";

export const studentSlice = createSlice({
  name: "student",
  
  initialState: {
    students: [
      {
        studentcode: 182513,
        name: "Khuất Duy Mạnh",
        chemistry: 9,
        class: "A",
        english: 10,
        gender: "Male",
        group: 12,
        math: 10,
        physics: 10,
        teacher: "Pham Thanh Chung",
      },
      {
        studentcode: 643583,
        name: "Nguyễn Văn A",
        chemistry: 2,
        class: "A",
        english: 3,
        gender: "Male",
        group: 12,
        math: 4,
        physics: 3,
        teacher: "Pham Thanh Chung",
      },
    ],
    search: "",
  },

  reducers: {
    addStudent: (state, action) => {
      state.students = [action.payload, ...state.students];
    },

    search: (state, action) => {
      state.search = action.payload;
    },
    updateStudent: (state, action) => {
      state.students = state.students.map((el) =>
        el.studentcode == action.payload.studentcode ? action.payload : el
      );
    },
    deleteStudent: (state, action) => {
      state.students = state.students.filter((el) => el.studentcode != action.payload);
    },
  },
});
export const { addStudent, updateStudent, deleteStudent, search } = studentSlice.actions;

export default studentSlice.reducer;
