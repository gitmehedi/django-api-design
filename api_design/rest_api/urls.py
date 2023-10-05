from django.urls import path
from .views import product_category, product_inventory

urlpatterns = [
    path('categories/', product_category.ProductCategoryList().as_view()),
    path('categories/<int:pk>/', product_category.ProductCategoryViews.as_view()),
    path('inventory/', product_inventory.ProductInventoryList.as_view()),
    path('inventory/<int:pk>/', product_inventory.ProductInventoryViews.as_view()),
]
