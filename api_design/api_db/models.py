from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone


class AbstractModel(models.Model):
    create_user = models.ForeignKey(User, on_delete=models.RESTRICT, related_name='%(class)s_create')
    write_user = models.ForeignKey(User, on_delete=models.RESTRICT, related_name='%(class)s_write')
    created_at = models.DateTimeField(auto_now_add=timezone.now, verbose_name='Created At')
    modified_at = models.DateTimeField(auto_now_add=timezone.now, verbose_name='Modified At')
    deleted_at = models.DateTimeField(blank=True, null=True, verbose_name='Deleted At')

    class Meta:
        abstract = True


class ProductCategory(AbstractModel):
    name = models.CharField(max_length=100, blank=False)
    code = models.CharField(max_length=10)
    status = models.BooleanField(default=True)
    description = models.TextField(max_length=200)

    class Meta:
        db_table = 'product_category'
        ordering = ('-id',)

    def __str__(self):
        return self.name


class ProductInventory(AbstractModel):
    name = models.CharField(max_length=100, blank=False)
    quantity = models.FloatField()
    status = models.BooleanField(default=True)

    class Meta:
        db_table = 'product_inventory'
        ordering = ('-id',)

    def __str__(self):
        return self.name


class PaymentDetails(AbstractModel):
    amount = models.FloatField()
    provider = models.CharField(max_length=100)
    status = models.BooleanField(default=True)

    class Meta:
        db_table = 'payment_details'
        ordering = ('-id',)

    def __str__(self):
        return self.amount


class OrderDetails(AbstractModel):
    total_price = models.FloatField()
    user = models.ForeignKey(User, blank=True, null=True, on_delete=models.SET_NULL,
                             related_name='%(class)s_order')
    payment = models.ForeignKey(PaymentDetails, blank=True, null=True, on_delete=models.SET_NULL,
                                related_name='%(class)s_order')

    class Meta:
        db_table = 'order_details'
        ordering = ('-id',)

    def __str__(self):
        return self.total_price


class Discount(AbstractModel):
    name = models.CharField(max_length=100, blank=False)
    description = models.TextField(max_length=500)
    discount_percent = models.FloatField(verbose_name='Discount Percent (%)')
    status = models.BooleanField(default=True)

    class Meta:
        db_table = 'discount'
        ordering = ('-id',)

    def __str__(self):
        return self.name


class ShoppingSession(AbstractModel):
    total = models.FloatField()
    user = models.ForeignKey(User, blank=True, null=True, on_delete=models.SET_NULL, related_name='%(class)s_session')

    class Meta:
        db_table = 'shopping_session'
        ordering = ('-id',)

    def __str__(self):
        return self.total


class UserAddresses(AbstractModel):
    user = models.ForeignKey(User, blank=True, null=True, on_delete=models.SET_NULL, related_name='%(class)s_address')
    address_line1 = models.CharField(max_length=200, verbose_name='Address')
    address_line2 = models.CharField(max_length=200, verbose_name='Address Additional')
    city = models.CharField(max_length=100)
    postal_code = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    mobile = models.CharField(max_length=15)
    telephone = models.CharField(max_length=20)

    class Meta:
        db_table = 'user_addresses'
        ordering = ('-id',)

    def __str__(self):
        return self.city


class UserPayment(AbstractModel):
    user = models.ForeignKey(User, blank=True, null=True, on_delete=models.SET_NULL, related_name='%(class)s_payment')
    payment_type = models.CharField(max_length=100)
    provider = models.CharField(max_length=100)
    account_no = models.CharField(max_length=20)
    expires_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        db_table = 'user_payment'
        ordering = ('-id',)

    def __str__(self):
        return self.account_no


class Products(AbstractModel):
    name = models.CharField(max_length=100)
    description = models.TextField(max_length=500)
    sku = models.CharField(max_length=100)
    price = models.FloatField()
    category = models.ForeignKey(ProductCategory, blank=True, null=True, on_delete=models.SET_NULL,
                                 related_name='%(class)s_category')
    inventory = models.ForeignKey(ProductInventory, blank=True, null=True, on_delete=models.SET_NULL,
                                  related_name='%(class)s_inventory')
    discount = models.ForeignKey(Discount, blank=True, null=True, on_delete=models.SET_NULL,
                                 related_name='%(class)s_discount')

    class Meta:
        db_table = 'products'
        ordering = ('-id',)

    def __str__(self):
        return self.name


class OrderItems(AbstractModel):
    quantity = models.FloatField()
    order_id = models.ForeignKey(OrderDetails, blank=True, null=True, on_delete=models.SET_NULL,
                                 related_name='%(class)s_payment')
    product = models.ForeignKey(Products, blank=True, null=True, on_delete=models.SET_NULL,
                                related_name='%(class)s_order')

    class Meta:
        db_table = 'order_items'
        ordering = ('-id',)

    def __str__(self):
        return self.quantity


class CartItem(AbstractModel):
    quantity = models.FloatField()
    product = models.ForeignKey(Products, blank=True, null=True, on_delete=models.SET_NULL,
                                related_name='%(class)s_cart')
    session = models.ForeignKey(ShoppingSession, blank=True, null=True, on_delete=models.SET_NULL,
                                related_name='%(class)s_cart')

    class Meta:
        db_table = 'cart_item'
        ordering = ('-id',)

    def __str__(self):
        return self.quantity
