from __future__ import unicode_literals
from django.db import models
from users import Host

# Create your models here.
class Place(models.Model):
    host = models.ForeignKey(Host, related_name="places")
    name = models.CharField(max_length=100)
    description = models.TextField()
    cost = models.DecimalField(max_digits=6, decimal_places=2)
    place_type = models.CharField(max_length=12)
    rental_type = models.CharField(max_length=20)
    house_rules = models.TextField()
    cancellation_policy = models.CharField(max_length=10)
    amenities = models.TextField()
    number_of_bedrooms = models.IntegerField(max_length=2)
    number_of_bathrooms = models.IntegerField(max_length=2)
    accommodates = models.IntegerField(max_length=2)
    times_viewed = models.IntegerField(max_length=4)
    updated_at = models.DateTimeField(auto_now_add=True)
    created_at = models.DateTimeField(auto_now=True)


class Place_Image(models.Model):
    place = models.ForeignKey(Place, related_name="images")
    caption = models.CharField(max_length=40)
    image = models.ImageField(
        upload_to="place_images/", blank=False, null=False)
    updated_at = models.DateTimeField(auto_now_add=True)
    created_at = models.DateTimeField(auto_now=True)
