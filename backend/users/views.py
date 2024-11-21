from django.shortcuts import render

# Create your views here.
# users/views.py
from django.contrib.auth import authenticate, login
from django.shortcuts import render, redirect
from django.utils import timezone
from .models import CustomUser

def login_view(request):
    if request.method == "POST":
        username = request.POST.get('username')
        password = request.POST.get('password')

        try:
            user = CustomUser.objects.get(username=username)
        except CustomUser.DoesNotExist:
            return render(request, "users/login.html", {"error": "Invalid username or password"})

        if user.status == 'blocked':
            return render(request, "users/login.html", {"error": "Your account is blocked. Please contact support."})

        user = authenticate(request, username=username, password=password)
        if user:
            # Reset failed attempts
            user.failed_attempts = 0
            user.last_login_attempt = timezone.now()
            user.save()

            login(request, user)
            return redirect('/dashboard')  # Replace '/dashboard' with your desired URL
        else:
            # Increment failed attempts
            user.failed_attempts += 1
            user.last_login_attempt = timezone.now()
            if user.failed_attempts >= 3:
                user.status = 'blocked'
            user.save()
            return render(request, "users/login.html", {"error": "Invalid username or password"})
    return render(request, "users/login.html")
