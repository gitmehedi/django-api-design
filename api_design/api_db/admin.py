from django.contrib import admin
from . import models
from django.contrib import admin


@admin.register(models.ProductCategory)
class ProductCategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'code', 'status', 'description']


@admin.register(models.ProductInventory)
class ProductInventoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'quantity', 'status']


@admin.register(models.CartItem)
class CartItemAdmin(admin.ModelAdmin):
    list_display = ['session', 'product', 'quantity']


@admin.register(models.OrderItems)
class OrderItemsAdmin(admin.ModelAdmin):
    list_display = ['order_id', 'product', 'quantity']


@admin.register(models.Products)
class ProductsAdmin(admin.ModelAdmin):
    list_display = ['name', 'sku', 'price', 'category', 'inventory', 'discount', 'description']


@admin.register(models.UserPayment)
class UserPaymentAdmin(admin.ModelAdmin):
    list_display = ['user', 'payment_type', 'provider', 'account_no', 'expires_at']


@admin.register(models.UserAddresses)
class UserAddressesAdmin(admin.ModelAdmin):
    list_display = ['user', 'address_line1', 'address_line2', 'city', 'postal_code', 'country', 'mobile', 'telephone']


@admin.register(models.ShoppingSession)
class ShoppingSessionAdmin(admin.ModelAdmin):
    list_display = ['user', 'total']


@admin.register(models.Discount)
class DiscountAdmin(admin.ModelAdmin):
    list_display = ['name', 'discount_percent', 'description', 'status']


@admin.register(models.OrderDetails)
class OrderDetailsAdmin(admin.ModelAdmin):
    list_display = ['user', 'total_price', 'payment']


@admin.register(models.PaymentDetails)
class PaymentDetailsAdmin(admin.ModelAdmin):
    list_display = ['amount', 'provider', 'status']
