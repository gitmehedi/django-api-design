from django.contrib import admin
from . import models

admin.site.register(models.ProductCategory)
admin.site.register(models.ProductInventory)
admin.site.register(models.CartItem)
admin.site.register(models.OrderItems)
admin.site.register(models.Products)
admin.site.register(models.UserPayment)
admin.site.register(models.UserAddresses)
admin.site.register(models.ShoppingSession)
admin.site.register(models.Discount)
admin.site.register(models.OrderDetails)
admin.site.register(models.PaymentDetails)
