import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const BASE_URL = "http://localhost:5000/api/pastes";

// ── Async Thunks (API calls to backend) ──────────────────────────────────────

export const fetchAllPastes = createAsyncThunk(
  "paste/fetchAll",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(BASE_URL);
      const data = await res.json();
      return data.pastes;
    } catch {
      return thunkAPI.rejectWithValue("Failed to fetch pastes.");
    }
  }
);

export const addToPastes = createAsyncThunk(
  "paste/add",
  async ({ title, content }, thunkAPI) => {
    try {
      const res = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message);
      return data.paste;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const updatePastes = createAsyncThunk(
  "paste/update",
  async ({ _id, title, content }, thunkAPI) => {
    try {
      const res = await fetch(`${BASE_URL}/${_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message);
      return data.paste;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const removeFromPastes = createAsyncThunk(
  "paste/remove",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (!data.success) throw new Error(data.message);
      return id;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

// ── Slice ─────────────────────────────────────────────────────────────────────

const pasteSlice = createSlice({
  name: "paste",
  initialState: {
    pastes: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Fetch All
    builder
      .addCase(fetchAllPastes.pending, (state) => { state.loading = true; })
      .addCase(fetchAllPastes.fulfilled, (state, action) => {
        state.loading = false;
        state.pastes = action.payload;
      })
      .addCase(fetchAllPastes.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.payload || "Failed to load pastes.");
      });

    // Add
    builder
      .addCase(addToPastes.fulfilled, (state, action) => {
        state.pastes.unshift(action.payload);
        toast.success("Paste added");
      })
      .addCase(addToPastes.rejected, (_, action) => {
        toast.error(action.payload || "Failed to create paste.");
      });

    // Update
    builder
      .addCase(updatePastes.fulfilled, (state, action) => {
        const idx = state.pastes.findIndex((p) => p._id === action.payload._id);
        if (idx !== -1) state.pastes[idx] = action.payload;
        toast.success("Paste updated");
      })
      .addCase(updatePastes.rejected, (_, action) => {
        toast.error(action.payload || "Failed to update paste.");
      });

    // Remove
    builder
      .addCase(removeFromPastes.fulfilled, (state, action) => {
        state.pastes = state.pastes.filter((p) => p._id !== action.payload);
        toast.success("Paste deleted");
      })
      .addCase(removeFromPastes.rejected, (_, action) => {
        toast.error(action.payload || "Failed to delete paste.");
      });
  },
});

export default pasteSlice.reducer;
