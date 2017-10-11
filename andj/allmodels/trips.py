from __future__ import unicode_literals
from django.db import models
from users import Guest
from places import Place

# Create your models here.
class Trip(models.Model):
    place = models.ForeignKey(Place, related_name="place_trips")
    guest = models.ForeignKey(Guest, related_name="guest_trips")
    begin_date = models.DateTimeField()
    end_date = models.DateTimeField()
    total_cost = models.DecimalField(max_digits=6, decimal_places=2)
    confirmed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
