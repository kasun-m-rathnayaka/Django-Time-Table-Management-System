from django.urls import path
from .views import NoteList, NoteDelete

urlpatterns = [
    path('notes/', NoteList.as_view(), name='note_list'),
    path('notes/<int:pk>/', NoteDelete.as_view(), name='note_delete'),
]