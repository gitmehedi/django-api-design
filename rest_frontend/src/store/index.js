import {configureStore} from "@reduxjs/toolkit";
import {CategoryReducer} from 'src/store/slices/categorySlice';
import {CartsReducer} from "src/store/slices/cartsSlice";
import {InventoryReducer} from "src/store/slices/inventorySlice";
import {DiscountReducer} from "src/store/slices/discountSlice";
import {SessionReducer} from "src/store/slices/sessionSlice";
import {ProductsReducer} from "src/store/slices/productsSlice";

const store = configureStore({
    reducer: {
        categories: CategoryReducer,
        carts: CartsReducer,
        inventory: InventoryReducer,
        discount: DiscountReducer,
        sessions: SessionReducer,
        products: ProductsReducer,
    }
});

export {store};
export * from 'src/store/thunks/categoryThunks';
export * from 'src/store/thunks/cartsThunks';
export * from 'src/store/thunks/inventoryThunks';
export * from 'src/store/thunks/discountThunks';
export * from 'src/store/thunks/sessionThunks';
export * from 'src/store/thunks/productsThunks';


