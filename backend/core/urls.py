from django.urls import path

from .views import get_notes, CustomTokenObtainPairView, CustomRefreshTokenView, logout

urlpatterns = [
    path('token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),   #access token
    path('token/refresh/', CustomRefreshTokenView.as_view(), name='token_refresh'),  #refresh token
    path('notes/', get_notes),
    path('logout/', logout)
]