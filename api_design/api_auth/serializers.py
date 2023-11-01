from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password
from django.conf import settings
from .models import Profile
import os


class UserSerializer(serializers.ModelSerializer):
    profile_url = serializers.SerializerMethodField('get_image_url')

    class Meta:
        model = User
        fields = ['username', 'email', 'first_name', 'last_name', 'profile_url']

    def get_image_url(self, obj):
        request = self.context.get("request")
        return request.build_absolute_uri(request.user.profile.profile_image.url)


class ProfileImageSerializer(serializers.ModelSerializer):
    profile_url = serializers.SerializerMethodField('get_image_url')

    class Meta:
        model = Profile
        fields = ['profile_image', 'profile_url']

    def update(self, ins, data):
        ins.profile_image = data['profile_image']
        ins.save()
        return ins

    def get_image_url(self, obj):
        request = self.context.get("request")
        return request.build_absolute_uri(request.user.profile.profile_image.url)


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['bio', 'mobile', 'address', 'gender', 'location', 'birth_date']

    def create(self, validated_data):
        user = User.objects.get(email=self.initial_data.get('email'))
        user.bio = validated_data.get('bio') or ''
        user.mobile = validated_data.get('mobile') or ''
        user.address = validated_data.get('address') or ''
        user.gender = validated_data.get('gender') or ''
        user.location = validated_data.get('location') or ''
        user.birth_date = validated_data.get('birth_date') or ''

        user.save()
        return user

    def update(self, instance, validated_data):
        profile = instance.profile
        profile.bio = validated_data.get('bio') or ''
        profile.mobile = validated_data.get('mobile') or ''
        profile.address = validated_data.get('address') or ''
        profile.gender = validated_data.get('gender') or ''
        profile.location = validated_data.get('location') or ''
        profile.birth_date = validated_data.get('birth_date') or ''
        profile.profile_image = validated_data.get('profile_image') or ''
        instance.save()
        return instance


class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True, validators=[UniqueValidator(queryset=User.objects.all())])
    username = serializers.CharField(required=True, validators=[UniqueValidator(queryset=User.objects.all())])
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    repeat_password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('username', 'password', 'repeat_password', 'email', 'first_name', 'last_name')
        extra_kwargs = {
            'first_name': {'required': True},
            'last_name': {'required': True}
        }

    def validate(self, attrs):
        if attrs['password'] != attrs['repeat_password']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})
        return attrs

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name']
        )

        user.set_password(validated_data['password'])
        user.save()

        return user


class ChangePasswordSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    repeat_password = serializers.CharField(write_only=True, required=True)
    old_password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ['password', 'repeat_password', 'old_password']

    def validate(self, attrs):
        if attrs['password'] != attrs['repeat_password']:
            raise serializers.ValidationError({"password': 'Password fields didn't match"})
        return attrs

    def validate_old_password(self, value):
        user = self.context.get('auth')
        if not user.check_password(value):
            raise serializers.ValidationError({"old_password": "Old password is not correct"})
        return value

    def update(self, instance, validated_data):
        user = self.context.get('auth')
        if user.pk != instance.pk:
            raise serializers.ValidationError({"authorization": "You don't hava permission for this user"})
        instance.set_password(validated_data['password'])
        instance.save()
        return instance


class ChangeProfileSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)

    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'username', 'email']

    def validate_email(self, value):
        user = self.context.get('auth')
        if User.objects.exclude(pk=user.pk).filter(email=value).exists():
            raise serializers.ValidationError({'email': 'Email already exists'})
        return value

    def validate_username(self, value):
        user = self.context.get('auth')
        if User.objects.exclude(pk=user.pk).filter(username=value).exists():
            raise serializers.ValidationError({'username': 'Username already exists'})
        return value

    def update(self, instance, validated_date):
        instance.first_name = validated_date['first_name']
        instance.last_name = validated_date['last_name']
        instance.username = validated_date['username']
        instance.email = validated_date['email']
        instance.save()
        return instance
