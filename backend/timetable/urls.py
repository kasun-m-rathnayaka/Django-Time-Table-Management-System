from django.urls import path
from . import views

urlpatterns = [
    path('request-leave/', views.request_leave, name='request_leave'),
]
