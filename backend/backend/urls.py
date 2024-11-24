from django.contrib import admin
from django.urls import path,include
from api.views import UserCreate
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/user/create/', UserCreate.as_view(), name='user_create'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api-auth/', include('rest_framework.urls')),

    # path('users/', include('users.urls')),
    # path('timetable/',include('timetable.urls')),
    # path('manageuser/',include('manageuser.urls')),
]
