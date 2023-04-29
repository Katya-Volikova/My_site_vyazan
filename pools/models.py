from django.db import migrations, models


class Feedback(models.Model):
    email = models.CharField(max_length=255)
    text = models.TextField()

