import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAdventures = createAsyncThunk(
  "adventures/fetchAll",
  async () => {
    const res = await fetch("http://127.0.0.1:8000/api/adventures/");
    const data = await res.json();
    return data;
  }
);

const adventuresSlice = createSlice({
  name: "adventures",
  initialState: { features: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdventures.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAdventures.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.features = action.payload.features;
      })
      .addCase(fetchAdventures.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default adventuresSlice.reducer;
