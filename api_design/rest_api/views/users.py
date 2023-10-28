from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from rest_api.serializers.serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token
from rest_framework.pagination import PageNumberPagination


class UsersViews(APIView):
    permission_classes = (IsAuthenticated,)

    def get_object(self, username):
        try:
            return User.objects.get(username=username)
        except User.DoesNotExist:
            raise Http404

    def get(self, request, format=None):
        data = self.get_object(request.user.username)
        serializer = UserSerializer(data)
        return Response(serializer.data)

