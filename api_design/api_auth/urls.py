from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from .views import LogoutView, RegisterView, ChangePasswordView, UpdateProfileView, LogoutAllView, UsersViews

urlpatterns = [
    path('token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterView.as_view(), name='token_register'),
    path('change_password/<int:pk>/', ChangePasswordView.as_view(), name='token_change_password'),
    path('update_profile/<int:pk>/', UpdateProfileView.as_view(), name='token_update_profile'),
    path('profile/', UsersViews.as_view(), name='user_profile'),
    path('logout/', LogoutView.as_view(), name='token_logout'),
    path('logout_all/', LogoutAllView.as_view(), name='auth_logout_all'),
]
