import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "http://127.0.0.1:8000/api/birds/";

// --------------------------------------------------------------------
// FETCH ALL (GET /)
// --------------------------------------------------------------------
export const fetchBirds = createAsyncThunk("birds/fetchAll", async () => {
  const res = await fetch(`${BASE_URL}`);
  const data = await res.json();
  return data;
});

// --------------------------------------------------------------------
// FETCH ONE (GET /<id>/)
// --------------------------------------------------------------------
export const fetchBird = createAsyncThunk("birds/fetchOne", async (id) => {
  const res = await fetch(`${BASE_URL}${id}/`);
  return await res.json();
});

// --------------------------------------------------------------------
// SLICE
// --------------------------------------------------------------------

const birdsSlice = createSlice({
  name: "birds",
  initialState: {
    list: [],
    current: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBirds.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchBirds.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchBird.fulfilled, (state, action) => {
        state.current = action.payload;
      });
  },
});

export default birdsSlice.reducer;
