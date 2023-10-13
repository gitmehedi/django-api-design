import {configureStore} from "@reduxjs/toolkit";
import {CategoryReducer} from 'src/store/slices/categorySlice';
import {CartsReducer} from "src/store/slices/cartsSlice";

const store = configureStore({
    reducer: {
        categories: CategoryReducer,
        carts: CartsReducer,
    }
});

export {store};
export * from 'src/store/thunks/categoryThunks';
export * from 'src/store/thunks/cartsThunks';


