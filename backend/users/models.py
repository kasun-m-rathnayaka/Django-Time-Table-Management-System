from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
from django.utils import timezone

# Custom User Manager
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
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(username, password, **extra_fields)

# Custom User Model (with PermissionsMixin)
class CustomUser(AbstractBaseUser, PermissionsMixin):  # Inherit PermissionsMixin to include permission methods
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

    # Staff and Superuser fields (for admin access)
    is_staff = models.BooleanField(default=False)  # Required for admin access
    is_superuser = models.BooleanField(default=False)  # Required for superuser permissions

    # Field configurations for Django authentication
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['role']

    # Custom user manager
    objects = CustomUserManager()

    def __str__(self):
        return self.username
