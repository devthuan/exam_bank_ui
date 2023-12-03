import { createSlice } from "@reduxjs/toolkit";
import Logo from "../../../assets/images/logo_sgu.jpg";


const initialState = {
  data: [
    { id: 1, major: "Công nghệ thông tin", logo: Logo, numSubject: 5 },
    { id: 2, major: "Sư phạm tiểu học", logo: Logo, numSubject: 5 },
    { id: 3, major: "Y đa khoa", logo: Logo, numSubject: 5 },
  ],
  loading: true,
  error: null,
};

export const MajorSlice = createSlice({
  name: "major",
  initialState,
  reducers: {
    addMajor: (state, action) => {
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
export const { addMajor, setLoading,
setError } = MajorSlice.actions;

export default MajorSlice.reducer;
