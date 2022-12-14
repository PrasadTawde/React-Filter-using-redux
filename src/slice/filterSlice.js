import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tab: 0,
  filters: [],
  tableData: [],
  selectedFilter: "",
};

export const filterSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    createFilter: (state, action) => {
      state.filters = action.payload;
    },
    setSeletectFilter: (state, action) => {
      state.selectedFilter = action.payload;
    },
  },
});

export const { createFilter, setSeletectFilter } = filterSlice.actions;

export const getFilterSlice = (state) => state.app;

export default filterSlice.reducer;
