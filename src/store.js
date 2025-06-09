import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import sellerReducer from "./features/SellerProfile/sellerSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    seller: sellerReducer,
  },
});

export default store;
