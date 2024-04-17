import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    auth: false,
    email: "nothing exist",
    password: "nothing exist"
};

export const adminSlice = createSlice({
    name: "adminSlice",
    initialState,
    reducers: {
        connectAdmin: {
            reducer(state, action) {
                state.auth = action.payload.auth;
                state.email = action.payload.email;
                state.password = action.payload.password;
            },
            prepare(email, password) {
                return {
                    payload: {
                        auth: true,
                        email: email,
                        password: password
                    }
                };
            }
        }
    }
});

export const selectAuth = state => state.adminSlice.auth;

export const { connectAdmin } = adminSlice.actions;
export default adminSlice.reducer;
