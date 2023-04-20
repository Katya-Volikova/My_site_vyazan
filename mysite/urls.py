from django.contrib import admin
from django.urls import path
from pools.controllers import index

urlpatterns = [
    path('admin/', admin.site.urls),
    path('index.html/', index.index),
    path('about_us.html/', index.about_us),
    path('log_in.html', index.log_in),
    path('sign_in.html', index.sign_in),
    path('forget.html', index.forget),
    path('basket.html', index.basket),

]
