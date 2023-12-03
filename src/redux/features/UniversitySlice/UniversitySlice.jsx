import { createSlice } from "@reduxjs/toolkit";
import LogoUni from "../../../assets/images/logo_sgu.jpg";

const initialState = {
  data: [
    { id: 1, name: "Đại học Sài Gòn", logo: LogoUni },
    { id: 2, name: "Đại học Bách Khoa", logo: LogoUni },
    { id: 3, name: "Đại học Việt Hàn", logo: LogoUni },
    { id: 4, name: "Đại học Y Huế", logo: LogoUni },
    { id: 5, name: "Đại học Y Huế", logo: LogoUni },
  ],
  loading: true,
  error: null,
};

export const UniversitySlice = createSlice({
  name: "university",
  initialState,
  reducers: {
    addUniversity: (state, action) => {
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
export const { addUniversity, setLoading, setError } = UniversitySlice.actions;

export default UniversitySlice.reducer;
