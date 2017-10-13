from __future__ import unicode_literals
from django.db import models
from member.models import User
from place.models import Place

# Create your models here.
class Favorite(models.Model):
    user = models.ForeignKey(User, related_name="favorites")
    place = models.ForeignKey(Place, related_name="likes")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
