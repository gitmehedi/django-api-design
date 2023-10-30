from django.urls import path
from .views import product_category, product_inventory, cart_item, discount, order_details, order_items, \
    payment_details, products, shopping_session, user_addresses, user_payment

urlpatterns = [
    path('categories/', product_category.ProductCategoryList().as_view()),
    path('categories/<int:pk>/', product_category.ProductCategoryViews.as_view()),
    path('inventory/', product_inventory.ProductInventoryList.as_view()),
    path('inventory/<int:pk>/', product_inventory.ProductInventoryViews.as_view()),
    path('user-payment/', user_payment.UserPaymentList.as_view()),
    path('user-payment/<int:pk>/', user_payment.UserPaymentViews.as_view()),
    path('user-address/', user_addresses.UserAddressesList.as_view()),
    path('user-address/<int:pk>/', user_addresses.UserAddressesViews.as_view()),
    path('session/', shopping_session.ShoppingSessionList.as_view()),
    path('session/<int:pk>/', shopping_session.ShoppingSessionViews.as_view()),
    path('products/', products.ProductsList.as_view()),
    path('products/<int:pk>/', products.ProductsViews.as_view()),
    path('payments/', payment_details.PaymentDetailsList.as_view()),
    path('payments/<int:pk>/', payment_details.PaymentDetailsViews.as_view()),
    path('order/items/', order_items.OrderItemsList.as_view()),
    path('order/items/<int:pk>/', order_items.OrderItemsViews.as_view()),
    path('orders/', order_details.OrderDetailsList.as_view()),
    path('orders/<int:pk>/', order_details.OrderDetailsViews.as_view()),
    path('discounts/', discount.DiscountList.as_view()),
    path('discounts/<int:pk>/', discount.DiscountViews.as_view()),
    path('carts/', cart_item.CartItemList.as_view()),
    path('carts/<int:pk>/', cart_item.CartItemViews.as_view()),
]
