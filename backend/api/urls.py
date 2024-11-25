from django.urls import path
from api.views.note_views import NoteList, NoteDelete
from api.views.lecturehall_views import LectureHallCreate, LectureHallDelete
from api.views.timetable_views import TimeTableCreate, TimeTableDelete
from api.views.subject_views import SubjectCreate, SubjectDelete
from api.views.lecture_views import LectureCreate, LectureDelete

urlpatterns = [
    path('notes/', NoteList.as_view(), name='note_list'),
    path('notes/<int:pk>/', NoteDelete.as_view(), name='note_delete'),
    path('lecturehall/', LectureHallCreate.as_view(), name='note_update'),
    path('lecturehall/<int:pk>/', LectureHallDelete.as_view(), name='note_delete'),
    path('subjects/', SubjectCreate.as_view(), name='note_update'),
    path('subjects/<int:pk>/', SubjectDelete.as_view(), name='note_delete'),
    path('lectures/', LectureCreate.as_view(), name='note_update'),
    path('lectures/<int:pk>/', LectureDelete.as_view(), name='note_delete'),
    path('timetable/', TimeTableCreate.as_view(), name='note_update'),
    path('timetable/<int:pk>/', TimeTableDelete.as_view(), name='note_delete'),
]