from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone


class AbstractModel(models.Model):
    create_user = models.ForeignKey(User, on_delete=models.RESTRICT, related_name='%(class)s_create')
    write_user = models.ForeignKey(User, on_delete=models.RESTRICT, related_name='%(class)s_write')
    create_time = models.DateTimeField(auto_now_add=timezone.now)
    write_time = models.DateTimeField(auto_now_add=timezone.now)

    class Meta:
        abstract = True


class Products(AbstractModel):
    class Meta:
        db_table = 'products'


class ProductCategory(AbstractModel):
    class Meta:
        db_table = 'product_category'


class ProductInventory(AbstractModel):
    class Meta:
        db_table = 'product_inventory'


class OrderDetails(AbstractModel):
    class Meta:
        db_table = 'order_details'


class OrderItems(AbstractModel):
    class Meta:
        db_table = 'order_items'


class Discount(AbstractModel):
    class Meta:
        db_table = 'discount'


class PaymentDetails(AbstractModel):
    class Meta:
        db_table = 'payment_details'


class CartItem(AbstractModel):
    class Meta:
        db_table = 'cart_item'


class ShoppingSession(AbstractModel):
    class Meta:
        db_table = 'shopping_session'


class UserAddresses(AbstractModel):
    class Meta:
        db_table = 'user_addresses'


class UserPayment(AbstractModel):
    class Meta:
        db_table = 'user_payment'
