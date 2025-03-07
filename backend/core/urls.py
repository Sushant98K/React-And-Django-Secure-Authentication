from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from django.urls import path

from .views import get_notes

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),   #access token
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  #refresh token
    path('notes/', get_notes)
]