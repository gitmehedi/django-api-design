from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.conf import settings
from django.core.exceptions import ValidationError
import os
from uuid import uuid4

GENDER = (
    ('male', 'Male'),
    ('female', 'Female'),
    ('other', 'Other')
)


class Profile(models.Model):
    def upload_image(instance, filename):
        uid = uuid4()
        extension = filename.split(".")[-1]
        if extension not in ['png', 'png', 'gif', 'jpeg', 'jpg']:
            raise ValidationError(f"invalid image extension: {filename}")
        filename = f"{uid.int}.{extension}"
        return os.path.join(settings.PROFILE, filename)

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.CharField(max_length=200, blank=True)
    profile_image = models.ImageField(upload_to=upload_image, null=True, blank=True)
    mobile = models.CharField(max_length=16, blank=True)
    address = models.TextField(max_length=500, blank=True)
    gender = models.TextField(choices=GENDER, blank=True)
    location = models.CharField(max_length=30, blank=True)
    birth_date = models.DateField(blank=True, null=True)


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)


@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()
