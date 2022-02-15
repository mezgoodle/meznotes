from django.db import models


class Workout(models.Model):
    name = models.CharField(max_length=100)
    type = models.CharField(max_length=100)
    exercises = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
