from django.contrib import admin
from django.urls import path
from pools.controllers import index

urlpatterns = [
    path('admin/', admin.site.urls),
    path('index.html/', index.index),
    path('index.html/about_us.html/', index.about_us),
    path('index.html/log_in.html', index.log_in),
    path('index.html/sign_in.html', index.sign_in),
    path('index.html/forget.html', index.forget),
    path('index.html/basket.html', index.basket),
#    path('/catalog/', index.catalog),



    # path('lol.html/about2.html', index.about),
    # path('lol.html/index2.html', index.index),
    # path('lol.html/care.html', index.care),

]
