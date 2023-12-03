import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: 1,
      question:
        "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.",
      selectedAnswer: "A",
      answer: "A",
    },
    {
      id: 2,
      question:
        "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.",
      selectedAnswer: "B",
      answer: "A",
    },
    {
      id: 3,
      question:
        "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.",
      selectedAnswer: "C",
      answer: "A",
    },
    {
      id: 4,
      question:
        "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.",
      selectedAnswer: "D",
      answer: "A",
    },
    {
      id: 5,
      question:
        "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.",
      selectedAnswer: null,
      answer: "A",
    },
    {
      id: 6,
      question:
        "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.",
      selectedAnswer: null,
      answer: "A",
    },
    {
      id: 7,
      question:
        "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.",
      selectedAnswer: null,
      answer: "A",
    },
    {
      id: 8,
      question:
        "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.",
      selectedAnswer: null,
      answer: "A",
    },
    {
      id: 9,
      question:
        "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.",
      selectedAnswer: null,
      answer: "A",
    },
    {
      id: 10,
      question:
        "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.",
      selectedAnswer: null,
      answer: "A",
    },
    {
      id: 11,
      question:
        "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.",
      selectedAnswer: null,
      answer: "A",
    },
    {
      id: 12,
      question:
        "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.",
      selectedAnswer: null,
      answer: "A",
    },
    {
      id: 13,
      question:
        "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.",
      selectedAnswer: null,
      answer: "A",
    },
  ],
  loading: false,
  error: null,
};

export const TestSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    addTest: (state, action) => {
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
export const { addTest, setLoading, setError } = TestSlice.actions;

export default TestSlice.reducer;
