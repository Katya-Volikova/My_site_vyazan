from django.db import migrations, models


class Feedback(models.Model):
    email = models.CharField(max_length=255)
    text = models.TextField()

class Sign_in(models.Model):
    name = models.CharField(max_length=255)
    phone = models.CharField(max_length=20)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)

class Mailing(models.Model):
    email = models.CharField(max_length=255)