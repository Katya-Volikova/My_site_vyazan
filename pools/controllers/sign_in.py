from django.http import HttpResponse
from django.shortcuts import redirect, render
from pools.models import Sign_in


def create(request):
    user = Sign_in()
    user.name = request.POST.get("name")
    user.phone = request.POST.get("phone")
    user.email = request.POST.get("email")
    user.password = request.POST.get("password")
    user.save()
    return redirect('../index.html/')