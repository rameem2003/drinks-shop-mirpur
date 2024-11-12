import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
  name: "User",
  initialState: {
    user: localStorage.getItem("drinkscredential")
      ? JSON.parse(localStorage.getItem("drinkscredential"))
      : {
          // msg: "User Found",
          // phone: "01409029641",
          // status: true,
          // user: "Mahmood Hassan Rameem",

          status: false,
        },
  },
  reducers: {
    signInUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("drinkscredential", JSON.stringify(action.payload));
    },
    logoutUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("drinkscredential", JSON.stringify(action.payload));
    },
  },
});

// Action creators are generated for each case reducer function
export const { signInUser, logoutUser } = AuthSlice.actions;

export default AuthSlice.reducer;
