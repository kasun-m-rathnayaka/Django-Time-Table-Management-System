from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser

# Custom User Admin
class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ('username', 'role', 'status', 'is_staff', 'is_superuser', 'last_login_attempt', 'failed_attempts')
    list_filter = ('role', 'status', 'is_staff', 'is_superuser')
    search_fields = ('username',)
    ordering = ('username',)
    
    # Adjust fieldsets to not include 'is_active', but use 'status' instead
    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        ('Personal Info', {'fields': ('role', 'status', 'last_login_attempt', 'failed_attempts')}),
        ('Permissions', {'fields': ('is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login',)}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'password1', 'password2', 'role', 'status', 'is_staff', 'is_superuser')
        }),
    )
    
# Register the Custom User Admin
admin.site.register(CustomUser, CustomUserAdmin)
