import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    auth:false,
    name:"",
    email:"",
    password:"",
}

export const adminSlice = createSlice({
    name:"adminSlice",
    initialState,
    reducers:{
        connectAdmin:{
            reducer(state,actions){
                state[adminName] = actions.payload.adminName
                state[email] = actions.payload.email            
                state[password] = actions.payload.password
                state[auth] = true
            },
            prepare(email,password){
                return {
                    payload:{
                        adminName:"admin",
                        email:email,
                        password:password,
                    }
                }
            }
        }
    }
})


export const getAdmin = (state) => state.adminSlice
export const {connectAdmin} = adminSlice.actions
export default adminSlice.reducer
