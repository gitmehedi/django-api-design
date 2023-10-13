import {Routes, Route} from 'react-router-dom';
import HomePage from 'src/templates/pages/HomePage';
import ProductCategory from 'src/templates/pages/ProductCategory';
import ProductInventory from 'src/templates/pages/ProductInventory';
import Carts from 'src/templates/pages/Carts';
import Discounts from 'src/templates/pages/Discounts';
import OrderDetails from 'src/templates/pages/OrderDetails';
import OrderItem from 'src/templates/pages/OrderItem';
import PaymentDetails from 'src/templates/pages/PaymentDetails';
import Products from 'src/templates/pages/Products';
import Session from 'src/templates/pages/Session';
import UserAddress from 'src/templates/pages/UserAddress';
import UserPayments from 'src/templates/pages/UserPayments';


const RoutePath = () => {
    return (
        <div className="row">
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='category/' element={<ProductCategory/>}/>
                <Route path='inventory/' element={<ProductInventory/>}/>
                <Route path='user-payment/' element={<UserPayments/>}/>
                <Route path='user-address/' element={<UserAddress/>}/>
                <Route path='session/' element={<Session/>}/>
                <Route path='products/' element={<Products/>}/>
                <Route path='payments/' element={<PaymentDetails/>}/>
                <Route path='order/items/' element={<OrderItem/>}/>
                <Route path='orders/' element={<OrderDetails/>}/>
                <Route path='discounts/' element={<Discounts/>}/>
                <Route path='carts/' element={<Carts/>}/>
            </Routes>
        </div>
    );
};

export default RoutePath;