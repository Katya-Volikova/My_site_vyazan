from django.http import HttpResponse
from django.shortcuts import redirect, render

def index(request):
    return render(request, 'index.html', {})
def about_us(request):
    return render(request, 'about_us.html', {})
def log_in(request):
    return render(request, 'log_in.html', {})

# def index(request):
#     return render(request, 'index2.html', {})
# def about(request):
#     return render(request, 'about2.html', {})
# def care(request):
#     return render(request, 'care.html', {})
