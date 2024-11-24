from django.db import models

# Create your models here.
from django.contrib.auth.models import User
from django.db import models

class Lecturer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    department = models.CharField(max_length=100)
    specialization = models.CharField(max_length=100)

    def __str__(self):
        return self.user.username

class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    year_of_study = models.IntegerField()
    major = models.CharField(max_length=100)

    def __str__(self):
        return self.user.username

class Administrator(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    role = models.CharField(max_length=100)

    def __str__(self):
        return self.user.username
