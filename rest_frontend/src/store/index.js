import {configureStore} from "@reduxjs/toolkit";
import {CategoryReducer} from 'src/store/slices/categorySlice';
import {CartsReducer} from "src/store/slices/cartsSlice";
import {InventoryReducer} from "src/store/slices/inventorySlice";
import {DiscountReducer} from "src/store/slices/discountSlice";
import {SessionReducer} from "src/store/slices/sessionSlice";
import {ProductsReducer} from "src/store/slices/productsSlice";
import {PaymentReducer} from "src/store/slices/paymentSlice";
import {OrderDetailsReducer} from "./slices/orderDetailsSlice";
import {UserPaymentReducer} from "./slices/userPaymentSlice";
import {UserAddressReducer} from "./slices/userAddressSlice";
import {AuthReducer} from "./slices/authSlice";


const store = configureStore({
    reducer: {
        categories: CategoryReducer,
        carts: CartsReducer,
        inventory: InventoryReducer,
        discounts: DiscountReducer,
        sessions: SessionReducer,
        products: ProductsReducer,
        payments: PaymentReducer,
        orders: OrderDetailsReducer,
        userPayments: UserPaymentReducer,
        userAddress: UserAddressReducer,
        auth: AuthReducer,
    }
});

export {store};
export * from 'src/store/thunks/categoryThunks';
export * from 'src/store/thunks/cartsThunks';
export * from 'src/store/thunks/inventoryThunks';
export * from 'src/store/thunks/discountThunks';
export * from 'src/store/thunks/sessionThunks';
export * from 'src/store/thunks/productsThunks';
export * from 'src/store/thunks/paymentThunks';
export * from 'src/store/thunks/orderDetailsThunks';
export * from 'src/store/thunks/userPaymentThunks';
export * from 'src/store/thunks/userAddressThunks';
export * from 'src/store/slices/categorySlice';
export * from 'src/store/thunks/authThunks';


