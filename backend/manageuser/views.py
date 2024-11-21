from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.models import User
from .forms import UserForm, LecturerForm, StudentForm, AdministratorForm
from .models import Lecturer, Student, Administrator

#Views for Lectuer
def lecturer_list(request):
    lecturers = Lecturer.objects.all()
    return render(request, 'lecturer_list.html', {'lecturers': lecturers})

def lecturer_create(request):
    if request.method == 'POST':
        user_form = UserForm(request.POST)
        lecturer_form = LecturerForm(request.POST)
        if user_form.is_valid() and lecturer_form.is_valid():
            user = user_form.save(commit=False)
            user.set_password(user_form.cleaned_data['password'])
            user.save()
            lecturer = lecturer_form.save(commit=False)
            lecturer.user = user
            lecturer.save()
            return redirect('lecturer_list')
    else:
        user_form = UserForm()
        lecturer_form = LecturerForm()
    return render(request, 'lecturer_form.html', {'user_form': user_form, 'lecturer_form': lecturer_form})

def lecturer_update(request, pk):
    lecturer = get_object_or_404(Lecturer, pk=pk)
    user = lecturer.user
    if request.method == 'POST':
        user_form = UserForm(request.POST, instance=user)
        lecturer_form = LecturerForm(request.POST, instance=lecturer)
        if user_form.is_valid() and lecturer_form.is_valid():
            user_form.save()
            lecturer_form.save()
            return redirect('lecturer_list')
    else:
        user_form = UserForm(instance=user)
        lecturer_form = LecturerForm(instance=lecturer)
    return render(request, 'lecturer_form.html', {'user_form': user_form, 'lecturer_form': lecturer_form})

def lecturer_delete(request, pk):
    lecturer = get_object_or_404(Lecturer, pk=pk)
    user = lecturer.user
    if request.method == 'POST':
        user.delete()
        return redirect('lecturer_list')
    return render(request, 'lecturer_confirm_delete.html', {'lecturer': lecturer})

#Views for student
# class StudentListView(ListView):
#     model = Student
#     template_name = 'student_list.html'

# class StudentCreateView(CreateView):
#     model = Student
#     fields = ['user', 'year_of_study', 'major']
#     template_name = 'student_form.html'
#     success_url = reverse_lazy('student_list')

# class StudentUpdateView(UpdateView):
#     model = Student
#     fields = ['user', 'year_of_study', 'major']
#     template_name = 'student_form.html'
#     success_url = reverse_lazy('student_list')

# class StudentDeleteView(DeleteView):
#     model = Student
#     template_name = 'student_confirm_delete.html'
#     success_url = reverse_lazy('student_list')

# #Views for administrator
# class AdministratorListView(ListView):
#     model = Administrator
#     template_name = 'administrator_list.html'

# class AdministratorCreateView(CreateView):
#     model = Administrator
#     fields = ['user', 'role']
#     template_name = 'administrator_form.html'
#     success_url = reverse_lazy('administrator_list')

# class AdministratorUpdateView(UpdateView):
#     model = Administrator
#     fields = ['user', 'role']
#     template_name = 'administrator_form.html'
#     success_url = reverse_lazy('administrator_list')

# class AdministratorDeleteView(DeleteView):
#     model = Administrator
#     template_name = 'administrator_confirm_delete.html'
#     success_url = reverse_lazy('administrator_list') 

