from django.db import models

# Create your models here.
# users/models.py
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db import models
from django.utils import timezone

class CustomUserManager(BaseUserManager):
    def create_user(self, username, password=None, **extra_fields):
        if not username:
            raise ValueError("The Username field must be set")
        user = self.model(username=username, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, password=None, **extra_fields):
        extra_fields.setdefault('role', 'admin')
        return self.create_user(username, password, **extra_fields)

class CustomUser(AbstractBaseUser):
    user_id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=150, unique=True)
    role = models.CharField(
        max_length=20,
        choices=[('admin', 'Admin'), ('lecturer', 'Lecturer'), ('student', 'Student')],
        default='student'
    )
    status = models.CharField(
        max_length=10,
        choices=[('active', 'Active'), ('blocked', 'Blocked')],
        default='active'
    )
    last_login_attempt = models.DateTimeField(null=True, blank=True)
    failed_attempts = models.IntegerField(default=0)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['role']

    objects = CustomUserManager()

    def __str__(self):
        return self.username
