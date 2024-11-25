from django.contrib import admin
from .models import Note, LectureHall, Course, Lecture, timetable

admin.site.register(LectureHall)
admin.site.register(Course)
admin.site.register(Lecture)
admin.site.register(timetable)