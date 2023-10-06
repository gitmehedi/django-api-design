from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from api_db.models import Discount
from rest_api.serializers.serializers import DiscountSerializer, DiscountPOSTSerializer
from rest_framework.permissions import IsAuthenticated


class DiscountList(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, format=None):
        lists = Discount.objects.all()
        serializer = DiscountSerializer(lists, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = DiscountPOSTSerializer(data=request.data)
        if serializer.is_valid():
            ins = serializer.create(serializer.validated_data)
            serializer.validated_data['id'] = ins.id
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class DiscountViews(APIView):
    permission_classes = (IsAuthenticated,)

    def get_object(self, pk):
        try:
            return Discount.objects.get(pk=pk)
        except Discount.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        data = self.get_object(pk=pk)
        serializer = DiscountSerializer(data)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        data = self.get_object(pk=pk)
        serializer = DiscountPOSTSerializer(data, data=request.data)
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
