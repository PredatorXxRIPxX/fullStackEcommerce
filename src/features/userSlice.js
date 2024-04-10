import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id:"",
    username:"",
    email:"",
    orders:[],
}

export const userSlice = createSlice({
    name:"userSlice",
    initialState,
    reducers:{
        setUserRedux:{
            reducer(actions){
                return actions.payload
            },

            prepare(id,email,userName){
                return {
                    payload:{
                        id:id,
                        email:email,
                        userName:userName,
                        orders:[]
                    }
                }
            }
        },
    }
})


export const getUser = (state) => state.userSlice
export const {setUserRedux} = userSlice.actions;
export default userSlice.reducer