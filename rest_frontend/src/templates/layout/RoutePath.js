import {Routes, Route} from 'react-router-dom';
import Index from 'src/templates/pages/dashboard/index';
import ListCategory from 'src/templates/pages/category/listCategory';
import UpdateCategory from 'src/templates/pages/category/updateCategory';
import CreateCategory from 'src/templates/pages/category/createCategory';
import IndexInventory from 'src/templates/pages/inventory/indexInventory';
import Carts from 'src/templates/pages/carts/Carts';
import Discounts from 'src/templates/pages/discounts/Discounts';
import OrderDetails from 'src/templates/pages/orders/OrderDetails';
import OrderItem from 'src/templates/pages/orders/OrderItem';
import PaymentDetails from 'src/templates/pages/payments/PaymentDetails';
import Products from 'src/templates/pages/products/Products';
import Session from 'src/templates/pages/sessions/Session';
import UserAddress from 'src/templates/pages/users/UserAddress';
import UserPayments from 'src/templates/pages/users/UserPayments';


const RoutePath = () => {
    return (
        <div className="row">
            <Routes>
                <Route path='/'>
                    <Route index element={<Index/>}/>
                    <Route path='category/'>
                        <Route path='create/' element={<CreateCategory/>}/>
                        <Route path='update/:catid/' element={<UpdateCategory/>}/>
                        <Route index element={<ListCategory/>}/>
                    </Route>
                    <Route path='inventory/'>
                        <Route index element={<IndexInventory/>}/>
                        <Route index element={<IndexInventory/>}/>
                    </Route>
                    <Route path='user/'>
                        <Route path='user-payment/' element={<UserPayments/>}/>
                        <Route path='user-address/' element={<UserAddress/>}/>
                    </Route>
                    <Route path='session/'>
                        <Route index element={<Session/>}/>
                    </Route>
                    <Route path='products/'>
                        <Route index element={<Products/>}/>
                    </Route>
                    <Route path='payments/'>
                        <Route index element={<PaymentDetails/>}/>
                    </Route>
                    <Route path='orders/'>
                        <Route path='order/items/' element={<OrderItem/>}/>
                        <Route index element={<OrderDetails/>}/>
                    </Route>
                    <Route path='discounts/'>
                        <Route index element={<Discounts/>}/>
                    </Route>
                    <Route path='carts/'>
                        <Route index element={<Carts/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
};

export default RoutePath;