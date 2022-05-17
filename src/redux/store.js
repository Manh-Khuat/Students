import { configureStore } from "@reduxjs/toolkit";
import StudentReducer from "./features/studentSlice";

export default configureStore({      /* Cấu hình reducer */
  reducer: {
    students: StudentReducer,
  },
});