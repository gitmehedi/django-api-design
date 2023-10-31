from django.contrib import admin

from .models import Profile, User


class ProfileAdmin(admin.ModelAdmin):
    list_display = ['user', 'bio', 'profile_image', 'mobile', 'gender', 'location', 'birth_date']


admin.site.register(Profile, ProfileAdmin)
