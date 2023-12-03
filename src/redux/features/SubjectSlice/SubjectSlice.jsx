import { createSlice } from "@reduxjs/toolkit";
import Logo from "../../../assets/images/logo_sgu.jpg";

const initialState = {
  data: [
    { id: 1, subject: "lý thuyết đồ thị", logo: Logo, numSubject: 5 },
    { id: 2, subject: "Hệ điều hành", logo: Logo, numSubject: 5 },
    { id: 3, subject: "Lập trình hướng đối tượng", logo: Logo, numSubject: 5 },
  ],
  loading: true,
  error: null,
};

export const SubjectSlice = createSlice({
  name: "subject",
  initialState,
  reducers: {
    addSubject: (state, action) => {
      state.data.push(action.payload);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.loading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addSubject, setLoading, setError } = SubjectSlice.actions;

export default SubjectSlice.reducer;
