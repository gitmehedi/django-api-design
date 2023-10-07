from django.urls import path
from graphene_django.views import GraphQLView
from django.views.decorators.csrf import csrf_exempt
from graphql_api.schema.category import schema

urlpatterns = [
    # path("category/", csrf_exempt(GraphQLView.as_view(graphiql=True, schema=schema))),
    path("category/", csrf_exempt(GraphQLView.as_view(graphiql=True, schema=schema))),
]
