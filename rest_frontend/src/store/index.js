import {configureStore} from "@reduxjs/toolkit";
import {CategoryReducer} from 'src/store/slices/categorySlice';
import {CartsReducer} from "src/store/slices/cartsSlice";
import {InventoryReducer} from "src/store/slices/inventorySlice";
import {DiscountReducer} from "src/store/slices/discountSlice";

const store = configureStore({
    reducer: {
        categories: CategoryReducer,
        carts: CartsReducer,
        inventory: InventoryReducer,
        discount: DiscountReducer,
    }
});

export {store};
export * from 'src/store/thunks/categoryThunks';
export * from 'src/store/thunks/cartsThunks';
export * from 'src/store/thunks/inventoryThunks';
export * from 'src/store/thunks/discountThunks';


