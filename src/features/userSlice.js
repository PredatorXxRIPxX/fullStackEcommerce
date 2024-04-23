import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    
}

export const userSlice = createSlice({
    name:"userSlice",
    initialState,
    reducers:{
        setUserRedux:{
            reducer(state,actions){
                state["id"] = actions.payload.id
                state["email"] = actions.payload.email
                state["username"] = actions.payload.userName
                state["orders"] = []
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
        },
        addOrders:{
            reducer(state,actions){
                state.orders.push(actions.payload)
            },
            prepare(id,name ,price, quantite){
                return {
                    payload:{
                        id:id,
                        name:name,
                        price:price,
                        quantite:quantite,
                    }
                }
            }
        },
        deleteOrder:{

            reducer(state,actions){
                state.orders.filter((Element)=>Element.id!=actions.payload.id)
            },

            prepare(id){
                return {
                    payload:{
                        id:id
                    }
                }
            }
        },
        setAuth:{
            reducer(state,actions){
                state["auth"] = actions.payload.auth
            },
            prepare(authentification){
                return {
                    payload:{
                        auth:authentification,
                    }
                }
            }
        }
        }
    }
});


export const getUser = (state) => state.userSlice
export const {setUserRedux,addOrders,deleteOrder,setAuth} = userSlice.actions;
export default userSlice.reducer