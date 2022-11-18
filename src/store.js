import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import sidebarSlice from "./features/sidebar/sidebarSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    sidebar: sidebarSlice,
  },
});
