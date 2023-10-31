from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.contrib.auth.models import User
from .serializers import UserSerializer, RegisterSerializer, ChangePasswordSerializer, ChangeProfileSerializer, \
    ProfileSerializer
from rest_framework_simplejwt.token_blacklist.models import BlacklistedToken, OutstandingToken
from django.http import Http404
from django.core.mail import send_mail
from django.conf import settings


class RegisterView(APIView):
    permission_classes = (AllowAny,)

    def post(self, request):
        user_serializer = RegisterSerializer(data=request.data)
        profile_serializer = ProfileSerializer(data=request.data)
        if user_serializer.is_valid() and profile_serializer.is_valid():
            user_serializer.save()
            profile_serializer.save()
            return Response(request.data)
        return Response(profile_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ChangePasswordView(APIView):
    permission_classes = [IsAuthenticated]

    def put(self, request):
        serializer = ChangePasswordSerializer(request.user, data=request.data, context={'auth': request.user})
        if serializer.is_valid():
            serializer.update(request.user, serializer.validated_data)
            # email_from = settings.EMAIL_HOST_USER
            # send_mail('First Django Application', "No major message", email_from, (request.user.email,))
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UpdateProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def put(self, request):
        serializer = ChangeProfileSerializer(request.user, data=request.data, context={'auth': request.user})
        if serializer.is_valid():
            serializer.update(request.user, serializer.validated_data)
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            refresh_token = request.data["refresh"]
            token = RefreshToken(refresh_token)
            token.blacklist()

            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class LogoutAllView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        tokens = OutstandingToken.objects.filter(user_id=request.user.id)
        for token in tokens:
            t, _ = BlacklistedToken.objects.get_or_create(token=token)

        return Response(status=status.HTTP_205_RESET_CONTENT)


class UsersViews(APIView):
    permission_classes = [IsAuthenticated]

    def get_object(self, username):
        try:
            return User.objects.get(username=username)
        except User.DoesNotExist:
            raise Http404

    def get(self, request):
        data = self.get_object(request.user.username)
        serializer = UserSerializer(data)
        return Response(serializer.data)

from .models import Profile

class ProfileImage(APIView):
    permission_classes = [IsAuthenticated]

    def put(self, request):
        serializer = ProfileSerializer(data=request.data)
        if serializer.is_valid():
            pass
        return Response(serializer.data)
