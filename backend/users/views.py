from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.utils import timezone
from .models import CustomUser

def login_view(request):
    if request.method == "POST":
        username = request.POST.get('username')
        password = request.POST.get('password')

        # Validate username existence
        try:
            user = CustomUser.objects.get(username=username)
        except CustomUser.DoesNotExist:
            return render(request, "users/login.html", {"error": "Invalid username or password"})

        # Check if the account is blocked
        if user.status == 'blocked':
            return render(request, "users/login.html", {"error": "Your account is blocked. Please contact support."})

        # Authenticate the user
        authenticated_user = authenticate(request, username=username, password=password)
        
        # Debugging output
        print(f"Authenticated User: {authenticated_user}")  # Check if user is authenticated

        if authenticated_user:
            # Reset failed attempts and update last login attempt for authenticated user
            authenticated_user.failed_attempts = 0
            authenticated_user.last_login_attempt = timezone.now()
            authenticated_user.save()

            # Log the user in and redirect to the dashboard
            login(request, authenticated_user)

            # Pass a success message to the template
            return render(request, "users/login.html", {"message": "Login successful! Welcome to the dashboard."})

        else:
            # Handle failed login attempt
            user.failed_attempts += 1
            user.last_login_attempt = timezone.now()
            if user.failed_attempts >= 3:
                user.status = 'blocked'  # Block the account after 3 failed attempts
            user.save()
            return render(request, "users/login.html", {"error": "Invalid username or password"})
    
    return render(request, "users/login.html")
