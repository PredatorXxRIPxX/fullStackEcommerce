import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    auth: false,
    email: "",
    password: ""
};

export const adminSlice = createSlice({
    name: "adminSlice",
    initialState,
    reducers: {
        connectAdmin(state, action) {
            state.auth = true;
            state.email = action.payload.email;
            state.password = action.payload.password;
        }
    }
});


export const { connectAdmin } = adminSlice.actions;
export default adminSlice.reducer;
