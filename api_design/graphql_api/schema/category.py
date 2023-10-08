import graphene
from graphene import ObjectType, relay
from graphene_django import DjangoObjectType
from api_db import models
from django.contrib.auth.models import User


class UserType(DjangoObjectType):
    class Meta:
        model = User
        fields = '__all__'


class ProductCategoryType(DjangoObjectType):
    class Meta:
        model = models.ProductCategory
        fields = '__all__'


class ProductInventoryType(DjangoObjectType):
    class Meta:
        model = models.ProductInventory
        fields = '__all__'


class PaymentDetailsType(DjangoObjectType):
    class Meta:
        model = models.PaymentDetails
        fields = '__all__'


class OderDetailsType(DjangoObjectType):
    class Meta:
        model = models.OrderDetails
        fields = '__all__'


class DiscountType(DjangoObjectType):
    class Meta:
        model = models.Discount
        fields = '__all__'


class ShoppingSessionType(DjangoObjectType):
    class Meta:
        model = models.ShoppingSession
        fields = '__all__'


class ProductsType(DjangoObjectType):
    class Meta:
        model = models.Products
        fields = '__all__'


class UserAddressesType(DjangoObjectType):
    class Meta:
        model = models.UserAddresses
        fields = '__all__'


class UserPaymentType(DjangoObjectType):
    class Meta:
        model = models.UserPayment
        fields = '__all__'


class OrderItemsType(DjangoObjectType):
    class Meta:
        model = models.OrderItems
        fields = '__all__'


class CartItemType(DjangoObjectType):
    class Meta:
        model = models.CartItem
        fields = '__all__'


from django.db.models import Q


class Query(ObjectType):
    products = graphene.List(ProductsType, search=graphene.String())
    carts = graphene.List(CartItemType)

    def resolve_products(self, info, search=None, **kwargs):
        if search:
            filter = (
                    Q(name__icontains=search) |
                    Q(description__icontains=search) |
                    Q(sku__icontains=search)
            )
            return models.Products.objects.filter(filter)
        return models.Products.objects.all()

    def resolve_carts(self, info, **kwargs):
        return models.CartItem.objects.all()


schema = graphene.Schema(query=Query)
