import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "card/slice",
  initialState: {
    card: [],
  },
  reducers: {
    addToCard: (state, action) => {
        const addItems=state.card.find(each=>each.id==action.payload.id)
        if(!addItems){
        state.card.push(action.payload);
        }
    },
    removeFromCard: (state,action) => {
        state.card=state.card.filter(each=>each.id !== action.payload.id)
    },
    
    removeAllCard:(state)=>{
        state.card=[]
    }
  },
});

export const { addToCard, removeAllCard,removeFromCard } = cardSlice.actions;
export default cardSlice.reducer;
