import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "http://127.0.0.1:8000/api/adventures/";

export const fetchCities = createAsyncThunk("adventures/fetchAll", async () => {
  const res = await fetch(`${BASE_URL}`);
  const data = await res.json();
  return data;
});

export const fetchCity = createAsyncThunk("cities/fetchOne", async (id) => {
  const res = await fetch(`${BASE_URL}/cities/${id}`);
  return await res.json();
});

const adventuresSlice = createSlice({
  name: "adventures",
  initialState: { features: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCities.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.features = action.payload.features;
      })
      .addCase(fetchCities.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default adventuresSlice.reducer;
