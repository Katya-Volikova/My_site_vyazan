from django.http import HttpResponse
from django.shortcuts import redirect, render
from pools.models import Mailing


def create(request):
    object = Mailing()
    object.email = request.POST.get("email")
    object.save()
    return redirect('../index.html/')