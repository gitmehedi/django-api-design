import {Routes, Route} from 'react-router-dom';
import Index from 'src/templates/pages';
import ProductCategory from 'src/templates/pages/category/ProductCategory';
import CreateCategory from 'src/templates/pages/category/CreateCategory';
import ProductInventory from 'src/templates/pages/inventory/ProductInventory';
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
                        <Route path='update/:catid/' element={<ProductCategory/>}/>
                        <Route path='delete/:catid/' element={<ProductCategory/>}/>
                        <Route index element={<ProductCategory/>}/>
                    </Route>
                    <Route path='inventory/'>
                        <Route index element={<ProductInventory/>}/>
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