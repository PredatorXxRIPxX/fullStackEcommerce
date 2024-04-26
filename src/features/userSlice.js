import { createSlice } from "@reduxjs/toolkit";

<<<<<<< HEAD
const initialState = {
    id:null,
    email:null,
    username:null,
    orders:[],
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
            prepare(authState){
                return {
                    payload:{
                        auth:authState,
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
=======
export const userSlice = createSlice({
  name: "userSlice", 
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
export const getUser = (state) => state.userSlice; // Corrected to "userSlice"
export const UserOrders = (state) => state.userSlice.orders; // Corrected to "userSlice"
export default userSlice.reducer;
>>>>>>> update
