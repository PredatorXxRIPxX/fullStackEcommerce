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
        connectAdmin:{
            reducer(state,actions){
                state.auth = actions.payload.auth
                state.email = actions.payload.email
                state.password = actions.payload.password
            },
            prepare(email,password){
                return {
                    payload:{
                        auth:true,
                        email:email,
                        password:password
                    }
                }
            }
        }
    }
});


export const { connectAdmin } = adminSlice.actions;
export default adminSlice.reducer;
