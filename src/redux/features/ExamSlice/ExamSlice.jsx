import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: 1,
      exam: "Đề thi cuối kỳ môn Giải tích 2",
      subject: "Giải tích 2",
      semester: "cuối kì 2",
      year: "2022 - 2023",
      numSentences: 60,
    },
    {
      id: 2,
      exam: "Đề thi cuối kỳ môn Giải tích 1",
      subject: "Giải tích 2",
      semester: "cuối kì 2",
      year: "2022 - 2023",
      numSentences: 60,
    },
    {
      id: 3,
      exam: "Đề thi cuối kỳ môn lý thuyết đồ thị",
      subject: "Giải tích 2",
      semester: "cuối kì 2",
      year: "2022 - 2023",
      numSentences: 60,
    },
    {
      id: 4,
      exam: "Đề thi cuối kỳ môn hệ điểu hành",
      subject: "Giải tích 2",
      semester: "cuối kì 2",
      year: "2022 - 2023",
      numSentences: 60,
    },
    {
      id: 5,
      exam: "Đề thi cuối kỳ môn cơ sơ dữ liệu",
      subject: "Giải tích 2",
      semester: "cuối kì 2",
      year: "2022 - 2023",
      numSentences: 60,
    },
    {
      id: 6,
      exam: "Đề thi cuối kỳ môn lập trình hướng đối tượng",
      subject: "Giải tích 2",
      semester: "cuối kì 2",
      year: "2022 - 2023",
      numSentences: 60,
    },
  ],
  loading: true,
  error: null,
};

export const ExamSlice = createSlice({
  name: "exam",
  initialState,
  reducers: {
    addExam: (state, action) => {
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
export const { addExam, setLoading, setError } = ExamSlice.actions;

export default ExamSlice.reducer;
