from django.urls import path
from . import views

urlpatterns = [
    path('categories/',views.ProductCategoryList().as_view()),
    path('categories/<int:pk>/',views.ProductCategoryViews.as_view()),
]
