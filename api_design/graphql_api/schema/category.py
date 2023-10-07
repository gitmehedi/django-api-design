import graphene
from graphene_django import DjangoObjectType
from api_db import models


class CategoryType(DjangoObjectType):
    class Meta:
        model = models.ProductCategory
        fields = '__all__'


class Query(graphene.ObjectType):
    categories = graphene.List(CategoryType)

    def resolve_categories(self, info, **kwargs):
        return models.ProductCategory.objects.all()


schema = graphene.Schema(query=Query)
