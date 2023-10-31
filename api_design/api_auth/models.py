from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

GENDER = (
    ('male', 'Male'),
    ('female', 'Female'),
    ('other', 'Other')
)


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.CharField(max_length=200, blank=True)
    profile_image = models.ImageField(upload_to='profile_pics/', null=True, blank=True)
    mobile = models.CharField(max_length=16, blank=True)
    address = models.TextField(max_length=500, blank=True)
    gender = models.TextField(choices=GENDER, blank=True)
    location = models.CharField(max_length=30, blank=True)
    birth_date = models.DateField(null=True, blank=True)


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)


@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()
