import { configureStore } from "@reduxjs/toolkit";
import UniversitySlice from "./features/UniversitySlice/UniversitySlice";
import MajorSlice from "./features/MajorSlice/MajorSlice";
import SubjectSlice from "./features/SubjectSlice/SubjectSlice";
import ExamSlice from "./features/ExamSlice/ExamSlice";
import DocumentSlice from "./features/DocumentSlice/DocumentSlice";
import TestSlice from "./features/TestSlice/TestSlice";

export const store = configureStore({
  reducer: {
    university: UniversitySlice,
    major: MajorSlice,
    subject: SubjectSlice,
    exam: ExamSlice,
    document: DocumentSlice,
    test: TestSlice,
  },
});
