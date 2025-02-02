import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchThoughts = createAsyncThunk('thoughts/fetchThoughts', async () => {
  const response = await axios.get('https://679df70d946b0e23c0623783.mockapi.io/api/thoughts');
  return response.data;
});

export const postThought = createAsyncThunk(
  'thoughts/postThought',
  async (newThought, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://679df70d946b0e23c0623783.mockapi.io/api/thoughts', newThought);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const thoughtsSlice = createSlice({
  name: 'thoughts',
  initialState: {
    thoughts: [],
    tstatus: 'idle',
    terror: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchThoughts.pending, (state) => {
        state.tstatus = 'loading';
      })
      .addCase(fetchThoughts.fulfilled, (state, action) => {
        state.tstatus = 'succeeded';
        state.thoughts = action.payload;
      })
      .addCase(fetchThoughts.rejected, (state, action) => {
        state.tstatus = 'failed';
        state.terror = action.error.message;
      })
      .addCase(postThought.pending, (state) => {
        state.tstatus = 'posting';
      })
      .addCase(postThought.fulfilled, (state, action) => {
        state.tstatus = 'succeeded';
        state.thoughts.push(action.payload);
      })
      .addCase(postThought.rejected, (state, action) => {
        state.tstatus = 'failed';
        state.terror = action.payload || action.error.message;
      });
  },
});

export default thoughtsSlice.reducer;
