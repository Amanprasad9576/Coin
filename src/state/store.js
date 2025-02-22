
 import { create } from 'zustand';

 const store = create((set) => ({
      currency: 'usd',
      setCurrency: (newCurrency) => set( (state) => {
          return {
              ...state,
              currency: newCurrency
         }
     })
 }));
 
 export default store;


/*
  import { create } from 'zustand'

const useStore = create((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}))

*/