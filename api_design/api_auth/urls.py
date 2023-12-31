from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from .views import LogoutView, RegisterView, ChangePasswordView, UpdateProfileView, LogoutAllView, UsersViews, \
    ProfileImage
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterView.as_view(), name='token_register'),
    path('change_password/', ChangePasswordView.as_view(), name='token_change_password'),
    path('update_profile/', UpdateProfileView.as_view(), name='token_update_profile'),
    path('profile/', UsersViews.as_view(), name='user_profile'),
    path('profile_image/', ProfileImage.as_view(), name='user_profile_image'),
    path('logout/', LogoutView.as_view(), name='token_logout'),
    path('logout_all/', LogoutAllView.as_view(), name='auth_logout_all'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
