from rest_framework import serializers
from django.contrib.auth.models import User
from django.utils import timezone

from api_db import models


def getUser():
    return User.objects.get(username='admin')


class ProductCategoryListSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductCategory
        fields = '__all__'


class ProductCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductCategory
        fields = ['name', 'code', 'status', 'description']

    def create(self, data):
        ins = models.ProductCategory()
        ins.name = data['name']
        ins.code = data['code']
        ins.status = data['status']
        ins.description = data['description']
        ins.create_user = getUser()
        ins.write_user = getUser()
        ins.save()

    def update(self, ins, data):
        ins.name = data['name']
        ins.code = data['code']
        ins.status = data['status']
        ins.description = data['description']
        ins.write_user = getUser()
        ins.modified_at = timezone.now()
        ins.save()


class ProductInventoryListSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductInventory
        fields = '__all__'


class ProductInventorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductInventory
        fields = ['name', 'quantity', 'status']

    def create(self, data):
        ins = models.ProductInventory()
        ins.name = data['name']
        ins.quantity = data['quantity']
        ins.status = data['status']
        ins.create_user = getUser()
        ins.write_user = getUser()
        ins.save()

    def update(self, ins, data):
        ins.name = data['name']
        ins.quantity = data['quantity']
        ins.status = data['status']
        ins.write_user = getUser()
        ins.modified_at = timezone.now()
        ins.save()


class PaymentDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        models = models.PaymentDetails
        fields = '__all__'


class PaymentDetailsPOSTSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.PaymentDetails
        fields = ['amount', 'provider', 'status']

    def create(self, data):
        ins = models.PaymentDetails()
        ins.amount = data['amount']
        ins.provider = data['provider']
        ins.status = data['status']
        ins.create_user = getUser()
        ins.write_user = getUser()
        ins.save()

    def update(self, ins, data):
        ins.amount = data['amount']
        ins.provider = data['provider']
        ins.status = data['status']
        ins.write_user = getUser()
        ins.modified_at = timezone.now()
        ins.save()


class OrderDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.OrderDetails
        fields = '__all__'


class OrderDetailsPOSTSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.OrderDetails
        fields = ['total_price', 'user', 'payment']

    def create(self, data):
        ins = models.OrderDetails()
        ins.total_price = data['total_price']
        ins.user = data['user']
        ins.payment = data['payment']
        ins.create_user = getUser()
        ins.write_user = getUser()
        ins.save()

    def update(self, ins, data):
        ins.total_price = data['total_price']
        ins.user = data['user']
        ins.payment = data['payment']
        ins.write_user = getUser()
        ins.modified_at = timezone.now()
        ins.save()


class DiscountSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Discount
        fields = '__all__'


class DiscountPOSTSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Discount
        fields = ['name', 'description', 'discount_percent', 'status']

    def create(self, data):
        ins = models.Discount()
        ins.name = data['name']
        ins.description = data['description']
        ins.discount_percent = data['discount_percent']
        ins.status = data['status']
        ins.create_user = getUser()
        ins.write_user = getUser()
        ins.save()

    def update(self, ins, data):
        ins.name = data['name']
        ins.description = data['description']
        ins.discount_percent = data['discount_percent']
        ins.status = data['status']
        ins.write_user = getUser()
        ins.modified_at = timezone.now()
        ins.save()


class ShoppingSessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ShoppingSession
        fields = '__all__'


class ShoppingSessionPOSTSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ShoppingSession
        fields = ['total', 'user']

    def create(self, data):
        ins = models.ShoppingSession()
        ins.total = data['total']
        ins.user = data['user']
        ins.save()

    def update(self, ins, data):
        ins.total = data['total']
        ins.user = data['user']
        ins.write_user = getUser()
        ins.modified_at = timezone.now()
        ins.save()


class UserAddressesSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.UserAddresses
        fields = '__all__'


class UserAddressesPOSTSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.UserAddresses
        fields = ['user', 'address_line1', 'address_line2', 'city', 'postal_code', 'country', 'mobile', 'telephone']

    def create(self, data):
        ins = models.UserAddresses()
        ins.user = data['user']
        ins.address_line1 = data['address_line1']
        ins.address_line2 = data['address_line2']
        ins.city = data['city']
        ins.postal_code = data['postal_code']
        ins.user = data['user']
        ins.country = data['country']
        ins.mobile = data['mobile']
        ins.telephone = data['telephone']
        ins.create_user = getUser()
        ins.write_user = getUser()
        ins.save()

    def update(self, ins, data):
        ins.user = data['user']
        ins.address_line1 = data['address_line1']
        ins.address_line2 = data['address_line2']
        ins.city = data['city']
        ins.postal_code = data['postal_code']
        ins.user = data['user']
        ins.country = data['country']
        ins.mobile = data['mobile']
        ins.telephone = data['telephone']
        ins.write_user = getUser()
        ins.modified_at = timezone.now()
        ins.save()


class UserPaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.UserPayment
        fields = '__all__'


class UserPaymentPOSTSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.UserPayment
        fields = ['user', 'payment_type', 'provider', 'account_no', 'expires_at']

    def create(self, data):
        ins = models.UserPayment()
        ins.user = data['user']
        ins.payment_type = data['payment_type']
        ins.provider = data['provider']
        ins.account_no = data['account_no']
        ins.expires_at = data['expires_at']
        ins.create_user = getUser()
        ins.write_user = getUser()
        ins.save()

    def update(self, ins, data):
        ins.user = data['user']
        ins.payment_type = data['payment_type']
        ins.provider = data['provider']
        ins.account_no = data['account_no']
        ins.expires_at = data['expires_at']
        ins.write_user = getUser()
        ins.modified_at = timezone.now()
        ins.save()


class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Products
        fields = '__all__'


class ProductsPOSTSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Products
        fields = ['user', 'description', 'sku', 'price', 'category', 'inventory', 'discount']

    def create(self, data):
        ins = models.Products()
        ins.user = data['user']
        ins.payment_type = data['description']
        ins.sku = data['sku']
        ins.price = data['price']
        ins.category = data['category']
        ins.inventory = data['inventory']
        ins.discount = data['discount']
        ins.create_user = getUser()
        ins.write_user = getUser()
        ins.save()

    def update(self, ins, data):
        ins.user = data['user']
        ins.payment_type = data['description']
        ins.sku = data['sku']
        ins.price = data['price']
        ins.category = data['category']
        ins.inventory = data['inventory']
        ins.discount = data['discount']
        ins.write_user = getUser()
        ins.modified_at = timezone.now()
        ins.save()


class OrderItemsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.OrderItems
        fields = '__all__'


class OrderItemsPOSTSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.OrderItems
        fields = ['quantity', 'order_id', 'product']

    def create(self, data):
        ins = models.OrderItems()
        ins.quantity = data['quantity']
        ins.order_id = data['order_id']
        ins.product = data['product']
        ins.create_user = getUser()
        ins.write_user = getUser()
        ins.save()

    def update(self, ins, data):
        ins.quantity = data['quantity']
        ins.order_id = data['order_id']
        ins.product = data['product']
        ins.write_user = getUser()
        ins.modified_at = timezone.now()
        ins.save()


class CartItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CartItem
        fields = '__all__'


class CartItemPOSTSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CartItem
        fields = ['quantity', 'product', 'session']

    def create(self, data):
        ins = models.CartItem()
        ins.quantity = data['quantity']
        ins.session = data['session']
        ins.product = data['product']
        ins.create_user = getUser()
        ins.write_user = getUser()
        ins.save()

    def update(self, ins, data):
        ins.quantity = data['quantity']
        ins.order_id = data['order_id']
        ins.product = data['product']
        ins.write_user = getUser()
        ins.modified_at = timezone.now()
        ins.save()
