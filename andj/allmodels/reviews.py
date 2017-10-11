from __future__ import unicode_literals
from django.db import models
from trips import Trip

# Create your models here.
class Review(models.Model):
    trip = models.ForeignKey(Trip, related_name="trip_reviews")
    user_review = models.TextField()
    user_score = models.IntegerField()
    place_review = models.TextField()
    place_score = models.IntegerField()
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
