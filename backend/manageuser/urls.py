from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    # path('admin/', admin.site.urls),

    # URL paths for lecturers
    path('lecturers/', views.lecturer_list, name='lecturer_list'),
    path('lecturers/new/', views.lecturer_create, name='lecturer_create'),
    path('lecturers/<int:pk>/edit/', views.lecturer_update, name='lecturer_update'),
    path('lecturers/<int:pk>/delete/', views.lecturer_delete, name='lecturer_delete'),

    #URL path for students
    # path('students/', views.StudentListView.as_view(), name='student_list'),
    # path('students/create/', views.StudentCreateView.as_view(), name='student_create'),
    # path('students/update/<int:pk>/', views.StudentUpdateView.as_view(), name='student_update'),
    # path('students/delete/<int:pk>/', views.StudentDeleteView.as_view(), name='student_delete'),

    # #URL path for administrators
    # path('administrators/', views.AdministratorListView.as_view(), name='administrator_list'),
    # path('administrators/create/', views.AdministratorCreateView.as_view(), name='administrator_create'),
    # path('administrators/update/<int:pk>/', views.AdministratorUpdateView.as_view(), name='administrator_update'),
    # path('administrators/delete/<int:pk>/', views.AdministratorDeleteView.as_view(), name='administrator_delete'),
]