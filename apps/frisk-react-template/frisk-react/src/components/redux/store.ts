import productSlice from "./features/productSlice";
import cartSlice from "./features/cartSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
   reducer: {
      products: productSlice,
      cart: cartSlice,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
            ignoredPaths: ["cart.items"],
         },
      }),
   devTools: typeof window !== "undefined",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
