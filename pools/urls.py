
from django.urls import include, path
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('polls/', include('polls.urls')),
]

urlpatterns += staticfiles_urlpatterns()