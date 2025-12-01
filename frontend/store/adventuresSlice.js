import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "http://127.0.0.1:8000/api/adventures/";

// --------------------------------------------------------------------
// FETCH ALL (GET /)
// --------------------------------------------------------------------
export const fetchCities = createAsyncThunk("adventures/fetchAll", async () => {
  const res = await fetch(`${BASE_URL}`);
  const data = await res.json();
  return data.features;
});

// --------------------------------------------------------------------
// FETCH ONE (GET /<id>/)
// --------------------------------------------------------------------
export const fetchCity = createAsyncThunk("adventures/fetchOne", async (id) => {
  const res = await fetch(`${BASE_URL}${id}/`);
  return await res.json();
});

// --------------------------------------------------------------------
// CREATE (POST /)
// Body MUST include geometry + properties
// --------------------------------------------------------------------

export const createCity = createAsyncThunk(
  "adventures/create",
  async (newCity, { rejectWithValue }) => {
    try {
      const res = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newCity),
      });
      if (!res.ok) {
        const errText = await res.text();
        return rejectWithValue(errText || "Failed to create adventure");
      }
      return await res.json();
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// --------------------------------------------------------------------
// UPDATE (PATCH /<id>/)
// --------------------------------------------------------------------

export const updateCity = createAsyncThunk(
  "adventures/update",
  async ({ id, updates }, { rejectWithValue }) => {
    try {
      const res = await fetch(`${BASE_URL}${id}/`, {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(updates),
      });
      if (!res.ok) {
        const errorData = await res.json();
        return rejectWithValue(errorData);
      }
      return await res.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// --------------------------------------------------------------------
// DELETE (DELETE /<id>/)
// --------------------------------------------------------------------

export const deleteCity = createAsyncThunk("adventures/delete", async (id) => {
  await fetch(`${BASE_URL}${id}/`, { method: "DELETE" });
  return id;
});

// --------------------------------------------------------------------
// SLICE
// --------------------------------------------------------------------

const adventuresSlice = createSlice({
  name: "adventures",
  initialState: { features: [], status: "idle", error: null, current: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // FETCH ALL
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.features = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchCities.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // FETCH ONE
      .addCase(fetchCity.fulfilled, (state, action) => {
        state.current = action.payload;
      })
      // CREATE
      .addCase(createCity.fulfilled, (state, action) => {
        state.features.push(action.payload);
        state.current = action.payload;
      })
      // UPDATE
      .addCase(updateCity.fulfilled, (state, action) => {
        const updated = action.payload;
        const index = state.features.findIndex((f) => f.id === updated.id);
        if (index !== -1) state.features[index] = updated;
        state.current = updated;
      })
      // DELETE
      .addCase(deleteCity.fulfilled, (state, action) => {
        const id = action.payload;
        state.features = state.features.filter((f) => f.id !== id);
        if (state.current?.id === id) state.current = null;
      });
  },
});

export default adventuresSlice.reducer;
