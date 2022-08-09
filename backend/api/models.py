from django import views
from django.db import models
from django.contrib.auth.models import User

class Tags(models.Model):
    tag = models.CharField(max_length=50)

class Answers(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    body = models.TextField()
    upvotes = models.IntegerField(default=0)

class Questions(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    body = models.TextField()
    views = models.IntegerField(default=0)
    upvotes = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    tags = models.ManyToManyField(Tags, blank=True)
    answers = models.ManyToManyField(Answers, blank=True)




