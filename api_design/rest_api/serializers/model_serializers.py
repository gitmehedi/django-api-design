from rest_framework import serializers

from api_db import models


class ProductCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductCategory
        fields = ['name', 'code', 'status', 'description']


class ProductInventorySerializer(serializers.ModelSerializer):
    class Meta:
        models = models.ProductInventory
        fields = '__all__'


class PaymentDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        models = models.ProductInventory
        fields = '__all__'


class OrderDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        models = models.ProductInventory
        fields = '__all__'


class DiscountSerializer(serializers.ModelSerializer):
    class Meta:
        models = models.ProductInventory
        fields = '__all__'


class ShoppingSessionSerializer(serializers.ModelSerializer):
    class Meta:
        models = models.ProductInventory
        fields = '__all__'


class UserAddressesSerializer(serializers.ModelSerializer):
    class Meta:
        models = models.ProductInventory
        fields = '__all__'


class UserPaymentSerializer(serializers.ModelSerializer):
    class Meta:
        models = models.ProductInventory
        fields = '__all__'


class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        models = models.ProductInventory
        fields = '__all__'


class OrderItemsSerializer(serializers.ModelSerializer):
    class Meta:
        models = models.ProductInventory
        fields = '__all__'


class CartItemSerializer(serializers.ModelSerializer):
    class Meta:
        models = models.ProductInventory
        fields = '__all__'
