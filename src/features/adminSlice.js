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
                state = action.payload
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
export const AuthAdmin = (state)=>state.adminSlice.auth //adminslice is the name of the AdminSlice
export default adminSlice.reducer;
