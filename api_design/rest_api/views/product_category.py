from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from api_db import models
from rest_api.serializers.serializers import ProductCategorySerializer, ProductCategoryListSerializer
from django.contrib.auth.models import User


class ProductCategoryList(APIView):
    def get(self, request, format=None):
        lists = models.ProductCategory.objects.all()
        serializer = ProductCategorySerializer(lists, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        user = User.objects.get(username='admin')
        serializer = ProductCategorySerializer(data=request.data)
        if serializer.is_valid():
            ins = models.ProductCategory()
            ins.name = serializer.validated_data['name']
            ins.code = serializer.validated_data['code']
            ins.status = serializer.validated_data['status']
            ins.description = serializer.validated_data['description']
            ins.create_user = user
            ins.write_user = user
            ins.save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProductCategoryViews(APIView):
    def get_object(self, pk):
        try:
            return models.ProductCategory.objects.get(pk=pk)
        except models.ProductCategory.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        data = self.get_object(pk=pk)
        serializer = ProductCategoryListSerializer(data)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        user = User.objects.get(username='admin')
        data = self.get_object(pk=pk)
        serializer = ProductCategorySerializer(data, data=request.data)
        if serializer.is_valid():
            data.name = serializer.validated_data['name']
            data.code = serializer.validated_data['code']
            data.status = serializer.validated_data['status']
            data.description = serializer.validated_data['description']
            data.create_user = user
            data.write_user = user
            data.save()

            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        data = self.get_object(pk=pk)
        if data:
            data.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(status=status.HTTP_400_BAD_REQUEST)
