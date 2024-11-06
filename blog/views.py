from django.shortcuts import render
from .models import Post
from django.shortcuts import redirect

# Create your views here.
def create(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        content = request.POST.get('content')
        print(title, content)
        Post.objects.create(title=title, content=content)
        return redirect('posts')
    return render(request, 'blog/create.html')

def posts(request):
    posts = Post.objects.all()
    return render(request, 'blog/posts.html', {'posts': posts})