from django.contrib import admin
from django.urls import path
from pools.controllers import index, sign_in
from pools.controllers import feedback

urlpatterns = [
    path('admin/', admin.site.urls),
    path('index.html/', index.index),
    path('about_us.html/', index.about_us),
    path('sign_in.html', index.sign_in),
    path('forget.html', index.forget),
    path('feedback/', feedback.create),
    path('sign_in/', sign_in.create),

]
