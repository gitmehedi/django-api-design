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
import LoginPage from 'src/templates/pages/auth/LoginPage';
import Profile from 'src/templates/pages/auth/Profile';
import ChangePassword from 'src/templates/pages/auth/ChangePassword';
import UserAddress from 'src/templates/pages/users/UserAddress';
import UserPayments from 'src/templates/pages/users/UserPayments';

import ProtectedPage from "./protected/ProtectedPage";


const RoutePath = () => {
    return (
        <div className="row">
            <Routes>
                <Route path='/'>
                    <Route index element={<ProtectedPage><Index/></ProtectedPage>}/>
                    <Route path='category/'>
                        <Route path='create/' element={<ProtectedPage><CreateCategory/></ProtectedPage>}/>
                        <Route path='update/:did/' element={<ProtectedPage><UpdateCategory/></ProtectedPage>}/>
                        <Route index element={<ProtectedPage><IndexCategory/></ProtectedPage>}/>
                    </Route>
                    <Route path='inventory/'>
                        <Route path='create/' element={<ProtectedPage><CreateInventory/></ProtectedPage>}/>
                        <Route path='update/:did/' element={<ProtectedPage><UpdateInventory/></ProtectedPage>}/>
                        <Route index element={<ProtectedPage><IndexInventory/></ProtectedPage>}/>
                    </Route>
                    <Route path='orders/'>
                        <Route path='create/' element={<ProtectedPage><CreateOrder/></ProtectedPage>}/>
                        <Route path='update/:did/' element={<ProtectedPage><UpdateOrder/></ProtectedPage>}/>
                        <Route index element={<ProtectedPage><IndexOrder/></ProtectedPage>}/>
                    </Route>
                    <Route path='products/'>
                        <Route path='create/' element={<ProtectedPage><CreateProduct/></ProtectedPage>}/>
                        <Route path='update/:did/' element={<ProtectedPage><UpdateProduct/></ProtectedPage>}/>
                        <Route index element={<ProtectedPage><IndexProduct/></ProtectedPage>}/>
                    </Route>
                    <Route path='session/'>
                        <Route path='create/' element={<ProtectedPage><CreateSession/></ProtectedPage>}/>
                        <Route path='update/:did/' element={<ProtectedPage><UpdateSession/></ProtectedPage>}/>
                        <Route index element={<ProtectedPage><IndexSession/></ProtectedPage>}/>
                    </Route>
                    <Route path='payments/'>
                        <Route path='create/' element={<ProtectedPage><CreatePayment/></ProtectedPage>}/>
                        <Route path='update/:did/' element={<ProtectedPage><UpdatePayment/></ProtectedPage>}/>
                        <Route index element={<ProtectedPage><IndexPayment/></ProtectedPage>}/>
                    </Route>
                    <Route path='discounts/'>
                        <Route path='create/' element={<ProtectedPage><CreateDiscount/></ProtectedPage>}/>
                        <Route path='update/:did/' element={<ProtectedPage><UpdateDiscount/></ProtectedPage>}/>
                        <Route index element={<ProtectedPage><IndexDiscount/></ProtectedPage>}/>
                    </Route>
                    <Route path='carts/'>
                        <Route path='create/' element={<ProtectedPage><CreateCart/></ProtectedPage>}/>
                        <Route path='update/:did/' element={<ProtectedPage><UpdateCart/></ProtectedPage>}/>
                        <Route index element={<ProtectedPage><IndexCart/></ProtectedPage>}/>
                    </Route>
                    <Route path='user/'>
                        <Route path='payments/' element={<ProtectedPage><UserPayments/> </ProtectedPage>}/>
                        <Route path='address/' element={<ProtectedPage><UserAddress/></ProtectedPage>}/>
                    </Route>
                    <Route path='/login'>
                        <Route index element={<LoginPage/>}/>
                    </Route>
                    <Route path='/profile'>
                        <Route index element={<ProtectedPage><Profile/></ProtectedPage>}/>
                    </Route>
                    <Route path='/change-password'>
                        <Route index element={<ProtectedPage><ChangePassword/></ProtectedPage>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
};

export default RoutePath;