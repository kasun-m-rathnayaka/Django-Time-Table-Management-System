from django.db import models
from django.contrib.auth.models import User

class LectureHall(models.Model):
    name = models.CharField(max_length=100)
    capacity = models.IntegerField()

    def __str__(self):
        return self.name

class Course(models.Model):
    name = models.CharField(max_length=100)
    code = models.CharField(max_length=10)
    lecturer = models.ForeignKey(User,on_delete=models.CASCADE,related_name='courses')
    allocated_time = models.IntegerField()

    def __str__(self):
        return self.name

class Lecture(models.Model):
    name = models.CharField(max_length=100)
    position = models.CharField(max_length=100)
    allocated_time = models.IntegerField()

    def __str__(self):
        return self.name

class timetable(models.Model):
    course = models.ForeignKey(Course,on_delete=models.CASCADE,related_name='timetables')
    lecture = models.ForeignKey(Lecture,on_delete=models.CASCADE,related_name='timetables')
    lecture_hall = models.ForeignKey(LectureHall,on_delete=models.CASCADE,related_name='timetables')
    day = models.CharField(max_length=10)
    start_time = models.TimeField()
    end_time = models.TimeField()

    def __str__(self):
        return self.course.name

class Note(models.Model):
    title = models.CharField(max_length=100),
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User,on_delete=models.CASCADE,related_name='notes')

    def __str__(self):
        return self.title