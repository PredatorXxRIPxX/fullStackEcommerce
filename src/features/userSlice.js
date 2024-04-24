import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users", // Corrected to "userSlice" for consistency
  initialState: {
    id: null,
    email: null,
    username: null,
    orders: [],
    auth: false, // Changed to false by default
  },
  reducers: {
    setUserRedux(state, action) {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.orders = []; // Empty orders array
      state.auth = true; // Set auth to true after setting user data
    },
    addOrders(state, action) {
      state.orders.push(action.payload);
    },
    deleteOrder(state, action) {
      state.orders = state.orders.filter((element) => element.id !== action.payload.id);
    },
    setAuth(state, action) {
      state.auth = action.payload.auth;
    },
  },
});

export const { setUserRedux, addOrders, deleteOrder, setAuth } = userSlice.actions;
export const getUser = (state) => state.users; // Corrected to "userSlice"
export const UserOrders = (state) => state.users.orders; // Corrected to "userSlice"
export default userSlice.reducer;
