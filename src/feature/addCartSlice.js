import { createSlice, nanoid } from "@reduxjs/toolkit";


const intialState={
    items:[]
}


export const addToCartSlice=createSlice({
    name:"cartItem",
    initialState:intialState,
    reducers:{
        addItem:(state,action)=>{
            const items= {
                id:nanoid(),
                items:action.payload
            }
            console.log(action)
            state.items.push(items)
        },
   
    }
})


export const {addItem,removeItem} = addToCartSlice.actions
export default addToCartSlice.reducer



