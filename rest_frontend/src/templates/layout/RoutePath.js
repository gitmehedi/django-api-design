import {Routes, Route} from 'react-router-dom';
import Index from 'src/templates/pages/dashboard/index';
import {IndexCategory, UpdateCategory, CreateCategory} from 'src/templates/pages/category';
import {IndexInventory, CreateInventory, UpdateInventory} from 'src/templates/pages/inventory';
import {IndexOrder, CreateOrder, UpdateOrder} from 'src/templates/pages/orders';
import {IndexCart, CreateCart, UpdateCart} from 'src/templates/pages/carts';
import {IndexDiscount, CreateDiscount, UpdateDiscount} from 'src/templates/pages/discounts';
import {IndexProduct, CreateProduct, UpdateProduct} from 'src/templates/pages/products';
import {IndexSession, CreateSession, UpdateSession} from 'src/templates/pages/sessions';
import {IndexPayment, CreatePayment, UpdatePayment} from 'src/templates/pages/payments';
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
                        <Route path='update/:did/' element={<UpdateCategory/>}/>
                        <Route index element={<IndexCategory/>}/>
                    </Route>
                    <Route path='inventory/'>
                        <Route path='create/' element={<CreateInventory/>}/>
                        <Route path='update/:did/' element={<UpdateInventory/>}/>
                        <Route index element={<IndexInventory/>}/>
                    </Route>
                    <Route path='orders/'>
                        <Route path='create/' element={<CreateOrder/>}/>
                        <Route path='update/:did/' element={<UpdateOrder/>}/>
                        <Route index element={<IndexOrder/>}/>
                    </Route>
                    <Route path='products/'>
                        <Route path='create/' element={<CreateProduct/>}/>
                        <Route path='update/:did/' element={<UpdateProduct/>}/>
                        <Route index element={<IndexProduct/>}/>
                    </Route>
                    <Route path='session/'>
                        <Route path='create/' element={<CreateSession/>}/>
                        <Route path='update/:did/' element={<UpdateSession/>}/>
                        <Route index element={<IndexSession/>}/>
                    </Route>
                    <Route path='payments/'>
                        <Route path='create/' element={<CreatePayment/>}/>
                        <Route path='update/:did/' element={<UpdatePayment/>}/>
                        <Route index element={<IndexPayment/>}/>
                    </Route>
                    <Route path='discounts/'>
                        <Route path='create/' element={<CreateDiscount/>}/>
                        <Route path='update/:did/' element={<UpdateDiscount/>}/>
                        <Route index element={<IndexDiscount/>}/>
                    </Route>
                    <Route path='carts/'>
                        <Route path='create/' element={<CreateCart/>}/>
                        <Route path='update/:did/' element={<UpdateCart/>}/>
                        <Route index element={<IndexCart/>}/>
                    </Route>
                    <Route path='user/'>
                        <Route path='payments/' element={<UserPayments/>}/>
                        <Route path='address/' element={<UserAddress/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
};

export default RoutePath;