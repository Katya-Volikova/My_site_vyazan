from django.http import HttpResponse
from django.shortcuts import redirect, render
from pools.models import Item

def index(request):
    item = Item.objects
    content = {'items': item}
    return render(request, 'index.html', content)
