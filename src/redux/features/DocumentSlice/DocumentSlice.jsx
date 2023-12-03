import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: 1,
      subject: "Giải tích 1",
      description: "Tài liệu Chương 1 giải tích 1",
      university: "Đại học Sài Gòn",
      major: "Công nghệ thông tin",
    },
    {
      id: 2,
      subject: "Giải tích 2",
      description: "Tài liệu Chương 1 giải tích 2",
      university: "Đại học Sài Gòn",
      major: "Công nghệ thông tin",
    },
    {
      id: 3,
      subject: "Lý thuyết đồ thị",
      description: "Tài liệu về thuật toán Dijkstra",
      university: "Đại học Sài Gòn",
      major: "Công nghệ thông tin",
    },
  ],
  loading: true,
  error: null,
};

export const DocumentSlice = createSlice({
  name: "document",
  initialState,
  reducers: {
    addDocument: (state, action) => {
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
export const { addDocument, setLoading, setError } = DocumentSlice.actions;

export default DocumentSlice.reducer;
