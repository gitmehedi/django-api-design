from rest_framework import serializers

from api_db import models


class ProductCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductCategory
        fields = ['name', 'code', 'status', 'description']


class ProductCategoryListSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductCategory
        fields = ['id', 'name', 'code', 'status', 'description', 'created_at', 'modified_at', 'deleted_at',
                  'create_user', 'write_user']


class ProductInventorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductInventory
        fields = ['name', 'quantity', 'status']


class ProductInventoryListSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductInventory
        fields = ['id', 'name', 'quantity', 'status', 'created_at', 'modified_at', 'deleted_at',
                  'create_user', 'write_user']


class PaymentDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductInventory
        fields = ['amount','provider','status']



# class PaymentDetailsSerializer(serializers.ModelSerializer):
#     class Meta:
#         models = models.ProductInventory
#         fields = ['amount','provider','status']




class OrderDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductInventory
        fields = '__all__'


class DiscountSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductInventory
        fields = '__all__'


class ShoppingSessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductInventory
        fields = '__all__'


class UserAddressesSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductInventory
        fields = '__all__'


class UserPaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductInventory
        fields = '__all__'


class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductInventory
        fields = '__all__'


class OrderItemsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductInventory
        fields = '__all__'


class CartItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductInventory
        fields = '__all__'
