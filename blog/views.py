from django.shortcuts import render

# Create your views here.
def create(request):
    return render(request, 'blog/create.html')