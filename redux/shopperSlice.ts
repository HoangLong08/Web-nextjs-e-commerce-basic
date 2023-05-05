import { StoreProduct, UserInfo } from "@/type";
import { createSlice } from "@reduxjs/toolkit";

interface ShopperState {
  productData: StoreProduct[];
  userInfo: null | UserInfo;
}

const initialState: ShopperState = {
  productData: [],
  userInfo: null,
};

export const shopperSlice = createSlice({
  name: "shopper",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.productData.find(
        (item: StoreProduct) => item._id === action.payload._id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },

    plusQuantity: (state, action) => {
      const item = state.productData.find(
        (item: StoreProduct) => item._id === action.payload._id
      );
      if (item) {
        item.quantity++;
      }
    },

    minusQuantity: (state, action) => {
      const item = state.productData.find(
        (item: StoreProduct) => item._id === action.payload._id
      );
      if (item?.quantity === 1) {
        item.quantity = 1;
      } else {
        item!.quantity--;
      }
    },

    deleteItem: (state, action) => {
      const re = state.productData.filter(
        (item: StoreProduct) => item._id !== action.payload.id
      );
      state.productData = re;
    },

    resetCart: (state) => {
      state.productData = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, plusQuantity, minusQuantity, deleteItem, resetCart } =
  shopperSlice.actions;

export default shopperSlice.reducer;
