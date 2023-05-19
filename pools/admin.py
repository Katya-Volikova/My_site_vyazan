from django.contrib import admin
from .models import Feedback
from .models import Sign_in
from .models import Mailing

admin.site.register(Feedback)
admin.site.register(Sign_in)
admin.site.register(Mailing)