import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialStateTypes {
  isSideBarCollapsed: boolean;
}

const initialState: InitialStateTypes = {
  isSideBarCollapsed: false,
};

export const GlobalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsSideBarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.isSideBarCollapsed = action.payload;
    },
  },
});

export const { setIsSideBarCollapsed } = GlobalSlice.actions;
export default GlobalSlice.reducer;
