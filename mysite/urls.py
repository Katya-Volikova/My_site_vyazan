from django.contrib import admin
from django.urls import path
from pools.controllers import index, sign_in, mailing
from pools.controllers import feedback, item

urlpatterns = [
    path('admin/', admin.site.urls),
    path('index.html/',  item.index),
    path('index/', item.index),
    path('about_us/', index.about_us),
    path('sign_in.html', index.sign_in),
    path('forget.html', index.forget),
    path('feedback/', feedback.create),
    path('feedback/index', feedback.index),
    path('sign_in/', sign_in.create),
    path('mailing/', mailing.create),
]

