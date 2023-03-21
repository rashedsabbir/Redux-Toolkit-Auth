import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '../Components/userSlice';
export default configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});