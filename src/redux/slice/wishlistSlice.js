import { createSlice } from "@reduxjs/toolkit";
export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: [],
  },
  reducers: {
    increment: (state, action) => {
      const payload = action.payload;
      const index = state.wishlist.findIndex((item) => item.id === payload.id);
      if (index !== -1) {
        state.wishlist[index].nbParticipants += 1;
      } else {
        state.wishlist.push({
          ...payload,
          nbParticipants: 1,
        });
      }
    },
    decrement: (state, action) => {
      const payload = action.payload;
      const index = state.wishlist.findIndex((item) => item.id === payload.id);
      if (index !== -1) {
        state.wishlist[index].nbParticipants -= 1;
        if (state.wishlist[index].nbParticipants === 0) {
          state.wishlist.splice(index, 1);
        }
      }
    },
    remove: (state, action) => {
      const payload = action.payload;
      state.wishlist = state.wishlist.filter((item) => item.id !== payload.id);
    },
    empty: (state) => {
      state.wishlist = [];
    },
  },
});
export const { increment, decrement, remove, empty } = wishlistSlice.actions;
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.wishlist.value)`
export const selectCountOf = (state, payload) => {
  return (
    state.wishlist.wishlist?.find((item) => item.id === payload.id)
      ?.nbParticipants || 0
  );
};
export const selectCountAll = (state) => {
  return state.wishlist.wishlist?.reduce(
    (acc, curr) => acc + curr.nbParticipants,
    0
  );
};
export const selectTotal = (state) => {
  return state.wishlist.wishlist?.reduce(
    (acc, curr) => acc + curr.nbParticipants * curr.price,
    0
  );
};
export const selectWishlist = (state) => {
  return state.wishlist.wishlist;
};
export default wishlistSlice.reducer;