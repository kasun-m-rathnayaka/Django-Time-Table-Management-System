from django import forms
from django.contrib.auth.models import User
from .models import Lecturer, Student, Administrator

class UserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'email', 'password']
        widgets = {'password': forms.PasswordInput()}

class LecturerForm(forms.ModelForm):
    class Meta:
        model = Lecturer
        fields = ['department', 'specialization']

class StudentForm(forms.ModelForm):
    class Meta:
        model = Student
        fields = ['year_of_study', 'major']

class AdministratorForm(forms.ModelForm):
    class Meta:
        model = Administrator
        fields = ['role']
