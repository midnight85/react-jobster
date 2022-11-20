import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import sidebarSlice from "./features/sidebar/sidebarSlice";
import jobSlice from "./features/job/jobSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    sidebar: sidebarSlice,
    job: jobSlice,
  },
});
