import graphene
from graphene import ObjectType, relay
from graphene_django import DjangoObjectType
from api_db import models
from django.contrib.auth.models import User
from django.db.models import Q
from django.utils import timezone


def getUser():
    return User.objects.get(username='admin')


class UserType(DjangoObjectType):
    class Meta:
        model = User
        fields = '__all__'


class ProductCategoryType(DjangoObjectType):
    class Meta:
        model = models.ProductCategory
        fields = '__all__'


class CreateProductCategory(graphene.Mutation):
    class Arguments:
        name = graphene.String()
        code = graphene.String()
        description = graphene.String()
        status = graphene.Boolean()

    category = graphene.Field(ProductCategoryType)

    def mutate(self, info, name, code, description, status):
        category = models.ProductCategory()
        category.name = name
        category.code = code
        category.description = description
        category.status = status
        category.create_user = getUser()
        category.write_user = getUser()
        category.save()
        return CreateProductCategory(category=category)


class UpdateProductCategory(graphene.Mutation):
    class Arguments:
        id = graphene.Int()
        name = graphene.String()
        code = graphene.String()
        status = graphene.Boolean()
        description = graphene.String()

    category = graphene.Field(ProductCategoryType)

    def mutate(self, info, id, name, code, description, status, **kwargs):
        category = models.ProductCategory.objects.get(pk=id)
        category.name = name
        category.code = code
        category.status = status
        category.description = description
        category.write_user = getUser()
        category.modified_at = timezone.now()
        category.save()
        return UpdateProductCategory(category=category)


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


class Query(ObjectType):
    products = graphene.List(ProductsType, search=graphene.String())
    carts = graphene.List(CartItemType)
    category = graphene.List(ProductCategoryType)

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

    def resolve_category(self, info, **kwargs):
        return models.ProductCategory.objects.all()


class Mutation(ObjectType):
    create_category = CreateProductCategory.Field()
    update_category = UpdateProductCategory.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
