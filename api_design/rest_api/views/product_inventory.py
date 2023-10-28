from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from api_db.models import ProductInventory
from rest_api.serializers.serializers import ProductInventorySerializer, ProductInventoryListSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.pagination import PageNumberPagination


class ProductInventoryList(APIView):
    permission_classes = [IsAuthenticated]
    pagination_class = PageNumberPagination

    def get(self, request, format=None):
        queryset = ProductInventory.objects.all()
        paginator = self.pagination_class()
        lists = paginator.paginate_queryset(queryset, request)
        serializer = ProductInventorySerializer(lists, many=True)
        return paginator.get_paginated_response(serializer.data)

    def post(self, request, format=None):
        serializer = ProductInventorySerializer(data=request.data)
        if serializer.is_valid():
            ins = serializer.create(serializer.validated_data)
            serializer.validated_data['id'] = ins.id
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProductInventoryViews(APIView):
    # permission_classes = [IsAuthenticated]

    def get_object(self, pk):
        try:
            return ProductInventory.objects.get(pk=pk)
        except ProductInventory.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        data = self.get_object(pk=pk)
        serializer = ProductInventoryListSerializer(data)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        data = self.get_object(pk=pk)
        serializer = ProductInventorySerializer(data, data=request.data)
        if serializer.is_valid():
            serializer.update(data, serializer.validated_data)
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        data = self.get_object(pk=pk)
        if data:
            data.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(status=status.HTTP_400_BAD_REQUEST)
