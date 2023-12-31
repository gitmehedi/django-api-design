from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from api_db.models import OrderDetails
from rest_api.serializers.serializers import OrderDetailsSerializer, OrderDetailsPOSTSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.pagination import PageNumberPagination
from django.db.models import Q

class OrderDetailsList(APIView):
    permission_classes = [IsAuthenticated]
    pagination_class = PageNumberPagination

    def get(self, request, format=None):
        paginator = self.pagination_class()
        queryset = OrderDetails.objects.all()
        search = request.GET.get('search')
        if search:
            queryset = queryset.filter(Q(total_price__icontains=search))

        lists = paginator.paginate_queryset(queryset, request)
        serializer = OrderDetailsSerializer(lists, many=True)
        return paginator.get_paginated_response(serializer.data)

    def post(self, request, format=None):
        serializer = OrderDetailsPOSTSerializer(data=request.data)
        if serializer.is_valid():
            ins = serializer.create(serializer.validated_data)
            serializer.validated_data['id'] = ins.id
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class OrderDetailsViews(APIView):
    # permission_classes = [IsAuthenticated]

    def get_object(self, pk):
        try:
            return OrderDetails.objects.get(pk=pk)
        except OrderDetails.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        data = self.get_object(pk=pk)
        serializer = OrderDetailsSerializer(data)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        data = self.get_object(pk=pk)
        serializer = OrderDetailsPOSTSerializer(data, data=request.data)
        if serializer.is_valid():
            ins = serializer.create(serializer.validated_data)
            serializer.validated_data['id'] = ins.id
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        data = self.get_object(pk=pk)
        if data:
            data.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(status=status.HTTP_400_BAD_REQUEST)
