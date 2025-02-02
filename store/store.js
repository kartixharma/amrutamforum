import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/postsSlice';
import thoughtsReducer from '../features/thoughtsSlice';

const store = configureStore({
  reducer: {
    posts: postsReducer,
    thoughts: thoughtsReducer,
  },
});

export default store;
